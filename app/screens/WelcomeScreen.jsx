import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 mt-[130px] items-center">
      <Image
        source={require("./../../assets/images/trip-vault-logo.png")}
        className="w-[250px] h-[250px]"
      />
      <TouchableOpacity onPress={()=>console.log("Login")} className="bg-orange w-[300px] rounded-lg mt-36">
        <Text className="text-white text-center p-4">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>console.log("Register")} className="bg-green w-[300px] rounded-lg m-6">
        <Text className="text-white text-center p-4">Register</Text>
      </TouchableOpacity>
    </View>
  );
}
