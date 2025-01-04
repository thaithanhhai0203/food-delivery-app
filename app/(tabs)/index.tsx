import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"

const HomeScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Comeback onboarding" onPress={() => {
                router.replace("/onboarding");
            }} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})