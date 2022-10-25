import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {ColorPalette} from '@utils/Display';
import * as Progress from 'react-native-progress';
import AddCard from './Common/AddCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Jar from './Common/Jar';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [progress, setProgress] = useState(0.7);
  const nav = useNavigation<any>();
  useEffect(() => {
    if (progress < 1) {
      setTimeout(() => {
        setProgress(progress);
      }, 10);
    } else {
      setProgress(0);
    }
  }, [progress]);

  return (
    <ScrollView>
      <Animatable.View animation={'fadeInUpBig'} style={styles.container}>
        <TouchableOpacity style={styles.total} disabled={true}>
          <View style={styles.totalCard}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[
                ColorPalette.primary_1,
                ColorPalette.primary,
                ColorPalette.primary__1,
              ]}
              style={styles.totalCardContent}>
              <View style={styles.totalCardProgress}>
                <Progress.Circle
                  size={80}
                  color={'white'}
                  progress={progress}
                  animated={true}
                  showsText={true}
                  formatText={() => {
                    const result = progress * 100;
                    return `${result.toFixed(0)}%`;
                  }}
                />
              </View>
              <View style={styles.totalCardText}>
                <Text style={styles.totalCardTitle}>Tổng số tiền</Text>
                <Text style={styles.totalCardValue}>100.000.000 đ</Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <View style={styles.addZone}>
          <View style={styles.addZoneContent}>
            <View style={styles.addZoneItem}>
              <AddCard
                nameCard="Thu nhập"
                money="100.000.000"
                icon={
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={20}
                    color="#fff"
                  />
                }
                onPress={() => {
                  nav.navigate('Add', {type: 0});
                }}
              />
            </View>
            <View style={styles.addZoneItem}>
              <AddCard
                nameCard="Chi tiêu"
                money="70.000.000"
                icon={
                  <MaterialCommunityIcons
                    name="plus-circle"
                    size={20}
                    color="#fff"
                  />
                }
                onPress={() => {
                  nav.navigate('Add', {type: 1});
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.listJarZone}>
          <View style={styles.listJarZoneContent}>
            <View style={styles.jarItem}>
              <Jar
                title="Thiết yếu"
                money="20.000.000"
                progress={0.79}
                backgroundColor={ColorPalette.pink}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Giáo dục"
                money="10.000.000"
                progress={0.59}
                backgroundColor={ColorPalette.blue}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Tiết kiệm"
                money="7.000.000"
                progress={1}
                backgroundColor={ColorPalette.yellow}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Hưởng thụ"
                money="2.000.000"
                progress={0.3}
                backgroundColor={ColorPalette.purple}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Đầu tư"
                money="8.000.000"
                progress={0.5}
                backgroundColor={ColorPalette.green}
              />
            </View>
            <View style={styles.jarItem}>
              <Jar
                title="Từ thiện"
                money="800.000"
                progress={0.1}
                backgroundColor={ColorPalette.red}
              />
            </View>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default Home;
