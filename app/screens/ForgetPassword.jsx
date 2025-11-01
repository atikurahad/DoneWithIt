import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPassword = () => {
  //  Manage input and loading state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Handler for sending password reset link
  const handleResetPassword = async () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter your email or username.");
      return;
    }

    try {
      setLoading(true);

      //  Simulated API request — replace with your backend endpoint later
      await new Promise((resolve) => setTimeout(resolve, 1500));

      //  Show success message
      Alert.alert(
        "Password Reset",
        `A password reset link has been sent to ${email}.`
      );

      //  Clear input field
      setEmail("");
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email or username below to receive a password reset link.
      </Text>

      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email or username"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Send button */}
      <TouchableOpacity
        style={[styles.button, !email.trim() && styles.buttonDisabled]}
        onPress={handleResetPassword}
        disabled={!email.trim() || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send Reset Link</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
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
    color: "#000",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#A5C9FF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
