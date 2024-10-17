import { Text, View } from "react-native";
import { OptionSelect } from "../../component/component-common";
import { BaseStyles } from "../../common/base-styles";
import { ScreenNavigationProp } from "../../type/type-screen";
import { NotificationStyles } from "./notification-styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const NotificationScreen: React.FC<ScreenNavigationProp> = ({ navigation }) => {
  return (
    <>
      <View
        style={[
          NotificationStyles.notificationContainer,
          BaseStyles.row,
          BaseStyles.boderRadius10,
        ]}
      >
        {/* ICON */}
        <View
          style={[NotificationStyles.iconContainer, BaseStyles.noRowCenter]}
        >
          <Ionicons name="chatbox-outline" size={25} color="black" />
        </View>
        <View style={[NotificationStyles.contentContainer]}>
          {/*TIME */}
          <View>
            {/* TIME */}
            <View>
              <Text>3:28 - Thứ 5, 17/10/2024</Text>
            </View>
          </View>
          {/* TITLE */}
          <View>
            <Text>THis is title</Text>
          </View>
          {/* DESCRIPTION */}
          <View>
            <Text>This is content</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          NotificationStyles.notificationContainer,
          BaseStyles.row,
          BaseStyles.boderRadius10,
        ]}
      >
        {/* ICON */}
        <View
          style={[NotificationStyles.iconContainer, BaseStyles.noRowCenter]}
        >
          <Ionicons name="chatbox-outline" size={25} color="black" />
        </View>
        <View style={[NotificationStyles.contentContainer]}>
          {/*TIME */}
          <View>
            {/* TIME */}
            <View>
              <Text>3:28 - Thứ 5, 17/10/2024</Text>
            </View>
          </View>
          {/* TITLE */}
          <View>
            <Text>THis is title</Text>
          </View>
          {/* DESCRIPTION */}
          <View>
            <Text>This is content</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          NotificationStyles.notificationContainer,
          BaseStyles.row,
          BaseStyles.boderRadius10,
        ]}
      >
        {/* ICON */}
        <View
          style={[NotificationStyles.iconContainer, BaseStyles.noRowCenter]}
        >
          <Ionicons name="chatbox-outline" size={25} color="black" />
        </View>
        <View style={[NotificationStyles.contentContainer]}>
          {/*TIME */}
          <View>
            {/* TIME */}
            <View>
              <Text>3:28 - Thứ 5, 17/10/2024</Text>
            </View>
          </View>
          {/* TITLE */}
          <View>
            <Text>THis is title</Text>
          </View>
          {/* DESCRIPTION */}
          <View>
            <Text>This is content</Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default NotificationScreen;
