"use client";

import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchHeader from "../components/search/SearchHeader";
import ResultsCount from "../components/search/ResultsCount";
import SearchResultsList from "../components/search/SearchResultsList";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("Design");
  const [showFilter, setShowFilter] = useState(false);

  const mockResults = [
    {
      id: "1",
      title: "UX Foundation",
      instructor: "Sara Weise",
      price: "$51",
      rating: 4.5,
      reviews: 1233,
      lessons: 13,
      image: require("../../assets/ux-foundation-course.jpg"),
      isBestSeller: true,
      isSaved: false,
    },
    {
      id: "2",
      title: "Design Basics",
      instructor: "Kelly Hamilton",
      price: "$89",
      rating: 4.5,
      reviews: 1233,
      lessons: 12,
      image: require("../../assets/creative-art-design-course.jpg"),
      isBestSeller: false,
      isSaved: false,
    },
    {
      id: "3",
      title: "Digital Sketching",
      instructor: "Ramono Wultschner",
      price: "$49",
      rating: 4.5,
      reviews: 1233,
      lessons: 8,
      image: require("../../assets/creative-art-design-course.jpg"),
      isBestSeller: false,
      isSaved: false,
    },
    {
      id: "4",
      title: "Digital Portrait",
      instructor: "Ramono Wultschner",
      price: "$67",
      rating: 4.5,
      reviews: 1233,
      lessons: 11,
      image: require("../../assets/creative-art-design-course.jpg"),
      isBestSeller: false,
      isSaved: false,
    },
    {
      id: "5",
      title: "Web Design",
      instructor: "Ryan Meyers",
      price: "$29",
      rating: 4.5,
      reviews: 1233,
      lessons: 12,
      image: require("../../assets/ux-foundation-course.jpg"),
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
        <ResultsCount count={120} />
        <SearchResultsList results={mockResults} />
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
