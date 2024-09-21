import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export const setStoreData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const setSecureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};
