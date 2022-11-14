import {setHeight, setWidth, ColorPalette} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: setWidth(100),
    height: setHeight(100),
    position: 'absolute',
    zIndex: 7,
    backgroundColor: 'rgba(115, 118, 122, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerProgress: {
    backgroundColor: ColorPalette.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: ColorPalette.black,
    marginTop: 10,
  },
});
