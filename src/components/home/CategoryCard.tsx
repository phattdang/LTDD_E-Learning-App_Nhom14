import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
}

export default function CategoryCard({ name, icon, color }: CategoryCardProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 28,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});
