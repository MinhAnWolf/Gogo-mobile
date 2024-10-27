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
import { CardProp } from "../../type/type";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const SearchLocationScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const cardData: CardProp[] = [
    {
      id: "12314",
      image:
        "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
      action: false,
      comment: "test",
      rate: "******",
      content: "12414",
      title: "Nha Trang city",
    },
  ];

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
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={[{ width: "78%" }]}>
            <SearchComponent navigation={navigation} />
          </View>
        </View>

        {/* RESULT SEARCH */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ListSearchLocation")}
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
              <Text>This is content sear</Text>
            </View>
            {/* IMAGE */}
            <View style={[SearchLocaitonStyles.imgSearch]}>
              <Image
                source={{
                  uri: "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
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

        {/* RESULT SEARCH */}
        <TouchableOpacity>
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
              <Text>This is content sear</Text>
            </View>
            {/* IMAGE */}
            <View style={[SearchLocaitonStyles.imgSearch]}>
              <Image
                source={{
                  uri: "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
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

        {/* RESULT SEARCH */}
        <TouchableOpacity>
          <View
            style={[BaseStyles.row, SearchLocaitonStyles.resultSearchContainer]}
          >
            {/* ICON SEARCH*/}
            <View
              style={[SearchLocaitonStyles.iconSearch, BaseStyles.noRowCenter]}
            >
              <Ionicons name="search-outline" size={24} color="black" />
            </View>
            {/* TEXT SEARCH */}
            <View
              style={[
                SearchLocaitonStyles.textSearchContainer,
                BaseStyles.noRowCenter,
              ]}
            >
              <Text>This is content sear</Text>
            </View>
            {/* IMAGE */}
            <View style={[SearchLocaitonStyles.imgSearch]}>
              <Image
                source={{
                  uri: "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
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
      </View>
    </>
  );
};
export default SearchLocationScreen;
