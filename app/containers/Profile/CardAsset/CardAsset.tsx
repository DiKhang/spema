import {Text, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

interface Props {
  icon: string;
  backgroundColor?: string;
  title: string;
  money: string;
}

const CardAsset = (props: Props) => {
  const nav = useNavigation<any>();
  const {icon, backgroundColor, title, money} = props;
  const [tabList, setTabList] = useState([
    {
      id: 0,
      value: 'Tài sản',
    },
    {
      id: 1,
      value: 'Giấc mơ',
    },
    {
      id: 2,
      value: '6 hũ',
    },
    {
      id: 3,
      value: 'khoản nợ',
    },
  ]);

  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Add', {type: 0, tabList});
      }}
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 0,
        marginRight: 10,
        backgroundColor: backgroundColor,
      }}>
      <MaterialCommunityIcons name={icon} size={23} color="white" />
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
      <Text style={{color: 'white'}}>{money}</Text>
    </TouchableOpacity>
  );
};
export default CardAsset;
