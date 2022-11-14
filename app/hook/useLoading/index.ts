import {setLoading} from '../../redux/reducer/common';
import {useDispatch} from 'react-redux';

const useLoading = () => {
  const dispatch = useDispatch();

  const showLoading = (props?: any) => {
    dispatch(setLoading({show: true, props}));
  };

  const hideLoading = () => {
    dispatch(setLoading({show: false, props: {}}));
  };
  return {showLoading, hideLoading};
};
export default useLoading;
