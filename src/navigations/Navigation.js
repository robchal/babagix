import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./TabNavigation";
import ItemSelectedScreen from "../screens/ItemSelectedScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
        ></Stack.Screen>
        <Stack.Screen
          name="ItemSelectedScreen"
          component={ItemSelectedScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        ></Stack.Screen>
        <Stack.Screen name="ChatScreen" component={ChatScreen}></Stack.Screen>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        ></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Navigation;
