import {Icon} from '@rneui/base';
import {ColorPalette} from '@utils/Display';
import {Text, View} from 'react-native';
import {Bar} from 'react-native-progress';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';

interface Props {
  backgroundColor?: string;
  title: string;
  money: string;
  progress: number;
}

const Jar = (props: Props) => {
  const {backgroundColor, title, money, progress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            padding: 15,
            borderRadius: 10,
          }}>
          <Fontisto name="test-bottle" size={30} color={ColorPalette.white} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.mainContentLeft}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.mainContentRight}>
            <Text style={styles.money}>{money} đ</Text>
            <Text style={styles.percent}> {progress * 100}%</Text>
          </View>
        </View>
        <View>
          <Bar
            progress={progress}
            color={ColorPalette.white}
            unfilledColor={ColorPalette.pink}
            borderWidth={0}
            borderRadius={30}
            width={null}
          />
        </View>
      </View>
      <View style={styles.next}>
        <MaterialIcons
          name="navigate-next"
          size={30}
          color={ColorPalette.pink}
        />
      </View>
    </View>
  );
};
export default Jar;
