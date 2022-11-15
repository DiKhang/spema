import {ColorPalette} from '@utils/Display';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

interface Props {
  type: string;
  money: number;
  description: string;
  tag: string[];
  date: string;
  updateAt: string;
  key: any;
  jar: string;
}
const HistoryItem = (props: Props) => {
  const {type, money, description, tag, updateAt, date, key, jar} = props;
  const [date_, setDate_] = useState<any>();
  const [updateAt_, setUpdateAt_] = useState<any>();
  useEffect(() => {
    const tmp = new Date(date_);
    console.log(tmp);
    setDate_(tmp);
  }, []);
  return (
    <View
      key={key}
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'income' ? ColorPalette.primary : ColorPalette.red,
          opacity: type === 'income' ? 1 : 0.8,
        },
      ]}>
      <View style={styles.subContainer}>
        <Text style={styles.money}>Lọ: {jar}</Text>
        <Text style={styles.money}>
          {type === 'income' ? 'Thu' : 'Chi'}: {money} đ
        </Text>
        <Text style={styles.text}>Chú thích: {description} </Text>
        <Text style={styles.text}>Nhãn: {tag[0] && tag[0]}</Text>
        <Text style={styles.subText}>Ngày nhập: 15/11/2022 </Text>
        <Text style={styles.subText}>Chỉnh sửa ngày: 15/11/2022</Text>
      </View>
    </View>
  );
};

export default HistoryItem;
