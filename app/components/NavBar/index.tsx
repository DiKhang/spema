import Tabbar from '@components/react-native-tab-bar-interaction';
import {tabs} from './NavMap';

interface props {
  nav: any;
}

const NavBar = (props: props) => {
  const {nav} = props;

  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="#6699ff"
      tabBarBackground="#fff"
      activeTabBackground="#6699ff"
      labelStyle={{
        color: '#4d4d4d',
        fontWeight: '600',
        fontSize: 11,
      }}
      onTabChange={() => console.log('Tab changed')}
      defaultActiveTabIndex={2}
      styles={{
        height: 70,
      }}
    />
  );
};
export default NavBar;
