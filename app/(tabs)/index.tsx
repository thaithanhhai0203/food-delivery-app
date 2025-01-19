import { useRouter } from "expo-router";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { icon } from "@/components/constants/icon";
import { color } from "@/components/constants/color";
import header from "@/assets/images/product-list/header.png";
import burger from "@/assets/images/product-list/burger.png";
import taco from "@/assets/images/product-list/taco.png";
import drink from "@/assets/images/product-list/drink.png";
import pizza from "@/assets/images/product-list/pizza.png";

const HomeScreen = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "Cần Thơ" },
    { label: "JavaScript", value: "HCM" },
    { label: "Python", value: "Vĩnh Long" },
  ]);

  const [category, setCategory] = useState("");
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

  return (
    <View style={styles.container}>
      {/* header */}
      <ImageBackground
        source={header}
        style={styles.headerImageBackground}
        resizeMode="cover"
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, color: "#fff" }}>
              {icon.location({ size: 30, color: "#fff" })}
            </Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              searchable={true}
              placeholder="Your Location"
              placeholderStyle={{ width: 150, color: "#fff" }}
              searchContainerStyle={{ width: 150 }}
              searchTextInputStyle={{ width: 150 }}
              dropDownContainerStyle={{ width: 150 }}
              style={styles.headerDropdown}
              zIndex={999}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text>{icon.search({ size: 40, color: "#fff" })}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{icon.notifications({ size: 40, color: "#fff" })}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerTitle}>Provide the best</Text>
        <Text style={styles.headerTitle}>food for you</Text>
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  headerImageBackground: {
    // position: "fixed",
    // top: 0,
    width: "100%",
    // padding: 10,
  },
  headerDropdown: {
    width: 150,
    backgroundColor: "none",
    borderColor: "transparent",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 40,
    marginTop: 55,
    zIndex: 1,
  },
  categoryContainer: {
    padding: 20,
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
});
