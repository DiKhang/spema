import {setNotify, getNotify} from '../../redux/reducer/common';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ColorPalette} from '@utils/Display';

const Notify = () => {
  const dispatch = useDispatch();
  const {show, props} = useSelector(getNotify);
  const state = useSelector(state => state);

  const handleAccept = () => {
    dispatch(
      setNotify({
        show: false,
        props: {
          content: '',
          accept: null,
          denied: null,
        },
      }),
    );

    if (typeof props.accept === 'function') {
      props.accept();
    }
  };
  const handleDenied = () => {
    if (typeof props.denied === 'function') {
      props.denied();
    }
    dispatch(
      setNotify({
        show: false,
        props: {
          content: '',
          accept: null,
          denied: null,
        },
      }),
    );
  };

  return (
    <>
      {show ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.notifiContainer}>
            <Text
              style={[
                styles.textButton,
                styles.textNotifi,
                {fontWeight: 'bold'},
              ]}>
              Thông báo
            </Text>
            <Text style={[styles.textButton, styles.textNotifi]}>
              {props.content}
            </Text>
            <View style={styles.buttonContainer}>
              {typeof props.denied == 'function' && (
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={handleDenied}>
                  <Text
                    style={[styles.textButton, {color: ColorPalette.black}]}>
                    Không
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={[styles.button]} onPress={handleAccept}>
                <Text style={styles.textButton}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : null}
    </>
  );
};

export default Notify;
