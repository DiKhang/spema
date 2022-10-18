import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const UpdateProfile = () => {
  const nav = useNavigation<any>();
  const [data, setData] = useState({
    name: '',
    birthday: '',
    sex: '',
    job: '',
    check_nameInputChange: false,
    check_jobInputChange: false,
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const textNameChange = (val: any) => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        check_nameInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_nameInputChange: false,
      });
    }
  };
  const textJobChange = (val: any) => {
    if (val.length !== 0) {
      setData({
        ...data,
        job: val,
        check_jobInputChange: true,
      });
    } else {
      setData({
        ...data,
        job: val,
        check_jobInputChange: false,
      });
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setData({
      ...data,
      birthday: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
    });

    hideDatePicker();
  };
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Cập nhật thông tin</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Tên của bạn</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Lê Dĩ Khang"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textNameChange(val)}
            />
            {data.check_nameInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Ngày sinh</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <View style={styles.action}>
              <FontAwesome name="calendar" color="#05375a" size={20} />
              <Text style={styles.textInput}>
                {data.birthday ? data.birthday.toString() : 'Ngày sinh'}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Giới tính</Text>
          <View style={styles.actionDropDown}>
            <SelectDropdown
              data={['Nam', 'Nữ', 'Khác']}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              defaultValueByIndex={0}
              buttonStyle={styles.dropdownBtnStyle}
              buttonTextStyle={styles.textInput}
              dropdownStyle={styles.dropdownStyle}
              rowStyle={styles.dropdownRowStyle}
              dropdownIconPosition="right"
              renderDropdownIcon={() => {
                return (
                  <FontAwesome name="angle-down" color="#05375a" size={20} />
                );
              }}
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Nghề nghiệp</Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color="#05375a" size={20} />
            <TextInput
              placeholder="Lập trình viên"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textNameChange(val)}
            />
            {data.check_nameInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                nav.navigate('Home', {});
              }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Hoàn thành
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default UpdateProfile;
