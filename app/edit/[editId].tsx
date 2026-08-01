import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { PhosphorIcon } from '../../src/components/icons/PhosphorIcon';
import { Chip } from '../../src/components/ui/Chip';
import { Glass } from '../../src/components/ui/Glass';
import { Screen } from '../../src/components/ui/Screen';
import { Text } from '../../src/components/ui/Text';
import { alpha, colors } from '../../src/theme/colors';
import { fontSizes } from '../../src/theme/typography';
import { radius, sizes, spacing } from '../../src/theme/spacing';
import { shadows } from '../../src/theme/shadows';

const stylesOption = ['Nature', 'Iwagumi', 'Dutch', 'Paludarium'];

export default function EditScreen() {
  const { editId } = useLocalSearchParams<{ editId: string }>();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={({ pressed }) => [pressed && styles.pressed]}>
            <Glass borderRadius={radius.full} style={styles.backButton}>
              <PhosphorIcon name="arrow-u-up-left-bold" size={sizes.iconLg} color={colors.foreground} />
            </Glass>
          </Pressable>
          <Text variant="heading" size={fontSizes['4xl']} color={colors.foreground} tracking={-0.5}>
            Edit
          </Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.section}>
          <Text variant="mono" size={fontSizes.xs} uppercase tracking={2} color={colors.mutedForeground} style={styles.label}>
            Edit #{editId}
          </Text>
          <Text size={fontSizes.sm} color={colors.mutedForeground} style={styles.caption}>
            This screen will host the photo-to-scape editing flow. Choose a style to get started.
          </Text>
        </View>

        <View style={styles.section}>
          <Text variant="mono" size={fontSizes.xs} uppercase tracking={2} color={colors.mutedForeground} style={styles.label}>
            Scape Style
          </Text>
          <View style={styles.chips}>
            {stylesOption.map((option) => (
              <Chip key={option} label={option} active={option === 'Iwagumi'} />
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['8xl'],
  },
  header: {
    paddingTop: spacing['2xl'],
    marginBottom: spacing['4xl'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: sizes.button,
    height: sizes.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.1),
    ...shadows.lg,
  },
  placeholder: {
    width: sizes.button,
    height: sizes.button,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  section: {
    marginBottom: spacing['4xl'],
  },
  label: {
    marginBottom: spacing.md,
  },
  caption: {
    lineHeight: 20,
    maxWidth: 300,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
});
