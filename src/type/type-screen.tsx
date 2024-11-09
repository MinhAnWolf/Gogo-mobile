import type { NavigationProp } from "@react-navigation/native";

export type SCREEN = {
  HomeScreen: undefined;
  SearchLocation: undefined;
  SettingOptions: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Otp: undefined;
  ListSearchLocation: {
    textSearch: string;
  };
  Notification: undefined;
  DetailSearchLocation: { item: any };
  CreateTrip: undefined;
  CreateTripDetailSuccess: {
    data: any[];
    location: any;
    onGoBack?: (returnData: any) => void;
  };
  CreateLocation: undefined;
  EditProfileScreen: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

export type ScreenNavigationProp = {
  navigation: NavigationProp<SCREEN>;
  route?: any;
};

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<HomeStackNavigatorParamList, "Home">,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, "Feed">
// >;

// export type SettingScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<SettingStackNavigatorParamList, "Logout">,
//   BottomTabNavigationProp<BottomTabNavigatorParamList, "Settings">
// >;
