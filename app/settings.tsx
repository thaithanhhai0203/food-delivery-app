import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
    const [isPushEnabled, setIsPushEnabled] = useState(false);
    const [isLocationEnabled, setIsLocationEnabled] = useState(true);
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>

            {/* Profile Section */}
            <Text style={styles.sectionTitle}>PROFILE</Text>
            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Push Notification</Text>
                <Switch
                    value={isPushEnabled}
                    onValueChange={setIsPushEnabled}
                    trackColor={{ true: "#E58E26", false: "#ccc" }}
                    style={styles.switch}
                />
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.settingText}>Location</Text>
                <Switch
                    value={isLocationEnabled}
                    onValueChange={setIsLocationEnabled}
                    trackColor={{ true: "#E58E26", false: "#ccc" }}
                    style={styles.switch}
                />
            </View>
            <TouchableOpacity style={styles.settingRow}>
                <Text style={styles.settingText}>Language</Text>
                <Text style={styles.optionText}>English</Text>
            </TouchableOpacity>

            {/* Other Section */}
            <Text style={styles.sectionTitle}>OTHER</Text>
            {["About Ticketis", "Privacy Policy", "Terms and Conditions"].map((item, index) => (
                <TouchableOpacity key={index} style={styles.settingRow}>
                    <Text style={styles.settingText}>{item}</Text>
                    <Ionicons name="chevron-forward" size={20} color="black" />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "gray",
        marginTop: 20,
        marginBottom: 10
    },
    switch: { 
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] 
    },
    settingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    settingText: {
        fontSize: 20
    },
    optionText: {
        fontSize: 20,
        color: "gray"
    },
});

export default SettingsScreen;
