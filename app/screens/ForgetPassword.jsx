import React from "react"
import { View } from "react-native";


const ForgotPassword = ()=>{

<View>
  <TextInput
          style={styles.input}
          placeholder="Enter your email or username"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
</View>

}


export default ForgotPassword;
