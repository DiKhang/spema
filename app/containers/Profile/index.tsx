import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {ColorPalette} from '@utils/Display';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardAsset from './CardAsset/CardAsset';
import {useState} from 'react';
const Profile = () => {
  const nav = useNavigation<any>();
  const [profile, setProfile] = useState<any>({
    name: 'Trần Hữu Thọ',
    sex: 'Nam',
    birthday: '15/12/2000',
    job: 'Kế toán',
    email: 'tho123@gmail.com',
  });

  const handleChange = (value: any) => {
    setProfile(value);
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={styles.assetContainer}>
            <View style={styles.assetTotal}>
              <Text style={styles.textAsset}>Tổng tài sản:</Text>
              <Text style={styles.textSumAsset}>10.000.000đ</Text>
            </View>
          </LinearGradient>

          <View style={styles.cardItem}>
            <CardAsset
              icon="application"
              backgroundColor={ColorPalette.asset1}
              title="Tài sản"
              money="5.000.000đ"
            />
            <CardAsset
              icon="cloud"
              backgroundColor={ColorPalette.asset2}
              title="Giấc mơ"
              money="5.000.000đ"
            />
          </View>
          <View style={styles.cardItem}>
            <CardAsset
              icon="bottle-tonic"
              backgroundColor={ColorPalette.asset3}
              title="6 hũ"
              money="5.000.000đ"
            />
            <CardAsset
              icon="currency-usd-off"
              backgroundColor={ColorPalette.asset4}
              title="Khoản nợ"
              money="5.000.000đ"
            />
          </View>
        </View>
        <View>
          <Text style={styles.textInfo}>Thông tin cá nhân</Text>
          <View style={styles.cardInfo}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Họ và tên</Text>
              <View style={styles.line} />
              <Text style={styles.text}>Giới tính</Text>
              <View style={styles.line} />
              <Text style={styles.text}>Ngày sinh</Text>
              <View style={styles.line} />
              <Text style={styles.text}>Nghề nghiệp</Text>
              <View style={styles.line} />
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.text}>{profile?.name}</Text>
              <View style={styles.line} />
              <Text style={styles.text}>{profile?.sex}</Text>
              <View style={styles.line} />
              <Text style={styles.text}>{profile?.birthday}</Text>
              <View style={styles.line} />
              <Text style={styles.text}>{profile?.job}</Text>
              <View style={styles.line} />
              <Text style={styles.text}>tho123@gmail.com</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            nav.navigate('UpdateProfile');
          }}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.button}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={22}
                color="white"
              />
              <Text style={styles.textButton}> Chỉnh sửa</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Profile;
