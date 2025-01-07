import { color } from '@/components/constants/color';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState, useRef } from 'react';
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    NativeSyntheticEvent,
    TextInputKeyPressEventData,
} from 'react-native';

const OTPVerification: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
     const router = useRouter();

    const handleInputChange = (text: string, index: number): void => {
        const newOtp = [...otp];
        newOtp[index] = text;

        setOtp(newOtp);

        // Move focus to the next input when the user types a character
        if (text.length === 1 && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Automatically submit if 4 characters are entered
        if (index === otp.length - 1 && text.length === 1) {
            handleSubmit(newOtp.join(''));
        }
    };

    const handleKeyPress = (
        event: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number
    ): void => {
        const { key } = event.nativeEvent;

        // Xử lý khi bấm Backspace
        if (key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (enteredOtp: string): void => {
        if (enteredOtp.length !== otp.length) {
            Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
            return;
        }
        router.navigate('/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email verification</Text>
            <Text style={styles.subtitle}>Enter the verification code we send you on:</Text>
            <Text style={styles.subtitle}>{email}</Text>
            <View style={styles.otpContainer}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={value}
                        onChangeText={(text) => handleInputChange(text, index)}
                        onKeyPress={(event) => handleKeyPress(event, index)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit(otp.join(''))}>
                <Text style={styles.buttonText}>Submit</Text>
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
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        marginTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: color.primary.border,
        borderRadius: 8,
        padding: 12,
        fontSize: 20,
        marginBottom: 10,
        width: 55,
        height: 55,
        textAlign: 'center',
        backgroundColor: '#fff',
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
});

export default OTPVerification;
