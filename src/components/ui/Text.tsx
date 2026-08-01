import React from 'react';
import { Text as RNText, type TextProps as RNTextProps, type StyleProp, type TextStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts, fontSizes } from '../../theme/typography';

export type TextVariant = 'sans' | 'heading' | 'mono';
export type TextWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextVariant;
  size?: number;
  weight?: TextWeight;
  color?: string;
  uppercase?: boolean;
  tracking?: number;
  center?: boolean;
  style?: StyleProp<TextStyle>;
}

const fontByWeight: Record<TextVariant, Record<TextWeight, string>> = {
  sans: {
    regular: fonts.sans,
    medium: fonts.sansMedium,
    semiBold: fonts.sansSemiBold,
    bold: fonts.sansBold,
  },
  heading: {
    regular: fonts.heading,
    medium: fonts.headingMedium,
    semiBold: fonts.headingSemiBold,
    bold: fonts.headingBold,
  },
  mono: {
    regular: fonts.mono,
    medium: fonts.mono,
    semiBold: fonts.monoSemiBold,
    bold: fonts.monoBold,
  },
};

export function Text({
  variant = 'sans',
  size = fontSizes.sm,
  weight = 'regular',
  color = colors.foreground,
  uppercase = false,
  tracking,
  center = false,
  style,
  ...rest
}: TextProps) {
  return (
    <RNText
      {...rest}
      style={[
        {
          fontFamily: fontByWeight[variant][weight],
          fontSize: size,
          color,
          letterSpacing: tracking,
          textTransform: uppercase ? 'uppercase' : 'none',
          textAlign: center ? 'center' : undefined,
        },
        style,
      ]}
    />
  );
}
