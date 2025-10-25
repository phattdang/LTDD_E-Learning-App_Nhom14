import { Image, StyleSheet, View } from "react-native";

export default function CoverImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/workspace-with-keyboard-and-laptop.png")}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../../assets/professional-woman-portrait.png")}
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
