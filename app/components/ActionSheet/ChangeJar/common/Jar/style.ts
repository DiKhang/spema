import {ColorPalette} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorPalette.gray,
    borderRadius: 10,
  },
  icon: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  mainContent: {
    width: '100%',
    height: '50%',

    display: 'flex',
    flexDirection: 'row',
  },
  mainContentLeft: {
    width: '50%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mainContentRight: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorPalette.white,
  },
  money: {
    fontSize: 14,
    fontWeight: 'bold',
    color: ColorPalette.yellow,
  },
  percent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorPalette.white,
    padding: 5,
  },
});
