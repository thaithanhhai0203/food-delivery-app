import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { icons } from "@/components/constants/icon";

const PersonalDataScreen = () => {
    const [gender, setGender] = useState("Male");
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                {icons.back({})}
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Personal Data</Text>
            </View>

            {/* Profile Image */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" }}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIcon}>
                    {icons.camera({size: 16, color: "#fff"})}
                </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} value="Albert Stevano Bajefski" />

                <Text style={styles.label}>Date of birth</Text>
                <TextInput style={styles.input} value="19/06/1999" />

                <Text style={styles.label}>Gender</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>

                <Text style={styles.label}>Phone</Text>
                <TextInput style={styles.input} value="+1 325-433-7656" keyboardType="phone-pad" />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value="albertstevano@gmail.com" keyboardType="email-address" />

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    cameraIcon: {
        position: "absolute",
        top: 55,
        right: "40%",
        backgroundColor: "#FF8A00",
        borderRadius: 15,
        padding: 5,
    },
    form: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: "#555",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 20,
        borderRadius: 8,
        marginTop: 5,
        fontSize: 18,
        backgroundColor: "#F9F9F9",
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: "#F9F9F9",
    },
    picker: {
        height: 40,
    },
    saveButton: {
        backgroundColor: "#FF8A00",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    saveText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default PersonalDataScreen;
