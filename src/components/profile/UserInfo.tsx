import { StyleSheet, Text, View } from "react-native"

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Martha Rosie</Text>
      <Text style={styles.role}>UX/UI Designer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: "#999",
  },
})
