import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import CourseCard from "./CourseCard"

interface Course {
  id: string
  title: string
  instructor: string
  price: string
  rating: number
  reviews: number
  lessons: number
  image: any
  isBestSeller?: boolean
  isSaved?: boolean
}

interface RecommendedSectionProps {
  courses: Course[]
  onViewMore?: () => void
}

export default function RecommendedSection({ courses, onViewMore }: RecommendedSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recommended for you</Text>
        <TouchableOpacity onPress={onViewMore}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.coursesList}>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  viewMore: {
    color: "#17C1E8",
    fontSize: 14,
    fontWeight: "500",
  },
  coursesList: {
    gap: 0,
  },
})
