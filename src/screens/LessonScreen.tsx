import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

export default function LessonScreen({ route }: any) {
  const { lesson } = route.params;
  const player = useVideoPlayer(lesson.videoUrl, (player) => {
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="contain"
      />
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.desc}>{lesson.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  video: {
    width: "100%",
    height: 230,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  desc: {
    fontSize: 16,
    color: "#555",
    marginHorizontal: 16,
  },
});
