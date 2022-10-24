import Feather from 'react-native-vector-icons/Feather';

export const tabs = [
  {
    name: 'Home',
    activeIcon: <Feather name="home" color="#fff" size={25} />,
    inactiveIcon: <Feather name="home" color="#4d4d4d" size={25} />,
  },
  {
    name: 'camera',
    activeIcon: <Feather name="camera" color="#fff" size={25} />,
    inactiveIcon: <Feather name="camera" color="#4d4d4d" size={25} />,
  },
  {
    name: 'Notification',
    activeIcon: <Feather name="bell" color="#fff" size={25} />,
    inactiveIcon: <Feather name="bell" color="#4d4d4d" size={25} />,
  },
  {
    name: 'Profile',
    activeIcon: <Feather name="user" color="#fff" size={25} />,
    inactiveIcon: <Feather name="user" color="#4d4d4d" size={25} />,
  },
];
