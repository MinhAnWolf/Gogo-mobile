import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/auth/login/login-screen";
import ProfileSettingScreen from "../../screens/profile-setting/profile-setting-screen";
import { SCREEN } from "../../type/type-screen";

const SettingStackNavigator = () => {
  const SettingStack = createNativeStackNavigator<SCREEN>();
  return (
    <SettingStack.Navigator
      screenOptions={{
        // Thiết lập màu nền cho tất cả các màn hình trong stack
        contentStyle: { backgroundColor: "white" }, // Màu nền trắng
      }}
    >
      <SettingStack.Screen
        name="ProfileSettings"
        component={ProfileSettingScreen}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackNavigator;
