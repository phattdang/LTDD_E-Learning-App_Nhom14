"use client";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SearchHeader from "../components/search/SearchHeader";
import HotTopics from "../components/search/HotTopics";
import Categories from "../components/search/Categories";
import RecommendedSection from "../components/search/RecommendedSection";
import SearchResultsList from "../components/search/SearchResultsList";
import ResultsCount from "../components/search/ResultsCount";

// ✅ Định nghĩa type cho Stack thật sự đang dùng (SearchMain và CourseDetails)
type SearchStackParamList = {
  SearchMain: undefined;
  CourseDetails: { course: any };
};

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // ✅ navigation cho đúng stack
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();

  // Dữ liệu mẫu
  const mockCourses = [
    {
      id: "1",
      title: "Website Design",
      instructor: "Ramono Wultschner",
      price: "$590",
      rating: 4.5,
      reviews: 1233,
      lessons: 9,
      image: require("../../assets/website_design.png"),
      isBestSeller: true,
      isSaved: false,
    },
    {
      id: "3",
      title: "Java Programming Masterclass",
      instructor: "John Doe",
      price: "$320",
      rating: 4.7,
      reviews: 940,
      lessons: 20,
      image: require("../../assets/website_design.png"),
      isBestSeller: true,
      isSaved: true,
    },
  ];

  // Lọc theo từ khóa
  const filteredCourses = mockCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Khi nhấn vào khóa học
  const handlePressCourse = (id: string) => {
    const selectedCourse = (searchQuery ? filteredCourses : mockCourses).find(
      (c) => c.id === id
    );
    if (selectedCourse) {
      // ✅ Dùng tên màn hình "CourseDetails" đúng với SearchStack
      navigation.navigate("CourseDetails", { course: selectedCourse });
    }
  };

  return (
    <View style={styles.container}>
      <SearchHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterPress={() => setShowFilter(!showFilter)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HotTopics onTopicSelect={(topic) => setSearchQuery(topic)} />
        <Categories />

        {searchQuery ? (
          filteredCourses.length > 0 ? (
            <>
              <ResultsCount count={filteredCourses.length} />
              <SearchResultsList
                results={filteredCourses}
                onPressCourse={handlePressCourse}
              />
            </>
          ) : (
            <Text style={styles.noResultText}>No courses found</Text>
          )
        ) : (
          <RecommendedSection
            courses={mockCourses}
            onPressCourse={handlePressCourse}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noResultText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    fontSize: 14,
  },
});
