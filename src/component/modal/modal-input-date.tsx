import { useRef, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { BaseStyles } from "../../common/base-styles";
import { ModalCustom } from "./modal-custom";

import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DateTimeText } from "../component-common";

export const ModalInputDate = ({
  title,
  type = "date",
  placeholder,
  btnStyle,
  style,
  data,
  onChange,
}: {
  title: string;
  type?: any;
  placeholder?: string;
  btnStyle?: any;
  style?: any;
  data?: string;
  onChange: (value: any) => void;
}) => {
  const [value, setValue] = useState<Date>(data ? new Date(data) : new Date());
  const isPlatformIos = Platform.OS === "ios";
  const [show, setShow] = useState(false);
  const modalRef = useRef<any>(null);

  const onChangeHandler = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || new Date();
    setValue(currentDate);
  };

  const onChangeHandlerAndroi = (event: any, selectedDate: any) => {
    onChangeHandler(event, selectedDate);
    setShow(false);
    onChange(value);
  };

  const onOpenHandler = () => {
    if (isPlatformIos) {
      modalRef.current.openModal();
    } else {
      setShow(true);
    }
  };

  const onCloseHandler = () => {
    modalRef.current.closeModal();
    onChange(value);
  };

  return (
    <View style={style}>
      <TouchableOpacity style={btnStyle} onPress={onOpenHandler}>
        <View style={BaseStyles.spaceBetween}>
          <DateTimeText date={value.toISOString()} type={type} />
          <Ionicons
            name={type == "date" ? "calendar-outline" : "time-outline"}
            size={17}
            style={[BaseStyles.ml5]}
          />
        </View>
      </TouchableOpacity>

      {isPlatformIos ? (
        <ModalCustom
          title={title}
          ref={modalRef}
          content={
            <>
              <View style={[BaseStyles.row, BaseStyles.jusContentCenter]}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={value}
                  mode={type}
                  display="spinner"
                  onChange={onChangeHandler}
                  themeVariant="light"
                />
              </View>
              <TouchableOpacity
                style={[BaseStyles.btn2, BaseStyles.bgMain, BaseStyles.mrTop20]}
                onPress={onCloseHandler}
              >
                <Text>Đồng ý</Text>
              </TouchableOpacity>
            </>
          }
        />
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode={type}
            display="spinner"
            onChange={onChangeHandlerAndroi}
            themeVariant="light"
          />
        )
      )}
    </View>
  );
};
