import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from '../ui/Button';
import { Screen } from '../ui/Screen';
import { Text } from '../ui/Text';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  actionLabel: string;
  onAction: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AuthLayout({ title, subtitle, actionLabel, onAction, children, footer }: AuthLayoutProps) {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heading}>
          <Text variant="heading" size={fontSizes['4xl']} color={colors.foreground} tracking={-0.5} style={styles.title}>
            {title}
          </Text>
          <Text size={fontSizes.sm} color={colors.mutedForeground}>
            {subtitle}
          </Text>
        </View>

        <View style={styles.fields}>{children}</View>

        <Button label={actionLabel} onPress={onAction} style={styles.action} />

        {footer ? <View style={styles.footer}>{footer}</View> : null}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['8xl'],
  },
  heading: {
    marginBottom: spacing['4xl'],
  },
  title: {
    marginBottom: spacing.md,
  },
  fields: {
    gap: spacing.xl,
    marginBottom: spacing['3xl'],
  },
  action: {
    width: '100%',
  },
  footer: {
    marginTop: spacing['3xl'],
    alignItems: 'center',
  },
});
