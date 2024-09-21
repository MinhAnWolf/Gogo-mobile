import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/login/login-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./tabs/tab";

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchLocation"
          component={SearchLocationScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
