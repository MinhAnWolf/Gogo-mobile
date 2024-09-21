import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import { BaseStyles } from "../common/base-styles";
import { HomeStyles } from "../screens/home/home-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  CardProp,
  ScreenNavigationProp,
  SettingProp,
} from "../type/type-screen";
import { ComponentStyle } from "./component-style";

export const SearchComponent: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <View style={[ComponentStyle.searchContainer]}>
        <Ionicons
          style={[ComponentStyle.searchIcon]}
          name="search-outline"
          size={25}
          color="black"
        />
      </View>
      <View>
        <TextInput
          style={BaseStyles.inputSearch}
          placeholder="Search location here"
          onPress={() => navigation.navigate("SearchLocation")}
        />
      </View>
    </>
  );
};

export const Card = (cardProp: CardProp) => {
  return (
    <>
      <View style={ComponentStyle.containerCard}>
        <View style={ComponentStyle.card}>
          <View>
            <Image
              source={{
                uri: cardProp.image,
              }}
              resizeMode="cover"
              style={ComponentStyle.imageCard}
            />
          </View>
          <View style={BaseStyles.row}>
            <View>
              <Text>{cardProp.title}</Text>
            </View>
            <View>
              <Text> {cardProp.rate}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export const MiniCard = () => {
  return (
    <View style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}>
      <Image
        source={{
          uri: "https://png.pngtree.com/background/20210711/original/pngtree-creative-may-day-travel-tour-background-picture-image_1112606.jpg",
        }}
        style={[
          BaseStyles.image,
          BaseStyles.containerRelative,
          BaseStyles.boderRadius10,
        ]}
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
