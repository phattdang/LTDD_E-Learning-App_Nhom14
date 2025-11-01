import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

// 🧭 Khai báo kiểu điều hướng
type RootStackParamList = {
  CourseDetails: undefined
  Lesson: { lessonId: number; lessonTitle: string } // 👈 truyền id & tiêu đề qua màn hình Lesson
}

type LessonNavigationProp = NativeStackNavigationProp<RootStackParamList, "Lesson">

const CourseDetailsLessonsTab: React.FC = () => {
  const navigation = useNavigation<LessonNavigationProp>()

  // Dữ liệu bài học mẫu
  const sections = [
    {
      id: 1,
      title: "I - Introduction",
      lessons: [
        { id: 1, title: "Amet adipisicing consectetur", duration: "01:23 mins", completed: true },
        { id: 2, title: "Culpa est incididunt enim id adi", duration: "01:23 mins" },
      ],
    },
    {
      id: 2,
      title: "II - Plan for your UX Research",
      lessons: [
        { id: 3, title: "Exercitation elit incididunt esse", duration: "01:23 mins", locked: true },
        { id: 4, title: "Duis esse ipsum laboru", duration: "01:23 mins", locked: true },
      ],
    },
  ]

  const [collapsedSections, setCollapsedSections] = useState<number[]>([])

  const toggleSection = (sectionId: number) => {
    setCollapsedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    )
  }

  const handleLessonPress = (lessonId: number, lessonTitle: string) => {
    navigation.navigate("Lesson", { lessonId, lessonTitle }) // 👈 truyền dữ liệu sang LessonScreen
  }

  return (
    <View style={styles.container}>
      {sections.map((section) => (
        <View key={section.id}>
          {/* Header từng section */}
          <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection(section.id)}>
            <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
            <Ionicons
              name={collapsedSections.includes(section.id) ? "chevron-down" : "chevron-up"}
              size={20}
              color="#333"
            />
          </TouchableOpacity>

          {/* Danh sách bài học */}
          {!collapsedSections.includes(section.id) &&
            section.lessons?.map((lesson) => (
              <TouchableOpacity
                key={lesson.id}
                style={styles.lessonItem}
                onPress={() => handleLessonPress(lesson.id, lesson.title)}
              >
                <View style={styles.lessonNumber}>
                  <Text style={styles.lessonNumberText}>{String(lesson.id).padStart(2, "0")}</Text>
                </View>

                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                </View>

                {lesson.completed ? (
                  <Ionicons name="checkmark-circle" size={20} color="#00BCD4" />
                ) : lesson.locked ? (
                  <Ionicons name="lock-closed" size={20} color="#999" />
                ) : (
                  <Ionicons name="play-circle" size={20} color="#00BCD4" />
                )}
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 12 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionHeaderTitle: { fontSize: 14, fontWeight: "600", color: "#333" },
  lessonItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 12,
  },
  lessonNumber: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#E0F7FA",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B3E5FC",
  },
  lessonNumberText: { fontSize: 12, fontWeight: "600", color: "#00BCD4" },
  lessonInfo: { flex: 1 },
  lessonTitle: { fontSize: 13, fontWeight: "500", color: "#333" },
  lessonDuration: { fontSize: 11, color: "#999", marginTop: 2 },
})

export default CourseDetailsLessonsTab
