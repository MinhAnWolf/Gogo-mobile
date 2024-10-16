import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
import React from "react";

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}
