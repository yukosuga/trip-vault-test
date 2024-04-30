import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import TabNavigation from "./app/navigations/TabNavigation";
import TripScreen from "./app/screens/TripScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import AvatarScreen from "./app/screens/AvatarScreen";
import CategoryScreen from "./app/screens/CategoryScreen";
import NewExpenseScreen from "./app/screens/NewExpenseScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />   */}
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerBackTitleVisible: false, title: '' }}/> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ headerBackTitleVisible: false, title: '' }}/> */}
        {/* <Stack.Screen name="TabNavigation" component={TabNavigation} /> */}
        {/* <Stack.Screen name="Avatar" component={AvatarScreen} /> */}
        {/* <Stack.Screen name="Category" component={CategoryScreen} /> */}
        {/* <Stack.Screen name="Trip" component={TripScreen} /> */}
        <Stack.Screen name="NewExpense" component={NewExpenseScreen} />
        {/* <Stack.Screen name="MyAccount" component={MyAccountScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
