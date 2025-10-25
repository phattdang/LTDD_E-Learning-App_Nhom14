"use client";

import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MyCourseHeader from "../components/mycourse/MyCourseHeader";
import PromoBanner from "../components/mycourse/PromoBanner";
import TabNavigation from "../components/mycourse/TabNavigation";
import CourseList from "../components/mycourse/CourseList";

export default function MyCourseScreen() {
  const [activeTab, setActiveTab] = useState("all");

  const allCourses = [
    {
      id: "1",
      title: "UX Foundation",
      duration: "2 hrs 25 mins",
      progress: 30,
      image: require("../../assets/ux-foundation-course.jpg"),
    },
    {
      id: "2",
      title: "Creative Art Design",
      duration: "3 hrs 25 mins",
      progress: 70,
      image: require("../../assets/creative-art-design-course.jpg"),
    },
    {
      id: "3",
      title: "Palettes for Your App",
      duration: "4 hrs 50 mins",
      progress: 100,
      image: require("../../assets/palettes-app-course.jpg"),
    },
    {
      id: "4",
      title: "Typography in UI Design",
      duration: "4 hrs 50 mins",
      progress: 50,
      image: require("../../assets/typography-ui-design-course.jpg"),
    },
  ];

  const ongoingCourses = allCourses.filter((course) => course.progress < 100);
  const completedCourses = allCourses.filter(
    (course) => course.progress === 100
  );

  const getCoursesToDisplay = () => {
    switch (activeTab) {
      case "ongoing":
        return ongoingCourses;
      case "completed":
        return completedCourses;
      default:
        return allCourses;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MyCourseHeader />
      <PromoBanner />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <CourseList courses={getCoursesToDisplay()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
