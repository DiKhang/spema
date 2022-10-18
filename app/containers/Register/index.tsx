import {
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const nav = useNavigation<any>();
  const [data, setData] = useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const textEmailChange = (val: any) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val: any) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val: any) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Xin Chào!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Email của bạn"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textEmailChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Mật khẩu</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Mật khẩu"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>
            Xác nhận mật khẩu
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Xác nhận mật khẩu"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                nav.navigate('OTP', {});
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
                  Đăng ký
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nav.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Trở về
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};
export default Register;
