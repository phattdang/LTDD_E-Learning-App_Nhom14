import { View, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import useFetch from "../../hooks/useFetch";
import Category from "../../types/Category";
import categoryApi from "../../apis/categoryApi";

export default function CategoriesGrid() {
  const { data, loading, error, refetch } = useFetch<Category>(
    categoryApi.getAll
  );
  return (
    <View style={styles.container}>
      {data?.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16, // thêm lề 2 bên
    paddingTop: 8,
    paddingBottom: 20, // cho không gian dưới
  },
});
