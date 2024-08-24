import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeAktif from './assets/icon/home-activated.png';
import HomeNonAktif from './assets/icon/home-inactive.png';
import ShopAktif from './assets/icon/shop-activated.png';
import ShopNonAktif from './assets/icon/shop-inactive.png';
import BagAktif from './assets/icon/bag-activated.png';
import BagNonAktif from './assets/icon/bag-inactive.png';
import FavoritesAktif from './assets/icon/favorites-activated.png';
import FavoritesNonAktif from './assets/icon/favorites-inactive.png';
import ProfilAktif from './assets/icon/profil-activated.png';
import ProfilNonAktif from './assets/icon/profil-inactive.png';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Bag from './pages/Bag';
import FavoriteScreen from './pages/Favorites';
import Profile from './pages/Profile';
import HomeMain from './pages/HomeMain';
import CategoriesScreen from './pages/Categories';
import Filters from './pages/Filter';
import ForgotPassword from './pages/ForgotPassword';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="HomeMain" component={HomeMain} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen name="ShopScreen" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Filters" component={Filters} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? HomeAktif : HomeNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? BagAktif : BagNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? FavoritesAktif : FavoritesNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ProfilAktif : ProfilNonAktif} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Filters" component={Filters}  />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;