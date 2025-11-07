import { ScrollView, StyleSheet, View } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader";
import CoverImage from "../components/profile/CoverImage";
import UserInfo from "../components/profile/UserInfo";
import StatsSection from "../components/profile/StatsSection";
import SavedCoursesSection from "../components/profile/SavedCoursesSection";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader />
      <CoverImage />
      <UserInfo />
      <StatsSection />
      <SavedCoursesSection />
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomPadding: {
    height: 20,
  },
});
