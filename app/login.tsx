import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Save login state
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text>Login to your account</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});