import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

const Header = () => {
  const nav = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
        <AntDesign name="left" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
