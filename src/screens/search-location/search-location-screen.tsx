import { View, Text, TextInput, FlatList } from "react-native";
import { BaseStyles } from "../../common/base-styles";
import {
  Card,
  MiniCard,
  SearchComponent,
} from "../../component/component-common";
import { SearchLocaitonStyles } from "./search-location-styles";
import { CardProp, ScreenNavigationProp } from "../../type/type-screen";

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
      <View style={[SearchLocaitonStyles.searchContainer]}>
        <View style={[BaseStyles.row, BaseStyles.mrTop15]}>
          <SearchComponent navigation={navigation} />

          <Text style={[BaseStyles.mr10]}>Hủy</Text>
        </View>
        <View>
          <Text style={[BaseStyles.mediumText, BaseStyles.mr10]}>
            Lịch sử tìm kiếm
          </Text>

          <View style={[BaseStyles.row, BaseStyles.bodyContainer]}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </View>
        </View>
        <View style={[SearchLocaitonStyles.historySearch]}>
          <Text style={[BaseStyles.mediumText, BaseStyles.mr10]}>
            Kết quả tìm kiếm
          </Text>
          <View>
            <FlatList
              data={cardData}
              renderItem={renderCard}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </>
  );
};
export default SearchLocationScreen;
