import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type Course from "../../types/Course"

interface CourseDetailsOverviewTabProps {
  course: Course
}

const CourseDetailsOverviewTab: React.FC<CourseDetailsOverviewTabProps> = ({ course }) => {
  const benefits = [
    "14 hours on-demand video",
    "Native teacher",
    "100% free document",
    "Full lifetime access",
    "Certificate of complete",
    "24/7 support",
  ]

  const similarCourses = [
    {
      id: 1,
      name: "Product Design",
      instructor: "Dennis Sweeney",
      price: "$90",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 1233,
      lessons: 12,
    },
    {
      id: 2,
      name: "Palettes for Your App",
      instructor: "Ramono Wultschner",
      price: "$59",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 1233,
      lessons: 12,
    },
    {
      id: 3,
      name: "Mobile UI Design",
      instructor: "Ramono Wultschner",
      price: "$32",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 1233,
      lessons: 12,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.instructorCard}>
        <Image
          source={{
            uri: "https://via.placeholder.com/60",
          }}
          style={styles.instructorImage}
        />
        <View style={styles.instructorInfo}>
          <Text style={styles.instructorName}>Sara Weise</Text>
          <Text style={styles.instructorTitle}>UI/UX Designer</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText} numberOfLines={3}>
          {course.desc}
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefits</Text>
        {benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitRow}>
            <Ionicons name="checkmark-circle" size={20} color="#00BCD4" />
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Similar courses</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.similarCoursesScroll}>
          {similarCourses.map((c) => (
            <View key={c.id} style={styles.similarCourseCard}>
              <Image source={{ uri: c.image }} style={styles.similarCourseImage} />
              <Ionicons name="bookmark-outline" size={20} color="#333" style={styles.bookmarkIcon} />
              <Text style={styles.similarCourseName} numberOfLines={2}>
                {c.name}
              </Text>
              <Text style={styles.similarCourseInstructor}>{c.instructor}</Text>
              <View style={styles.similarCourseFooter}>
                <Text style={styles.similarCoursePrice}>{c.price}</Text>
                <View style={styles.similarCourseRating}>
                  <Ionicons name="star" size={12} color="#FFB800" />
                  <Text style={styles.similarCourseRatingText}>
                    {c.rating} ({c.reviews})
                  </Text>
                </View>
              </View>
              <Text style={styles.similarCourseLesson}>{c.lessons} lessons</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  instructorCard: {
    flexDirection: "row",
    backgroundColor: "#E0F7FA",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  instructorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  instructorTitle: {
    fontSize: 12,
    color: "#666",
  },
  followButton: {
    backgroundColor: "#B3E5FC",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  followButtonText: {
    color: "#00BCD4",
    fontSize: 12,
    fontWeight: "600",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  seeMore: {
    color: "#00BCD4",
    fontSize: 13,
    fontWeight: "600",
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  benefitText: {
    fontSize: 13,
    color: "#333",
  },
  similarCoursesScroll: {
    marginRight: -16,
  },
  similarCourseCard: {
    width: 140,
    marginRight: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
  },
  similarCourseImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#ddd",
  },
  bookmarkIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  similarCourseName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  similarCourseInstructor: {
    fontSize: 11,
    color: "#999",
    paddingHorizontal: 8,
    marginTop: 2,
  },
  similarCourseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop: 6,
  },
  similarCoursePrice: {
    fontSize: 13,
    fontWeight: "600",
    color: "#00BCD4",
  },
  similarCourseRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  similarCourseRatingText: {
    fontSize: 10,
    color: "#666",
  },
  similarCourseLesson: {
    fontSize: 10,
    color: "#999",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
})

export default CourseDetailsOverviewTab
