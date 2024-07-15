import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import WomenScreen from './WomenScreen';
import ManScreen  from './ManScreen';
import KidsScreen from './KidsScreen';

const Tab = createMaterialTopTabNavigator();

const CategoriesScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#888',
        tabBarIndicatorStyle: { backgroundColor: 'red' },
      }}
    >
      <Tab.Screen name="Women" component={WomenScreen} />
      <Tab.Screen name="Man" component={ManScreen} />
      <Tab.Screen name="Kids" component={KidsScreen} />
    </Tab.Navigator>
  );
}

export default CategoriesScreen;
