"use client"

import React, { useState } from "react"
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Lesson {
  id: number
  title: string
  duration: string
  completed?: boolean
  locked?: boolean
}

interface Section {
  id: number
  title: string
  lessons?: Lesson[]
  collapsed?: boolean
}

const CourseDetailsLessonsTab: React.FC = () => {
  const sections: Section[] = [
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
        { id: 5, title: "Labore minim reprehenderit pariatur ea deserunt", duration: "01:23 mins", locked: true },
      ],
    },
    { id: 3, title: "III - Conduct UX research", collapsed: true },
    { id: 4, title: "IV - Articulate findings", collapsed: true },
  ]

  const [collapsedSections, setCollapsedSections] = useState<number[]>([3, 4])

  const toggleSection = (sectionId: number) => {
    setCollapsedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
      showsVerticalScrollIndicator={false}
    >
      {sections.map((section) => (
        <View key={section.id}>
          {/* Header section */}
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
              <View key={lesson.id} style={styles.lessonItem}>
                <View style={styles.lessonNumber}>
                  <Text style={styles.lessonNumberText}>{String(lesson.id).padStart(2, "0")}</Text>
                </View>

                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle} numberOfLines={2}>
                    {lesson.title}
                  </Text>
                  <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                </View>

                {lesson.completed ? (
                  <Ionicons name="checkmark-circle" size={20} color="#00BCD4" style={styles.lessonIcon} />
                ) : lesson.locked ? (
                  <Ionicons name="lock-closed" size={20} color="#999" style={styles.lessonIcon} />
                ) : (
                  <Ionicons name="play-circle" size={20} color="#00BCD4" style={styles.lessonIcon} />
                )}
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionHeaderTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
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
  lessonNumberText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#00BCD4",
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
  lessonDuration: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  lessonIcon: {
    marginLeft: 8,
  },
})

export default CourseDetailsLessonsTab
