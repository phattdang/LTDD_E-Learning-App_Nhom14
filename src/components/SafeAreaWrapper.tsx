import type React from "react"
import { View, type ViewProps } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface SafeAreaWrapperProps extends ViewProps {
  children: React.ReactNode
}

export default function SafeAreaWrapper({ children, style, ...props }: SafeAreaWrapperProps) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}
