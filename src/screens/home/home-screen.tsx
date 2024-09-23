import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BaseStyles } from "../../common/base-styles";
import { HomeStyles } from "./home-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MiniCard, SearchComponent } from "../../component/component-common";
import { ScreenNavigationProp } from "../../type/type-screen";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

const HomeScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  return (
    <>
      {/* HEADER HOME SCREEN */}
      <View style={[BaseStyles.headerContainer, BaseStyles.mrTop30]}>
        <Image
          source={{
            uri: "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
          }}
          style={[BaseStyles.image, BaseStyles.containerRelative]}
          resizeMode="cover" // Adjust based on how you want to fit the image
        />
        <View
          style={[BaseStyles.row, BaseStyles.mrTop20, BaseStyles.contaienerAbs]}
        >
          <SearchComponent navigation={navigation}></SearchComponent>
          <View style={[HomeStyles.boxIcon]}>
            <Ionicons name="chatbox-outline" size={25} color="black" />
          </View>
          <View style={[HomeStyles.boxIcon]}>
            <Ionicons name="notifications-outline" size={25} color="black" />
          </View>
        </View>
      </View>
      {/* BODY HOME SCREEN */}
      <View style={[BaseStyles.bodyContainer]}>
        <View style={[BaseStyles.row]}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
          <View
            style={[HomeStyles.categoryItem, BaseStyles.boderRadius10]}
          ></View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
