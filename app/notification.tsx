import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { NotificationType } from "@/enum";

interface INotificationProps {
    id: number;
    icon: string;
    title: string;
    description: string;
    type: NotificationType;
}

const notifications = [
    { id: 1, icon: "percent", title: "30% Special Discount!", description: "Special promotion only valid today", type: NotificationType.PROMOTION },
    { id: 2, icon: "check-circle", title: "Your Order Has Been Taken by the Driver", description: "Recently!", type: NotificationType.SUCCESS },
    { id: 3, icon: "times-circle", title: "Your Order Has Been Canceled", description: "19 Jun 2023", type: NotificationType.ERROR },
    { id: 4, icon: "percent", title: "35% Special Discount!", description: "Special promotion only valid today", type: NotificationType.PROMOTION },
    { id: 6, icon: "user", title: "Account Setup Successful!", description: "Special promotion only valid today", type: NotificationType.SUCCESS },
];

export default function NotificationScreen() {
    const router = useRouter();
    const renderNotification = ({ type, icon, title, description }: INotificationProps) => {
        let iconColor = "#000";

        switch (type) {
            case NotificationType.SUCCESS:
                iconColor = "#28a745"; // Green
                break;
            case NotificationType.ERROR:
                iconColor = "#dc3545"; // Red
                break;
            case NotificationType.PROMOTION:
                iconColor = "#ffc107"; // Yellow
                break;
            default:
                iconColor = "#000";
        }

        return (
            <View style={styles.notificationItem}>
                <FontAwesome name={icon as any} size={24} color={iconColor} style={styles.notificationIcon} />
                <View style={styles.notificationContent}>
                    <Text style={styles.notificationTitle}>{title}</Text>
                    <Text style={styles.notificationDescription}>{description}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { router.canGoBack() ? router.back() : router.push("/") }} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={28} color="#007BFF" />
                </TouchableOpacity>
                <Text style={styles.header}>Notifications</Text>
            </View>

            {/* Notifications List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => renderNotification(item)}
                contentContainerStyle={styles.notificationList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        marginRight: 16,
        padding: 8,
    },
    header: {
        fontSize: 24,
        fontWeight: "600",
    },
    notificationList: {
        marginTop: 10,
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    notificationIcon: {
        marginRight: 16,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },
    notificationDescription: {
        fontSize: 14,
        color: "#6c757d",
    },
});
