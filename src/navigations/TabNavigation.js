import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import MapScreen from "../screens/MapScreen";
import Profile from "../screens/Profile";
import ChatScreen from "../screens/ChatScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map-marker" : "map-marker-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "email" : "email-outline";
          }

          // You can return any component that you like here!
          return (
            <Icon
              type="material-community"
              name={iconName}
              size={25}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.primaryLogo,
        tabBarInactiveTintColor: colors.secondaryText2,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
