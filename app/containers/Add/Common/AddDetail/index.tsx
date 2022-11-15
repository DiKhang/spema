import {formatTextPrice} from '@utils/common';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import {styles} from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ColorPalette} from '@utils/Display';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {DataIOMoney} from 'app/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDataIOMoney,
  getData,
  getRatio,
  setNotify,
} from '../../../../redux/reducer/common';
import {SheetManager} from 'react-native-actions-sheet';
import uuid from 'react-native-uuid';
import useAxios from '@hook/useAxios';
import Host, {endPoint} from '@api/host';
import {getToken, getUser} from '../../../../redux/reducer/data';

interface Props {
  type: number;
  func?: () => void;
}

const AddDetail = (props: Props) => {
  const {type, func} = props;
  const dispatch = useDispatch();
  const nav = useNavigation<any>();
  const [money, setMoney] = useState<number>(0);
  const [data, setData] = useState({
    date: '',
    note: '',
    tag: '',
    jar: 'all',
    dateString: '',
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const mainData = useSelector(getData);
  const ratio = useSelector(getRatio);
  const userData = useSelector(getUser);
  const token = useSelector(getToken);

  const {call} = useAxios();

  const handleOpenSheet = () => {
    SheetManager.show('changeJar', {
      payload: {
        money: money,
      },
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const dateStr = date.toISOString();
    setData({
      ...data,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      dateString: dateStr,
    });

    hideDatePicker();
  };

  let validatePlate = (plate: any) => {
    var re = /[^0-9]/g;
    if (re.test(plate)) {
      return parseInt(plate.replace(re, ''));
    }
    return plate;
  };

  const handlePushData = async () => {
    let tmp = JSON.parse(JSON.stringify(mainData));

    tmp.jar.forEach((item: any, index: any) => {
      item.history.push({
        id: uuid.v4(),
        type: type === 0 ? 'income' : type === 1 ? 'expense' : null,
        date: data.dateString,
        updateAt: new Date().toISOString(),
        money: money * ratio[index],
        tag: [data.tag],
        description: data.note,
        from: type === 1 || type === 0 ? null : null,
        to: type === 1 || type === 0 ? null : null,
      });
    });

    console.log(JSON.stringify(tmp));

    await call({
      config: {
        url: Host + endPoint.updateMany.url,
        method: endPoint.updateMany.method,
        headers: {
          collection: 'Data',
          jwt: 'JWT ' + token.accessToken,
        },
        data: {
          userID: userData.userID,
          query: {
            userID: userData.userID,
          },
          data: {
            $set: {
              ...tmp,
            },
          },
          upsert: true,
        },
      },
      isLoading: true,
      callbackError: (err: any) => {
        console.log(err);
      },
      callbackSuccess(data) {
        if (data) {
          func && func();
          nav.navigate('Home', {});
        }
      },
    });
  };

  const handleFinish = () => {
    if (money === 0) {
      dispatch(
        setNotify({
          show: true,
          props: {
            content: 'Vui lòng nhập số tiền',
            accept: null,
            denied: null,
          },
        }),
      );
      return;
    }
    if (data.date === '') {
      dispatch(
        setNotify({
          show: true,
          props: {
            content: 'Vui lòng chọn ngày',
            accept: null,
            denied: null,
          },
        }),
      );
      return;
    }
    if (data.note === '') {
      dispatch(
        setNotify({
          show: true,
          props: {
            content: 'Vui lòng nhập ghi chú',
            accept: null,
            denied: null,
          },
        }),
      );
      return;
    }
    handlePushData();
    // nav.navigate('Home', {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập số tiền</Text>
      <View style={styles.inputMoney}>
        <TextInput
          value={formatTextPrice(money)}
          style={styles.textInput}
          placeholder="0"
          placeholderTextColor="#666666"
          autoCapitalize="none"
          keyboardType="numeric"
          onChange={e => setMoney(validatePlate(e.nativeEvent.text))}
        />
      </View>
      <TouchableOpacity
        style={styles.changeJar}
        onPress={() => {
          handleOpenSheet();
        }}>
        <View style={styles.iconLeft}>
          <View style={styles.iconLeftDetail}>
            <Fontisto
              name="test-bottle"
              size={30}
              color={ColorPalette.primary}
            />
          </View>
        </View>
        <Text style={styles.titleJar}>Tất cã các hũ (nhấn để thay đổi)</Text>
        <View style={styles.iconRight}>
          <AntDesign name="down" size={20} color={ColorPalette.white} />
        </View>
      </TouchableOpacity>

      <View style={styles.changeDetail}>
        <TouchableOpacity
          onPress={showDatePicker}
          style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.action}>
            <FontAwesome name="calendar" color={ColorPalette.white} size={20} />
            <Text style={styles.textDate}>
              {data.date ? data.date.toString() : 'Chọn ngày'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={ColorPalette.white} size={20} />
          <TextInput
            placeholder="Ghi chú"
            placeholderTextColor={ColorPalette.white}
            style={styles.textDate}
            autoCapitalize="none"
            onChangeText={val => {
              setData({
                ...data,
                note: val,
              });
            }}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="tag" color={ColorPalette.white} size={20} />
          <TextInput
            placeholder="Nhãn"
            placeholderTextColor={ColorPalette.white}
            style={styles.textDate}
            autoCapitalize="none"
            onChangeText={val => {
              setData({
                ...data,
                tag: val,
              });
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleFinish()}
        style={[styles.finishButton]}>
        <Text style={[styles.finishText]}>Xong</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default AddDetail;
