import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { color } from "@/components/constants/color";
import { MaterialIcons } from "@expo/vector-icons";
import congratulations from "@/assets/images/congratulations.png";

const ResetPasswordScreen = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords are not the same");
      return;
    }
    setIsSuccess(true);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different from previous used passwords
      </Text>

      {/* New Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!showNewPassword}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <Text style={styles.require}>Must be at least 8 character</Text>
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowNewPassword(!showNewPassword)}
        >
          <MaterialIcons
            name={showNewPassword ? "visibility" : "visibility-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Text style={styles.require}>Both password must match</Text>
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <MaterialIcons
            name={showConfirmPassword ? "visibility" : "visibility-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.resetPasswordButton}
        onPress={handleResetPassword}
      >
        <Text style={styles.resetPasswordButtonText}>Verifly Account</Text>
      </TouchableOpacity>

      {isSuccess && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <View style={styles.congratulationsComponent}>
            <Image
              source={congratulations}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styles.title}>Password Changed</Text>
            <Text style={styles.subtitle}>
              Password changed successfully, you can login again with a new
              password
            </Text>

            <TouchableOpacity
              style={{ ...styles.resetPasswordButton, width: "100%" }}
              onPress={handleLogin}
            >
              <Text style={styles.resetPasswordButtonText}>
                Verifly Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    position: "relative",
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
    marginBottom: 2,
    fontSize: 16,
  },
  require: {
    color: "#999",
    fontSize: 12,
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 20,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },

  resetPasswordButton: {
    backgroundColor: color.primary.main,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  resetPasswordButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  congratulationsComponent: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    padding: 20,
  },
});
