"use client"

import type React from "react"
import { useState } from "react"
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type Course from "../types/Course"
import CourseDetailsOverviewTab from "../components/course-details/CourseDetailsOverviewTab"
import CourseDetailsLessonsTab from "../components/course-details/CourseDetailsLessonsTab"
import CourseDetailsProjectsTab from "../components/lesson-details/CourseDetailsProjectsTab"
import CourseDetailsQATab from "../components/lesson-details/CourseDetailsQATab"
import CourseDetailsReviewTab from "../components/course-details/CourseDetailsReviewTab"

interface CourseDetailsScreenProps {
  route: {
    params?: {
      course?: Course
    }
  }
  navigation: any
}

type TabName = "overview" | "lessons" | "projects" | "qa" | "review"

const CourseDetailsScreen: React.FC<CourseDetailsScreenProps> = ({ route, navigation }) => {
  const course = route?.params?.course
  const [activeTab, setActiveTab] = useState<TabName>("overview")

  // 🔹 Nếu không có dữ liệu course, hiển thị thông báo và ngăn crash
  if (!course) {
    console.warn("⚠️ Không nhận được dữ liệu 'course' trong route.params")
    return (
      <View style={styles.missingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 12 }}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.missingText}>Không có thông tin khóa học để hiển thị</Text>
      </View>
    )
  }

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Course details</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderBanner = () => (
    <View style={styles.bannerContainer}>
      {course.image ? (
        <Image source={{ uri: course.image }} style={styles.bannerImage} />
      ) : (
        <View style={[styles.bannerImage, { justifyContent: "center", alignItems: "center" }]}>
          <Text style={{ color: "#555" }}>Không có hình ảnh</Text>
        </View>
      )}
      <View style={styles.playButtonContainer}>
        <View style={styles.playButton}>
          <Ionicons name="play" size={32} color="#fff" />
        </View>
      </View>
      <View style={styles.bannerText}>
        <Text style={styles.bannerSubtitle}>{course.types?.[0]}</Text>
        <Text style={styles.bannerTitle}>{course.name}</Text>
      </View>
    </View>
  )

  const renderCourseInfo = () => (
    <View style={styles.infoContainer}>
      <Text style={styles.courseName}>{course.name}</Text>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="#FFB800" />
          <Text style={styles.ratingText}>
            {course.averageRate} ({course.numOfRates})
          </Text>
        </View>
        <Text style={styles.lessonsText}>{course.numOfLessons} lessons</Text>
      </View>
    </View>
  )

  const renderTabNavigation = () => (
    <View style={styles.tabContainer}>
      {(["overview", "lessons", "review"] as const).map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <CourseDetailsOverviewTab course={course} />
      case "lessons":
        return <CourseDetailsLessonsTab />
      // case "projects":
      //   return <CourseDetailsProjectsTab />
      // case "qa":
      //   return <CourseDetailsQATab />
      case "review":
        return <CourseDetailsReviewTab course={course} />
      default:
        return null
    }
  }

  const renderFooter = () => (
    <View style={styles.footer}>
      <View>
        <Text style={styles.priceLabel}>{course.price}</Text>
        {course.discount && <Text style={styles.discount}>{course.discount}</Text>}
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Ionicons name="cart" size={20} color="#fff" />
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderBanner()}
        {renderCourseInfo()}
        {renderTabNavigation()}
        <View style={styles.tabContent}>{renderTabContent()}</View>
        <View style={{ height: 20 }} />
      </ScrollView>
      {renderFooter()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  missingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  missingText: { fontSize: 16, color: "#666" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  headerActions: { flexDirection: "row", alignItems: "center" },
  content: { flex: 1 },
  bannerContainer: { position: "relative", width: "100%", height: 200, backgroundColor: "#ddd" },
  bannerImage: { width: "100%", height: "100%", resizeMode: "cover" },
  playButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: { position: "absolute", bottom: 16, left: 16, zIndex: 10 },
  bannerSubtitle: { color: "#fff", fontSize: 12, opacity: 0.8 },
  bannerTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginTop: 4 },
  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  courseName: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 8 },
  ratingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  rating: { flexDirection: "row", alignItems: "center", gap: 4 },
  ratingText: { fontSize: 12, color: "#666" },
  lessonsText: { fontSize: 12, color: "#666" },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: { borderBottomColor: "#00BCD4" },
  tabText: { fontSize: 12, fontWeight: "500", color: "#999" },
  activeTabText: { color: "#00BCD4", fontWeight: "600" },
  tabContent: { backgroundColor: "#fff", marginTop: 0 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  priceLabel: { fontSize: 18, fontWeight: "bold", color: "#333" },
  discount: { fontSize: 12, color: "#999", textDecorationLine: "line-through" },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#00BCD4",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    gap: 8,
  },
  addToCartText: { color: "#fff", fontWeight: "600", fontSize: 14 },
})

export default CourseDetailsScreen
