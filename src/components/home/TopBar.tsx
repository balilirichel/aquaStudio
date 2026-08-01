import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { PhosphorIcon } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';
import { Glass } from '../ui/Glass';

interface TopBarProps {
  tankName: string;
}

export function TopBar({ tankName }: TopBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.sm }]}>
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
        <Glass borderRadius={radius.full} style={styles.pill}>
          <Text variant="heading" size={fontSizes.xl} color={colors.foreground} tracking={0.5}>
            {tankName}
          </Text>
          <PhosphorIcon name="caret-down-bold" size={sizes.iconMd} color={colors.mutedForeground} />
        </Glass>
      </Pressable>

      <View style={styles.actions}>
        <GlassButton icon="arrow-u-up-left-bold" />
        <GlassButton icon="arrow-u-up-right-bold" />
        <Pressable style={({ pressed }) => [styles.checkButton, pressed && styles.pressed]}>
          <PhosphorIcon name="check-bold" size={sizes.iconLg} color={colors.primaryForeground} />
        </Pressable>
      </View>
    </View>
  );
}

function GlassButton({ icon }: { icon: 'arrow-u-up-left-bold' | 'arrow-u-up-right-bold' }) {
  return (
    <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
      <Glass borderRadius={radius.full} style={styles.glassButton}>
        <PhosphorIcon name={icon} size={sizes.iconLg} color={colors.foreground} />
      </Glass>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing['2xl'],
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.1),
    ...shadows.lg,
  },
  actions: {
    flexDirection: 'column',
    gap: spacing.lg,
  },
  glassButton: {
    width: sizes.button,
    height: sizes.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.1),
    ...shadows.lg,
  },
  checkButton: {
    width: sizes.button,
    height: sizes.button,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
    backgroundColor: alpha(colors.primary, 0.9),
    borderWidth: 1,
    borderColor: colors.primary,
    ...shadows.primary,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
