import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import TabNavigation from "./app/navigations/TabNavigation";
import TripScreen from "./app/screens/TripScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

const Stack = createStackNavigator();

const TripStack = createStackNavigator();

function TripStackScreen() {
  return (
    <TripStack.Navigator>
      <TripStack.Screen name="Trip" component={TripScreen} />
      <TripStack.Screen name="TripDetail" component={TripDetailScreen} />
    </TripStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Trip" component={TripScreen} /> */}
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen name="TabNavigation" component={TabNavigation} /> */}
        <Stack.Screen name="Trip" component={TripScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
