import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import { PhosphorIcon, type IconName } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';

export type MenuAccent = 'primary' | 'secondary' | 'foreground' | 'destructive';

interface SettingsMenuItemProps {
  icon: IconName;
  title: string;
  subtitle?: string;
  accent?: MenuAccent;
  destructive?: boolean;
  onPress?: () => void;
}

const accentColor: Record<MenuAccent, string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  foreground: colors.foreground,
  destructive: colors.destructive,
};

export function SettingsMenuItem({
  icon,
  title,
  subtitle,
  accent = 'foreground',
  destructive = false,
  onPress,
}: SettingsMenuItemProps) {
  const tint = destructive ? colors.destructive : accentColor[accent];
  const titleColor = destructive ? colors.destructive : colors.foreground;
  const chevronColor = destructive ? alpha(colors.destructive, 0.5) : colors.mutedForeground;

  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      accessibilityRole="button"
      onPress={onPress}
    >
      <View style={[styles.iconCircle, { backgroundColor: alpha(tint, destructive ? 0.2 : 0.1) }]}>
        <PhosphorIcon name={icon} size={sizes.iconMd} color={tint} />
      </View>
      <View style={styles.textCol}>
        <Text size={fontSizes.sm} weight="medium" color={titleColor}>
          {title}
        </Text>
        {subtitle ? (
          <Text size={fontSizes.xs} color={colors.mutedForeground}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <PhosphorIcon name="caret-right-bold" size={fontSizes.sm} color={chevronColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: alpha(colors.card, 0.4),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius.lg,
    gap: spacing.sm + 6,
  },
  pressed: {
    transform: [{ scale: 0.99 }],
  },
  iconCircle: {
    width: sizes.buttonSm,
    height: sizes.buttonSm,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
  },
});
