import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SearchScreen from "../screens/SearchScreen"
import MyCourseScreen from "../screens/MyCourseCreen"
import SafeAreaWrapper from "../components/SafeAreaWrapper"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <SafeAreaWrapper style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home"
            if (route.name === "HomeTab") iconName = "home"
            else if (route.name === "SearchTab") iconName = "search"
            else if (route.name === "MyCourseTab") iconName = "folder"
            else if (route.name === "ProfileTab") iconName = "person"
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: "Home" }} />
        <Tab.Screen name="SearchTab" component={SearchScreen} options={{ title: "Search" }} />
        <Tab.Screen name="MyCourseTab" component={MyCourseScreen} options={{ title: "My Course" }} />
        <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: "Profile" }} />
      </Tab.Navigator>
    </SafeAreaWrapper>
  )
}
