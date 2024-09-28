import {
  Image,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BaseStyles } from "../../../common/base-styles";
import { LoginStyles } from "./login-styles";
import { ScreenNavigationProp } from "../../../type/type-screen";
import {
  RequestAuthentication,
  ResponseAuthentication,
} from "../../../type/type-api";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { InputType } from "../../../type/type";
import { Input } from "../../../component/component-common";
import { login } from "../../../service/AuthenticationService";
import { NotiModal } from "../../../component/modal/notification-modal";
import { useState } from "react";

const LoginScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  // Declare state
  const [modalVisible, setModalVisible] = useState(false);

  // Declare input
  const email: InputType = {
    name: "email",
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: false,
  };

  const password: InputType = {
    name: "password",
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: true,
  };

  // handle event
  const onSubmit = (data: any) => {
    const reqData: RequestAuthentication = {
      email: data.email,
      password: data.password,
    };
    navigation.navigate("HomeScreen");
    // login(reqData)
    //   .then((res) => {
    //     if (res) {
    //       console.log(data);
    //       navigation.navigate("HomeScreen");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     openModal();
    //   });
  };

  const onError: SubmitErrorHandler<RequestAuthentication> = (errors, e) => {
    return console.log(errors);
  };

  // open-close modal
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={[BaseStyles.container, BaseStyles.mrTop40]}>
        <View style={[LoginStyles.header]}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/food-logo-illustration-illustration-white-background_961147-9216.jpg",
            }}
            style={[BaseStyles.image, BaseStyles.containerRelative]}
            resizeMode="cover" // Adjust based on how you want to fit the image
          />
        </View>
        <View style={[LoginStyles.content]}>
          <Text>WelCome!</Text>
          <View style={[LoginStyles.formatScreenLogin]}>
            <Input inputType={email} control={control} />
          </View>
          <View style={[LoginStyles.formatScreenLogin]}>
            <Input inputType={password} control={control} />
          </View>
          <View
            style={[LoginStyles.formatScreenLogin, BaseStyles.boderRadius10]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>Login here</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              BaseStyles.centerText,
              BaseStyles.mrTop20,
              BaseStyles.mrBot20,
            ]}
          >
            Forgot password
          </Text>
          {/* BUTTON GOOGLE AND FACEBOOK */}
          <View style={[BaseStyles.rowCenter]}>
            <TouchableOpacity
              style={styles.buttonImg}
              onPress={() => alert("Feature develop")}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
                }}
                style={[BaseStyles.image, BaseStyles.containerRelative]}
                resizeMode="contain" // Adjust based on how you want to fit the image
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonImg}
              onPress={() => alert("Feature develop")}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
                }}
                style={[BaseStyles.image, BaseStyles.containerRelative]}
                resizeMode="contain" // Adjust based on how you want to fit the image
              />
            </TouchableOpacity>
          </View>

          <Text
            style={[
              BaseStyles.centerText,
              BaseStyles.mrTop20,
              BaseStyles.mrBot20,
            ]}
          >
            Don't have an account?{" "}
            <TouchableOpacity>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      {/* COMPONENT MODAL */}
      <NotiModal
        visible={modalVisible}
        onClose={closeModal}
        title="Sorry :("
        message="Request failed with status code 401"
        nameBtn="TRY AGAIN"
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(255, 91, 45)", // Màu nền của nút
    padding: 10, // Khoảng cách bên trong nút
    borderRadius: 10, // Góc bo tròn của nút
  },
  buttonText: {
    color: "#FFFFFF", // Màu văn bản
    fontSize: 16, // Kích thước văn bản
    textAlign: "center", // Căn giữa văn bản
    fontWeight: "bold",
  },
  buttonImg: {
    width: 100,
    height: 50,
    borderRadius: 10, // Góc bo tròn của nút
    margin: 10,
  },
});
export default LoginScreen;
