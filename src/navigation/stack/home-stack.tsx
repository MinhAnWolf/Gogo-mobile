import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/home/home-screen";
import SearchLocationScreen from "../../screens/search-location/search-location-screen";
import { SCREEN } from "../../type/type-screen";
import ListSearchLocation from "../../screens/list-search-location/list-search-location";
import NotificationScreen from "../../screens/notification/notification-screen";
import DetailSearchLocationScreen from "../../screens/detail-search-location/detail-search-location-screen";

const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator<SCREEN>();
  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SearchLocation"
          component={SearchLocationScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ListSearchLocation"
          component={ListSearchLocation}
          options={{ headerShown: false }}
        />

        <HomeStack.Screen
          name="DetailSearchLocation"
          component={DetailSearchLocationScreen}
        />

        <HomeStack.Screen name="Notification" component={NotificationScreen} />

      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
