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

const CreateTripDetailSuccessScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const { data, location, onGoBack }: any = useRoute().params;
  const [dataList, setDataList] = useState(() => sortByDateStart(data));
  const [locationDate, setLocationDate] = useState(new Date());
  const [isChangeDates, setIsChangeDates] = useState<boolean[]>([]);
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();

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
    setStartDate(dataList[0].startDate);
    setEndDate(dataList[dataList.length - 1]?.startDate);
  }, [dataList, isChangeDates]);

  const onTouchChangeDate = (index: number) => {
    const updatedDates = [...isChangeDates];
    updatedDates[index] = !updatedDates[index];
    setIsChangeDates(updatedDates);
    if (!updatedDates[index]) {
      sortByDateStart(data);
    }
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
      startDate: startDate,
      endDate: endDate,
      tripLocations: dataList,
    };
    create(input)
      .then((res) => {
        if (res) {
          setIsSubmit(false);
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSubmit(false);
      });
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const onChangeDate = (event: any, selectedDate: any) => {
      item.startDate = selectedDate;
      setLocationDate(selectedDate);
    };

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

            {isChangeDates[index] ? (
              <View style={BaseStyles.rowFlexEnd}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={
                    item.startDate ? new Date(item.startDate) : locationDate
                  }
                  mode="datetime"
                  display="default"
                  onChange={onChangeDate}
                />
                <TouchableOpacity
                  style={[
                    BaseStyles.btn2,
                    BaseStyles.bgMain,
                    BaseStyles.mrLeft5,
                  ]}
                  onPress={() => onTouchChangeDate(index)}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => onTouchChangeDate(index)}>
                <DateTimeText date={item.startDate} />
              </TouchableOpacity>
            )}
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
            <DateTimeText date={startDate} style={BaseStyles.colorMain} />
            <Text> - </Text>
            <DateTimeText date={endDate} style={BaseStyles.colorMain} />
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
          style={[CreateTripDelSucStyles.btnSubmit, BaseStyles.bgMain]}
          onPress={onSubmit}
          disabled={isSubmit}
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
