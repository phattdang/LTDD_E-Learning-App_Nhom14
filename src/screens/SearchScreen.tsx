"use client";

import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchHeader from "../components/search/SearchHeader";
import HotTopics from "../components/search/HotTopics";
import Categories from "../components/search/Categories";
import RecommendedSection from "../components/search/RecommendedSection";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const mockCourses = [
    {
      id: "1",
      title: "Website Design",
      instructor: "Ramono Wultschner",
      price: "$590",
      rating: 4.5,
      reviews: 1233,
      lessons: 9,
      image: require("../../assets/website-design.png"),
      isBestSeller: true,
      isSaved: false,
    },
    {
      id: "2",
      title: "UX Research For...",
      instructor: "Olivia Wang",
      price: "$290",
      rating: 4.5,
      reviews: 1782,
      lessons: 12,
      image: require("../../assets/ux-research.png"),
      isBestSeller: false,
      isSaved: false,
    },
  ];

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
        <RecommendedSection courses={mockCourses} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
