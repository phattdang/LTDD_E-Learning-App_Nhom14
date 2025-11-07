import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import enrollmentApi from "../../apis/enrollmentApi";
import courseApi from "../../apis/courseApi";

interface StatItem {
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { label: "Save", value: 25 },
  { label: "On Going", value: 24 },
  { label: "Completed", value: 98 },
];

export default function StatsSection() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const enrollRes = await enrollmentApi.getAll();

        const userEnrollments = enrollRes.data.filter(
          (enroll) => enroll.userId.toString() === user.id.toString()
        );

        const coursePromises = userEnrollments.map(async (enroll) => {
          const courseRes = await courseApi.getById(enroll.courseId.toString());
          return {
            ...courseRes.data,
            progress: enroll.progress,
          };
        });

        const courseList = await Promise.all(coursePromises);
        setCourses(courseList);
      } catch (err) {
        console.error("❌ Lỗi tải khóa học:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCourses();
  }, [user]);

  // ✅ Tính toán trong UI
  const total = courses.length;
  const ongoing = courses.filter((c) => c.progress < 100).length;
  const completed = courses.filter((c) => c.progress === 100).length;

  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.statValue}>{total}</Text>
        <Text style={styles.statLabel}>Save</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.statValue}>{ongoing}</Text>
        <Text style={styles.statLabel}>On Going</Text>
      </View>

      <View style={styles.statItem}>
        <Text style={styles.statValue}>{completed}</Text>
        <Text style={styles.statLabel}>Completed</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
  },
});
