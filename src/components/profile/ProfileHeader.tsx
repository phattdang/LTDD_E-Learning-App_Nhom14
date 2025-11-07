import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileHeader() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    setMenuVisible(false);
    logout(); // 👉 isLoggedIn=false → AppNavigator tự chuyển về Login
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>User's profile</Text>

      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="#333" />
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Cài đặt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={[styles.menuText, { color: "red" }]}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  menu: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 12,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
  },
});
