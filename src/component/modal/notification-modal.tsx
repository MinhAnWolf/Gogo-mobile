import { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ModalType } from "../../type/type";
import { NotiModalStyles } from "./notification-modal-styles";

// https://www.pinterest.com/pin/861665341227944090/
export const NotiModal: React.FC<ModalType> = ({
  visible,
  onClose,
  title,
  message,
  nameBtn,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={[NotiModalStyles.containerModal]}>
        <View style={[NotiModalStyles.containerModal]}></View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{message}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={onClose}>
            <Text>{nameBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
