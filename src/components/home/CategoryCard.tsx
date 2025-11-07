import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  View,
} from "react-native";

interface CategoryCardProps {
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.icon} />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 20, // bo tròn mạnh hơn → hiện đại
    overflow: "hidden", // để ảnh không tràn góc
    marginBottom: 16,

    // Shadow nâng cấp: mềm, sâu, đẹp
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  // Thêm container cho ảnh → dễ kiểm soát
  imageContainer: {
    width: "100%",
    height: 90, // chiều cao cố định cho ảnh
    backgroundColor: "#f8f9fa", // nền nhẹ khi ảnh chưa load
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 12,
    padding: 8,
  },

  icon: {
    width: 72, // ẢNH TO HƠN NỮA (từ 58 → 72)
    height: 72,
    resizeMode: "contain",
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1a1a1a",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 8,
  },
});
