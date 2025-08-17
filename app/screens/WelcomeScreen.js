import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/camera.jpg")} // path টা তোমার ফাইল structure অনুযায়ী বদলাও
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/camera.jpg")}
        />

        <Text>Sell what you don't need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    color: "white",
    backgroundColor: "orange",
  },
  registerButton: {
    width: "100%",
    height: 70,
    color: "white",
    backgroundColor: "purple",
  },
  iconStyle: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
