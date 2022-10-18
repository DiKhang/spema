import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useRef} from 'react';
import router from './router';

const Stack = createNativeStackNavigator();

const Router = () => {
  const refNav = useRef<any>();

  useEffect(() => {}, []);
  return (
    <>
      <NavigationContainer ref={refNav}>
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
    </>
  );
};
export default Router;
