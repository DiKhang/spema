import {ColorPalette} from '@utils/Display';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 6,
    backgroundColor: 'rgba(115, 118, 122, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifiContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  button: {
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    color: ColorPalette.black,
  },
  textNotifi: {
    fontSize: 18,
    color: ColorPalette.black,
    textAlign: 'left',
  },
});
