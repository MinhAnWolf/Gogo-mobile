import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import React, { useEffect, useRef, useState } from "react";
import { Banner, TextIcon, Sort } from "../../component/component-common";
import { BaseStyles } from "../../common/base-styles";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { CreateTripStyles } from "./create-trip-styles";
import { ModalCustom } from "../../component/modal/modal-custom";
import DateTimePicker from "@react-native-community/datetimepicker";
import { citySearch, locCatSearch } from "../../service/CommonService";
import { ModalList } from "../../component/modal/modal-list";
import { locationSearch } from "../../service/TripService";

const CreateTripScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  const [cityStates, setCityStates] = useState<any>();
  const [cityDatas, setCityDatas] = useState(Array<any>());
  const [locSelectedStates, setLocSelectedStates] = useState(Array<any>());
  const [locationDate, setLocationDate] = useState(new Date());
  const [locationDatas, setLocationDatas] = useState(Array<any>());
  const [locDataElements, setLocDataElements] = useState(0);
  const [sizeSelectedStates, setSizeSelectedStates] = useState(0);
  const [locationCat, setLocationCatStates] = useState<any>();
  const [locationCatDatas, setLocationCatDatasStates] = useState(Array<any>());

  const [sizeStates, setSizeStates] = useState(10);
  const [sortField, setSortFieldStates] = useState("");
  const [sortType, setSortTypeStates] = useState("");

  const [isLoading, setLoading] = useState(false);

  const modalRefs = useRef([React.createRef<any>()]);

  useEffect(() => {
    handlerLocationSearch(cityStates?.code, locationCat?.id);
  }, [sortField, sortType, cityStates, sizeStates, locationCat]);

  useEffect(() => {
    modalRefs.current = locationDatas.map(() => React.createRef<any>());
  }, [locationDatas]);

  const softData = [
    { name: "Đánh giá", field: "rating" },
    { name: "Số lượt đánh giá", field: "countRating" },
  ];

  const toggleCheckbox = (item: any, index: number) => {
    item.startDate = locationDate.toISOString();
    const indexOf = getIndexCheckbox(item);
    indexOf > -1
      ? locSelectedStates.splice(indexOf, 1)
      : locSelectedStates.push(item);
    setSizeSelectedStates(locSelectedStates.length);
    modalRefs.current[index].current?.closeModal();
  };

  const getIndexCheckbox = (item: any): number => {
    return locSelectedStates.findIndex((i) => i.id === item.id);
  };

  const removeAllCheckBox = () => {
    setLocSelectedStates(new Array());
    setSizeSelectedStates(0);
  };

  const onSort = (field: string, type: string) => {
    setSortFieldStates(field);
    setSortTypeStates(type);
  };

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || locationDate;
    setLocationDate(currentDate);
  };

  const onInitModalCity = () => {
    citySearch()
      .then((res) => {
        if (res) {
          setCityDatas(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlerLocationSearch = (cityCode: string, catId?: number) => {
    setLoading(true);
    const inputParam = {
      keyWord: cityCode,
      catId: catId,
      page: 0,
      size: sizeStates,
      sortField: sortField,
      sortType: sortType,
    };
    locationSearch(inputParam)
      .then((res) => {
        if (res) {
          setLocationDatas(res.data.content);
          setLocDataElements(res.data.totalElements);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const onInitModalCat = () => {
    locCatSearch()
      .then((res) => {
        if (res) {
          setLocationCatDatasStates([{ id: "", name: "Tất cả" }, ...res.data]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onEndReached = () => {
    if (locationDatas.length !== locDataElements) {
      setSizeStates(sizeStates + 10);
    }
  };

  function handleGoBack(returnData: any[]) {
    setLocSelectedStates(returnData);
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View key={index}>
        {index == 0 && <View style={BaseStyles.mrTop5}></View>}
        <TouchableOpacity
          style={[CreateTripStyles.card]}
          onPress={() => navigation.navigate("DetailSearchLocation", { item })}
        >
          <View
            style={[
              CreateTripStyles.cardImage,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
              }}
              style={[BaseStyles.image]}
              resizeMode="cover"
            />

            <TouchableOpacity
              style={[
                BaseStyles.contaienerAbs,
                BaseStyles.btn1,
                getIndexCheckbox(item) == -1
                  ? BaseStyles.bgMain
                  : BaseStyles.bgWhite,
                { zIndex: 20 },
              ]}
              onPress={
                getIndexCheckbox(item) == -1
                  ? () => modalRefs.current[index].current?.openModal()
                  : () => toggleCheckbox(item, index)
              }
            >
              <TextIcon
                text={getIndexCheckbox(item) == -1 ? "Thêm" : "Xoá"}
                icon={
                  getIndexCheckbox(item) == -1
                    ? "add-outline"
                    : "remove-outline"
                }
              />
            </TouchableOpacity>

            <ModalCustom
              title="Thêm địa điểm"
              ref={modalRefs.current[index]}
              content={
                <>
                  <View style={[CreateTripStyles.banner, BaseStyles.mrBot15]}>
                    <Image
                      source={{ uri: item?.image }}
                      style={[BaseStyles.image]}
                      resizeMode="cover"
                    />
                  </View>

                  <Text
                    style={[CreateTripStyles.cardTitle, BaseStyles.mrBot10]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[CreateTripStyles.cardContent, { marginBottom: 30 }]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.address}
                  </Text>

                  <View
                    style={[
                      BaseStyles.spaceBetween,
                      BaseStyles.mrBot20,
                      { alignItems: "center" },
                    ]}
                  >
                    <Text style={[BaseStyles.fontWB, { fontSize: 16 }]}>
                      Chọn thời gian
                    </Text>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={locationDate}
                      mode="datetime"
                      display="default"
                      onChange={onChangeDate}
                    />
                  </View>

                  <TouchableOpacity
                    style={[BaseStyles.btn2, BaseStyles.bgMain]}
                    onPress={() => toggleCheckbox(item, index)}
                  >
                    <TextIcon
                      text="Thêm địa điểm này"
                      icon="add-outline"
                      size={16}
                      style={{ justifyContent: "center" }}
                    />
                  </TouchableOpacity>
                </>
              }
            />
          </View>
          <View style={CreateTripStyles.cardBody}>
            <Text
              style={CreateTripStyles.cardTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text
              style={CreateTripStyles.cardContent}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.address}
            </Text>
            <View style={[BaseStyles.rowFlexStart, BaseStyles.mrBot5]}>
              <StarRatingDisplay
                rating={item.rating}
                starSize={16}
                style={{ marginTop: 10 }}
                starStyle={{ marginHorizontal: 0.8 }}
              />
              <Text
                style={[
                  CreateTripStyles.cardContent,
                  { paddingTop: 11, paddingLeft: 5, fontSize: 12 },
                ]}
              >
                {item.rating}/5 ({item.countRating})
              </Text>
            </View>

            <Text style={[CreateTripStyles.cardContent]}>
              Ghé thăm ({item.visit || 0})
            </Text>
          </View>
        </TouchableOpacity>
        {index == locationDatas.length - 1 && (
          <Text
            style={[
              BaseStyles.mrTop15,
              BaseStyles.mrBot15,
              { textAlign: "center" },
            ]}
          >
            {index !== locDataElements - 1
              ? "đang tải..."
              : "không tìm thấy địa điểm khác"}
          </Text>
        )}
      </View>
    );
  };

  return (
    <>
      <Banner
        image="https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg"
        height={160}
      />

      <View style={[BaseStyles.containerP20, BaseStyles.flexCollumn]}>
        <View style={[CreateTripStyles.header, BaseStyles.jusContentCenter]}>
          <ModalList
            title="thành phố"
            icon="location"
            size={16}
            onInit={onInitModalCity}
            data={cityDatas}
            onChange={setCityStates}
            buttonStyle={[BaseStyles.spaceBetween, BaseStyles.inputLine]}
          />
          {cityStates && (
            <View style={{ paddingTop: 8 }}>
              <Sort
                data={softData}
                onChange={onSort}
                item={
                  <ModalList
                    title="món"
                    size={12}
                    height={300}
                    isSearch={false}
                    onInit={onInitModalCat}
                    data={locationCatDatas}
                    onChange={setLocationCatStates}
                    buttonStyle={[
                      BaseStyles.rowFlexStart,
                      BaseStyles.btn1,
                      BaseStyles.bgMain,
                      BaseStyles.mrRight5,
                    ]}
                  />
                }
              />
            </View>
          )}
        </View>

        <View style={CreateTripStyles.body}>
          {locationDatas.length ? (
            <FlatList
              data={locationDatas}
              renderItem={renderItem}
              onEndReached={onEndReached}
            />
          ) : (
            <View style={[BaseStyles.jusContentCenter, { flex: 1 }]}>
              <Text style={{ textAlign: "center" }}>
                {isLoading
                  ? "đang tải..."
                  : cityStates
                  ? "Không có địa điểm nào ở thành phố này :("
                  : "Chọn thành phố mà bạn muốn đến."}
              </Text>
            </View>
          )}
        </View>

        <View style={CreateTripStyles.boxSubmit}>
          <View style={BaseStyles.spaceBetween}>
            <TouchableOpacity
              onPress={removeAllCheckBox}
              style={BaseStyles.btn2}
            >
              <Text style={{ color: "red" }}>Bỏ chọn {sizeSelectedStates}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!cityStates || sizeSelectedStates == 0}
              style={[
                BaseStyles.btn2,
                cityStates && sizeSelectedStates
                  ? BaseStyles.bgMain
                  : BaseStyles.bgGray,
              ]}
              onPress={() =>
                navigation.navigate("CreateTripDetailSuccess", {
                  data: locSelectedStates,
                  location: cityStates,
                  onGoBack: handleGoBack,
                })
              }
            >
              <TextIcon
                text="Tiếp theo"
                icon="arrow-forward-outline"
                size={14}
                isStart={false}
                style={BaseStyles.fontWB}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CreateTripScreen;
