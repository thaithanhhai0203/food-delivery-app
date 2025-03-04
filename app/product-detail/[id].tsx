import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import image1 from "@/assets/images/product-detail/product1/image1.png";
import image2 from "@/assets/images/product-detail/product1/image2.png";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import Product from "@/components/Product";

// interface IProductDetail {
//   data: {
//     id: number;
//     name: string;
//     img: Array<ImageSourcePropType>;
//     price: string;
//     isFavourite: boolean;
//     evaluate: string;
//     distance: string;
//   };
// }

const ProductDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  console.log(id);

  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Ordinary Burger",
    img: [image1, image2],
    price: "20.000",
    isFavourite: false,
    evaluate: "5",
    distance: "200m",
  };

  const productList = [
    {
      id: 1,
      name: "Ordinary Burger",
      img: [image1, image2],
      price: "20.000",
      isFavourite: false,
      evaluate: "5",
      distance: "200m",
    },
    {
      id: 2,
      name: "Burger",
      img: [image1],
      price: "20.000",
      isFavourite: true,
      evaluate: "4.9",
      distance: "150m",
    },
    {
      id: 3,
      name: "Burger",
      img: [image1],
      price: "20.000",
      isFavourite: true,
      evaluate: "4.9",
      distance: "150m",
    },
    {
      id: 4,
      name: "Burger",
      img: [image1],
      price: "20.000",
      isFavourite: true,
      evaluate: "4.9",
      distance: "150m",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Swiper
          showsPagination
          autoplay
          dotStyle={{
            backgroundColor: "#fff",
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
          style={{
            height: 300,
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
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            {icon.back({ size: 40, color: "#fff" })}
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "800", color: "#fff" }}>
            About This Menu
          </Text>
          {product?.isFavourite ? (
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "#fff",
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon.heart({ size: 20, color: "red" })}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon.hearto({ size: 20, color: "#fff" })}
            </TouchableOpacity>
          )}
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 40, fontWeight: "800", marginBottom: 10 }}>
            {product?.name}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              color: color.primary.main,
              marginBottom: 10,
            }}
          >
            {product?.price}đ
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {icon.dollar({ size: 20, color: color.primary.main })}
              <Text style={{ fontSize: 20, color: "#999" }}>Free Delivery</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {icon.time({ size: 20, color: color.primary.main })}
              <Text style={{ fontSize: 20, color: "#999" }}>20-30</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {icon.star({ size: 20, color: color.primary.main })}
              <Text style={{ fontSize: 20, color: "#999" }}>
                {product?.evaluate}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <Text style={{ fontSize: 18 }}>
              Burger With Meat is a typical food from our restaurant that is
              much in demand by many people, this is very recommended for you.
            </Text>
          </View>

          {/* recomended */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Recomended For You
            </Text>
            <Text style={{ fontSize: 20, color: color.primary.main }}>
              See All
            </Text>
          </View>

          <View style={styles.productListContainer}>
            {productList?.map((item) => (
              <Product key={item?.id} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* tab cart */}
      <View style={styles.tabContainer}>
        <View
          style={{ width: "50%", flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.tabQuantityButton}
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          >
            {icon.minus({ size: 30 })}
          </TouchableOpacity>

          <Text style={{ fontSize: 30, marginHorizontal: 5 }}>{quantity}</Text>

          <TouchableOpacity
            style={styles.tabQuantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            {icon.add({ size: 30 })}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tabCartButton} activeOpacity={0.5}>
          {icon.cart({ size: 20, color: "#fff" })}
          <Text style={{ fontSize: 20, color: "#fff", marginLeft: 10 }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
  },
  productListContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 80,
  },
  tabContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 999,
  },
  tabQuantityButton: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabCartButton: {
    backgroundColor: color.primary.main,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
