import React from 'react';
import { StyleSheet, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import { PhosphorIcon } from '../icons/PhosphorIcon';
import { Button } from '../ui/Button';
import { Text } from '../ui/Text';

export function AddElementCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <PhosphorIcon name="camera-plus-fill" size={sizes.iconLg} color={colors.mutedForeground} />
      </View>
      <Text variant="heading" size={fontSizes.xl} color={colors.foreground} center>
        Grow your collection
      </Text>
      <Text size={fontSizes.sm} color={colors.mutedForeground} center style={styles.caption}>
        Photograph your first plant or stone to start your collection
      </Text>
      <Button variant="secondary" label="Add New Element" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing['3xl'],
    borderRadius: radius['2xl'],
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: alpha(colors.white, 0.1),
    backgroundColor: alpha(colors.card, 0.2),
    alignItems: 'center',
  },
  iconCircle: {
    width: spacing['7xl'],
    height: spacing['7xl'],
    borderRadius: radius.full,
    backgroundColor: alpha(colors.muted, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  caption: {
    maxWidth: 240,
    marginTop: spacing.sm,
  },
  button: {
    marginTop: spacing['2xl'],
  },
});
