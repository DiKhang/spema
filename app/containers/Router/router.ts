import {Auth, NoAuth} from '../../layouts';
import Add from '../Add';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import UpdateProfile from '../UpdateProfile';
import VerifyOTP from '../VerifyOTP';
import Profile from '../Profile';

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
    name: 'UpdateProfile',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: UpdateProfile,
  },
  {
    name: 'Home',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Home,
  },
  {
    name: 'Add',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Add,
  },
  {
    name: 'Profile',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Profile,
  },
];
