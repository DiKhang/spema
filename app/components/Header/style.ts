import {setHeight, ColorPalette, setWidth} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPalette.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: setHeight(4),

    height: setHeight(5),
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    width: setWidth(15),
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
