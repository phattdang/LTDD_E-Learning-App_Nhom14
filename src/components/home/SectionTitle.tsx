import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface SectionTitleProps {
  title: string
  viewMore: string
}

export default function SectionTitle({ title, viewMore }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.viewMore}>{viewMore}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  viewMore: {
    fontSize: 14,
    color: "#00BCD4",
    fontWeight: "600",
  },
})
