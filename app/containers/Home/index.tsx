import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {ColorPalette} from '@utils/Display';
import * as Progress from 'react-native-progress';
import AddCard from './Common/AddCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Jar from './Common/Jar';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getData,
  getDataIOMoney,
  setData,
  setNotify,
} from '../../redux/reducer/common';
import {DataIOMoney} from 'app/interfaces';
import {formatTextPrice} from '@utils/common';
import {getToken, getUser} from '../../redux/reducer/data';
import useAxios from '@hook/useAxios';
import Host, {endPoint} from '@api/host';

const Home = () => {
  const [progress, setProgress] = useState(1);
  const nav = useNavigation<any>();
  const dataIO = useSelector(getDataIOMoney);

  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const dispatch = useDispatch();

  const userData = useSelector(getUser);
  const token = useSelector(getToken);
  const mainData = useSelector(getData);

  const {call} = useAxios();

  const [moneyOneJar, setMoneyOneJar] = useState<any>([]);

  const InsertForNewAccount = async () => {
    await call({
      config: {
        url: Host + endPoint.insertMany.url,
        method: endPoint.insertMany.method,
        headers: {
          collection: 'Data',
          jwt: 'JWT ' + token.accessToken,
        },
        data: {
          userID: userData.userID,
          data: [
            {
              userID: userData.userID,
              asset: [],
              dream: [],
              debts: [],
              jar: [
                {
                  name: 'essential',
                  history: [],
                },
                {
                  name: 'education',
                  history: [],
                },
                {
                  name: 'saving',
                  history: [],
                },
                {
                  name: 'enjoy',
                  history: [],
                },
                {
                  name: 'investment',
                  history: [],
                },
                {
                  name: 'charity',
                  history: [],
                },
              ],
            },
          ],
        },
      },
      isLoading: true,
      callbackSuccess(data) {
        if (data.status) {
          GetDataByUserID();
        }
      },
      callbackError(err) {
        dispatch(
          setNotify({
            show: true,
            props: {
              content: err.message,
              accept: null,
              denied: null,
            },
          }),
        );
      },
    });
  };

  const GetDataByUserID = async () => {
    await call({
      config: {
        url: Host + endPoint.getMany.url,
        method: endPoint.getMany.method,
        headers: {
          collection: 'Data',
          jwt: 'JWT ' + token.accessToken,
        },
        data: {
          userID: userData.userID,
          query: {
            userID: userData.userID,
          },
        },
      },
      isLoading: true,
      callbackSuccess(data) {
        if (!data.status) {
          dispatch(
            setNotify({
              show: true,
              props: {
                content: 'Đã có lỗi xảy ra vui lòng thử lại',
                accept: null,
                denied: null,
              },
            }),
          );
          return;
        }
        if (data.data === null) {
          InsertForNewAccount();
          return;
        } else {
          delete data.data._id;
          delete data.data.userID;
          dispatch(setData(data.data));
        }
      },
      callbackError(e) {
        console.log(e);
      },
    });
  };
  useEffect(() => {
    if (progress < 1) {
      setTimeout(() => {
        setProgress(progress);
      }, 10);
    } else {
      setProgress(0);
    }
  }, [progress]);

  useEffect(() => {
    if (userData && token) {
      GetDataByUserID();
    }
  }, []);
  const handleGetTotal = () => {
    let total = 0;
    let income = 0;
    let expense = 0;
    mainData &&
      mainData.jar.forEach(item => {
        item.history.forEach(item_ => {
          if (item_.type === 'expense') {
            expense += item_.money;
            total -= item_.money;
          } else if (item_.type === 'income') {
            income += item_.money;
            total += item_.money;
          }
        });
      });
    setTotal(total);
    setIncome(income);
    setExpense(expense);
    income !== 0 ? setProgress(total / income) : setProgress(0);
  };

  const handleGetMoneyOneJar = () => {
    let tmp = [];
    let total = 0;
    let percent = 0;
    let input = 0;
    let output = 0;
    mainData &&
      mainData.jar.forEach(item => {
        item.history.forEach(item_ => {
          if (item_.type === 'income') {
            total += item_.money;
            input += item_.money;
          } else if (item_.type === 'expense') {
            total -= item_.money;
            output += item_.money;
          } else if (item_.type === 'receive') {
            total += item_.money;
            input += item_.money;
          } else if (item_.type === 'transfer') {
            total -= item_.money;
            output += item_.money;
          }
        });
        percent = input !== 0 ? total / input : 0;
        tmp.push({
          total: total,
          percent: percent,
        });
        total = 0;
      });
    setMoneyOneJar(tmp);
  };

  useEffect(() => {
    handleGetTotal();
    handleGetMoneyOneJar();
  }, [mainData]);
  return (
    <ScrollView>
      <Animatable.View animation={'fadeInUpBig'} style={styles.container}>
        <TouchableOpacity style={styles.total} disabled={true}>
          <View style={styles.totalCard}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[
                ColorPalette.primary_1,
                ColorPalette.primary,
                ColorPalette.primary__1,
              ]}
              style={styles.totalCardContent}>
              <View style={styles.totalCardProgress}>
                <Progress.Circle
                  size={80}
                  color={'white'}
                  progress={progress}
                  animated={true}
                  showsText={true}
                  formatText={() => {
                    const result = progress * 100;
                    return `${result.toFixed(0)}%`;
                  }}
                />
              </View>
              <View style={styles.totalCardText}>
                <Text style={styles.totalCardTitle}>Tổng số tiền</Text>
                <Text style={styles.totalCardValue}>
                  {formatTextPrice(total.toString())} đ
                </Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <View style={styles.addZone}>
          <View style={styles.addZoneContent}>
            <View style={styles.addZoneItem}>
              <AddCard
                nameCard="Thu nhập"
                money={formatTextPrice(income.toString())}
                icon={
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={20}
                    color="#fff"
                  />
                }
                onPress={() => {
                  nav.navigate('Add', {type: 0, func: GetDataByUserID});
                }}
              />
            </View>
            <View style={styles.addZoneItem}>
              <AddCard
                nameCard="Chi tiêu"
                money={formatTextPrice(expense.toString())}
                icon={
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={20}
                    color="#fff"
                  />
                }
                onPress={() => {
                  nav.navigate('Add', {type: 1, func: GetDataByUserID});
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.listJarZone}>
          <View style={styles.listJarZoneContent}>
            <View style={styles.jarItem}>
              <Jar
                title="Thiết yếu"
                money={moneyOneJar[0]?.total.toFixed(0)}
                progress={moneyOneJar[0]?.percent}
                backgroundColor={ColorPalette.pink}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Giáo dục"
                money={moneyOneJar[1]?.total.toFixed(0)}
                progress={moneyOneJar[1]?.percent}
                backgroundColor={ColorPalette.blue}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Tiết kiệm"
                money={moneyOneJar[2]?.total.toFixed(0)}
                progress={moneyOneJar[2]?.percent}
                backgroundColor={ColorPalette.yellow}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Hưởng thụ"
                money={moneyOneJar[3]?.total.toFixed(0)}
                progress={moneyOneJar[3]?.percent}
                backgroundColor={ColorPalette.purple}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Đầu tư"
                money={moneyOneJar[4]?.total.toFixed(0)}
                progress={moneyOneJar[4]?.percent}
                backgroundColor={ColorPalette.green}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Từ thiện"
                money={moneyOneJar[5]?.total.toFixed(0)}
                progress={moneyOneJar[5]?.percent}
                backgroundColor={ColorPalette.red}
              />
            </View>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default Home;
