import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import CourseDetailsProjectsTab from "../components/lesson-details/CourseDetailsProjectsTab"
import CourseDetailsQATab from "../components/lesson-details/CourseDetailsQATab"
import CourseDetailsLessonsTab from "../components/lesson-details/CourseDetailsLessonsTab"

// 👇 Tab “Lesson content” đơn giản
const LessonContentTab = () => (
  <View style={styles.contentContainer}>
    <Text style={styles.lessonContentTitle}>Welcome to this lesson 🎓</Text>
    <Text style={styles.lessonContentText}>
      This section contains the main learning content of your lesson. You can review theory,
      watch videos, and practice exercises here.
    </Text>
  </View>
)

const Tab = createMaterialTopTabNavigator()

export default function LessonScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const {lessonTitle} = route.params || { lessonTitle: "Lesson" }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* 🔙 Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {lessonTitle}
        </Text>
      </View>

      {/* 🖼️ Thông tin bài học */}
      <View style={styles.lessonInfoContainer}>
        <Image
          source={{ uri: "https://picsum.photos/400/200" }}
          style={styles.lessonImage}
        />
        <Text style={styles.lessonTitle}>{lessonTitle}</Text>
        <Text style={styles.lessonSubtitle}>
          Learn interactively with examples, projects, and Q&A discussions.
        </Text>
      </View>

      {/* 🧭 Tab Menu */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#00BCD4",
            tabBarLabelStyle: { fontSize: 13, fontWeight: "600" },
            tabBarIndicatorStyle: { backgroundColor: "#00BCD4", height: 3 },
          }}
        >
          <Tab.Screen name="Lesson" component={CourseDetailsLessonsTab} />
          <Tab.Screen name="Projects" component={CourseDetailsProjectsTab} />
          <Tab.Screen name="Q&A" component={CourseDetailsQATab} />
        </Tab.Navigator>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: { marginRight: 10, padding: 4 },
  headerTitle: { fontSize: 16, fontWeight: "600", color: "#333", flex: 1 },
  lessonInfoContainer: {
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  lessonImage: {
    width: "90%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  lessonTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
  lessonSubtitle: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 4,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  lessonContentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#00BCD4",
  },
  lessonContentText: { fontSize: 13, color: "#444", lineHeight: 20 },
})
