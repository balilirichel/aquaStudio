import React from 'react';
import { Image, Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import type { LibraryItem } from '../../data/mock';
import { Text } from '../ui/Text';

interface ItemCardProps {
  item: LibraryItem;
  style?: StyleProp<ViewStyle>;
}

export function ItemCard({ item, style }: ItemCardProps) {
  const accent = item.accent === 'secondary' ? colors.secondary : colors.primary;

  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed, style]}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <LinearGradient
          colors={['transparent', alpha(colors.background, 0.8)]}
          style={styles.overlay}
          pointerEvents="none"
        />
      </View>
      <View style={styles.body}>
        <Text size={fontSizes.xxs} uppercase tracking={2} weight="semiBold" color={accent}>
          {item.category}
        </Text>
        <Text variant="heading" size={fontSizes.lg} color={colors.foreground}>
          {item.title}
        </Text>
        <Text size={fontSizes.xs} color={colors.mutedForeground} style={styles.subtitle}>
          {item.subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: alpha(colors.card, 0.4),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius['2xl'],
    overflow: 'hidden',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  imageWrapper: {
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  body: {
    padding: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
});
