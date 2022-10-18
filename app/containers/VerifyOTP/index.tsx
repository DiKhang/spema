import {useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';

const VerifyOTP = () => {
  const nav = useNavigation<any>();
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    // try {
    //   await verifyOTP(otp);
    //   navigate('Home');
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Nhập OTP</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.textSign}>OTP đã được gửi đến email của bạn</Text>
        <View style={styles.action}>
          <OTPInputView
            style={{width: '90%', height: 200}}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            selectionColor={'#009387'}
          />
        </View>
        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 30, textAlign: 'center'}}>
            Bạn chưa nhận được OTP? Gửi lại
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={handleVerifyOTP}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Xác nhận</Text>
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
      </Animatable.View>
    </View>
  );
};

export default VerifyOTP;
