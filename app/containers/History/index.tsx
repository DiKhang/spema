import {getData, setData, setNotify} from '../../redux/reducer/common';
import {getToken, getUser} from '../../redux/reducer/data';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import Host, {endPoint} from '@api/host';
import useAxios from '@hook/useAxios';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HistoryItem from './common/HistoryItem';

const History = () => {
  const userData = useSelector(getUser);
  const token = useSelector(getToken);
  const mainData = useSelector(getData);

  const dispatch = useDispatch();

  const {call} = useAxios();

  const [render, setRender] = useState<any>([]);

  const handleRender = () => {
    let tmp = [];
    mainData &&
      mainData.jar.map(item => {
        item.history.map((item_, index) => {
          tmp.push(
            <HistoryItem
              key={Math.random()}
              type={item_.type}
              money={item_.money}
              description={item_.description}
              tag={item_.tag}
              date={item_.date}
              updateAt={item_.updateAt}
              jar={item.name}
            />,
          );
        });
      });
    setRender(tmp);
  };

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
    GetDataByUserID();
  }, []);

  useEffect(() => {
    handleRender();
  }, [mainData]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <HistoryItem
          type="income"
          money={70000}
          description="an com"
          tag={['keo']}
          date="2022-11-15T09:20:14.319Z"
          updateAt="2022-11-15T09:20:14.319Z"
        /> */}
        {render}
      </View>
    </ScrollView>
  );
};

export default History;
