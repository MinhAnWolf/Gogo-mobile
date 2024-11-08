import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigatorParamList } from "../../type/type-screen";
import HomeStackNavigator from "../stack/home-stack";
import SettingStackNavigator from "../stack/setting-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color="black" size={24} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="NewTrip"
        component={CreateTripStackNavigator}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color="black" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
