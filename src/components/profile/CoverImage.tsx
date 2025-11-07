import { Image, StyleSheet, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function CoverImage() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {/* ảnh nền vẫn giữ nguyên */}
      <Image
        source={require("../../../assets/workspace_with_keyboard_and_laptop.png")}
        style={styles.coverImage}
      />

      <View style={styles.avatarContainer}>
        <Image
          source={
            user?.avatar
              ? { uri: user.avatar } // 👈 avatar thật từ API
              : require("../../../assets/professional_woman_portrait.png") // fallback
          }
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 40,
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  avatarContainer: {
    marginTop: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
});
