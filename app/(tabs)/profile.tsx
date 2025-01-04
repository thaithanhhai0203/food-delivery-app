import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"

const ProfileScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title="Comeback onboarding" onPress={() => {
                router.replace("/onboarding");
            }} />
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})