import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import PromoBanner from "../components/home/PromoBanner";
import SectionTitle from "../components/home/SectionTitle";
import CategoriesGrid from "../components/home/CategoriesGrid";
import CourseCard from "../components/home/CourseCard";
import TeacherCard from "../components/home/TeacherCard";
import useFetch from "../hooks/useFetch";
import { createApi } from "../apis/baseApi";
import Course from "../types/Course";
import courseApi from "../apis/courseApi";
import Account from "../types/Account";
import accountsApi from "../apis/accountApi";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { data, loading, error, refetch } = useFetch<Course>(courseApi.getAll);

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

        {loading && <Text>Đang tải dữ liệu...</Text>}
        {error && <Text style={{ color: "red" }}>Lỗi: {error}</Text>}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {data?.map((course) => (
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
          {data?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Course that inspires" viewMore="View more" />
        {data?.map((course) => (
          <CourseCard key={course.id} course={course} isVertical />
        ))}
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
