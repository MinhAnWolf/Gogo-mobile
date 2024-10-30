import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { BaseStyles } from "../common/base-styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScreenNavigationProp } from "../type/type-screen";
import { ComponentStyle } from "./component-style";
import { Controller } from "react-hook-form";
import { CardProp, InputType, SettingOptionSelectProp } from "../type/type";
import React, { useEffect, useRef, useState } from "react";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ProfileSettingStyles } from "../screens/profile-setting/profile-setting-styles";

export const SearchComponent: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <View style={[BaseStyles.rowFlexStart]}>
        {/* CONTAINER ICON */}
        <View style={[ComponentStyle.searchIconContainer]}>
          <Ionicons
            style={[BaseStyles.centerText, ComponentStyle.searchIcon]}
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
      <View style={[ComponentStyle.containerCard, BaseStyles.noRowCenter]}>
        {/* CONTAINER IMAGE */}
        <View style={[BaseStyles.w30]}>
          <Image
            source={{
              uri: cardProp.image,
            }}
            resizeMode="cover"
            style={[ComponentStyle.imageCard]}
          />
        </View>
        {/* CONTAINER CONTENT */}
        <View style={[BaseStyles.w65, BaseStyles.ml5]}>
          <Text
            style={[
              BaseStyles.mediumText,
              BaseStyles.boldText,
              BaseStyles.mrBot10,
            ]}
          >
            {cardProp.title}
          </Text>
          <View style={[BaseStyles.noRowCenter, BaseStyles.mrBot10]}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={BaseStyles.fz12}>
              101 Bùi văn ba - Tân thuận đông - Q7 - HCM
            </Text>
          </View>
          <View style={[BaseStyles.row, BaseStyles.mrBot10]}>
            <EvilIcons name="clock" size={24} color="black" />
            <Text style={BaseStyles.fz12}>10h - 24h</Text>
          </View>
          <View style={[BaseStyles.row]}>
            <StarRatingDisplay rating={cardProp.rate} starSize={25} />
          </View>
        </View>
      </View>
    </>
  );
};

