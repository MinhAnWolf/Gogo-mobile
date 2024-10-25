import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "../screens/auth/login/login-screen";
import OtpScreen from "../screens/auth/otp/otp-screen";
import RegisterScreen from "../screens/auth/register/register-screen";
import BottomTabs from "./tabs/tab";
import DetailSearchLocationScreen from "../screens/detail-search-location/detail-search-location-screen";
import CreateTripDetailSuccessScreen from "../screens/create-trip-detail-success/create-trip-detail-success-screen";

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
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailSearchLocation"
          component={DetailSearchLocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTripDetailSuccess"
          component={CreateTripDetailSuccessScreen}
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
