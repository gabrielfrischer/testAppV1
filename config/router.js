import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Settings from '../screens/Settings';





export const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffffff',
  },
});
