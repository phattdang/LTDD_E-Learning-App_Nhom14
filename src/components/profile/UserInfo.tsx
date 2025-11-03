import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function UserInfo() {
  const { user } = useAuth(); // 🧠 lấy user từ context

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Chưa đăng nhập</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {user.firstName} {user.lastName}
      </Text>
      {/* <Text style={styles.role}>{user.role || "Người dùng"}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: "#999",
  },
});
