import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>PROJECT MANAGEMENT</Text>
        <Text style={styles.discount}>20% OFF</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>JOIN NOW</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../assets/promo_person.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9C27B0",
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 140,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
    opacity: 0.9,
    marginBottom: 8,
  },
  discount: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#00BCD4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: "contain",
  },
});
