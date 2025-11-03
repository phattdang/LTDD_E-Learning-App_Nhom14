import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import Course from "../../types/Course";
import courseApi from "../../apis/courseApi";
import CourseCard from "../home/CourseCard";

export default function SavedCoursesSection() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user || !user.courseId?.length) return;
      setLoading(true);

      try {
        const results = await Promise.all(
          user.courseId.map((id) => courseApi.getById(String(id))) // 👈 gọi từng course
        );

        const courseData = results.map((res) => res.data);
        setCourses(courseData);
      } catch (err) {
        console.error("Lỗi tải danh sách khóa học:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (!user) {
    return null; // chưa đăng nhập
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#00BCD4" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khóa học của bạn</Text>
      {courses.length === 0 ? (
        <Text style={styles.emptyText}>Chưa có khóa học nào</Text>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CourseCard course={item} isVertical />}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  loadingContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
  },
});
