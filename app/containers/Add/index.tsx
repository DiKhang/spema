import Header from '@components/Header';
import {ColorPalette} from '@utils/Display';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AddDetail from './Common/AddDetail';
import {styles} from './style';

interface Params {
  name?: string;
  layoutParams?: any;
  componentParams?: any;
  type?: number;
  func?: () => void;
}

interface Props {
  params: Params;
}

const Add = (props: Props) => {
  const {params} = props;
  const {name, layoutParams, componentParams, type, func} = params;
  const [choose, setChoose] = useState(0);

  const changeChoose = (index: number) => {
    setChoose(index);
  };

  useEffect(() => {
    if (type) {
      setChoose(type);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerDetail}>
          <View style={styles.radioButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeChoose(0)}>
              <LinearGradient
                colors={
                  choose === 0
                    ? ['#08d4c4', '#01ab9d']
                    : [ColorPalette.gray, ColorPalette.gray]
                }
                style={styles.buttonDetail}>
                <Text style={styles.textRadioButton}>THU NHẬP</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeChoose(1)}>
              <LinearGradient
                colors={
                  choose === 1
                    ? ['#08d4c4', '#01ab9d']
                    : [ColorPalette.gray, ColorPalette.gray]
                }
                style={styles.buttonDetail}>
                <Text style={styles.textRadioButton}>CHI TIÊU</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeChoose(2)}>
              <LinearGradient
                colors={
                  choose === 2
                    ? ['#08d4c4', '#01ab9d']
                    : [ColorPalette.gray, ColorPalette.gray]
                }
                style={styles.buttonDetail}>
                <Text style={styles.textRadioButton}>CHUYỂN HŨ</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {choose === 0 || choose === 1 ? (
            <AddDetail func={func} type={choose} />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default Add;
