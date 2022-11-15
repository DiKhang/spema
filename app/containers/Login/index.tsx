import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import useAxios from '@hook/useAxios';
import Host, {endPoint} from '@api/host';
import {useDispatch} from 'react-redux';
import {setToken, setUser} from '../../redux/reducer/data';
import {setNotify} from '../../redux/reducer/common';

const Login = () => {
  const nav = useNavigation<any>();

  const dispatch = useDispatch();

  const {call} = useAxios();

  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textEmailChange = (val: any) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: any) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = () => {
    if (data.username === '' || data.password === '') {
      dispatch(
        setNotify({
          show: true,
          props: {
            content: 'Vui lòng nhập Email và Mật khẩu để tiến hành đăng nhập',
            accept: null,
            denied: null,
          },
        }),
      );
      return;
    }
    call({
      config: {
        url: Host + endPoint.login.url,
        method: endPoint.login.method,
        data: {
          username: data.username,
          password: data.password,
        },
      },
      callbackSuccess: data => {
        console.log(data);
        if (!data.status) {
          dispatch(
            setNotify({
              show: true,
              props: {
                content: data,
                accept: null,
                denied: null,
              },
            }),
          );
          return;
        }
        dispatch(
          setToken({
            accessToken: data.data?.accessToken,
            refreshToken: data.data?.refreshToken,
          }),
        );
        dispatch(setUser(data.data?.user));
        nav.navigate('Home');
      },
      callbackError(e) {
        console.log('error:' + e);
      },
      isLoading: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
          duration={1500}
        />
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Email đăng nhập"
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
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Mật khẩu
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Mật khẩu"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Đăng nhập
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('Register', {});
          }}
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
            Đăng ký
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 30, textAlign: 'center'}}>
            Bạn đã quên mật khẩu ?
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;
