import { View } from "react-native";
import { OptionSelect } from "../../component/component-common";
import { BaseStyles } from "../../common/base-styles";
import { ScreenNavigationProp } from "../../type/type-screen";

const ProfileSettingScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <>
      <View style={[BaseStyles.whiteScreen]}>
        <OptionSelect navigation={navigation} />
      </View>
    </>
  );
};
export default ProfileSettingScreen;
