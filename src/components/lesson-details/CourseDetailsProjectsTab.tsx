import React from "react"
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const CourseDetailsProjectsTab: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Wireframe",
      author: "Ramono Wultschner",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Personal",
      author: "Thomas Carlson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Wireframe",
      author: "Ramono Wultschner",
      image: "https://via.placeholder.com/150",
    },
  ]

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Upload project */}
      <View style={styles.uploadProjectContainer}>
        <Ionicons name="cloud-upload-outline" size={40} color="#00BCD4" />
        <Text style={styles.uploadProjectText}>Upload your project here</Text>
      </View>

      {/* Projects list */}
      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>12 Student Projects</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.projectsGrid}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <Image source={{ uri: project.image }} style={styles.projectImage} />
            <Text style={styles.projectTitle} numberOfLines={1}>
              {project.title}
            </Text>
            <Text style={styles.projectAuthor}>{project.author}</Text>
          </View>
        ))}
      </View>

      {/* Project Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project Description</Text>
        <Text style={styles.descriptionText}>
          Culpa aliquip commodo incididunt nostrud aliqua ut adipisicing officia. Laborum consequat ea reprehenderit
          voluptate voluptate quis pariatur. Laboris proident ea fugiat nulla...
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Resources */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resources (2)</Text>
        <View style={styles.resourceItem}>
          <Ionicons name="document" size={32} color="#999" />
          <View style={styles.resourceInfo}>
            <Text style={styles.resourceName}>Document 1.txt</Text>
            <Text style={styles.resourceSize}>612 kb</Text>
          </View>
          <Ionicons name="download" size={20} color="#00BCD4" />
        </View>
        <View style={styles.resourceItem}>
          <Ionicons name="document" size={32} color="#999" />
          <View style={styles.resourceInfo}>
            <Text style={styles.resourceName}>Document 2.pdf</Text>
            <Text style={styles.resourceSize}>35 Mb</Text>
          </View>
          <Ionicons name="download" size={20} color="#00BCD4" />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  uploadProjectContainer: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#00BCD4",
    borderRadius: 12,
    paddingVertical: 32,
    alignItems: "center",
    marginBottom: 20,
  },
  uploadProjectText: {
    fontSize: 14,
    color: "#00BCD4",
    fontWeight: "600",
    marginTop: 12,
  },
  projectsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  projectsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  viewMore: {
    fontSize: 12,
    color: "#00BCD4",
    fontWeight: "600",
  },
  projectsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  projectCard: {
    width: 110,
  },
  projectImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  projectAuthor: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  seeMore: {
    color: "#00BCD4",
    fontSize: 13,
    fontWeight: "600",
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 12,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
  resourceSize: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
})

export default CourseDetailsProjectsTab
