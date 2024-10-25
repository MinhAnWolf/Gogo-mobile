import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BaseStyles } from "../../common/base-styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ModalCustom = forwardRef(
  (
    {
      title,
      height,
      content,
    }: {
      title: string;
      height?: number;
      content: JSX.Element;
    },
    ref
  ) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(300)).current;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.spring(slideAnim, {
        toValue: 0,
        speed: 10,
        bounciness: 1,
        useNativeDriver: true,
      }).start();
    };

    const closeModal = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        setIsModalVisible(false);
      });

      Animated.spring(slideAnim, {
        toValue: 300,
        speed: 10,
        bounciness: 1,
        useNativeDriver: true,
      }).start();
    };

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    return (
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: slideAnim }], height: height },
            ]}
          >
            <View style={[BaseStyles.spaceBetween, BaseStyles.mrBot20]}>
              <Text style={styles.dropDownTitle}>{title}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Ionicons
                  style={styles.closeButtonText}
                  name="close"
                  color="black"
                />
              </TouchableOpacity>
            </View>
            {content}
          </Animated.View>
        </Animated.View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  // Modal custom.
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    bottom: 0,
  },
  dropDownTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Close button.
  closeButton: {
    width: 32,
    marginRight: -10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
