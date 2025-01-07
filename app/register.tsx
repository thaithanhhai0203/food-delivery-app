import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { color } from "@/components/constants/color";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

const register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleRegister = () => {
    if (!email || !userName || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (!checked) {
      Alert.alert("Error", "Please click agree");
      return;
    }
    Alert.alert("Success", `Register with email: ${email}`);
    router.replace("/(tabs)");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your new account</Text>
      <Text style={styles.subtitle}>
        Create an account to start looking for the food you like
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* User Name Input */}
      <TextInput
        style={styles.input}
        placeholder="User name"
        keyboardType="user-name"
        value={userName}
        onChangeText={(text) => setUserName(text)}
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

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
          color={color.primary.main}
          uncheckedColor="gray"
        />
        <Text>
          I Agree with
          <Text style={{ color: color.primary.main }}>
            Terms of Service
          </Text>{" "}
          and
          <Text style={{ color: color.primary.main }}> Privacy Policy</Text>
        </Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
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

      {/* Sign in */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.signInText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default register;

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

  registerButton: {
    backgroundColor: color.primary.main,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  registerButtonText: {
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
  signInText: {
    fontSize: 14,
    color: color.neutral[60],
    textAlign: "center",
  },
  signInLink: {
    color: color.primary.main,
    fontWeight: "bold",
  },
});
