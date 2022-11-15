import {StyleSheet, Text} from 'react-native';
import {ColorPalette, setHeight, setWidth} from '@utils/Display';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: setHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
});
