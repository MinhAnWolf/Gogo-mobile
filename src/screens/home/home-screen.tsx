import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { BaseStyles } from "../../common/base-styles";
import { MiniCard, SearchComponent } from "../../component/component-common";
import { ScreenNavigationProp } from "../../type/type-screen";
import { HomeStyles } from "./home-style";

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
          <View style={[HomeStyles.containerInputSearch]}>
            <SearchComponent navigation={navigation}></SearchComponent>
          </View>
          <View style={[HomeStyles.boxIcon]}>
            <Ionicons name="chatbox-outline" size={25} color="black" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <View style={[HomeStyles.boxIcon]}>
              <Ionicons name="notifications-outline" size={25} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* BODY HOME SCREEN */}
      <View style={[BaseStyles.bodyContainer]}>
        <View style={[BaseStyles.row]}>
          {/* ROW 1 */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          {/* ROW 2 */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MiniCard />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
