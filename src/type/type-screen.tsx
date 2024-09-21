import type { NavigationProp } from "@react-navigation/native";

export type SCREEN = {
  HomeScreen: undefined;
  SearchLocation: undefined;
  ProfileSettings: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
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

export type CardProp = {
  id: string;
  image: string;
  content: string;
  rate: string;
  comment: string;
  title: string;
  action: boolean;
};

export type SettingProp = {
  id: string;
  title: string;
};
