import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SearchScreen = () => {
     const router = useRouter();
    const categories = [
        { id: 1, name: "Burger", icon: "hamburger", active: true },
        { id: 2, name: "Taco", icon: "hotdog", active: false },
        { id: 3, name: "Drink", icon: "cocktail", active: false },
        { id: 4, name: "Pizza", icon: "pizza-slice", active: false },
    ];

    const recentSearches = ["Burgers", "Fast food", "Dessert", "French", "Pastry"];
    const recentOrders = [
        { id: 1, name: "Ordinary Burgers", restaurant: "Burger Restaurant", rating: 4.9, distance: "190m", image: "https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?rs=1&pid=ImgDetMain" },
        { id: 2, name: "Ordinary Burgers", restaurant: "Burger Restaurant", rating: 4.9, distance: "190m", image: "https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?rs=1&pid=ImgDetMain" },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Search Food</Text>
                <View style={styles.placeholder} />
            </View>


            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#888" />
                <TextInput placeholder="Search Food" style={styles.input} />
                <Feather name="sliders" size={20} color="#888" />
            </View>

            {/* Categories */}
            <FlatList
                horizontal
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 8 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.category, item.active && styles.categoryActive]}>
                        <FontAwesome5 name={item.icon} size={18} color={item.active ? "#fff" : "#888"} />
                        <Text style={[styles.categoryText, item.active && styles.categoryTextActive]}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Recent Searches */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent searches</Text>
                <TouchableOpacity>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
            {recentSearches.map((search, index) => (
                <View key={index} style={styles.recentSearch}>
                    <Feather name="search" size={18} color="#888" />
                    <Text style={styles.recentSearchText}>{search}</Text>
                </View>
            ))}

            {/* My Recent Orders */}
            <Text style={styles.sectionTitle}>My recent orders</Text>
            {recentOrders.map((order) => (
                <View key={order.id} style={styles.orderItem}>
                    <Image source={{ uri: order.image }} style={styles.orderImage} />
                    <View>
                        <Text style={styles.orderTitle}>{order.name}</Text>
                        <Text style={styles.orderSubtitle}>{order.restaurant}</Text>
                        <View style={styles.orderDetails}>
                            <Feather name="star" size={14} color="gold" />
                            <Text style={styles.rating}>{order.rating}</Text>
                            <Feather name="map-pin" size={14} color="#888" />
                            <Text style={styles.distance}>{order.distance}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        position: "relative",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
    },
    backButton: {
        position: "absolute",
        left: 16,
    },
    placeholder: {
        width: 40,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 60,
        marginBottom: 16
    },
    input: {
        flex: 1,
        marginLeft: 8
    },
    category: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#f2f2f2",
        marginRight: 8,
        width: 80,
        height: 80,
    },
    categoryActive: {
        backgroundColor: "#FF8C00"
    },
    categoryText: {
        fontSize: 14,
        color: "#888"
    },
    categoryTextActive: {
        color: "#fff"
    },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    deleteText: {
        color: "red",
        fontSize: 20
    },
    recentSearch: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    recentSearchText: {
        marginLeft: 8,
        fontSize: 18
    },
    orderItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
    orderImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12
    },
    orderTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    orderSubtitle: {
        fontSize: 18,
        color: "#888"
    },
    orderDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4
    },
    rating: {
        marginLeft: 4,
        marginRight: 10
    },
    distance: {
        marginLeft: 4
    },
});

export default SearchScreen;
