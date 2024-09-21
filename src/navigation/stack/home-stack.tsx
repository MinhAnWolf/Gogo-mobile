import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/home/home-screen";
import SearchLocationScreen from "../../screens/search-location/search-location-screen";
import { SCREEN } from "../../type/type-screen";

const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator<SCREEN>();
  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen
          name="SearchLocation"
          component={SearchLocationScreen}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
