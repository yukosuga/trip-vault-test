import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

// const handleLoginPress = () => {
//   navigation.navigate("Login", { screen: "LoginScreen" });
// };

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center">
      <Image
        source={require("./../../assets/images/trip-vault-logo.png")}
        className="w-[150px] h-[150px] mt-5"
      />
      <Text className="mt-12 text-xl">Login</Text>
      <Text>Login to your account</Text>
      <TextInput
        className="w-[300px] mt-12 bg-lightGray rounded-md p-3"
        placeholder="username / email"
        placeholderTextColor="#999"
      ></TextInput>
      <TextInput
        className="w-[300px] mt-4 bg-lightGray rounded-md p-3"
        placeholder="password"
        placeholderTextColor="#999"
      ></TextInput>

      <Text className="mt-20">Don't have an account?</Text>
      <TouchableOpacity>
        <Text className="mt-2 text-orange">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={handleLoginPress}
        className="bg-green w-[300px] rounded-lg mt-4"
      >
        <Text className="text-white text-center p-4">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
