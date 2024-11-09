import React, { useEffect, useState } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseStyles } from "../../../common/base-styles";
import { Input } from "../../../component/component-common";
import { NotiModal } from "../../../component/modal/notification-modal";
import { InputType } from "../../../type/type";
import { RequestAuthentication } from "../../../type/type-api";
import { ScreenNavigationProp } from "../../../type/type-screen";
import { LoginStyles } from "./login-styles";
import messaging from "@react-native-firebase/messaging";
import { login } from "../../../service/AuthenticationService";

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
    exampleValue: "Email",
    secureTextEntry: false,
  };

  const password: InputType = {
    name: "password",
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    exampleValue: "Password",
    secureTextEntry: true,
  };

  // handle event
  const onSubmit = (data: any) => {
    const reqData: RequestAuthentication = {
      email: data.email,
      password: data.password,
    };
    requestNotification();
    login(reqData)
      .then(async (res) => {
        if (res.status === 200) {
          navigation.navigate("HomeScreen");
        }
      })
      .catch((e) => {
        console.log(e);
        openModal();
      });
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

  async function requestNotification() {
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
      }
    };

    const getToken = async () => {
      const token = await messaging().getToken();
      console.log("FCM Token:", token);
    };

    requestUserPermission();
    getToken();
  }

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
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
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
    backgroundColor: "rgb(255, 91, 45)",
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
export default LoginScreen;
