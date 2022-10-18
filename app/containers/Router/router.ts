import {Auth, NoAuth} from '../../layouts';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import VerifyOTP from '../VerifyOTP';

export default [
  {
    name: 'Login',
    layout: NoAuth,
    layoutParams: {},
    componentParams: {},
    component: Login,
  },
  {
    name: 'Register',
    layout: NoAuth,
    layoutParams: {},
    componentParams: {},
    component: Register,
  },
  {
    name: 'OTP',
    layout: NoAuth,
    layoutParams: {},
    componentParams: {},
    component: VerifyOTP,
  },
  {
    name: 'Home',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Home,
  },
];
