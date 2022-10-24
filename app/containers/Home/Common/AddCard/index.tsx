import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

interface Props {
  nameCard: string;
  money: string;
  icon?: JSX.Element;
}

const AddCard = (props: Props) => {
  const {nameCard, money, icon} = props;
  return (
    <TouchableOpacity style={styles.container}>
      {icon ? icon : null}
      <Text style={styles.nameCard}>{nameCard}</Text>
      <Text style={styles.money}>{money} đ</Text>
    </TouchableOpacity>
  );
};
export default AddCard;
