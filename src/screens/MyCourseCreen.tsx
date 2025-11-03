"use client";

import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import MyCourseHeader from "../components/mycourse/MyCourseHeader";
import PromoBanner from "../components/mycourse/PromoBanner";
import TabNavigation from "../components/mycourse/TabNavigation";
import CourseList from "../components/mycourse/CourseList";
import { useAuth } from "../contexts/AuthContext";
import enrollmentApi from "../apis/enrollmentApi";
import courseApi from "../apis/courseApi";

export default function MyCourseScreen() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (!user) return;
      setLoading(true);
      try {
        // 1️⃣ Lấy tất cả enrollments của user
        const enrollRes = await enrollmentApi.getAll();
        const userEnrollments = enrollRes.data.filter(
          (enroll) => enroll.userId.toString() === user.id.toString()
        );

        // 2️⃣ Lấy thông tin từng course tương ứng
        const coursePromises = userEnrollments.map(async (enroll) => {
          const courseRes = await courseApi.getById(enroll.courseId.toString());
          return {
            ...courseRes.data,
            progress: enroll.progress, // gắn thêm progress vào course
          };
        });

        const courseList = await Promise.all(coursePromises);
        setCourses(courseList);
      } catch (err) {
        console.error("Lỗi tải khóa học:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCourses();
  }, [user]);

  // 3️⃣ Tách course theo trạng thái
  const ongoingCourses = courses.filter((c) => c.progress < 100);
  const completedCourses = courses.filter((c) => c.progress === 100);

  const getCoursesToDisplay = () => {
    switch (activeTab) {
      case "ongoing":
        return ongoingCourses;
      case "completed":
        return completedCourses;
      default:
        return courses;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#06B6D4" />
      </View>
    );
  }

  if (!courses.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Bạn chưa tham gia khóa học nào</Text>
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});
