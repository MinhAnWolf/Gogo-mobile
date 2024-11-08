import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "../../type/type-screen";
import SettingScreen from "../../screens/setting/setting-screen";

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
        name="SettingOptions"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackNavigator;
