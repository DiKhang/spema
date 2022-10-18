import {Auth, NoAuth} from '../../layouts';
import Home from '../Home';
import Login from '../Login';

export default [
  {
    name: 'Login',
    layout: NoAuth,
    layoutParams: {},
    componentParams: {},
    component: Login,
  },
  {
    name: 'Home',
    layout: Auth,
    layoutParams: {},
    componentParams: {},
    component: Home,
  },
];
