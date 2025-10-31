import { View, Text, Image, TouchableOpacity, StyleSheet, type ImageSourcePropType } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface CourseCardProps {
  id: string
  title: string
  instructor: string
  price: string
  rating: number
  reviews: number
  lessons: number
  image: ImageSourcePropType
  isBestSeller?: boolean
  isSaved?: boolean
  onPress?: () => void
  onSavePress?: () => void
}

export default function CourseCard({
  title,
  instructor,
  price,
  rating,
  reviews,
  lessons,
  image,
  isBestSeller,
  isSaved,
  onPress,
  onSavePress,
}: CourseCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        {isBestSeller && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Best-seller</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <TouchableOpacity onPress={onSavePress} style={styles.saveBtn}>
            <MaterialCommunityIcons
              name={isSaved ? "bookmark" : "bookmark-outline"}
              size={20}
              color={isSaved ? "#17C1E8" : "#999"}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.instructor}>{instructor}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.ratingRow}>
            <MaterialCommunityIcons name="star" size={14} color="#FFB800" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}>({reviews})</Text>
          </View>
        </View>

        <Text style={styles.lessons}>{lessons} lessons</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#17C1E8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  content: {
    padding: 12,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  saveBtn: {
    padding: 4,
  },
  instructor: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#17C1E8",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  reviews: {
    fontSize: 12,
    color: "#999",
  },
  lessons: {
    fontSize: 12,
    color: "#999",
  },
})
