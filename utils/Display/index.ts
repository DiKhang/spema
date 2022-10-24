import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const setHeight = (h: any) => (height / 100) * h;
export const setWidth = (w: any) => (width / 100) * w;
export const ColorPalette = {
  primary_2: '#085CA1',
  primary_1: '#098DAB',
  primary: '#009387',
  primary__1: '#09AB6F',
  primary__2: '#08A13E',
  secondary: '#ff7675',
  tertiary: '#5dade2',
  black: '#000',
  white: '#fff',
  grey: '#dfe6e9',
  gray: '#6c757d',
  grayLight: '#f8f9fa',
  grayDark: '#343a40',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  pink: '#d41e85',
  blue: '#2540f5',
  yellow: '#e0b32b',
  purple: '#7a0b5a',
  green: '#11db0d',
  red: '#a3072e',
};
