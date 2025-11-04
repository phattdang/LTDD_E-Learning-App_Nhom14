// CartScreen.tsx
import React, { useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
  ToastAndroid,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "react-native-paper";
import { useAuth } from "../contexts/AuthContext";
import Course from "../types/Course";
import useFetch from "../hooks/useFetch";
import courseApi from "../apis/courseApi";
import CourseCard from "../components/home/CourseCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import userApi from "../apis/userApi";
import enrollmentApi from "../apis/enrollmentApi";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const CartScreen = () => {
  const navigation = useNavigation<any>();
  const { user, setUser } = useAuth();

  const {
    data: allCourses,
    loading,
    error,
  } = useFetch<Course>(courseApi.getAll);

  const cartCourses = useMemo(() => {
    if (!user || !allCourses) return [];
    return allCourses.filter((c) => user.cartCourseIds?.includes(Number(c.id)));
  }, [user, allCourses]);

  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const toggleSelect = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const toggleSelectAll = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (selectedIds.length === cartCourses.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cartCourses.map((c) => c.id));
    }
  }, [selectedIds.length, cartCourses]);

  const totalPrice = useMemo(() => {
    return cartCourses
      .filter((c) => selectedIds.includes(c.id))
      .reduce((sum, c) => sum + Number(c.price || 0), 0);
  }, [selectedIds, cartCourses]);

  const handleCheckout = async () => {
    try {
      if (!user || selectedIds.length === 0) return;

      // Normalize types: ensure IDs in user arrays are numbers
      const existingCourses = (user.courseId || []).map((id: any) =>
        Number(id)
      );
      const existingCart = (user.cartCourseIds || []).map((id: any) =>
        Number(id)
      );

      const selectedNums = selectedIds.map((id) => Number(id));

      // new course list & new cart (numbers)
      const newCourses = Array.from(
        new Set([...existingCourses, ...selectedNums])
      );
      const newCart = existingCart.filter((id) => !selectedNums.includes(id));

      // 1) Update user on server
      const userUpdatePayload = {
        courseId: newCourses,
        cartCourseIds: newCart,
      };

      console.log("Updating user:", user.id, userUpdatePayload);
      const userRes = await userApi.update(String(user.id), userUpdatePayload);
      console.log("User update response:", userRes.data);

      // 2) Create enrollments (use Promise.all for parallel)
      const now = new Date().toISOString();
      const enrollPromises = selectedNums.map((courseId) =>
        enrollmentApi.add({
          userId: String(user.id),
          courseId: String(courseId),
          enrolledDate: new Date(),
          progress: 0,
        })
      );

      const enrollRes = await Promise.all(enrollPromises);
      console.log(
        "Enrollment results:",
        enrollRes.map((r) => r.data)
      );

      // 3) Update local user state from server response (most reliable)
      // If userRes.data is the full user object, use it; otherwise merge.
      const updatedUserFromServer = userRes.data || {
        ...user,
        courseId: newCourses,
        cartCourseIds: newCart,
      };
      setUser(updatedUserFromServer);

      // clear selection
      setSelectedIds([]);

      // notify success
      if (Platform.OS === "android") {
        ToastAndroid.show("Thanh toán thành công!", ToastAndroid.SHORT);
      } else {
        Alert.alert("✅ Thành công", "Thanh toán thành công!");
      }

      // navigate home — ensure route name matches your navigator
      // If Tabs -> Home screen is inside a nested stack/tab, choose the correct name.
      navigation.navigate("HomeTab"); // or "Home" if that's your route name
    } catch (err: any) {
      console.error("Checkout error:", err.response ?? err);
      Alert.alert(
        "Lỗi",
        err.message || "Không thể thanh toán. Vui lòng thử lại sau!"
      );
    }
  };

  /* ------------------- UI ------------------- */
  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error loading courses</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      {/* Header */}

      {cartCourses.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {/* Select All Row */}
          <Pressable
            style={styles.selectAllRow}
            onPress={toggleSelectAll}
            android_ripple={{ color: "#eee" }}
          >
            <Checkbox
              status={
                selectedIds.length === cartCourses.length
                  ? "checked"
                  : selectedIds.length > 0
                  ? "indeterminate"
                  : "unchecked"
              }
              color={theme.primary}
              onPress={toggleSelectAll}
            />
            <Text style={styles.selectAllText}>Chọn tất cả</Text>
          </Pressable>

          {/* List */}
          <FlatList
            data={cartCourses}
            keyExtractor={(i) => i.id.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CartItem
                course={item}
                selected={selectedIds.includes(item.id)}
                onToggle={() => toggleSelect(item.id)}
              />
            )}
          />

          {/* Bottom Bar (sticky) */}
          <View style={styles.bottomBar}>
            <Pressable
              style={styles.bottomSelect}
              onPress={toggleSelectAll}
              android_ripple={{ color: "#eee" }}
            >
              <Checkbox
                status={
                  selectedIds.length === cartCourses.length
                    ? "checked"
                    : selectedIds.length > 0
                    ? "indeterminate"
                    : "unchecked"
                }
                color={theme.primary}
                onPress={toggleSelectAll}
              />
              <Text style={styles.bottomSelectText}>Tất cả</Text>
            </Pressable>

            <View style={styles.rightSection}>
              <Text style={styles.totalLabel}>
                Tổng:{" "}
                <Text style={styles.totalValue}>
                  {totalPrice.toLocaleString("vi-VN")}đ
                </Text>
              </Text>
              <Pressable
                style={[
                  styles.checkoutBtn,
                  selectedIds.length === 0 && styles.checkoutBtnDisabled,
                ]}
                disabled={selectedIds.length === 0}
                onPress={handleCheckout}
                android_ripple={{ color: "#fff" }}
              >
                <Text style={styles.checkoutText}>
                  Thanh toán ({selectedIds.length})
                </Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

