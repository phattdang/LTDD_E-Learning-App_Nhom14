import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Lesson from "../../types/Lesson";
import lessonApi from "../../apis/lessonApi";

type RootStackParamList = {
  CourseDetails: undefined;
  Lesson: { lesson: Lesson };
};

type LessonNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Lesson"
>;

interface Props {
  courseId: number | string;
}

const CourseDetailsLessonsTabMyCourse: React.FC<Props> = ({ courseId }) => {
  const navigation = useNavigation<LessonNavigationProp>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await lessonApi.getAll();
        const filtered = res.data.filter(
          (l) => Number(l.courseId) === Number(courseId)
        );
        setLessons(filtered);
      } catch (error) {
        console.error("Lỗi khi tải lessons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLessons();
  }, [courseId]);

  const handleLessonPress = (lesson: Lesson) => {
    navigation.navigate("Lesson", { lesson });
  };

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00BCD4" />
      </View>
    );

  if (lessons.length === 0)
    return (
      <View style={styles.center}>
        <Text>Chưa có bài học nào cho khóa này</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {lessons.map((lesson, index) => (
        <TouchableOpacity
          key={lesson.id}
          style={styles.lessonItem}
          onPress={() => handleLessonPress(lesson)}
        >
          <View style={styles.lessonNumber}>
            <Text style={styles.lessonNumberText}>
              {String(index + 1).padStart(2, "0")}
            </Text>
          </View>
          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDuration}>{lesson.duration}</Text>
          </View>
          <Ionicons name={"play-circle"} size={20} color={"#00BCD4"} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 12 },
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
  center: { padding: 20, alignItems: "center", justifyContent: "center" },
});

export default CourseDetailsLessonsTabMyCourse;
