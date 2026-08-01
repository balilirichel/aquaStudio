import React from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { radius } from '../../theme/spacing';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  padded?: boolean;
  border?: boolean;
}

export function Card({ children, style, contentStyle, padded = true, border = true }: CardProps) {
  return (
    <View style={[styles.base, border && styles.bordered, style]}>
      <View style={[padded && styles.padded, contentStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: alpha(colors.card, 0.4),
    borderRadius: radius['2xl'],
  },
  bordered: {
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
  },
  padded: {
    padding: radius['2xl'],
  },
});
