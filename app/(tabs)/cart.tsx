import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"

const CartScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Cart Screen</Text>
            <Button title="Comeback onboarding" onPress={() => {
                router.replace("/onboarding");
            }} />
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})