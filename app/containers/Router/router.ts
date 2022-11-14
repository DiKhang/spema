import {Auth, NoAuth} from '../../layouts';
import Add from '../Add';
import History from '../History';
import Home from '../Home';
import Login from '../Login';
import Profile from '../Profile';
import Register from '../Register';
import Statistical from '../Statistical';
import UpdateProfile from '../UpdateProfile';
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
    name: 'History',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: History,
  },
  {
    name: 'Statistical',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Statistical,
  },
  {
    name: 'Profile',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Profile,
  },
];
