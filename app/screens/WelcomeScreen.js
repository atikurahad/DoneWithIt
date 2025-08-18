import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/lll2.png")}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/logoP.png")}
        />

        {/* <Text style={styles.heading}>Click Every Moment</Text> */}
      </View>

      <View style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </View>

      <View style={styles.registerButton}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  heading: {
    fontSize: 20,
    marginTop: 20,
    color: "purple",
    backgroundColor: "white",
    fontWeight: 600,
  },

  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   color: "white",
  //   backgroundColor: "orange",
  // },
  registerButton: {
    backgroundColor: "purple",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 60,
    marginTop: 10,
  },
  iconStyle: {
    height: 100,
    width: 100,
    borderRadius: 24,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
