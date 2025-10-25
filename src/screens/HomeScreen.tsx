import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/home/Header";
import PromoBanner from "../components/home/PromoBanner";
import SectionTitle from "../components/home/SectionTitle";
import CategoriesGrid from "../components/home/CategoriesGrid";
import CourseCard from "../components/home/CourseCard";
import TeacherCard from "../components/home/TeacherCard";

export default function HomeScreen() {
  const popularCourses = [
    {
      id: "1",
      title: "PHP in One Click",
      instructor: "Ramono Wutschner",
      price: "$59",
      rating: 4.5,
      reviews: 1233,
      lessons: 18,
      image: require("../../assets/php-course.png"),
      isBestSeller: false,
    },
    {
      id: "2",
      title: "Python Introduction",
      instructor: "Ramono Wutschner",
      price: "$39",
      rating: 4.5,
      reviews: 1267,
      lessons: 12,
      image: require("../../assets/python-course.png"),
      isBestSeller: true,
    },
  ];

  const recommendedCourses = [
    {
      id: "3",
      title: "Website Design",
      instructor: "Ramono Wutschner",
      price: "$59",
      rating: 4.5,
      reviews: 1233,
      lessons: 9,
      image: require("../../assets/website-design.png"),
      isBestSeller: false,
    },
    {
      id: "4",
      title: "UX Research For...",
      instructor: "Olivia Wang",
      price: "$29",
      rating: 4.5,
      reviews: 1782,
      lessons: 12,
      image: require("../../assets/ux-research.png"),
      isBestSeller: false,
      discount: "20% Off",
    },
  ];

  const inspiredCourses = [
    {
      id: "5",
      title: "Digital Portrait",
      instructor: "Ramono Wutschner",
      price: "$67",
      rating: 4.5,
      reviews: 657,
      lessons: 12,
      image: require("../../assets/digital-portrait.png"),
    },
    {
      id: "6",
      title: "Workspace Decor",
      instructor: "Ruth Dominguez",
      price: "$19",
      rating: 4.5,
      reviews: 33,
      lessons: 17,
      image: require("../../assets/workspace-decor.png"),
    },
    {
      id: "7",
      title: "Packaging Design",
      instructor: "Hui Anderson",
      price: "$89",
      rating: 4.5,
      reviews: 1233,
      lessons: 14,
      image: require("../../assets/packaging-design.png"),
    },
  ];

  const teachers = [
    {
      id: "1",
      name: "Christian Hayes",
      university: "University of",
      rating: 4.5,
      reviews: 1233,
      image: require("../../assets/teacher-avatar.png"),
    },
    {
      id: "2",
      name: "Dennis Sweeney",
      university: "University of",
      rating: 4.5,
      reviews: 1233,
      image: require("../../assets/teacher-avatar.png"),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <PromoBanner />

      <View style={styles.section}>
        <SectionTitle title="Categories" viewMore="View more" />
        <CategoriesGrid />
      </View>

      <View style={styles.section}>
        <SectionTitle title="Popular courses" viewMore="View more" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Recommended for you" viewMore="View more" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Course that inspires" viewMore="View more" />
        {inspiredCourses.map((course) => (
          <CourseCard key={course.id} course={course} isVertical />
        ))}
      </View>

      <View style={styles.section}>
        <SectionTitle title="Top teachers" viewMore="View more" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </ScrollView>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  horizontalScroll: {
    marginTop: 12,
  },
});
