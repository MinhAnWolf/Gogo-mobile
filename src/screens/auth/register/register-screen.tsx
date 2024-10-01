import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BaseStyles } from '../../../common/base-styles';
import { Input } from '../../../component/component-common';
import { NotiModal } from '../../../component/modal/notification-modal';
import { RequestAuthentication } from '../../../type/type-api';
import { ScreenNavigationProp } from '../../../type/type-screen';
import { RegisterStyles } from './register-styles';
import { registerFormDefaultValues, RegisterFormInput, RegisterFormType, schemaRegister } from './validator/schema';

const RegisterScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<RegisterFormType>({
    defaultValues: registerFormDefaultValues,
    resolver: zodResolver(schemaRegister)
  });
  // Declare state
  const [modalVisible, setModalVisible] = useState(false);

  // handle event
  const onSubmit = (data: RegisterFormType) => {
    const reqData: RequestAuthentication = {
      email: data.email,
      password: data.password
    };
    navigation.navigate('Home');
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
        <View style={[RegisterStyles.header]}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-photo/food-logo-illustration-illustration-white-background_961147-9216.jpg'
            }}
            style={[BaseStyles.image, BaseStyles.containerRelative]}
            resizeMode='cover' // Adjust based on how you want to fit the image
          />
        </View>
        <View style={[RegisterStyles.content]}>
          <Text>WelCome!</Text>
          <View style={[RegisterStyles.formatScreenRegister]}>
            <Input inputType={RegisterFormInput.email} control={control} />
          </View>
          {errors && <Text style={{ color: '#ff8566' }}>{errors.email?.message}</Text>}

          <View style={[RegisterStyles.formatScreenRegister]}>
            <Input inputType={RegisterFormInput.password} control={control} />
          </View>
          {errors && <Text style={{ color: '#ff8566' }}>{errors.password?.message}</Text>}

          <View style={[RegisterStyles.formatScreenRegister]}>
            <Input inputType={RegisterFormInput.rePassword} control={control} />
          </View>
          {errors && <Text style={{ color: '#ff8566' }}>{errors.rePassword?.message}</Text>}

          <View style={[RegisterStyles.formatScreenRegister, BaseStyles.boderRadius10]}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
          {/* BUTTON GOOGLE AND FACEBOOK */}
          <View style={[BaseStyles.rowCenter]}>
            <TouchableOpacity style={styles.buttonImg} onPress={() => alert('Feature develop')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'
                }}
                style={[BaseStyles.image, BaseStyles.containerRelative]}
                resizeMode='contain' // Adjust based on how you want to fit the image
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonImg} onPress={() => alert('Feature develop')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000'
                }}
                style={[BaseStyles.image, BaseStyles.containerRelative]}
                resizeMode='contain' // Adjust based on how you want to fit the image
              />
            </TouchableOpacity>
          </View>

          <Text style={[BaseStyles.centerText]}>
            Already have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      {/* COMPONENT MODAL */}
      <NotiModal
        visible={modalVisible}
        onClose={closeModal}
        title='Sorry :('
        message='Request failed with status code 401'
        nameBtn='TRY AGAIN'
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(255, 91, 45)', // Màu nền của nút
    padding: 10, // Khoảng cách bên trong nút
    borderRadius: 10 // Góc bo tròn của nút
  },
  buttonText: {
    color: '#FFFFFF', // Màu văn bản
    fontSize: 16, // Kích thước văn bản
    textAlign: 'center', // Căn giữa văn bản
    fontWeight: 'bold'
  },
  buttonImg: {
    width: 100,
    height: 50,
    borderRadius: 10, // Góc bo tròn của nút
    margin: 10
  }
});
export default RegisterScreen;
