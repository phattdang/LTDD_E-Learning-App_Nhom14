"use client"

import { useState } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface Course {
  id: string
  title: string
  instructor: string
  price: string
  rating: number
  reviews: number
  lessons: number
  image: any
  isBestSeller: boolean
  isSaved: boolean
}

interface SearchResultCardProps {
  course: Course
}

export default function SearchResultCard({ course }: SearchResultCardProps) {
  const [isSaved, setIsSaved] = useState(course.isSaved)

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={course.image} style={styles.image} />
        {course.isBestSeller && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Best-seller</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.instructor}>{course.instructor}</Text>
          </View>
          <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
            <MaterialCommunityIcons
              name={isSaved ? "bookmark" : "bookmark-outline"}
              size={24}
              color={isSaved ? "#00bcd4" : "#ccc"}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>{course.price}</Text>

        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons name="star" size={16} color="#ffc107" />
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
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    gap: 12,
  },
  imageContainer: {
    position: "relative",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#00bcd4",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  instructor: {
    fontSize: 12,
    color: "#999",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#00bcd4",
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
