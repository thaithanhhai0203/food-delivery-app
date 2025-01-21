import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageBackground,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { useSearchParams } from "expo-router";
import React from "react";
import Swiper from "react-native-swiper";
import image1 from "@/assets/images/product-detail/product1/image1.png";
import image2 from "@/assets/images/product-detail/product1/image2.png";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";

interface IProductDetail {
  data: {
    id: number;
    name: string;
    img: Array<ImageSourcePropType>;
    price: string;
    isFavourite: boolean;
    evaluate: string;
    distance: string;
  };
}

const ProductDetailScreen = () => {
  const { id } = useSearchParams();
  console.log(id);
  
  const product = {
    id: 1,
    name: "Ordinary Burger",
    img: [image1, image2],
    price: "20.000",
    isFavourite: false,
    evaluate: "5",
    distance: "200m",
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    console.log(scrollY);
  };

  return (
    <ScrollView style={styles.container} onScroll={handleScroll}>
      <Swiper
        showsPagination
        autoplay
        dotStyle={{
          backgroundColor: "rgba(0,0,0,.2)",
          width: 50,
          height: 8,
          borderRadius: 4,
        }}
        activeDotStyle={{
          backgroundColor: color.primary.main,
          width: 50,
          height: 8,
          borderRadius: 4,
        }}
      >
        {product?.img?.map((item, index) => (
          <View key={index}>
            {<Image source={item} style={{ width: "100%", height: 300 }} />}
          </View>
        ))}
      </Swiper>

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 80,
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <Text>{icon.back({ size: 40, color: "#fff" })}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          About This Menu
        </Text>
        <Text>{icon.hearto({ size: 40, color: "#fff" })}</Text>
      </View>

      <View
        style={{
          position: "absolute",
          marginTop: 310,
          width: "100%",
          height: 100,
          backgroundColor: "red",
        }}
      ></View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 10,
  },
});
