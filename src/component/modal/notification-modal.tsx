import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { ModalType } from "../../type/type";
import { NotiModalStyles } from "./notification-modal-styles";
import { BaseStyles } from "../../common/base-styles";

// https://www.pinterest.com/pin/861665341227944090/
export const NotiModal: React.FC<ModalType> = ({
  visible,
  onClose,
  title,
  message,
  nameBtn,
}) => {
  const [opacity] = useState(new Animated.Value(0));
  React.useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Animated.View style={NotiModalStyles.modalBackground}>
        <View
          style={[NotiModalStyles.containerModal, BaseStyles.boderRadius10]}
        >
          {/* Bg */}
          <View style={[NotiModalStyles.imgContainer, BaseStyles.mrBot10]}>
            <Image
              source={{
                uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQL4NzLRaBQgUkrH0PzcgPZdk6Kw0jnB6C_Vq7UJ7N3hgmguk3c",
              }}
              style={[BaseStyles.image, BaseStyles.boderFullTop10]}
              resizeMode="cover" // Adjust based on how you want to fit the image
            />
          </View>
          {/* Title */}
          <View style={[BaseStyles.mrBot10]}>
            <Text style={[BaseStyles.centerText, NotiModalStyles.title]}>
              {title}
            </Text>
          </View>
          {/* Message */}
          <View style={[BaseStyles.mrBot10]}>
            <Text style={[BaseStyles.centerText, NotiModalStyles.message]}>
              {message}
            </Text>
          </View>
          {/* Button */}
          <View style={[NotiModalStyles.btn, BaseStyles.boderRadius10]}>
            <TouchableOpacity onPress={onClose}>
              <Text style={[BaseStyles.centerText, NotiModalStyles.nameBtn]}>
                {nameBtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};
