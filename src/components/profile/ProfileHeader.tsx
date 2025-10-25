import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>User's profile</Text>
      <TouchableOpacity>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
})
