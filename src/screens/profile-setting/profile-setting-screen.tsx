import { Image, Text, View } from "react-native";
import { OptionSelect } from "../../component/component-common";
import { BaseStyles } from "../../common/base-styles";
import { ScreenNavigationProp } from "../../type/type-screen";
import { ProfileSettingStyles } from "./profile-setting-styles";
import { NotificationStyles } from "../notification/notification-styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileSettingScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <View
        style={[
          BaseStyles.whiteScreen,
          ProfileSettingStyles.avatarContainer,
          BaseStyles.mrTop60,
        ]}
      >
        <Text
          style={[
            BaseStyles.centerText,
            BaseStyles.ml10,
            ProfileSettingStyles.cssTextTitle,
            BaseStyles.mrBot20,
          ]}
        >
          Settings
        </Text>
        <View style={[ProfileSettingStyles.avatar]}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/76/18/38/761838420398ec0b0b412b46b71f2ab2.jpg",
            }}
            style={[BaseStyles.image, BaseStyles.boderCircle]}
            resizeMode="cover"
          />
        </View>
        <Text
          style={[
            BaseStyles.centerText,
            BaseStyles.ml10,
            ProfileSettingStyles.cssTextName,
          ]}
        >
          Minh An
        </Text>
        <View
          style={[ProfileSettingStyles.bgEmailContainer, BaseStyles.mrBot20]}
        >
          <Text style={[BaseStyles.centerText]}>minhanlefz09@gmail.com</Text>
        </View>

        {/* OPTION SETTING */}
        <OptionSelect
          navigationScreen={() => {
            navigation.navigate("Login");
          }}
          title="Change language"
          imgIcon="https://img.icons8.com/?size=100&id=3ZVHr47ogpJp&format=png&color=000000"
        />

        <OptionSelect
          navigationScreen={() => {
            navigation.navigate("Login");
          }}
          title="Edit profile"
          imgIcon="https://img.icons8.com/?size=100&id=O9K5DaypaVKw&format=png&color=000000"
        />

        <OptionSelect
          navigationScreen={() => {
            navigation.navigate("Login");
          }}
          title="Report"
          imgIcon="https://img.icons8.com/?size=100&id=XMpWLL82RuKb&format=png&color=000000"
        />

        <OptionSelect
          navigationScreen={() => {
            navigation.navigate("Login");
          }}
          title="Log Out"
          imgIcon="https://img.icons8.com/?size=100&id=uVA8I3rgWfOs&format=png&color=000000"
        />
      </View>
    </>
  );
};
export default ProfileSettingScreen;
