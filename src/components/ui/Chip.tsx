import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import { Text } from './Text';

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        active ? styles.active : styles.inactive,
        pressed && styles.pressed,
      ]}
    >
      <Text size={fontSizes.sm} weight="medium" color={active ? colors.primaryForeground : colors.mutedForeground}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md - 2,
    borderRadius: radius.full,
  },
  active: {
    backgroundColor: colors.primary,
  },
  inactive: {
    backgroundColor: alpha(colors.card, 0.5),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
