import React from 'react';
import { StyleSheet, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import { Text } from '../ui/Text';

export interface Stat {
  label: string;
  value: string;
  accent?: 'primary' | 'secondary' | 'foreground';
}

interface TankStatsProps {
  stats: Stat[];
}

const accentColor: Record<NonNullable<Stat['accent']>, string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  foreground: colors.foreground,
};

export function TankStats({ stats }: TankStatsProps) {
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          {index > 0 ? <View style={styles.divider} /> : null}
          <View style={styles.stat}>
            <Text size={fontSizes.xxs} uppercase tracking={1.2} color={colors.mutedForeground} weight="medium">
              {stat.label}
            </Text>
            <Text variant="mono" size={fontSizes.sm} color={accentColor[stat.accent ?? 'foreground']} style={styles.value}>
              {stat.value}
            </Text>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: alpha(colors.background, 0.3),
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
  },
  stat: {
    flexDirection: 'column',
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: alpha(colors.white, 0.1),
  },
  value: {
    marginTop: 4,
  },
});
