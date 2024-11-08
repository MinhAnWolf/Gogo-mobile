import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { BaseStyles } from "../../common/base-styles";
import {
  Card,
  MiniCard,
  SearchComponent,
} from "../../component/component-common";
import { SearchLocaitonStyles } from "./search-location-styles";
import { ScreenNavigationProp } from "../../type/type-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CardProp, EateriesProp } from "../../type/type";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { searchEateries } from "../../service/CommonService";
import { set, useForm } from "react-hook-form";
import { isNull } from "../../common/utils/helper-utils";
import { fetchSearchHistory } from "../../service/SearchHistoryService";

const SearchLocationScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [dataSearchHistory, setDataSearchHistory] = useState([]);

  const fetchHistoryService = () => {
    fetchSearchHistory().then((res) => {
      setDataSearchHistory(res.data.data);
    });
  };

  useEffect(() => {
    console.log("Lengt data: " + dataSearch.length);

    if (dataSearch.length == 0) {
      fetchHistoryService();
    }
    if (search) {
      const eateries: EateriesProp = {
        name: search,
        page: 0,
        size: 10,
      };

      searchEateries(eateries).then((res) => {
        setDataSearch(res.data.data.content);
      });
    }
  }, [search]);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    // const firstUrlImg = item.img.split(",")[0].trim();
    // console.log(firstUrlImg);
    return (
      <>
        {/* RESULT SEARCH */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListSearchLocation", {
              textSearch: search,
            })
          }
        >
          <View
            style={[BaseStyles.row, SearchLocaitonStyles.resultSearchContainer]}
          >
            {/* ICON SEARCH*/}
            <View
              style={[SearchLocaitonStyles.iconSearch, BaseStyles.noRowCenter]}
            >
              <AntDesign name="clockcircleo" size={24} color="black" />
            </View>
            {/* TEXT SEARCH */}
            <View
              style={[
                SearchLocaitonStyles.textSearchContainer,
                BaseStyles.noRowCenter,
              ]}
            >
              <Text>
                {item.name == null || undefined ? item.textSearch : item.name}
              </Text>
            </View>
            {/* IMAGE */}
            <View style={[SearchLocaitonStyles.imgSearch]}>
              <Image
                source={{
                  uri: item.img,
                }}
                style={[BaseStyles.image, BaseStyles.containerRelative]}
                resizeMode="cover" // Adjust based on how you want to fit the image
              />
            </View>
            {/* ICON LINK */}
            <View
              style={[SearchLocaitonStyles.linkIcon, BaseStyles.noRowCenter]}
            >
              <Feather name="external-link" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <View style={[BaseStyles.mrTop40]}>
        {/* INPUT SEARCH */}
        <View style={[BaseStyles.row, { width: "100%" }, BaseStyles.mrBot5]}>
          <TouchableOpacity
            style={[
              BaseStyles.ml5,
              BaseStyles.mrRight5,
              BaseStyles.noRowCenter,
              { width: "10%" },
            ]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={[{ width: "78%" }]}>
            <SearchComponent navigation={navigation} setSearch={setSearch} />
          </View>
        </View>

        {search.length == 0 ? (
          <FlatList
            data={dataSearchHistory}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <></>
        )}

        <FlatList
          data={dataSearch}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};
export default SearchLocationScreen;
