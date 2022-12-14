import {StyleSheet, Text} from 'react-native';
import {ColorPalette, setHeight, setWidth} from '@utils/Display';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  total: {
    height: setHeight(25),
    backgroundColor: ColorPalette.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: setHeight(5),
  },
  scroll: {
    height: '100%',
  },
  totalCard: {
    width: '90%',
    height: '90%',
    backgroundColor: ColorPalette.white,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  totalCardContent: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  totalCardProgress: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  totalCardText: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  totalCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  totalCardValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  addZone: {
    height: setHeight(10),
    backgroundColor: ColorPalette.white,
    paddingTop: setHeight(2),
    width: setWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addZoneContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ColorPalette.white,
  },
  addZoneItem: {
    width: '45%',
    height: '100%',
  },
  listJarZone: {
    height: 'auto',
    backgroundColor: ColorPalette.white,
    paddingTop: setHeight(2),
    width: setWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: setHeight(10),
  },
  listJarZoneContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: 'auto',
    backgroundColor: ColorPalette.primary,
    opacity: 0.6,
    borderRadius: 25,
  },
  jarItem: {
    marginTop: 5,
    width: '100%',
    height: 100,
  },
});
