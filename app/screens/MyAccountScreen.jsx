import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function MyAccountScreen() {
  return (
    <>
      <View className="flex-1 items-center">
        <Image
          source={require("./../../assets/images/beach.png")}
          className="w-[100px] h-[100px] mt-5 rounded-xl"
        />
        <Text className="text-xl">My Account</Text>

        <View className="mt-4">
          <Text className="text-left">username</Text>
          <TouchableOpacity className="bg-lightGray rounded-md">
            <Text className="w-[300px] p-3 text-[#999]">
              username is displayed here >
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4">
          <Text className="text-left">password</Text>
          <TouchableOpacity className=" bg-lightGray rounded-md">
            <Text className="w-[300px] p-3 text-[#999]">
              password is displayed here >
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-20">
          <TouchableOpacity
            // onPress={handleLoginPress}
            className="bg-lightGray w-[300px] rounded-lg mt-4"
          >
            <Text className="text-left p-4">Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={handleLoginPress}
            className="bg-lightGray w-[300px] rounded-lg mt-4"
          >
            <Text className="text-red-500 text-left p-4">Delete account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
