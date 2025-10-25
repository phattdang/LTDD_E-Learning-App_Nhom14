import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function PromoBanner() {
  return (
    <LinearGradient colors={["#8B5CF6", "#A78BFA"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.banner}>
      <View style={styles.content}>
        <Text style={styles.bannerText}>Courses that boost your career!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Now</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../../../assets/boost-career-banner.jpg")} style={styles.bannerImage} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 140,
  },
  content: {
    flex: 1,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#06B6D4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  bannerImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
})
