import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ShoppingCart, Bell } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Hello, {user?.firstName} {user?.lastName}!
        </Text>
        <Text style={styles.subtitle}>What do you want to learn today?</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <ShoppingCart size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Bell size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BCD4",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  icons: {
    flexDirection: "row",
  },
});
