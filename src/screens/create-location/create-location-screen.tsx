import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import React, { useEffect, useRef, useState } from "react";
import { BaseStyles } from "../../common/base-styles";
import { Banner, ButtonSelect } from "../../component/component-common";
import { ModalList } from "../../component/modal/modal-list";
import * as ImagePicker from "expo-image-picker";
import {
  districtSearch,
  locCatSearch,
  provinceSearch,
  wardSearch,
} from "../../service/CommonService";
import { ModalInputDate } from "../../component/modal/modal-input-date";

const CreateLocationScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const [province, setProvince] = useState<any>();
  const [provinces, setProvinces] = useState(Array<any>());
  const [district, setDistrict] = useState<any>();
  const [districts, setDistricts] = useState(Array<any>());
  const [commune, setCommune] = useState<any>();
  const [communes, setCommunes] = useState(Array<any>());
  const [locationCat, setLocationCat] = useState<any>();
  const [locationCats, setLocationCats] = useState(Array<any>);
  const [timeStart, setTimeStart] = useState<Date>(new Date());
  const [timeEnd, setTimeEnd] = useState<Date>(new Date());

  const modalRef = useRef<any>(null);

  useEffect(() => {
    getLocationCats();
  }, []);

  const onInitModalProvince = () => {
    provinceSearch().then((res) => {
      setProvinces(res?.data.data);
    });
  };

  const onInitModalDistrict = () => {
    districtSearch(province.code).then((res) => {
      setDistricts(res?.data.data);
    });
  };

  const onInitModalCommune = () => {
    wardSearch(province.code, district.code).then((res) => {
      setCommunes(res?.data.data);
    });
  };

  function getLocationCats() {
    locCatSearch().then((res) => {
      setLocationCats(res?.data.data || []);
    });
  }

  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Ứng dụng cần quyền truy cập vào thư viện ảnh.");
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onChangeTimeStart = (value: any) => {
    console.log(value);
  };

  return (
    <View style={[BaseStyles.flexCollumn]}>
      <Banner
        title="Thêm địa điểm"
        height={80}
        onBack={navigation.goBack}
        image="https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg"
      />

      <ScrollView style={[BaseStyles.containerP20, BaseStyles.mrBot20]}>
        <Text style={[BaseStyles.mrBot5, BaseStyles.mrTop20]}>
          Địa chỉ địa điểm
        </Text>
        <ModalList
          title="tỉnh thành"
          icon="location"
          size={16}
          onInit={onInitModalProvince}
          data={provinces}
          onChange={setProvince}
          buttonStyle={[
            BaseStyles.spaceBetween,
            BaseStyles.inputBox,
            BaseStyles.mrBot10,
          ]}
        />

        <ModalList
          title="huyện"
          icon="location"
          size={16}
          onInit={onInitModalDistrict}
          data={districts}
          onChange={setDistrict}
          isDisabled={!province}
          buttonStyle={[
            BaseStyles.spaceBetween,
            BaseStyles.inputBox,
            BaseStyles.mrBot10,
          ]}
        />

        <ModalList
          title="xã"
          icon="location"
          size={16}
          onInit={onInitModalCommune}
          data={communes}
          onChange={setCommune}
          isDisabled={!district}
          buttonStyle={[
            BaseStyles.spaceBetween,
            BaseStyles.inputBox,
            BaseStyles.mrBot10,
          ]}
        />

        <TextInput
          placeholder="Số nhà vd: 159/18/11 Bạch Đằng"
          style={[BaseStyles.inputBox, BaseStyles.mrBot20]}
        />

        <Text style={[BaseStyles.mrBot5]}>Thông tin địa điểm</Text>
        <TextInput
          placeholder="Tên địa diểm"
          style={[BaseStyles.inputBox, BaseStyles.mrBot10]}
        />

        <Text style={[BaseStyles.mrBot5]}>Thời gian hoạt động</Text>
        <View style={[BaseStyles.spaceBetween, BaseStyles.mrBot10]}>
          <ModalInputDate
            title="Chọn thời gian bất đầu bán"
            type="time"
            placeholder="Bất đầu vào"
            onChange={onChangeTimeStart}
            style={{ flex: 0.49 }}
            btnStyle={BaseStyles.inputBox}
          />

          <ModalInputDate
            title="Chọn thời gian bất đầu bán"
            type="time"
            placeholder="Bất đầu vào"
            onChange={onChangeTimeStart}
            style={{ flex: 0.49 }}
            btnStyle={BaseStyles.inputBox}
          />
        </View>

        <ButtonSelect
          title="Quán này là quán?"
          data={locationCats}
          onChange={setLocationCat}
          style={BaseStyles.mrBot15}
        />

        <View>
          <TouchableOpacity
            style={[BaseStyles.bgMain, BaseStyles.btn2]}
            onPress={pickImage}
          >
            <Text>Chọn ảnh từ thư viện</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: "auto",
                height: 200,
                borderRadius: 10,
                overflow: "hidden",
                marginTop: 10,
              }}
            />
          )}
        </View>
      </ScrollView>

      <View style={[BaseStyles.pl20, BaseStyles.pr20, { height: 50 }]}>
        <TouchableOpacity style={[BaseStyles.bgMain, BaseStyles.btn2]}>
          <Text>Đăng tải</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
export default CreateLocationScreen;
