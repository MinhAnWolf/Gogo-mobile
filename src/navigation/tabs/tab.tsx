import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigatorParamList } from "../../type/type-screen";
import HomeStackNavigator from "../stack/home-stack";
import SettingStackNavigator from "../stack/setting-stack";
import HomeScreen from "../../screens/home/home-screen";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // Thiết lập màu nền cho các màn hình
        tabBarStyle: { backgroundColor: "white" }, // Màu nền trắng cho thanh tab
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
