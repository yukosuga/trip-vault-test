import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MyTripsScreen from "./app/screens/MyTripsScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/TabNavigation";

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />

      <WelcomeScreen />
      <RegisterScreen />
      <LoginScreen />

      <MyTripsScreen>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </MyTripsScreen>
    </View>
  );
}
