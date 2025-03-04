import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import React from "react";
import { useRouter } from "expo-router";

interface IProps {
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

const Product = (props: IProps) => {
  const { data } = props;
  const router = useRouter();

  const handleFavourite = (id: number, isFavourite: boolean) => {
    console.log(id);
    console.log(isFavourite);
  };

  const handleProductDetail = (id: number) => {
    router.push({
      pathname: "/product-detail/[id]",
      params: { id },
    });
  };

  return (
    <TouchableOpacity
      onPress={() => handleProductDetail(data?.id)}
      style={styles.productContainer}
    >
      <ImageBackground
        source={data?.img[0]}
        style={styles.productImageBackground}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity
          style={styles.productFavourite}
          onPress={() => handleFavourite(data?.id, data?.isFavourite)}
        >
          {data?.isFavourite
            ? icon.heart({ color: "red" })
            : icon.hearto({ color: "red" })}
        </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.productName}>{data?.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          {icon.star({ size: 20, color: "yellow" })}
          <Text>{data?.evaluate}</Text>
        </View>
        <View>
          {icon.location({ size: 20, color: color.primary.main })}
          <Text>{data?.distance}</Text>
        </View>
      </View>

      <Text style={styles.productPrice}>{data?.price}đ</Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    width: "48%",
    height: 230,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px 4px rgba(199,199,199,1)",
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
  },
  productImageBackground: {
    position: "relative",
    width: "100%",
    height: 100,
  },
  productFavourite: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "600",
    minHeight: 50,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: color.primary.main,
  },
});
