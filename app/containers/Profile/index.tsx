import {setUser} from '../../redux/reducer/data';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const dispatch = useDispatch();
  const nav = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setUser(null));
          nav.navigate('Login', {});
        }}>
        <Text>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
