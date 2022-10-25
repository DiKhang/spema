import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

interface Props {
  nameCard: string;
  money: string;
  onPress?: () => void;
  icon?: JSX.Element;
}

const AddCard = (props: Props) => {
  const {nameCard, money, icon, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? icon : null}
      <Text style={styles.nameCard}>{nameCard}</Text>
      <Text style={styles.money}>{money} đ</Text>
    </TouchableOpacity>
  );
};
export default AddCard;
