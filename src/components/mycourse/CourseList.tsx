import { View, StyleSheet, FlatList } from "react-native";
import CourseCard from "./CourseCard";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseCard course={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