export const MiniCard = () => {
  return (
    <>
      <View style={[ComponentStyle.miniCardContainer]}>
        {/* HEADER */}
        <View>
          {/* IMG */}
          <View
            style={[ComponentStyle.imgCardMini, BaseStyles.containerRelative]}
          >
            <Image
              source={{
                uri: "https://www.envistaforensics.com/media/mebd20dj/adobestock_568597769.jpeg?center=0.66971409574468088,0.49994438669522168&mode=crop&width=900&height=447&rnd=133426462407530000&format=webp&quality=80",
              }}
              style={[BaseStyles.image, BaseStyles.boderRadius10]}
              resizeMode="cover" // Adjust based on how you want to fit the image
            />
          </View>
          {/* RATE */}
          <View style={[ComponentStyle.rateCardMini, BaseStyles.contaienerAbs]}>
            <View style={[BaseStyles.noRowCenter]}>
              <StarRatingDisplay maxStars={1} rating={1} starSize={20} />
              <Text>4.8</Text>
            </View>
          </View>
        </View>

        {/* CONTENT */}
        <View>
          <Text
            style={[
              BaseStyles.centerText,
              BaseStyles.boldText,
              BaseStyles.fz15,
              BaseStyles.mrBot10,
              BaseStyles.mrTop10,
            ]}
          >
            Chợ Đêm Đà Lạt
          </Text>
          <View style={[BaseStyles.row, BaseStyles.mrBot5]}>
            <AntDesign name="clockcircleo" size={20} color="black" />
            <Text style={[BaseStyles.ml5]}>8h - 10h30</Text>
          </View>
          <View style={[BaseStyles.row, BaseStyles.mrBot5]}>
            <Text>2 Phạm Văn Đồng - Đà lạt</Text>
          </View>
          <View style={[BaseStyles.row, BaseStyles.mrBot5]}>
            <Text>12km</Text>
            <Text style={[BaseStyles.ml10]}>15-20 phút</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export const OptionSelect: React.FC<SettingOptionSelectProp> = ({
  navigationScreen,
  title,
  imgIcon,
}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={navigationScreen}>
        <View
          style={[
            ProfileSettingStyles.optionItem,
            BaseStyles.row,
            BaseStyles.boderRadius10,
          ]}
        >
          {/* ICON */}
          <View
            style={[ProfileSettingStyles.iconContainer, BaseStyles.centerHight]}
          >
            <View
              style={[ProfileSettingStyles.maskIcon, BaseStyles.centerHight]}
            >
              <Image
                source={{
                  uri: imgIcon,
                }}
                style={[
                  ProfileSettingStyles.imgIconSize,
                  BaseStyles.containerRelative,
                ]}
                resizeMode="contain" // Adjust based on how you want to fit the image
              />
            </View>
          </View>
          <View style={[ProfileSettingStyles.contentContainer]}>
            <View style={[BaseStyles.centerHight]}>
              <Text style={[BaseStyles.boldText]}>{title}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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

export const CheckBox = ({
  isChecked,
  onPress,
  title,
  color,
}: {
  isChecked: any;
  onPress: any;
  title?: string;
  color: string;
}) => {
  return (
    <>
      <TouchableOpacity
        style={ComponentStyle.containerCheckBox}
        onPress={onPress}
      >
        <View style={[ComponentStyle.checkbox, { borderColor: `${color}` }]}>
          {isChecked && (
            <View
              style={[ComponentStyle.checked, { backgroundColor: `${color}` }]}
            />
          )}
        </View>
        <Text style={ComponentStyle.label}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export const ItemIcon = ({
  iconName,
  size,
  content,
}: {
  iconName: any;
  size: number;
  content: string;
}) => {
  return (
    <View style={ComponentStyle.item}>
      <Ionicons name={iconName} color="black" size={size} />
      <Text style={ComponentStyle.itemContent}>{content}</Text>
    </View>
  );
};

export const ItemTab = ({
  condition,
  onPress,
  name,
}: {
  condition: any;
  onPress: any;
  name: string;
}) => {
  return (
    <TouchableOpacity
      style={[ComponentStyle.tab, condition ? ComponentStyle.activeTab : null]}
      onPress={onPress}
    >
      <Text style={condition ? ComponentStyle.activeTab : null}>{name}</Text>
    </TouchableOpacity>
  );
};

export const Comment = ({
  userName,
  rating,
  timeComment,
  content,
}: {
  userName: string;
  rating: number;
  timeComment: string;
  content: string;
}) => {
  return (
    <View style={{ height: 100, marginTop: 14, marginBottom: 14 }}>
      <Text style={{ fontSize: 16 }}>{userName}</Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <StarRatingDisplay
          rating={rating}
          starSize={16}
          style={{ marginTop: 4 }}
          starStyle={{ marginHorizontal: 0.8 }}
        />
        <Text style={{ paddingTop: 4, paddingLeft: 5, fontSize: 12 }}>
          {timeComment}
        </Text>
      </View>
      <Text style={{ marginTop: 6 }}>{content}</Text>
    </View>
  );
};

export const Banner = ({
  image,
  height = 300,
  onBack,
  style,
}: {
  image?: string;
  height?: number;
  onBack?: any;
  style?: any;
}) => {
  return (
    <View
      style={[
        style,
        {
          width: "100%",
          height: height,
        },
      ]}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={[BaseStyles.image, BaseStyles.containerRelative]}
          resizeMode="cover"
        />
      )}

      {onBack ? (
        <TouchableOpacity
          style={[
            BaseStyles.contaienerAbs,
            BaseStyles.spaceBetween,
            BaseStyles.p10,
            BaseStyles.mrTop15,
          ]}
          onPress={onBack}
        >
          <Ionicons name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export const TextIcon = ({
  text,
  icon,
  isStart = true,
  color = "black",
  size = 14,
  style,
}: {
  text: string;
  icon?: any;
  isStart?: boolean;
  color?: string;
  size?: number;
  style?: any;
}) => {
  return (
    <View style={[BaseStyles.rowFlexStart, style]}>
      {isStart && (
        <Ionicons
          name={icon}
          color={color}
          size={size}
          style={{ marginTop: 2, marginRight: 4 }}
        />
      )}

      <Text
        style={{
          color: color,
          marginRight: 2,
          fontSize: size,
        }}
      >
        {text}
      </Text>

      {!isStart && (
        <Ionicons
          name={icon}
          color={color}
          size={size}
          style={{ marginTop: 2 }}
        />
      )}
    </View>
  );
};

export const Sort = ({
  data,
  item,
  onChange,
}: {
  data: { name: string; field: string }[];
  item?: JSX.Element;
  onChange: (field: string, type: string) => void;
}) => {
  const [sortFieldStates, setSortFieldStates] = useState("");
  const [sortTypeStates, setSortTypeStates] = useState("");

  const onSort = (item: any) => {
    if (sortFieldStates !== item.field) {
      setSortFieldStates(item.field);
      setSortTypeStates("DESC");
    } else {
      if (sortTypeStates === "DESC") {
        setSortTypeStates("ASC");
      } else {
        setSortFieldStates("");
        setSortTypeStates("");
      }
    }
  };

  useEffect(() => {
    onChange(sortFieldStates, sortTypeStates);
  }, [sortFieldStates, sortTypeStates]);

  return (
    <View style={BaseStyles.rowFlexStart}>
      {item}
      {data.map((item: any, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              BaseStyles.btn1,
              BaseStyles.mrRight5,
              sortFieldStates === item.field
                ? BaseStyles.bgMain
                : BaseStyles.bgGray,
            ]}
            onPress={() => onSort(item)}
          >
            <TextIcon
              text={item.name}
              isStart={false}
              icon={
                sortFieldStates === item.field && sortTypeStates === "DESC"
                  ? "caret-down"
                  : sortFieldStates === item.field && sortTypeStates === "ASC"
                  ? "caret-up"
                  : ""
              }
              size={12}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const ItemRating = ({
  title,
  rating,
  onChange,
  style,
}: {
  title: string;
  rating: number;
  onChange: any;
  style?: any;
}) => {
  return (
    <View style={[BaseStyles.spaceBetween, style, { alignItems: "center" }]}>
      <Text style={[ComponentStyle.ratingTitle, BaseStyles.fontWB]}>
        {title}
      </Text>

      <StarRating
        rating={rating}
        onChange={onChange}
        starSize={20}
        starStyle={{ marginHorizontal: 0.8 }}
        enableHalfStar={false}
      />
    </View>
  );
};

export const ButtonSelect = ({
  title,
  data,
  onChange,
  style,
}: {
  title: string;
  data: string[];
  onChange: (item: any) => void;
  style?: any;
}) => {
  const [indexSelect, setIndexSelect] = useState(-1);

  const onSelect = (item: any, index: number) => {
    onChange(item);
    setIndexSelect(index);
  };

  return (
    <View style={style}>
      <Text style={{ marginBottom: 6 }}>{title}</Text>
      <View style={[BaseStyles.rowFlexStart, { flexWrap: "wrap" }]}>
        {data.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onSelect(item, index)}
              style={[
                BaseStyles.btn2,
                BaseStyles.mrRight5,
                BaseStyles.mrBot5,
                indexSelect == index ? BaseStyles.bgMain : BaseStyles.bgGray,
              ]}
            >
              <TextIcon
                text={item.name}
                icon={indexSelect == index ? "checkmark" : ""}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export const DateTimeText = ({
  date,
  style,
}: {
  date: string;
  style?: any;
}) => {
  const formattedDateTime = new Date(date).toLocaleString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <Text style={style}>{formattedDateTime}</Text>;
};
