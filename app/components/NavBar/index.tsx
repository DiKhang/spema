import Tabbar from '@components/Tabbar';
import {setHeight} from '@utils/Display';
import {tabs} from './NavMap';

interface props {
  nav: any;
  styles?: any;
}

const NavBar = (props: props) => {
  const {nav, styles} = props;

  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="#009387"
      tabBarBackground="#fff"
      activeTabBackground="#009387"
      labelStyle={{
        color: '#fff',
        fontWeight: '600',
        fontSize: 11,
      }}
      onTabChange={() => {}}
      defaultActiveTabIndex={0}
      styles={{
        height: setHeight(8),
        width: '100%',
      }}
      transitionSpeed={200}
    />
  );
};
export default NavBar;
