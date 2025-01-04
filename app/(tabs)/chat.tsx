import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"

const ChatScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
            <Button title="Comeback onboarding" onPress={() => {
                router.replace("/onboarding");
            }} />
        </View>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})