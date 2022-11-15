import {ColorPalette} from '@utils/Display';
import {getRatio, setRatio} from '../../../../../redux/reducer/common';
import {Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';

interface Props {
  index: number;
  backgroundColor?: string;
  title: string;
  money: number;
  defaultPercent: number;
}

const Jar = (props: Props) => {
  const {backgroundColor, title, money, defaultPercent, index} = props;
  const ratio = useSelector(getRatio);
  const dispatch = useDispatch();

  const handleUpdateRatio = (isUp: boolean) => {
    let tmp = [...ratio];
    if (isUp) {
      tmp[index] <= 1 ? (tmp[index] += 0.05) : (tmp[index] = tmp[index]);
    } else {
      tmp[index] > 0 ? (tmp[index] -= 0.05) : (tmp[index] = tmp[index]);
    }
    dispatch(setRatio(tmp));
  };

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
            <Text style={styles.money}>{money.toFixed(0)} đ</Text>
          </View>
          <View style={styles.mainContentRight}>
            <TouchableOpacity onPress={() => handleUpdateRatio(true)}>
              <Text style={styles.percent}>+</Text>
            </TouchableOpacity>
            <Text style={styles.percent}>
              {(ratio[index] * 100).toFixed(0)}%
            </Text>
            <TouchableOpacity onPress={() => handleUpdateRatio(false)}>
              <Text style={styles.percent}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Jar;
