import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BaseStyles } from "../../common/base-styles";
import { MiniCard, SearchComponent } from "../../component/component-common";
import { ScreenNavigationProp } from "../../type/type-screen";
import { HomeStyles } from "./home-style";
import Entypo from "@expo/vector-icons/Entypo";

const HomeScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  return (
    <>
      <View style={[HomeStyles.containerHome, BaseStyles.ml5]}>
        {/* HEADER */}
        <View style={[BaseStyles.row, BaseStyles.mrTop40, HomeStyles.header]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchLocation")}
            style={[HomeStyles.iconContainer, BaseStyles.boderRadius10]}
          >
            <Ionicons name="search-outline" size={25} color="black" />
          </TouchableOpacity>
          <View style={[HomeStyles.currentLocationContainer]}>
            <Text>Current location</Text>
            <View style={[BaseStyles.noRowCenter]}>
              <Entypo name="location-pin" size={24} color="green" />
              <Text>105 Lê Hồng Phong - Quận 5</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={[HomeStyles.iconContainer, BaseStyles.boderRadius10]}
          >
            <Ionicons
              style={[BaseStyles.containerRelative]}
              name="notifications-outline"
              size={25}
              color="black"
            />
            <View
              style={[
                BaseStyles.contaienerAbs,
                HomeStyles.currentNoti,
                BaseStyles.boderRadius10,
              ]}
            >
              <Text>1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {/* advertisement */}
          <View
            style={[
              HomeStyles.advertisementContainer,
              BaseStyles.boderRadius10,
            ]}
          >
            <Image
              source={{
                uri: "https://www.envistaforensics.com/media/mebd20dj/adobestock_568597769.jpeg?center=0.66971409574468088,0.49994438669522168&mode=crop&width=900&height=447&rnd=133426462407530000&format=webp&quality=80",
              }}
              style={[BaseStyles.image, BaseStyles.boderRadius10]}
              resizeMode="cover" // Adjust based on how you want to fit the image
            />
          </View>
          {/* CATEGORY */}
          <View style={[BaseStyles.row, HomeStyles.categoryContainer]}>
            <TouchableOpacity
              style={[
                HomeStyles.itemCategoryContainer,
                BaseStyles.boderRadius10,
              ]}
              onPress={() => navigation.navigate("Trip")}
            >
              <View
                style={[HomeStyles.maskCircle, BaseStyles.containerRelative]}
              >
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/discount-price-tag-icon_632498-3597.jpg",
                  }}
                  style={[BaseStyles.image, BaseStyles.boderCircle]}
                  resizeMode="cover" // Adjust based on how you want to fit the image
                />
              </View>
              <Text style={[BaseStyles.centerText]}>Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                HomeStyles.itemCategoryContainer,
                BaseStyles.boderRadius10,
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <View
                style={[HomeStyles.maskCircle, BaseStyles.containerRelative]}
              >
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/discount-price-tag-icon_632498-3597.jpg",
                  }}
                  style={[BaseStyles.image, BaseStyles.boderCircle]}
                  resizeMode="cover" // Adjust based on how you want to fit the image
                />
              </View>
              <Text style={[BaseStyles.centerText]}>Trip</Text>
            </TouchableOpacity>

            <View
              style={[
                HomeStyles.itemCategoryContainer,
                BaseStyles.boderRadius10,
              ]}
            >
              <View
                style={[HomeStyles.maskCircle, BaseStyles.containerRelative]}
              >
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/discount-price-tag-icon_632498-3597.jpg",
                  }}
                  style={[BaseStyles.image, BaseStyles.boderCircle]}
                  resizeMode="cover" // Adjust based on how you want to fit the image
                />
              </View>
              <Text style={[BaseStyles.centerText]}>Trip</Text>
            </View>

            <View
              style={[
                HomeStyles.itemCategoryContainer,
                BaseStyles.boderRadius10,
              ]}
            >
              <View
                style={[HomeStyles.maskCircle, BaseStyles.containerRelative]}
              >
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/discount-price-tag-icon_632498-3597.jpg",
                  }}
                  style={[BaseStyles.image, BaseStyles.boderCircle]}
                  resizeMode="cover" // Adjust based on how you want to fit the image
                />
              </View>
              <Text style={[BaseStyles.centerText]}>Trip</Text>
            </View>
          </View>

          {/* Hot Search */}
          <View style={[HomeStyles.hotSearchContainer, BaseStyles.mrTop20]}>
            <Text>Hot Search</Text>
            <View style={[BaseStyles.rowCenter, HomeStyles.miniCardContainer]}>
              <MiniCard></MiniCard>
              <MiniCard></MiniCard>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
