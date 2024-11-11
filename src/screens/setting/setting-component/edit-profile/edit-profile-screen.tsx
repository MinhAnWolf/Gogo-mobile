import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ScreenNavigationProp } from "../../../../type/type-screen";
import { BaseStyles } from "../../../../common/base-styles";
import { SettingStyles } from "../../setting-styles";
import { InputType } from "../../../../type/type";
import { useForm } from "react-hook-form";
import { Input } from "../../../../component/component-common";
import { LoginStyles } from "../../../auth/login/login-styles";
import { EditProfileStyles } from "./edit-profile-styles";

const EditProfileScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const email: InputType = {
    name: "email",
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: false,
    exampleValue: "Email",
    value: "minhanlefz09@gmail.com",
  };

  const username: InputType = {
    name: "username",
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: false,
    exampleValue: "Username",
  };
  return (
    <View
      style={[
        BaseStyles.whiteScreen,
        SettingStyles.avatarContainer,
        BaseStyles.mrTop60,
      ]}
    >
      <Text
        style={[
          BaseStyles.centerText,
          BaseStyles.ml10,
          SettingStyles.cssTextTitle,
          BaseStyles.mrBot20,
        ]}
      >
        Edit Profile
      </Text>
      <View style={[SettingStyles.avatar]}>
        <Image
          source={{
            uri: "https://i.pinimg.com/236x/76/18/38/761838420398ec0b0b412b46b71f2ab2.jpg",
          }}
          style={[BaseStyles.image, BaseStyles.boderCircle]}
          resizeMode="cover"
        />
      </View>
      <Text
        style={[
          BaseStyles.centerText,
          BaseStyles.ml10,
          SettingStyles.cssTextName,
        ]}
      >
        Minh An
      </Text>

      {/* INPUT EDIT */}
      <View style={[EditProfileStyles.containerInput]}>
        <View style={[LoginStyles.formatScreenLogin, BaseStyles.ml12]}>
          <Input inputType={email} control={control} />
        </View>

        <View style={[LoginStyles.formatScreenLogin, BaseStyles.ml12]}>
          <Input inputType={username} control={control} />
        </View>

        {/* <View style={[LoginStyles.formatScreenLogin, BaseStyles.ml12]}>
          <Input inputType={email} control={control} />
        </View> */}
        <View style={[LoginStyles.formatScreenLogin, BaseStyles.ml12]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(255, 60, 167)",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonImg: {
    width: 100,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
});

export default EditProfileScreen;
