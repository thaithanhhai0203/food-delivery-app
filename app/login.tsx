import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { color } from "@/constants/color";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", `Logged in with email: ${email}`);
    router.replace("/(tabs)");
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "Redirecting to reset password...");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account.</Text>
      <Text style={styles.subtitle}>Please sign in to your account</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <View style={styles.line} />
        <Text style={styles.socialText}>Or sign in with</Text>
        <View style={styles.line} />
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <FontAwesome name="google" size={30} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={30} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="apple" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Register */}
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Don’t have an account?{" "}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: color.neutral[60],
    textAlign: "center",
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderColor: color.primary.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  forgotPassword: {
    color: color.primary.main,
    fontSize: 14,
    textAlign: "right",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: color.primary.main,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: color.neutral[80],
    marginHorizontal: 10,
  },
  socialText: {
    fontSize: 14,
    color: color.neutral[60],
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  registerText: {
    fontSize: 14,
    color: color.neutral[60],
    textAlign: "center",
  },
  registerLink: {
    color: color.primary.main,
    fontWeight: "bold",
  },
});
