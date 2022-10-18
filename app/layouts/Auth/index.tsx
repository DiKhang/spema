import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

const Auth = (props: any) => {
  const {params} = props.route;
  const {component: Component} = params;

  console.log('Layout Auth Params :', params.layoutParams);

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Component params={params}></Component>
    </>
  );
};

export default Auth;
