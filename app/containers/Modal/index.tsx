import {getModal} from '../../redux/reducer/common';
import {useEffect, useState} from 'react';
import {Keyboard, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {router} from './containers/router';
import {styles} from './styles';

const Modal = () => {
  const {name, props} = useSelector(getModal);

  const [render, setRender] = useState<any>(null);

  const mapModal = () => {
    console.log('Active Modal: ', name ? name : 'Turn Off');
    if (!name) {
      return setRender(null);
    }
    router.map((item: any) => {
      if (item.name == name) {
        const {component: Component} = item;
        setRender(<Component {...props} />);
      }
    });
  };

  useEffect(() => {
    mapModal();
  }, [name]);
  return (
    <>
      {name && (
        <SafeAreaView
          style={styles.container}
          onTouchStart={() => Keyboard.dismiss()}>
          {render}
        </SafeAreaView>
      )}
    </>
  );
};

export default Modal;
