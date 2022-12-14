import {setHeight, ColorPalette, setWidth} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.white,
    width: setWidth(100),
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPalette.black,
    marginTop: setHeight(2),
    alignContent: 'flex-start',
    width: setWidth(90),
  },
  inputMoney: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: setWidth(5),
    height: 35,
    paddingBottom: 5,
  },
  textInput: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  changeJar: {
    width: setWidth(90),
    backgroundColor: ColorPalette.gray,
    borderRadius: 20,
    marginTop: setHeight(2),
    height: setHeight(8),
    opacity: 0.6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  iconLeftDetail: {
    backgroundColor: ColorPalette.white,
    borderRadius: 20,
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleJar: {
    color: ColorPalette.white,
    fontSize: 16,
    fontWeight: 'normal',
    width: '70%',
  },
  iconRight: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeDetail: {
    width: setWidth(90),
    backgroundColor: ColorPalette.gray,
    borderRadius: 20,
    marginTop: setHeight(2),
    minHeight: setHeight(30),
    opacity: 0.6,
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
    width: '80%',
  },
  textDate: {
    fontSize: 16,
    fontWeight: 'normal',
    color: ColorPalette.white,
    width: setWidth(90),
    marginLeft: setWidth(5),
  },
  finishButton: {
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
  finishText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPalette.primary,
  },
});
