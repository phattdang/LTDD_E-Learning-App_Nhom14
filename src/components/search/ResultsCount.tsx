import { View, Text, StyleSheet } from "react-native"

interface ResultsCountProps {
  count: number
}

export default function ResultsCount({ count }: ResultsCountProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count} Results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
})
