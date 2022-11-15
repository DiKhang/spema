import {ColorPalette} from '@utils/Display';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,

    borderRadius: 10,
    width: '90%',
    marginTop: 30,
  },
  subContainer: {
    marginLeft: 20,
  },
  money: {
    marginBottom: 10,
    color: ColorPalette.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 5,
    color: ColorPalette.white,
    fontSize: 14,
    fontWeight: 'normal',
  },
  subText: {
    color: ColorPalette.white,
    fontSize: 12,
    fontWeight: 'normal',
    opacity: 0.7,
  },
});
