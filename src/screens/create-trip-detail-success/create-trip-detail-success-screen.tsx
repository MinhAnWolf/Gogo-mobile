import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import { useRoute } from "@react-navigation/native";
import { BaseStyles } from "../../common/base-styles";
import { CreateTripDelSucStyles } from "./create-trip-detail-success-styles";
import {
  Banner,
  DateTimeText,
  TextIcon,
} from "../../component/component-common";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { create } from "../../service/TripService";
import { ModalInputDate } from "../../component/modal/modal-input-date";

const CreateTripDetailSuccessScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const { data, location, onGoBack }: any = useRoute().params;
  const [dataList, setDataList] = useState(() => sortByDateStart(data));
  const [tripName, setTripName] = useState("");
  const [startDateTime, setStartDateTime] = useState<any>();
  const [endDateTime, setEndDatetime] = useState<any>();

  const [isSubmit, setIsSubmit] = useState(false);

  const goBackWithData = () => {
    onGoBack(dataList);
    navigation.goBack();
  };

  function sortByDateStart(data: any[]) {
    return data.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateA - dateB;
    });
  }

  useEffect(() => {
    try {
      const dataLength = dataList.length;
      if (dataLength) {
        const startDate = new Date(dataList[0]?.startDate);
        const startTime = new Date(dataList[0]?.startTime);
        startDate.setHours(
          startTime.getHours(),
          startTime.getMinutes(),
          startTime.getSeconds(),
          startTime.getMilliseconds()
        );
        setStartDateTime(startDate);

        const endDate = new Date(dataList[dataLength - 1]?.startDate);
        const endTime = new Date(dataList[dataLength - 1]?.startTime);
        endDate.setHours(
          endTime.getHours(),
          endTime.getMinutes(),
          endTime.getSeconds(),
          endTime.getMilliseconds()
        );
        setEndDatetime(endDate);
      }
    } catch (e) {
      console.log(e);
    }
  }, [dataList]);

  const onChangeDate = (index: number, value: any) => {
    const updateDataList = [...dataList];
    updateDataList[index].startDate = value;
    setDataList(sortByDateStart(updateDataList));
  };

  const onChangeTime = (index: number, value: any) => {
    const updateDataList = [...dataList];
    updateDataList[index].startTime = value;
    setDataList(sortByDateStart(updateDataList));
  };

  const onRemoveLocation = (index: number) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);
  };

  const onSubmit = () => {
    setIsSubmit(true);
    const input = {
      cityCode: location.code,
      cityName: location.name,
      name: tripName,
      countLocation: dataList.length,
      startDate: startDateTime,
      endDate: endDateTime,
      tripLocations: dataList,
    };
    create(input)
      .then((res) => {
        if (res) {
          setIsSubmit(false);
          setDataList([]);
          onGoBack([]);
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSubmit(false);
      });
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View key={index}>
        <View style={CreateTripDelSucStyles.card}>
          <View style={BaseStyles.spaceBetween}>
            <Text
              style={[CreateTripDelSucStyles.title, BaseStyles.mrBot10]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {index + 1 + ". " + item.name}
            </Text>
            <TouchableOpacity onPress={() => onRemoveLocation(index)}>
              <Ionicons name="close" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View style={BaseStyles.pl20}>
            <Text
              style={[CreateTripDelSucStyles.dateStart, BaseStyles.mrBot15]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.address}
            </Text>

            <View style={BaseStyles.rowFlexStart}>
              <ModalInputDate
                title="Chọn thời gian bất đầu"
                type="time"
                data={item.startTime}
                onChange={(value) => onChangeTime(index, value)}
              />
              <Text style={[BaseStyles.mrRight5, BaseStyles.mrLeft5]}> - </Text>
              <ModalInputDate
                title="Chọn ngày bất đầu"
                type="date"
                data={item.startDate}
                onChange={(value) => onChangeDate(index, value)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Banner height={70} style={BaseStyles.bgMain} onBack={goBackWithData} />

      <View style={{ flex: 1 }}>
        <View style={BaseStyles.p10}>
          <Text style={{ fontSize: 26, marginBottom: 20, textAlign: "center" }}>
            {location.name}
          </Text>

          <TextInput
            style={BaseStyles.inputBox}
            placeholder={"Nhập tên chuyến đi"}
            placeholderTextColor={"gray"}
            value={tripName}
            onChangeText={(text) => setTripName(text)}
          />

          <Text style={[BaseStyles.mrBot5]}>Thông tin chuyến đi</Text>

          <View style={[BaseStyles.rowFlexStart, BaseStyles.mrBot5]}>
            <TextIcon text="Thời gian:" icon="time" />
            <DateTimeText date={startDateTime} style={BaseStyles.colorMain} />
            <Text> - </Text>
            <DateTimeText date={endDateTime} style={BaseStyles.colorMain} />
          </View>

          <TextIcon
            text={"Địa điểm: " + dataList.length}
            icon="location"
            style={[BaseStyles.rowFlexStart]}
          />
        </View>

        <FlatList
          data={dataList}
          renderItem={renderItem}
          style={[BaseStyles.pb20, { flex: 1 }]}
        />

        <TouchableOpacity
          style={[
            CreateTripDelSucStyles.btnSubmit,
            isSubmit || !tripName ? BaseStyles.bgGray : BaseStyles.bgMain,
          ]}
          onPress={onSubmit}
          disabled={isSubmit || !tripName}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {isSubmit ? "Đang tạo..." : "Tạo chuyến đi"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTripDetailSuccessScreen;
