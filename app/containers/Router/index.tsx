import NavBar from '@components/NavBar';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setLoading} from '../../redux/reducer/common';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../Loading';
import Modal from '../Modal';
import router from './router';
import Notify from '../Notify';
import {getUser} from '../../redux/reducer/data';

const Stack = createNativeStackNavigator();

const Router = () => {
  const refNav = useRef<any>();
  const dispatch = useDispatch();
  const userData = useSelector(getUser);
  const handleAuthGuard = () => {
    //handle check user have login ?
    if (userData !== null) {
      refNav.current?.navigate('Home');
    } else {
      refNav.current?.navigate('Login');
    }
    SplashScreen.hide();
    // dispatch(
    //   setLoading({
    //     show: true,
    //     props: {},
    //   }),
    // );
  };

  useEffect(() => {
    handleAuthGuard();
  }, []);

  const [currentRoute, setCurrentRoute] = useState<any>('Login');

  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <NavigationContainer
          ref={refNav}
          onStateChange={state => {
            setCurrentRoute(state?.routes[state.index].name);
          }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}>
            {router.map((item: any, index: number) => {
              return (
                <Stack.Screen
                  key={index}
                  name={item.name}
                  component={item.layout}
                  initialParams={item}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      {currentRoute !== 'Login' && currentRoute !== 'UpdateProfile' && (
        <NavBar nav={refNav} />
      )}
      <Modal />
      <Loading />
      <Notify />
    </>
  );
};
export default Router;
