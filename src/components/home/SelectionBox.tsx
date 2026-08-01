import React from 'react';
import { StyleSheet, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { Text } from '../ui/Text';
import { Glass } from '../ui/Glass';

interface SelectionBoxProps {
  label: string;
}

const DOT_SIZE = 12;

export function SelectionBox({ label }: SelectionBoxProps) {
  return (
    <View style={styles.box}>
      <View style={[styles.dot, styles.dotTL]} />
      <View style={[styles.dot, styles.dotTR]} />
      <View style={[styles.dot, styles.dotBL]} />
      <View style={[styles.dot, styles.dotBR]} />
      <View style={styles.labelWrapper}>
        <Glass borderRadius={radius.sm} backgroundColor={alpha(colors.card, 0.8)} style={styles.label}>
          <Text size={fontSizes.sm} weight="medium" color={colors.foreground} tracking={0.5}>
            {label}
          </Text>
        </Glass>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    top: '35%',
    left: '20%',
    width: 192,
    height: 224,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: alpha(colors.primary, 0.8),
    backgroundColor: alpha(colors.primary, 0.05),
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  dotTL: { top: -6, left: -6 },
  dotTR: { top: -6, right: -6 },
  dotBL: { bottom: -6, left: -6 },
  dotBR: { bottom: -6, right: -6 },
  labelWrapper: {
    transform: [{ translateY: 48 }],
  },
  label: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.1),
    ...shadows.lg,
  },
});
