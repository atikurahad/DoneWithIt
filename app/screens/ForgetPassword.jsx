import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// You were missing 'useState' to manage the input,
// and a proper component return structure.

const ForgotPassword = () => {
  // 1. Initialize state for the email input
  const [email, setEmail] = useState("");

  // 2. Handler for the button press
  const handleResetPassword = () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter your email or username.");
      return;
    }
    // In a real app, you would call an API here to send the reset link
    Alert.alert(
      "Password Reset",
      `A password reset link has been sent to ${email}.`
    );
    setEmail(""); // Clear the input after action
  };

  // 3. The component must return JSX wrapped in parentheses
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email or username below to receive a password reset link.
      </Text>

      {/* TextInput for Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email or username"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} // Use the state setter
      />

      {/* Button using TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
};

// 4. Basic Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF", // A standard blue for action buttons
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
