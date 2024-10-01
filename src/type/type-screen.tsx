import type { NavigationProp } from '@react-navigation/native';

export type SCREEN = {
  HomeScreen: undefined;
  SearchLocation: undefined;
  ProfileSettings: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Otp: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

export type ScreenNavigationProp = {
  navigation: NavigationProp<SCREEN>;
};

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<HomeStackNavigatorParamList, "Home">,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, "Feed">
// >;

// export type SettingScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<SettingStackNavigatorParamList, "Logout">,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, "Settings">
// >;
