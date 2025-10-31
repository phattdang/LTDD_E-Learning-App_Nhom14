import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"

const TOPICS = ["Java", "SQL", "Javascript", "Python", "Digital marketing", "Photoshop", "Watercolor"]

interface HotTopicsProps {
  onTopicSelect?: (topic: string) => void
}

export default function HotTopics({ onTopicSelect }: HotTopicsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot topics</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topicsScroll}>
        {TOPICS.map((topic) => (
          <TouchableOpacity key={topic} style={styles.topicTag} onPress={() => onTopicSelect?.(topic)}>
            <Text style={styles.topicText}>{topic}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  topicsScroll: {
    gap: 8,
  },
  topicTag: {
    borderWidth: 1.5,
    borderColor: "#17C1E8",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  topicText: {
    color: "#17C1E8",
    fontSize: 14,
    fontWeight: "500",
  },
})
