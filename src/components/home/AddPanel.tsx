import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { PhosphorIcon, type IconName } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';
import { TankStats, type Stat } from './TankStats';

interface CategoryTile {
  label: string;
  icon: IconName;
  accent: string;
}

const categories: CategoryTile[] = [
  { label: 'Plants', icon: 'leaf-fill', accent: colors.secondary },
  { label: 'Hardscape', icon: 'mountains-fill', accent: colors.primary },
  { label: 'Lighting', icon: 'sun-fill', accent: colors.foreground },
];

interface AddPanelProps {
  stats: Stat[];
}

export function AddPanel({ stats }: AddPanelProps) {
  const translateY = useRef(new Animated.Value(600)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 900,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  return (
    <Animated.View
      style={[
        styles.sheet,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <BlurView intensity={40} tint="dark" style={styles.sheetBlur}>
        <View style={styles.handle} />
        <Text variant="heading" size={fontSizes['2xl']} color={colors.foreground} style={styles.title}>
          Add to this tank
        </Text>
        <View style={styles.grid}>
          {categories.map((category) => (
            <Pressable key={category.label} style={({ pressed }) => [styles.tile, pressed && styles.tilePressed]}>
              <View style={[styles.iconCircle, { backgroundColor: alpha(category.accent, 0.1) }]}>
                <PhosphorIcon name={category.icon} size={sizes.iconLg} color={category.accent} />
              </View>
              <Text size={fontSizes.sm} weight="medium" color={colors.foreground}>
                {category.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <TankStats stats={stats} />
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: radius['3xl'],
    borderTopRightRadius: radius['3xl'],
    borderTopWidth: 1,
    borderTopColor: alpha(colors.white, 0.05),
    ...shadows.sheet,
  },
  sheetBlur: {
    padding: spacing['2xl'],
    paddingBottom: spacing['3xl'],
    borderTopLeftRadius: radius['3xl'],
    borderTopRightRadius: radius['3xl'],
    overflow: 'hidden',
    backgroundColor: alpha(colors.card, 0.85),
  },
  handle: {
    width: spacing['6xl'],
    height: 6,
    backgroundColor: alpha(colors.mutedForeground, 0.3),
    borderRadius: radius.full,
    alignSelf: 'center',
    marginBottom: spacing['3xl'],
  },
  title: {
    marginBottom: spacing['2xl'],
  },
  grid: {
    flexDirection: 'row',
    gap: spacing.xl,
    marginBottom: spacing['2xl'],
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: alpha(colors.background, 0.4),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: 20,
    gap: spacing.md,
  },
  tilePressed: {
    transform: [{ scale: 0.95 }],
  },
  iconCircle: {
    width: sizes.button,
    height: sizes.button,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
