import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet } from 'react-native';
import OTPInput from '../../../component/otp/input-otp';
import { ButtonContainer, ButtonText } from '../../../component/otp/styles';

export default function OtpScreen() {
  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <OTPInput code={otpCode} setCode={setOTPCode} maximumLength={maximumCodeLength} setIsPinReady={setIsPinReady} />

      <ButtonContainer disabled={!isPinReady} style={styles.button}>
        <ButtonText style={styles.buttonText}>Continue</ButtonText>
      </ButtonContainer>
      <StatusBar style='auto' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  }
});
