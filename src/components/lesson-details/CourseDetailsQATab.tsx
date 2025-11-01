import React from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Heart } from "lucide-react-native"
import { Ionicons } from "@expo/vector-icons"

const CourseDetailsQATab: React.FC = () => {
  const qaItems = [
    {
      id: 1,
      author: "Jane Barry",
      avatar: "https://via.placeholder.com/40",
      timeAgo: "A day ago",
      question:
        "Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim est",
      likes: 23,
      comments: 5,
    },
    {
      id: 2,
      author: "Thomas",
      avatar: "https://via.placeholder.com/40",
      timeAgo: "A day ago",
      question:
        "Aliquip ullamco dolore do consectetur voluptate labore esse pariatur mollit incididunt.",
      likes: 12,
      comments: 2,
    },
    {
      id: 3,
      author: "Jenny Barry",
      avatar: "https://via.placeholder.com/40",
      timeAgo: "2 days ago",
      question:
        "Cupidatat anim ex officia sit laborum irure dolore laboris tempor ad consectetur.",
      likes: 31,
      comments: 8,
    },
  ]

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {qaItems.map((item) => (
        <View key={item.id} style={styles.qaItem}>
          <View style={styles.qaHeader}>
            <Image source={{ uri: item.avatar }} style={styles.qaAvatar} />
            <View style={styles.qaUserInfo}>
              <Text style={styles.qaAuthor}>{item.author}</Text>
              <Text style={styles.qaTimeAgo}>{item.timeAgo}</Text>
            </View>
          </View>

          <Text style={styles.qaText}>{item.question}</Text>

          <View style={styles.qaFooter}>
            <View style={styles.qaInteraction}>
              <Heart size={16} color="#FF6B9D" />
              <Text style={styles.qaCount}>{item.likes}</Text>
            </View>
            <View style={styles.qaInteraction}>
              <Ionicons name="chatbubble-outline" size={16} color="#999" />
              <Text style={styles.qaCount}>{item.comments} Comment</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.qaInput}>
        <View style={styles.qaInputEmojis}>
          <Text style={styles.emoji}>😍</Text>
          <Text style={styles.emoji}>❤️</Text>
          <Text style={styles.emoji}>😱</Text>
          <Text style={styles.emoji}>😊</Text>
          <Text style={styles.emoji}>🔥</Text>
        </View>
        <Text style={styles.qaInputPlaceholder}>Write a Q&A...</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  qaItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  qaHeader: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 8,
  },
  qaAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ddd",
  },
  qaUserInfo: {
    flex: 1,
    justifyContent: "center",
  },
  qaAuthor: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  qaTimeAgo: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  qaText: {
    fontSize: 13,
    color: "#333",
    marginBottom: 8,
    lineHeight: 18,
  },
  qaFooter: {
    flexDirection: "row",
    gap: 16,
  },
  qaInteraction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  qaCount: {
    fontSize: 12,
    color: "#666",
  },
  qaInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    gap: 8,
    marginTop: 12,
  },
  qaInputEmojis: {
    flexDirection: "row",
    gap: 4,
  },
  emoji: {
    fontSize: 18,
  },
  qaInputPlaceholder: {
    fontSize: 12,
    color: "#999",
  },
})

export default CourseDetailsQATab