/* -------------------------------------------------
   Sub‑components
   ------------------------------------------------- */
const CartItem = React.memo(
  ({
    course,
    selected,
    onToggle,
  }: {
    course: Course;
    selected: boolean;
    onToggle: () => void;
  }) => {
    return (
      <Pressable
        style={[styles.itemRow, selected && styles.itemRowSelected]}
        onPress={onToggle}
        android_ripple={{ color: "#f0f0f0" }}
      >
        <Checkbox
          status={selected ? "checked" : "unchecked"}
          color={theme.primary}
        />
        <View style={styles.cardWrapper}>
          <CourseCard course={course} isVertical />
        </View>
      </Pressable>
    );
  }
);

const EmptyCart = () => (
  <View style={styles.emptyContainer}>
    <Ionicons name="cart-outline" size={80} color="#ccc" />
    <Text style={styles.emptyText}>Chưa có khóa học nào trong giỏ hàng</Text>
  </View>
);

const LoadingSkeleton = () => (
  <View style={styles.center}>
    {Array.from({ length: 3 }).map((_, i) => (
      <View key={i} style={styles.skeletonCard}>
        <View style={styles.skeletonImage} />
        <View style={styles.skeletonLines}>
          <View style={styles.skeletonLine} />
          <View style={[styles.skeletonLine, { width: "70%" }]} />
        </View>
      </View>
    ))}
  </View>
);

/* -------------------------------------------------
   Theme & Styles
   ------------------------------------------------- */
const theme = {
  primary: "#00BCD4",
  background: "#fff",
  surface: "#f9f9f9",
  text: "#212121",
  muted: "#777",
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.background },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { marginLeft: 12, fontSize: 20, fontWeight: "700", color: theme.text },

  /* Select All */
  selectAllRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selectAllText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: theme.text,
  },

  /* List */
  list: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 100 }, // space for bottom bar

  /* Item */
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: theme.surface,
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemRowSelected: { backgroundColor: "#e6f7f9" },
  cardWrapper: { flex: 1, marginLeft: 12 },

  /* Bottom Bar */
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.background,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 8,
  },
  bottomSelect: { flexDirection: "row", alignItems: "center" },
  bottomSelectText: { marginLeft: 8, fontSize: 16, color: theme.text },

  rightSection: { flex: 1, alignItems: "flex-end" },
  totalLabel: { fontSize: 16, color: theme.text, marginBottom: 4 },
  totalValue: { color: theme.primary, fontWeight: "700" },

  checkoutBtn: {
    backgroundColor: theme.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutBtnDisabled: { backgroundColor: "#ccc" },
  checkoutText: { color: "#fff", fontWeight: "600", fontSize: 16 },

  /* Empty */
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { marginTop: 16, fontSize: 16, color: theme.muted },

  /* Loading */
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  skeletonCard: {
    flexDirection: "row",
    backgroundColor: theme.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  skeletonImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  skeletonLines: { flex: 1, marginLeft: 12, justifyContent: "center" },
  skeletonLine: {
    height: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8,
  },

  error: { color: "red", fontSize: 16 },
});

export default CartScreen;
