import {ColorPalette, setHeight, setWidth} from '@utils/Display';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorPalette.white,
    paddingTop: 20,
  },
  jarItem: {
    marginTop: 5,
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: setWidth(90),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: ColorPalette.primary,
    borderWidth: 1,
    marginTop: setHeight(5),
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPalette.primary,
  },
});
