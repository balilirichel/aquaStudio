import React from 'react';
import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { radius, sizes, spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { fontSizes } from '../../theme/typography';
import { PhosphorIcon, type IconName } from '../icons/PhosphorIcon';
import { Text } from './Text';

export type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'ghost';
export type ButtonShape = 'pill' | 'round' | 'square';

export interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: number;
  icon?: IconName;
  iconColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const palette: Record<ButtonVariant, { background: string; text: string; border?: string; shadow?: ViewStyle }> = {
  primary: { background: alpha(colors.primary, 0.9), text: colors.primaryForeground, shadow: shadows.primary },
  secondary: { background: colors.secondary, text: colors.secondaryForeground, shadow: shadows.md },
  glass: {
    background: alpha(colors.card, 0.4),
    text: colors.foreground,
    border: alpha(colors.white, 0.1),
    shadow: shadows.lg,
  },
  ghost: { background: 'transparent', text: colors.foreground },
};

export function Button({
  label,
  variant = 'primary',
  shape = 'pill',
  size = sizes.button,
  icon,
  iconColor,
  onPress,
  disabled = false,
  style,
}: ButtonProps) {
  const paletteEntry = palette[variant];
  const isRound = shape === 'round';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: paletteEntry.background,
          borderColor: paletteEntry.border,
          borderWidth: paletteEntry.border ? 1 : 0,
          borderRadius: isRound ? size / 2 : shape === 'square' ? radius.lg : radius.full,
          width: isRound ? size : undefined,
          height: isRound ? size : undefined,
          ...paletteEntry.shadow,
        },
        shape === 'pill' && styles.pill,
        shape === 'square' && { width: size, height: size },
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {icon ? (
        <PhosphorIcon name={icon} size={shape === 'round' ? sizes.iconLg : sizes.iconMd} color={iconColor ?? paletteEntry.text} />
      ) : null}
      {label ? (
        <Text size={fontSizes.sm} weight={variant === 'secondary' ? 'semiBold' : 'medium'} color={paletteEntry.text}>
          {label}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.md,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
