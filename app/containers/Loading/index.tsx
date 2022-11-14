import {getLoading} from '../../redux/reducer/common';
import {useEffect, useRef, useState} from 'react';
import {Animated, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {ColorPalette, setWidth} from '@utils/Display';
import {Bar, Circle} from 'react-native-progress';

var refAnimation: any = null;

const Loading = () => {
  const {show, props} = useSelector(getLoading);
  const [render, setRender] = useState<any>(null);

  const value = useRef(new Animated.Value(0)).current;
  const runAnimations = () => {
    if (!refAnimation) {
      console.log('Start Loading !');
      const runAnimations = Animated.timing(value, {
        toValue: 100,
        duration: 100,
        useNativeDriver: true,
        isInteraction: false,
      });
      refAnimation = Animated.loop(runAnimations, {
        iterations: -1,
      });
      refAnimation.start();
    } else {
      console.log('Continue Loading !');
      refAnimation.start();
    }
  };

  const stopAnimations = () => {
    if (refAnimation) {
      console.log('Stop Loading !');
      refAnimation.stop();
      value.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      runAnimations();
    } else {
      stopAnimations();
    }
  }, [show]);
  return (
    <>
      {show && (
        <SafeAreaView style={styles.container}>
          <View style={styles.containerProgress}>
            <Circle
              size={50}
              indeterminate={true}
              color={ColorPalette.primary}
            />
            <Text style={styles.text}>Đang tải, vui lòng đợi...</Text>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Loading;
