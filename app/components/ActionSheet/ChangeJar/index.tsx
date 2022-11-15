import {ColorPalette} from '@utils/Display';
import {getRatio} from '../../../redux/reducer/common';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';
import Jar from './common/Jar';
import {styles} from './style';

const ChangeJar = (props: SheetProps) => {
  const {sheetId, payload} = props;
  const {money} = payload;
  const ratio = useSelector(getRatio);
  const [Error, setError] = useState('');

  const checkError = () => {
    let sum = 0;
    ratio.forEach(item => {
      sum += item;
    });
    if (sum !== 1) {
      setError(
        `Tổng phần trăm phải bằng 100% (hiện tại: ${(sum * 100).toFixed(0)}%)`,
      );
    } else {
      setError('');
    }
  };

  const handleFinish = () => {
    if (Error === '') {
      SheetManager.hide(sheetId);
    }
  };

  useEffect(() => {
    checkError();
  }, [ratio]);

  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.container}>
        <View style={styles.jarItem}>
          <Jar
            index={0}
            title="Thiết yếu"
            money={money * ratio[0]}
            defaultPercent={ratio[0]}
            backgroundColor={ColorPalette.pink}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            index={1}
            title="Giáo dục"
            money={money * ratio[1]}
            defaultPercent={ratio[1]}
            backgroundColor={ColorPalette.blue}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            index={2}
            title="Tiết kiệm"
            money={money * ratio[2]}
            defaultPercent={ratio[2]}
            backgroundColor={ColorPalette.yellow}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            index={3}
            title="Hưởng thụ"
            money={money * ratio[3]}
            defaultPercent={ratio[3]}
            backgroundColor={ColorPalette.purple}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            index={4}
            title="Đầu tư"
            money={money * ratio[4]}
            defaultPercent={ratio[4]}
            backgroundColor={ColorPalette.green}
          />
        </View>
        <View style={styles.jarItem}>
          <Jar
            index={5}
            title="Từ thiện"
            money={money * ratio[5]}
            defaultPercent={ratio[5]}
            backgroundColor={ColorPalette.red}
          />
        </View>
        {Error !== '' && <Text style={styles.textError}>{Error}</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleFinish();
          }}>
          <Text style={styles.textButton}>Xong</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ChangeJar;
