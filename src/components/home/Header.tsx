import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ShoppingCart, Bell } from "lucide-react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello, Rosie!</Text>
        <Text style={styles.subtitle}>What do you want to learn today?</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
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
