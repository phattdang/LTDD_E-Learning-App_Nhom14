import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type Course from "../../types/Course"

interface CourseDetailsReviewTabProps {
  course: Course
}

const CourseDetailsReviewTab: React.FC<CourseDetailsReviewTabProps> = ({ course }) => {
  const reviews = [
    {
      id: 1,
      author: "Jinny Oslin",
      avatar: "https://via.placeholder.com/40",
      rating: 5,
      timeAgo: "A day ago",
      text: "Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod sed laborum",
    },
    {
      id: 2,
      author: "Jane Barry",
      avatar: "https://via.placeholder.com/40",
      rating: 4,
      timeAgo: "A day ago",
      text: "Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim est",
    },
    {
      id: 3,
      author: "Claire Mignard",
      avatar: "https://via.placeholder.com/40",
      rating: 4,
      timeAgo: "5 days ago",
      text: "Magna id sint iriure in cillum esse nisl dolor laboris ullamco. Consectetur proident...",
    },
  ]

  const renderStars = (rating: number) => (
    <View style={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Ionicons key={star} name="star" size={14} color={star <= rating ? "#FFB800" : "#DDD"} style={styles.star} />
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.reviewStats}>
        <Text style={styles.reviewStatsTitle}>4.5/5 ({course.numOfRates} reviews)</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ratingFilters}>
        {[
          { label: "All", emoji: "⭐" },
          { label: "5", emoji: "⭐" },
          { label: "4", emoji: "⭐" },
          { label: "3", emoji: "⭐" },
          { label: "2", emoji: "⭐" },
          { label: "1", emoji: "⭐" },
        ].map((filter, index) => (
          <TouchableOpacity key={index} style={[styles.ratingFilter, index === 0 && styles.ratingFilterActive]}>
            <Text style={[styles.ratingFilterText, index === 0 && styles.ratingFilterTextActive]}>
              {filter.emoji} {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Image source={{ uri: review.avatar }} style={styles.reviewAvatar} />
            <View style={styles.reviewUserInfo}>
              <View>
                <Text style={styles.reviewAuthor}>{review.author}</Text>
                {renderStars(review.rating)}
              </View>
              <Text style={styles.reviewTimeAgo}>{review.timeAgo}</Text>
            </View>
          </View>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  reviewStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 12,
  },
  reviewStatsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  viewAll: {
    fontSize: 12,
    color: "#00BCD4",
    fontWeight: "600",
  },
  ratingFilters: {
    marginBottom: 16,
  },
  ratingFilter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 8,
  },
  ratingFilterActive: {
    backgroundColor: "#00BCD4",
    borderColor: "#00BCD4",
  },
  ratingFilterText: {
    fontSize: 12,
    color: "#333",
  },
  ratingFilterTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  reviewItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  reviewHeader: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  reviewUserInfo: {
    flex: 1,
  },
  reviewAuthor: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 2,
    marginTop: 4,
  },
  star: {
    width: 14,
    height: 14,
  },
  reviewTimeAgo: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },
  reviewText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
})

export default CourseDetailsReviewTab
