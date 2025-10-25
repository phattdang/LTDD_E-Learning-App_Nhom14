import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Home, Search, BookOpen, User } from "lucide-react-native"

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Home size={24} color="#00BCD4" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Search size={24} color="#999" />
        <Text style={[styles.label, { color: "#999" }]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <BookOpen size={24} color="#999" />
        <Text style={[styles.label, { color: "#999" }]}>My Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <User size={24} color="#999" />
        <Text style={[styles.label, { color: "#999" }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 8,
    paddingBottom: 16,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    color: "#00BCD4",
    fontWeight: "500",
  },
})
