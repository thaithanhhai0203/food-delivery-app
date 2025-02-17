import { Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const EmptyCartScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.push('/order')}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Cart</Text>
                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <View style={styles.emptyContent}>
                <Image
                    source={require("../assets/images/order-empty.png")}
                    style={styles.image}
                />
                <Text style={styles.emptyTitle}>Ouch! Hungry</Text>
                <Text style={styles.emptyDescription}>
                    Seems like you have not ordered any food yet
                </Text>
                <TouchableOpacity style={styles.findFoodButton}>
                    <Text style={styles.findFoodButtonText}>Find Foods</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    backButton: {
        fontSize: 20,
        fontWeight: "bold",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    moreButton: {
        fontSize: 20,
    },
    emptyContent: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 400,
        resizeMode: "contain",
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    emptyDescription: {
        fontSize: 16,
        color: "#6c757d",
        textAlign: "center",
        marginBottom: 30,
    },
    findFoodButton: {
        backgroundColor: "#FFA500",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    findFoodButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default EmptyCartScreen;