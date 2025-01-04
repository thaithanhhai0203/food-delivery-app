import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"

const OnBoardingScreen = () => {
    const router = useRouter();

    const handleCompleteOnboarding = () => {
        // Save Onboarding state
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to the App! Complete Onboarding!</Text>
            <Button title="Continue to Login" onPress={handleCompleteOnboarding} />
        </View>
    );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})