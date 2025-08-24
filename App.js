import { View, StyleSheet } from "react-native";
import LoginForm from "./app/screens/LoginForm";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {<LoginForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
