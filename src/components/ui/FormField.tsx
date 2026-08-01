import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes, fonts } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import { Text } from './Text';

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences';
}

export function FormField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}: FormFieldProps) {
  return (
    <View style={styles.container}>
      <Text size={fontSizes.xxs} uppercase tracking={1.2} color={colors.mutedForeground} weight="medium">
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedForeground}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  input: {
    backgroundColor: alpha(colors.card, 0.5),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    fontSize: fontSizes.sm,
    fontFamily: fonts.sans,
    color: colors.foreground,
  },
});
