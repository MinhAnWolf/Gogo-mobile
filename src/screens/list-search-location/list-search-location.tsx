import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import { BaseStyles } from "../../common/base-styles";
import { SearchLocaitonStyles } from "../search-location/search-location-styles";
import React, { useEffect, useState } from "react";
import { Card, SearchComponent } from "../../component/component-common";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CardProp, EateriesProp } from "../../type/type";
import { ComponentStyle } from "../../component/component-style";
import { searchEateries } from "../../service/CommonService";
import { isNull } from "../../common/utils/helper-utils";

const ListSearchLocation: React.FC<ScreenNavigationProp> = ({
  navigation,
  route,
}) => {
  const { textSearch } = route.params;
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    const eateries: EateriesProp = {
      name: textSearch,
      page: 0,
      size: 10,
    };

    searchEateries(eateries).then((res) => {
      // if (!isNull(res.data.data.content)) {
      setDataSearch(res.data.data.content);
      // }
    });
  }, []);

  const dataDetailScreen = {
    address: "This is address",
    username: "this is username",
    rating: "this is rating",
    timeComment: "this is time cmt",
    content: "this is content",
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("DetailSearchLocation", {
              item: item,
            });
          }}
        >
          <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
            <Card
              img={item.img}
              navigation={navigation}
              name={item.name}
              rate={item.rate}
              id={item.eateriesId}
            ></Card>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  };
  return (
    <>
      {/* INPUT SEARCH */}
      <View
        style={[
          BaseStyles.row,
          { width: "100%" },
          BaseStyles.mrTop40,
          BaseStyles.mrBot5,
        ]}
      >
        <TouchableOpacity
          style={[
            BaseStyles.ml5,
            BaseStyles.mrRight5,
            BaseStyles.noRowCenter,
            { width: "10%" },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <View style={[{ width: "78%" }]}>
          <SearchComponent navigation={navigation} />
        </View>
      </View>
      {/* CARD SEARCH */}

      <FlatList
        data={dataSearch}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
export default ListSearchLocation;
