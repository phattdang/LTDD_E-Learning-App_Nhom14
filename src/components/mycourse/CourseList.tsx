import { View, StyleSheet, FlatList } from "react-native";
import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  duration: string;
  progress: number;
  image: any;
}

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
