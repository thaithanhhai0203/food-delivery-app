import { useRouter } from "expo-router";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import header from "@/assets/images/product-list/header.png";
import burger from "@/assets/images/product-list/burger.png";
import taco from "@/assets/images/product-list/taco.png";
import drink from "@/assets/images/product-list/drink.png";
import pizza from "@/assets/images/product-list/pizza.png";
import image1 from "@/assets/images/product-detail/product1/image1.png";
import image2 from "@/assets/images/product-detail/product1/image2.png";
import Product from "@/components/Product";

const HomeScreen = () => {
  const router = useRouter();
  const [category, setCategory] = useState("Burger");

  const categories = [
    {
      name: "Burger",
      img: burger,
    },
    {
      name: "Taco",
      img: taco,
    },
    {
      name: "Drink",
      img: drink,
    },
    {
      name: "Pizza",
      img: pizza,
    },
  ];

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
    <ScrollView style={styles.container}>
      {/* header */}
      <ImageBackground
        source={header}
        style={styles.headerImageBackground}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>
                Your Location {icon.down({ size: 14 })}
              </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18, color: "#fff" }}>
              {icon.location({ size: 18, color: "#fff" })} Cần Thơ
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => router.push("/search")}>
              {icon.search({ size: 50, color: "#fff" })}
            </TouchableOpacity>
            <TouchableOpacity>
              {icon.notifications({ size: 50, color: "#fff" })}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerTitle}>Provide the best food for you</Text>
      </ImageBackground>

      {/* category */}
      <View style={styles.categoryContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={styles.categoryTitle}>Find by Category</Text>
          <Text style={{ fontSize: 20, color: color.primary.main }}>
            See All
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {categories?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                ...styles.categoryItem,
                backgroundColor:
                  category === item?.name ? color.primary.main : "#fff",
              }}
              onPress={() => {
                setCategory(item?.name);
              }}
            >
              <Image source={item?.img} style={styles.categoryImage} />
              <Text
                style={{
                  ...styles.categoryText,
                  color: category === item?.name ? "#fff" : "#999",
                }}
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* product list */}

      <View style={styles.productListContainer}>
        {productList?.map((item) => (
          <Product key={item?.id} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  headerImageBackground: {
    width: "100%",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 40,
    marginTop: 55,
    padding: 10,
    zIndex: 1,
  },
  categoryContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: "500",
  },
  categoryItem: {
    padding: 10,
    borderRadius: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 20,
  },
  productListContainer: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
