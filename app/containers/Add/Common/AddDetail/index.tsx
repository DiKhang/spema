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

const AddDetail = () => {
  const nav = useNavigation<any>();
  const [money, setMoney] = useState<number>(0);
  const [data, setData] = useState({
    date: '',
    note: '',
    tag: '',
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setData({
      ...data,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
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

  const handleFinish = () => {
    nav.navigate('Home', {});
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
      <TouchableOpacity style={styles.changeJar}>
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
            onChangeText={val => {}}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="tag" color={ColorPalette.white} size={20} />
          <TextInput
            placeholder="Nhãn"
            placeholderTextColor={ColorPalette.white}
            style={styles.textDate}
            autoCapitalize="none"
            onChangeText={val => {}}
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
