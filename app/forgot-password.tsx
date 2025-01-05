import { color } from "@/components/constants/color";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = React.useState("");
    const router = useRouter();

    const handleForgotPassword = () => {
        // Send email to server for password reset
        console.log("Email entered:", email);
        router.push({
            pathname: "/otp-verification",
            params: { email },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot password?</Text>
            <Text style={styles.subtitle}>
                Enter your email address and we’ll send you a confirmation code to reset your password
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {/* Forgot Password */}
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.forgotPassword}>Back to Login</Text>
            </TouchableOpacity>
            {/* Continue Button */}
            <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 10,
        color: "#000",
    },
    button: {
        backgroundColor: color.primary.main,
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        color: color.primary.main,
        fontSize: 14,
        textAlign: "center",
    },
    forgotPassword: {
        color: color.primary.main,
        fontSize: 14,
        textAlign: "right",
        marginBottom: 30,
    },
});

export default ForgotPasswordScreen;
