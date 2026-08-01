import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ProfileHeader } from '../../src/components/profile/ProfileHeader';
import { SettingsMenuItem } from '../../src/components/profile/SettingsMenuItem';
import { Button } from '../../src/components/ui/Button';
import { Screen } from '../../src/components/ui/Screen';
import { Text } from '../../src/components/ui/Text';
import { profile } from '../../src/data/mock';
import { colors } from '../../src/theme/colors';
import { fontSizes } from '../../src/theme/typography';
import { spacing } from '../../src/theme/spacing';

const H_PADDING = spacing['2xl'];

export default function ProfileScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text variant="heading" size={fontSizes['4xl']} color={colors.foreground} tracking={-0.5}>
            Profile
          </Text>
          <Button variant="glass" shape="round" icon="gear-six-bold" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <ProfileHeader
            name={profile.name}
            handle={profile.handle}
            bio={profile.bio}
            avatar={profile.avatar}
            stats={[...profile.stats]}
          />
        </View>

        <View style={styles.settings}>
          <Text variant="mono" size={fontSizes.xs} uppercase tracking={2} color={colors.mutedForeground} style={styles.settingsLabel}>
            Account Settings
          </Text>
          <SettingsMenuItem icon="drop-fill" title="Water Care Schedules" subtitle="Water changes & dosing alerts" accent="primary" />
          <SettingsMenuItem icon="floppy-disk-fill" title="Saved Layouts" subtitle="12 bookmarked designs" accent="secondary" />
          <SettingsMenuItem icon="bell-fill" title="Notifications" subtitle="Custom Reminders & Updates" accent="foreground" />
          <SettingsMenuItem icon="sign-out-bold" title="Log Out" destructive />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing['8xl'],
  },
  header: {
    paddingHorizontal: H_PADDING,
    paddingTop: spacing['2xl'],
    marginBottom: spacing['2xl'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    paddingHorizontal: H_PADDING,
    marginBottom: spacing['3xl'],
  },
  settings: {
    paddingHorizontal: H_PADDING,
    gap: spacing.md,
  },
  settingsLabel: {
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.sm,
  },
});
