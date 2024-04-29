import { View, Text } from "react-native";
import React from "react";
import TabNavigation from "../navigations/TabNavigation";

export default function TripScreen() {
  return (
    <View className="flex-1">
      <Text>TripScreen</Text>
      <TabNavigation />
    </View>
  );
}
