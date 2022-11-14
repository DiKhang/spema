import {Icon} from '@rneui/base';
import {ColorPalette} from '@utils/Display';
import {Text, TouchableOpacity, View} from 'react-native';
import {Bar} from 'react-native-progress';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';

interface Props {
  backgroundColor?: string;
  title: string;
  money: string;
  defaultPercent: number;
}

const Jar = (props: Props) => {
  const {backgroundColor, title, money, defaultPercent} = props;
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
            <Text style={styles.money}>{money} đ</Text>
          </View>
          <View style={styles.mainContentRight}>
            <TouchableOpacity>
              <Text style={styles.percent}>+</Text>
            </TouchableOpacity>
            <Text style={styles.percent}>
              {(defaultPercent * 100).toFixed(0)}%
            </Text>
            <TouchableOpacity>
              <Text style={styles.percent}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Jar;
