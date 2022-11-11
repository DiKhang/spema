import NavBar from '@components/NavBar';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authGuard} from '@utils/service/firebase';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import router from './router';

const Stack = createNativeStackNavigator();

const Router = () => {
  const refNav = useRef<any>();

  const handleAuthGuard = () => {
    //handle check user have login ?

    // SplashScreen.hide();
    // SplashScreen.hide();

    const timeOut = setTimeout(() => {}, 4000);

    authGuard({
      successHandle(user) {
        console.log('user', user);
        refNav.current?.navigate('Home');
        clearTimeout(timeOut);
        SplashScreen?.hide();
      },
      errorHandle() {
        refNav.current?.navigate('Login');
        SplashScreen?.hide();
        clearTimeout(timeOut);
      },
    });
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
      {currentRoute != 'Login' && <NavBar nav={refNav} />}
    </>
  );
};
export default Router;
