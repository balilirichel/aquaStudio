import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, sizes, spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { PhosphorIcon } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';

interface ProfileHeaderProps {
  name: string;
  handle: string;
  bio: string;
  avatar: number;
  stats: { value: string; label: string; accent: 'primary' | 'secondary' | 'foreground' }[];
}

const accentColor: Record<string, string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  foreground: colors.foreground,
};

export function ProfileHeader({ name, handle, bio, avatar, stats }: ProfileHeaderProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.blob, styles.blobPrimary]} />
      <View style={[styles.blob, styles.blobSecondary]} />

      <View style={styles.avatarWrapper}>
        <View style={styles.avatarShadow}>
          <Image source={avatar} style={styles.avatar} resizeMode="cover" />
        </View>
        <Pressable style={({ pressed }) => [styles.editButton, pressed && styles.pressed]} accessibilityRole="button">
          <PhosphorIcon name="pencil-simple-bold" size={sizes.iconSm} color={colors.primaryForeground} />
        </Pressable>
      </View>

      <Text variant="heading" size={fontSizes['2xl']} color={colors.foreground} style={styles.name}>
        {name}
      </Text>
      <Text variant="mono" size={fontSizes.xs} color={colors.mutedForeground} style={styles.handle}>
        {handle}
      </Text>
      <Text size={fontSizes.sm} color={alpha(colors.mutedForeground, 0.9)} center style={styles.bio}>
        {bio}
      </Text>

      <View style={styles.statsRow}>
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            {index > 0 ? <View style={styles.divider} /> : null}
            <View style={styles.stat}>
              <Text variant="mono" size={fontSizes.base} weight="bold" color={accentColor[stat.accent]}>
                {stat.value}
              </Text>
              <Text size={fontSizes.xxs} uppercase tracking={1.2} color={colors.mutedForeground} style={styles.statLabel}>
                {stat.label}
              </Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: alpha(colors.card, 0.4),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius['3xl'],
    padding: spacing['2xl'],
    alignItems: 'center',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: radius.full,
  },
  blobPrimary: {
    top: -48,
    right: -48,
    backgroundColor: alpha(colors.primary, 0.1),
  },
  blobSecondary: {
    bottom: -48,
    left: -48,
    backgroundColor: alpha(colors.secondary, 0.1),
  },
  avatarWrapper: {
    marginBottom: spacing.lg,
  },
  avatarShadow: {
    width: sizes.avatar,
    height: sizes.avatar,
    borderRadius: radius.full,
    ...shadows.avatar,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: alpha(colors.primary, 0.8),
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: spacing['3xl'],
    height: spacing['3xl'],
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
  name: {
    marginBottom: spacing.xs / 2,
  },
  handle: {
    marginBottom: spacing.md,
  },
  bio: {
    maxWidth: 260,
    lineHeight: 20,
    marginBottom: spacing['2xl'],
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm + 6,
    backgroundColor: alpha(colors.background, 0.4),
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    marginTop: spacing.xs / 2,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: alpha(colors.white, 0.1),
  },
});
