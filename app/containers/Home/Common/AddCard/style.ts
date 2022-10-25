import {ColorPalette} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPalette.primary,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameCard: {
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPalette.white,
  },
  money: {
    fontSize: 14,
    fontWeight: 'bold',
    color: ColorPalette.white,
  },
});
