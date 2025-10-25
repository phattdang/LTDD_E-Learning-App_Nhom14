import { FlatList, StyleSheet } from "react-native"
import SearchResultCard from "./SearchResultCard"

interface Course {
  id: string
  title: string
  instructor: string
  price: string
  rating: number
  reviews: number
  lessons: number
  image: any
  isBestSeller: boolean
  isSaved: boolean
}

interface SearchResultsListProps {
  results: Course[]
}

export default function SearchResultsList({ results }: SearchResultsListProps) {
  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SearchResultCard course={item} />}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 12,
  },
})
