"use client";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import MyCourseScreen from "../screens/MyCourseCreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import LessonScreen from "../screens/LessonScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: true, title: "Giỏ hàng của bạn" }}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    <Stack.Screen name="Lesson" component={LessonScreen} />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <SafeAreaWrapper style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";
            if (route.name === "HomeTab") iconName = "home";
            else if (route.name === "SearchTab") iconName = "search";
            else if (route.name === "MyCourseTab") iconName = "folder";
            else if (route.name === "ProfileTab") iconName = "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="SearchTab"
          component={SearchStack}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="MyCourseTab"
          component={MyCourseScreen}
          options={{ title: "My Course" }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </SafeAreaWrapper>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#17C1E8" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="App" component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
