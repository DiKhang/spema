import {ColorPalette} from '@utils/Display';
import {Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import Jar from './common/Jar';
import {styles} from './style';

const ChangeJar = (props: SheetProps) => {
  const {sheetId} = props;
  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.container}>
        <View style={styles.jarItem}>
          <Jar
            title="Thiết yếu"
            money={'100000'}
            defaultPercent={0.55}
            backgroundColor={ColorPalette.pink}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            title="Giáo dục"
            money={'120000'}
            defaultPercent={0.59}
            backgroundColor={ColorPalette.blue}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            title="Tiết kiệm"
            money={'100000'}
            defaultPercent={1}
            backgroundColor={ColorPalette.yellow}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            title="Hưởng thụ"
            money={'100000'}
            defaultPercent={0.3}
            backgroundColor={ColorPalette.purple}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            title="Đầu tư"
            money={'100000'}
            defaultPercent={0.5}
            backgroundColor={ColorPalette.green}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            title="Từ thiện"
            money={'100000'}
            defaultPercent={0.1}
            backgroundColor={ColorPalette.red}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            SheetManager.hide(sheetId);
          }}>
          <Text style={styles.textButton}>Xong</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ChangeJar;
