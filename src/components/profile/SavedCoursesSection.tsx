import { FlatList, StyleSheet, Text, View } from "react-native";
import SavedCourseCard from "./SavedCourseCard";

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  reviews: number;
  lessons: number;
  image: string;
}

const savedCourses: Course[] = [
  {
    id: "1",
    title: "Product Design",
    instructor: "Dennis Sweeney",
    price: 190,
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
    image:
      "https://res.cloudinary.com/dkrrib3mb/image/upload/v1758900273/phone3_xavxqy.jpg",
  },
  {
    id: "2",
    title: "Website Design",
    instructor: "Ramono Wultschner",
    price: 59,
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
    image:
      "https://res.cloudinary.com/dkrrib3mb/image/upload/v1758900273/phone3_xavxqy.jpg",
  },
  {
    id: "3",
    title: "Mobile UI Design",
    instructor: "Ramono Wultschner",
    price: 320,
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
    image:
      "https://res.cloudinary.com/dkrrib3mb/image/upload/v1758900273/phone3_xavxqy.jpg",
  },
  {
    id: "4",
    title: "Digital Portrait",
    instructor: "Ramono Wultschner",
    price: 67,
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
    image:
      "https://res.cloudinary.com/dkrrib3mb/image/upload/v1758900273/phone3_xavxqy.jpg",
  },
];

export default function SavedCoursesSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved courses</Text>
      <FlatList
        data={savedCourses}
        renderItem={({ item }) => <SavedCourseCard course={item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
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
});
