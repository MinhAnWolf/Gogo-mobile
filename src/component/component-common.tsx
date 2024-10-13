import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import { BaseStyles } from "../common/base-styles";
import { HomeStyles } from "../screens/home/home-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScreenNavigationProp } from "../type/type-screen";
import { ComponentStyle } from "./component-style";
import { Controller } from "react-hook-form";
import { CardProp, InputType } from "../type/type";
import React from "react";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";

export const SearchComponent: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <View style={[BaseStyles.row]}>
        {/* CONTAINER ICON */}
        <View style={[ComponentStyle.searchIconContainer]}>
          <Ionicons
            style={[ComponentStyle.searchIcon]}
            name="search-outline"
            size={25}
            color="black"
          />
        </View>
        {/* CONTAINER INPUT */}
        <View style={[ComponentStyle.searchContainer]}>
          <TextInput
            style={BaseStyles.inputSearch}
            placeholder="Search location here"
            onPress={() => navigation.navigate("SearchLocation")}
          />
        </View>
      </View>
    </>
  );
};

export const Card: React.FC<{ cardProp: CardProp }> = ({ cardProp }) => {
  return (
    <>
      <View style={ComponentStyle.containerCard}>
        <View style={ComponentStyle.card}>
          <View>
            <Image
              source={{
                uri: cardProp.image,
              }}
              resizeMode="contain"
              style={ComponentStyle.imageCard}
            />
          </View>
          <View style={BaseStyles.row}>
            <View style={BaseStyles.noRowCenter}>
              <Text style={BaseStyles.mediumText}>{cardProp.title}</Text>
            </View>
            <View>
              <StarRatingDisplay rating={cardProp.rate} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export const MiniCard = () => {
  return (
    <View style={[ComponentStyle.categoryItem, BaseStyles.boderRadius10]}>
      <Image
        source={{
          uri: "https://png.pngtree.com/background/20210711/original/pngtree-creative-may-day-travel-tour-background-picture-image_1112606.jpg",
        }}
        style={[BaseStyles.image, BaseStyles.boderRadius10]}
        resizeMode="cover" // Adjust based on how you want to fit the image
      />
      <Text style={[BaseStyles.centerText]}>Hồ Chí Minh</Text>
    </View>
  );
};

export const OptionSelect: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[ComponentStyle.containerSetting]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[BaseStyles.w90, BaseStyles.ml5, BaseStyles.mr15]}>
          <Text>Sign out1123</Text>
          {/* <View style={[ComponentStyle.line]}></View> */}
          {/* <Text>Sign out</Text>
          <View style={[ComponentStyle.line]}></View> */}
        </View>
      </TouchableOpacity>

      <View style={[ComponentStyle.containerSetting]}>
        <View
          style={[
            BaseStyles.w90,
            BaseStyles.ml5,
            BaseStyles.mrTop10,
            BaseStyles.mrBot10,
          ]}
        >
          <Text>Sign out</Text>
          <View style={[ComponentStyle.line]}></View>
          <Text>Sign out</Text>
        </View>
      </View>

      <View style={[ComponentStyle.containerSetting]}>
        <View
          style={[
            BaseStyles.w90,
            BaseStyles.ml5,
            BaseStyles.mrTop10,
            BaseStyles.mrBot10,
          ]}
        >
          <Text>Sign out</Text>
          <View style={[ComponentStyle.line]}></View>
          <Text>Sign out</Text>
          <View style={[ComponentStyle.line]}></View>
          <Text>Sign out</Text>
        </View>
      </View>
    </>
  );
};

export const Input = ({
  inputType,
  control,
}: {
  inputType: InputType;
  control: any;
}) => {
  // https://echobind.com/post/react-hook-form-for-react-native
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={inputType.styles}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={inputType.name}
            secureTextEntry={inputType.secureTextEntry}
          />
        )}
        name={inputType.name}
        rules={{ required: inputType.required }}
      />
    </>
  );
};
