import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import type { Project, ProjectStatus } from '../../data/mock';
import { PhosphorIcon } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';

interface ProjectCardProps {
  project: Project;
}

const statusColor: Record<ProjectStatus, string> = {
  Active: colors.secondary,
  Concept: colors.mutedForeground,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.imageWrapper}>
        <Image source={project.image} style={styles.image} resizeMode="cover" />
        <LinearGradient
          colors={['transparent', 'transparent', colors.background]}
          style={styles.overlay}
          pointerEvents="none"
        />
        <View style={styles.badge}>
          <Text
            variant="mono"
            size={fontSizes.xxs}
            weight="bold"
            uppercase
            tracking={1.6}
            color={statusColor[project.status]}
          >
            {project.status}
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.info}>
          <Text variant="heading" size={fontSizes['2xl']} color={colors.foreground} style={styles.title}>
            {project.title}
          </Text>
          <View style={styles.meta}>
            <View style={styles.metaItem}>
              <PhosphorIcon name="calendar" size={sizes.iconSm} color={colors.mutedForeground} />
              <Text size={fontSizes.xs} color={colors.mutedForeground}>
                {project.date}
              </Text>
            </View>
            <Text variant="mono" size={fontSizes.xs} uppercase tracking={-0.3} color={colors.mutedForeground}>
              {project.items}
            </Text>
            <View style={styles.metaItem}>
              <PhosphorIcon name="intersect" size={sizes.iconSm} color={colors.mutedForeground} />
              <Text size={fontSizes.xs} color={colors.mutedForeground}>
                {project.volume}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [styles.dots, pressed && styles.pressed]}
          accessibilityRole="button"
        >
          <PhosphorIcon name="dots-three-vertical-bold" size={sizes.iconMd} color={colors.mutedForeground} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: alpha(colors.card, 0.4),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius['3xl'],
    overflow: 'hidden',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  imageWrapper: {
    aspectRatio: 16 / 9,
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
  badge: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: alpha(colors.background, 0.6),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.1),
    borderRadius: radius.full,
  },
  body: {
    padding: spacing['2xl'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    marginRight: spacing.lg,
  },
  title: {
    marginBottom: spacing.xs,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  dots: {
    width: sizes.buttonSm,
    height: sizes.buttonSm,
    borderRadius: radius.full,
    backgroundColor: alpha(colors.white, 0.05),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
