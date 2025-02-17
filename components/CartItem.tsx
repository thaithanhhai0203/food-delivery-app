import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: string;
        quantity: number;
        image: string;
    };
    onRemove: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={onDecrease}>
                        <Ionicons name="remove-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={onIncrease}>
                        <Ionicons name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={onRemove}>
                <MaterialIcons name="delete-outline" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 10,
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
        fontSize: 14,
        color: "#555",
        marginVertical: 5,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16,
    },
});

export default CartItem;
