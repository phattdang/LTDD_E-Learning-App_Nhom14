import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CourseCardProps {
  course: {
    id: number;
    name: string;
    image: string;
    numOfLessons: number;
    numOfRates: number;
    averageRate: number;
    reviews: any[];
    desc: string;
    price: string;
    types: string[];
    isBestSeller?: boolean;
    discount?: string;
  };
  isVertical?: boolean;
}

export default function CourseCard({ course, isVertical }: CourseCardProps) {
  // Component chung để hiển thị lessons
  const LessonText = () => (
    <Text style={styles.lessonText}>{course.numOfLessons} lessons</Text>
  );

  if (isVertical) {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.verticalImageContainer}>
          <Image source={{ uri: course.image }} style={styles.verticalImage} />
          {course.discount && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{course.discount}</Text>
            </View>
          )}
        </View>
        <View style={styles.verticalContent}>
          <Text style={styles.title} numberOfLines={2}>
            {course.name}
          </Text>
          <Text style={styles.instructor}>{course.desc}</Text>
          <View style={styles.footer}>
            <View>
              <Text style={styles.price}>{course.price}</Text>
              <LessonText />
            </View>
            <View style={styles.rating}>
              <Ionicons name="star" size={14} color="#FFB800" />
              <Text style={styles.ratingText}>
                {course.averageRate} ({course.numOfRates})
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: course.image }} style={styles.image} />
        {course.isBestSeller && (
          <View style={styles.bestSellerBadge}>
            <Text style={styles.bestSellerText}>Best seller</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {course.name}
        </Text>
        <Text style={styles.instructor} numberOfLines={1}>
          {course.desc}
        </Text>
        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>{course.price}</Text>
            <LessonText />
          </View>
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color="#FFB800" />
            <Text style={styles.ratingText}>
              {course.averageRate} ({course.numOfRates})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginRight: 12,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bestSellerBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#00BCD4",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  bestSellerText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  instructor: {
    fontSize: 11,
    color: "#999",
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00BCD4",
  },
  lessonText: {
    fontSize: 10,
    color: "#666",
    marginTop: 2,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 10,
    color: "#666",
  },
  verticalContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },
  verticalImageContainer: {
    position: "relative",
    width: 100,
    height: 100,
  },
  verticalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  discountBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#9C27B0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  discountText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  verticalContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
});
