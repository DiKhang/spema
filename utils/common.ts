import {utils} from '@react-native-firebase/app';
let formatTextPrice = (value: any) => {
  if (value) {
    const newPrice = parseInt(value, 10).toLocaleString('vi-VN');
    return newPrice;
  }
  return '0';
};
export {formatTextPrice};
