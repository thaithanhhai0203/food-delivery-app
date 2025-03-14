import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import CartItem from "@/components/CartItem";
import { icons } from "@/components/constants/icon";
import { useRouter } from "expo-router";

interface ICartItemType {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image: string;
}

const CartScreen = () => {
    const router = useRouter();
  const [cartItems, setCartItems] = useState<Array<ICartItemType>>([
    {
      id: 1,
      title: "Burger With Meat",
      price: "$12,230",
      quantity: 1,
      image:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_update_bulgogi.jpg",
    },
    {
      id: 2,
      title: "Ordinary Burgers",
      price: "$12,230",
      quantity: 1,
      image:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_update_bulgogi.jpg",
    },
    {
      id: 3,
      title: "Cheese Burger",
      price: "$15,000",
      quantity: 1,
      image:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_update_bulgogi.jpg",
    },
    {
      id: 4,
      title: "Cheese Burger",
      price: "$15,000",
      quantity: 1,
      image:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_update_bulgogi.jpg",
    },
    {
      id: 5,
      title: "Cheese Burger",
      price: "$15,000",
      quantity: 1,
      image:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_update_bulgogi.jpg",
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=> router.back()}>{icons.back({})}</TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity>{icons.dotsThree({})}</TouchableOpacity>
      </View>

      {/* Promo Code */}
      <View style={styles.promoCodeContainer}>
        <TextInput style={styles.promoInput} placeholder="Promo Code..." />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <View style={styles.cartItemContainer}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => handleRemoveItem(item.id)}
            onIncrease={() => handleIncreaseQuantity(item.id)}
            onDecrease={() => handleDecreaseQuantity(item.id)}
          />
        ))}
      </View>

      <View style={styles.paymentSummary}>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentText}>Total Items (3)</Text>
          <Text style={styles.highlightText}>$48,900</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentText}>Delivery Fee</Text>
          <Text style={styles.highlightText}>Free</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentText}>Discount</Text>
          <Text style={styles.discountText}>- $10,900</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$38,000</Text>
        </View>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  locationContainer: {
    marginVertical: 10,
  },
  locationLabel: {
    fontSize: 16,
    color: "#6c757d",
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  changeButton: {
    color: "#FFA500",
    fontSize: 16,
    fontWeight: "bold",
  },
  promoCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  promoInput: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cartItemContainer: {
    marginVertical: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#6c757d",
  },
  itemActions: {
    alignItems: "center",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  paymentSummary: {
    marginVertical: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  paymentText: {
    fontSize: 16,
    color: "#555",
  },
  highlightText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  discountText: {
    fontSize: 16,
    color: "#FFA500",
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  orderButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
