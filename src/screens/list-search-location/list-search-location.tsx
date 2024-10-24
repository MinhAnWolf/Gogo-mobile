import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import { BaseStyles } from "../../common/base-styles";
import { SearchLocaitonStyles } from "../search-location/search-location-styles";
import React from "react";
import { Card, SearchComponent } from "../../component/component-common";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CardProp } from "../../type/type";
import { ComponentStyle } from "../../component/component-style";

const ListSearchLocation: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  const cardProp: CardProp = {
    id: "1",
    image:
      "https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg",
    rate: 3.6,
    title: "Cửa hàng quần áo",
  };
  return (
    <>
      {/* INPUT SEARCH */}
      <View style={[BaseStyles.mrTop40]}>
        {/* INPUT SEARCH */}
        <View style={[BaseStyles.row]}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={[SearchLocaitonStyles.iconBack]}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View style={[SearchLocaitonStyles.sizeInput]}>
            <SearchComponent navigation={navigation} />
          </View>
        </View>
      </View>
      {/* CARD SEARCH */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>

        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>

        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>

        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>

        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>

        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mrTop20]}>
          <Card cardProp={cardProp}></Card>
        </View>
      </ScrollView>
    </>
  );
};
export default ListSearchLocation;
