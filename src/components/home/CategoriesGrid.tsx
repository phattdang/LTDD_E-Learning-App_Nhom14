import { View, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, name: "Business", icon: "📊", color: "#00BCD4" },
  { id: 2, name: "Design", icon: "🎨", color: "#9C27B0" },
  { id: 3, name: "Code", icon: "💻", color: "#E74C3C" },
  { id: 4, name: "Writing", icon: "✍️", color: "#3F51B5" },
  { id: 5, name: "Movie", icon: "🎬", color: "#9C27B0" },
  { id: 6, name: "Language", icon: "🌐", color: "#FF9800" },
];

export default function CategoriesGrid() {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
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
  },
});
