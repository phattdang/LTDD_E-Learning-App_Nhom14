import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const CATEGORIES = [
  { name: "Business", icon: "briefcase", color: "#17C1E8" },
  { name: "Design", icon: "palette", color: "#9B59B6" },
  { name: "Code", icon: "code-braces", color: "#E74C3C" },
  { name: "Movie", icon: "filmstrip", color: "#8E44AD" },
  { name: "Language", icon: "translation", color: "#E67E22" },
]

interface CategoriesProps {
  onCategorySelect?: (category: string) => void
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={() => console.log("View more categories")}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryList}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.name}
            style={styles.categoryItem}
            onPress={() => onCategorySelect?.(category.name)}
          >
            <MaterialCommunityIcons name={category.icon} size={24} color={category.color} />
            <Text style={styles.categoryName}>{category.name}</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#999" style={styles.chevron} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  viewMore: {
    color: "#17C1E8",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryList: {
    gap: 0,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 12,
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  chevron: {
    marginLeft: "auto",
  },
})
