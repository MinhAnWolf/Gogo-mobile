import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenNavigationProp } from "../../type/type-screen";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { useRef, useState } from "react";
import {
  Banner,
  ButtonSelect,
  Comment,
  Input,
  ItemIcon,
  ItemRating,
  ItemTab,
  TextIcon,
} from "../../component/component-common";
import { useRoute } from "@react-navigation/native";
import { DetSearLocStyles } from "./detail-search-location-styles";
import { BaseStyles } from "../../common/base-styles";
import { ModalCustom } from "../../component/modal/modal-custom";
import { pickImage } from "../../common/utils/helper-utils";
import { Controller, useForm } from "react-hook-form";
import { CommentProp, InputType } from "../../type/type";
import { addCommentService } from "../../service/CommentService";

function OverviewScreen(item: any) {
  return (
    <View>
      <View style={BaseStyles.mrTop10}></View>
      <ItemIcon iconName="location-outline" size={30} content={item.address} />

      <ItemIcon
        iconName="time-outline"
        size={30}
        content="Mở cửa từ 16:40 - 00:00"
      />
    </View>
  );
}

const DetailSearchLocationScreen: React.FC<ScreenNavigationProp> = ({
  navigation,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { item }: any = useRoute().params;
  const [activeTab, setActiveTab] = useState(1);

  const [rating, setRating] = useState(0);
  const [ratingFood, setRatingFood] = useState(0);
  const [ratingService, setRatingService] = useState(0);
  const [ratingDimensional, setRatingDimensional] = useState(0);
  const [img, setImg] = useState<any>(null);

  const modalRef = useRef<any>(null);

  const data = [
    {
      userName: "Trang Cao Minh",
      rating: 5,
      timeComent: "một tuần trước",
      content:
        "Xin chào! Mình tới nọ vào ngày mưa tầm tả Tụi mình đi 2 người ạ quán không gian thoáng ngồi trong vườn như lạc vào Đalat thu nhỏ trong sài gòn vậy",
    },
    {
      userName: "Nguyễn Văn Tèo",
      rating: 5,
      timeComent: "một tuần trước",
      content:
        "Mình đi từ Tết rồi mà quên đánh giá. Bãi đỗ xe rộng có người đỗ xe, phí thì người đó nói đưa bao nhiêu cũng đc. Lúc mình đi k đặt bàn trước nên đến phải đợi bàn.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return OverviewScreen(item);
      case 2:
        return commentScreen();
      default:
        return null;
    }
  };

  const onSelectImg = () => {
    setImg(pickImage);
  };

  const onsubmit = async (data: any) => {
    const comment: CommentProp = {
      eateriesId: item.id,
      content: data.content,
      imgFile: img,
    };
    console.log(img);
    // const file = await fetch(img._j)
    //   .then((response) => response.blob())
    //   .then((blob) => new File([blob], "Test", { type: "image/jpeg" }));

    const formData = new FormData();
    const file = {
      uri: img,
      name: img.split("/").pop(),
      type: "image/jpeg",
    };
    fetch(file.uri)
      .then((response) => response.blob())
      .then((blob) => {
        console.log("Go tranfer blob");

        formData.append("imgFile", blob, file.name);
      })
      .catch((error) => console.error("Error fetching the file:", error));

    // formData.append("imgFile", file);
    console.log("kkka");
    addCommentService(formData).then(
      (res) => {
        // console.log("res status: " + res.status);
      },
      (error) => {
        console.log(JSON.stringify(error));
        // console.log("res status: " + error.status);
      }
    );
    modalRef.current?.closeModal();
  };

  const content: InputType = {
    name: "content",
    styles: [BaseStyles.inputArea],
    required: true,
    exampleValue: "Content",
    secureTextEntry: false,
    multiline: true,
  };

  const commentScreen = () => {
    return (
      <ScrollView>
        <View style={BaseStyles.mrTop10}></View>
        <TouchableOpacity onPress={() => modalRef.current?.openModal()}>
          <TextIcon
            text="Đánh giá"
            style={[
              BaseStyles.btn2,
              BaseStyles.bgMain,
              { justifyContent: "center" },
            ]}
            icon="chatbox-ellipses"
          />
        </TouchableOpacity>

        <ModalCustom
          title="Đánh giá"
          height={600}
          ref={modalRef}
          content={
            <View style={BaseStyles.flexCollumn}>
              <ScrollView style={[BaseStyles.mrTop10, { flex: 1 }]}>
                <View style={DetSearLocStyles.boxRating}>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    enableHalfStar={false}
                  />
                </View>
                <Input inputType={content} control={control} />
                <TouchableOpacity
                  style={[
                    BaseStyles.btn2,
                    BaseStyles.bgGray,
                    BaseStyles.mrTop10,
                    BaseStyles.mrBot15,
                    { alignItems: "center" },
                  ]}
                  onPress={onSelectImg}
                >
                  <TextIcon text="Thêm hình ảnh và video" icon="camera" />
                </TouchableOpacity>
              </ScrollView>

              <TouchableOpacity
                style={[
                  BaseStyles.btn2,
                  BaseStyles.bgMain,
                  BaseStyles.mrTop10,
                  { alignItems: "center" },
                ]}
                onPress={handleSubmit(onsubmit)}
              >
                <TextIcon text="Đăng tải" icon="camera" />
              </TouchableOpacity>
            </View>
          }
        />

        {data.map((item: any, index: number) => {
          return (
            <Comment
              key={index}
              userName={item.userName}
              rating={item.rating}
              timeComment={item.timeComment}
              content={item.content}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <>
      <Banner image={item.img} height={200} onBack={navigation.goBack} />
      <View style={DetSearLocStyles.container}>
        <View style={DetSearLocStyles.header}>
          <Text style={DetSearLocStyles.title}>{item.name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <StarRatingDisplay
              rating={5}
              starSize={16}
              style={{ marginTop: 10 }}
              starStyle={{ marginHorizontal: 0.8 }}
            />
            <Text style={{ paddingTop: 11, paddingLeft: 5, fontSize: 12 }}>
              {item.rating}/5 ({item.countRating})
            </Text>
          </View>
        </View>
        <View style={DetSearLocStyles.body}>
          <View style={DetSearLocStyles.tabBar}>
            <ItemTab
              condition={activeTab === 1}
              onPress={() => setActiveTab(1)}
              name="Tổng quang"
            />
            <ItemTab
              condition={activeTab === 2}
              onPress={() => setActiveTab(2)}
              name="Đánh giá"
            />
          </View>

          <View style={DetSearLocStyles.contentContainer}>
            {renderContent()}
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailSearchLocationScreen;
