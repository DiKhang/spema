import {setHeight, ColorPalette, setWidth} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: setHeight(100),
    backgroundColor: ColorPalette.white,
  },
  containerDetail: {
    flex: 1,
    width: setWidth(100),
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  radioButton: {
    width: setWidth(90),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: setHeight(5),
    alignItems: 'center',
    backgroundColor: ColorPalette.gray,
    borderRadius: 50,
  },
  button: {
    width: '33.3333%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  button_4: {
    width: '25%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  buttonDetail: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textRadioButton: {
    fontSize: 13,
    color: ColorPalette.white,
  },
});
