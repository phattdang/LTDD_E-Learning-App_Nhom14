import { View, Text, StyleSheet, Image } from "react-native";

interface CourseCardProps {
  course: {
    id: string;
    name: string;
    duration: string;
    progress: number;
    image: any;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={
          typeof course.image === "string"
            ? { uri: course.image }
            : course.image // phòng trường hợp là require()
        }
        style={styles.courseImage}
      />
      <View style={styles.content}>
        <Text style={styles.courseTitle}>{course.name}</Text>
        <Text style={styles.duration}>{course.duration}</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${course.progress}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{course.progress}% Complete</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  duration: {
    fontSize: 13,
    color: "#999",
    marginBottom: 8,
  },
  progressContainer: {
    gap: 6,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e5e5e5",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#06B6D4",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: "#06B6D4",
    fontWeight: "500",
  },
});
