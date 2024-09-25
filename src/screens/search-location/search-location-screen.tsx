import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
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

  const renderCard = ({ item }: { item: CardProp }) => {
    return <Card {...item} />;
  };
  return (
    <>
      <View style={[BaseStyles.mrTop40]}>
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

        {/* RESULT SEARCH */}
        <View
          style={[BaseStyles.row, SearchLocaitonStyles.resultSearchContainer]}
        >
          {/* ICON SEARCH*/}
          <View style={[SearchLocaitonStyles.iconSearch]}></View>
          {/* TEXT SEARCH */}
          <View style={[SearchLocaitonStyles.textSearchContainer]}></View>
          {/* IMAGE */}
          <View style={[SearchLocaitonStyles.imgSearch]}></View>
          {/* ICON LINK */}
          <View style={[SearchLocaitonStyles.linkIcon]}></View>
        </View>
      </View>
    </>
  );
};
export default SearchLocationScreen;
