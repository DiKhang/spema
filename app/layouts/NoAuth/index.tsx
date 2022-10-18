import React from 'react';
import {StatusBar} from 'react-native';

const NoAuth = (props: any) => {
  const {params} = props.route;
  const {component: Component} = params;

  console.log('Layout NoAuth Params :', params.layoutParams);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Component params={params}></Component>
    </>
  );
};

export default NoAuth;
