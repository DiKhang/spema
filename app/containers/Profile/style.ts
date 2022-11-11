import {StyleSheet} from 'react-native';
import {ColorPalette} from '@utils/Display';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 310,
  },
  assetContainer: {
    margin: 10,
    borderRadius: 15,
  },
  assetTotal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  textAsset: {
    fontWeight: 'bold',
    color: ColorPalette.white,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 15,
    paddingBottom: 15,
  },
  textSumAsset: {
    fontWeight: 'bold',
    color: ColorPalette.white,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 15,
  },
  cardItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    paddingTop: 10,
  },
  textInfo: {
    fontWeight: 'bold',
    color: ColorPalette.primary,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    flex: 1,
    margin: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    color: ColorPalette.blue,
  },
  line: {
    height: 2,
    backgroundColor: ColorPalette.primary,
    alignSelf: 'stretch',
  },
  text: {
    paddingTop: 15,
    paddingBottom: 15,
    color: ColorPalette.black,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
