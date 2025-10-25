import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface TeacherCardProps {
  teacher: {
    id: string
    name: string
    university: string
    rating: number
    reviews: number
    image: any
  }
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={teacher.image} style={styles.image} />
      <Text style={styles.name}>{teacher.name}</Text>
      <Text style={styles.university}>{teacher.university}</Text>
      <View style={styles.rating}>
        <Ionicons name="star" size={14} color="#FFB800" />
        <Text style={styles.ratingText}>
          {teacher.rating} ({teacher.reviews})
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginRight: 12,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  university: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
    textAlign: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: "#666",
  },
})
