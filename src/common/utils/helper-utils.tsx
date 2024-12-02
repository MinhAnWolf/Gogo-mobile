import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const isNull = async (value: any) => {
  return value == null || value == undefined;
};

export const pickImage = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Ứng dụng cần quyền truy cập vào thư viện ảnh.");
      return;
    }
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result);
    return result.assets[0];
  }
};
