import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BaseStyles } from "../../common/base-styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextIcon } from "../component-common";
import { ModalCustom } from "./modal-custom";

export const ModalList = ({
  title,
  height = 600,
  icon,
  size,
  buttonStyle,
  data,
  isSearch = true,
  isBtnRemoveItem = false,
  onInit,
  onChange,
}: {
  title: string;
  height?: number;
  icon?: string;
  size?: number;
  buttonStyle?: any;
  data: any[];
  isSearch?: boolean;
  isBtnRemoveItem?: boolean;
  onInit: () => void;
  onChange: (item: any) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState("Chọn " + title);
  const [search, setSearch] = useState("");
  const [searchs, setSearchs] = useState<{ name: string; value: string }[]>([]);
  const [isTouch, SetTouch] = useState(false);

  const modalRef = useRef<any>(null);

  const onHandlerOpen = () => {
    onInit();
    modalRef.current.openModal();
  };

  const handleSelect = (item: any) => {
    setSelectedValue(item.name);
    SetTouch(false);
    modalRef.current.closeModal();
    onChange(item);
  };

  const onSearch = (key: string) => {
    setSearch(key);
    setSearchs(
      data.filter((item: any) =>
        item.name.toLowerCase().includes(key.toLowerCase())
      )
    );
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        key={index}
        disabled={selectedValue === item.name}
        style={styles.modalItem}
        onPress={() => handleSelect(item)}
      >
        <TextIcon
          text={item.name}
          icon={selectedValue === item.name && "checkmark"}
          style={styles.modalItemText}
          color={selectedValue === item.name ? "orange" : "black"}
          size={16}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={[BaseStyles.alignCenter, buttonStyle]}
        onPress={onHandlerOpen}
      >
        <View style={BaseStyles.rowFlexStart}>
          <TextIcon text={selectedValue} icon={icon} size={size} />
        </View>
        <Ionicons
          name={isTouch ? "chevron-up-sharp" : "chevron-down-sharp"}
          size={size}
          color="black"
        />
      </TouchableOpacity>

      <ModalCustom
        title={"Chọn " + title}
        height={height}
        ref={modalRef}
        content={
          <View style={{ flex: 1 }}>
            {isSearch && (
              <View style={[BaseStyles.spaceBetween, BaseStyles.inputBox]}>
                <TextInput
                  style={styles.searhInput}
                  placeholder={"Tìm " + title}
                  placeholderTextColor={"gray"}
                  onChangeText={(text) => onSearch(text)}
                  value={search}
                />

                <TouchableOpacity onPress={() => onSearch("")}>
                  <Ionicons
                    size={22}
                    name={search ? "close" : "search-outline"}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            )}

            {data.length !== 0 ? (
              <FlatList
                data={search !== "" ? searchs : data}
                renderItem={renderItem}
              />
            ) : (
              <View style={[BaseStyles.jusContentCenter, { flex: 1 }]}>
                <Text style={{ textAlign: "center" }}>đang tải...</Text>
              </View>
            )}
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  searhInput: {
    marginLeft: 10,
    fontSize: 16,
    width: "80%",
  },
  modalItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    alignItems: "center",
  },
  modalItemText: {
    fontSize: 16,
    color: "#333",
  },
});
