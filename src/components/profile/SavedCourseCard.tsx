import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface Course {
  id: string
  title: string
  instructor: string
  price: number
  rating: number
  reviews: number
  lessons: number
  image: string
}

interface Props {
  course: Course
}

export default function SavedCourseCard({ course }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.instructor}>{course.instructor}</Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bookmark-outline" size={24} color="#17a2b8" />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${course.price}</Text>
        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={14} color="#ffc107" />
            <Text style={styles.rating}>{course.rating}</Text>
            <Text style={styles.reviews}>({course.reviews})</Text>
          </View>
          <Text style={styles.lessons}>{course.lessons} lessons</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  instructor: {
    fontSize: 12,
    color: "#999",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17a2b8",
    marginVertical: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  reviews: {
    fontSize: 12,
    color: "#999",
  },
  lessons: {
    fontSize: 12,
    color: "#999",
  },
})
