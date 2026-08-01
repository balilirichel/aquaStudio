import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { alpha, colors } from '../../theme/colors';
import { fontSizes, fonts } from '../../theme/typography';
import { radius, spacing } from '../../theme/spacing';
import { PhosphorIcon } from '../icons/PhosphorIcon';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  compact?: boolean;
  style?: View['props']['style'];
}

export function SearchBar({ placeholder, value, onChangeText, compact = false, style }: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, { paddingVertical: compact ? 14 : spacing.lg }, focused && styles.focused, style]}>
      <PhosphorIcon
        name="magnifying-glass"
        size={fontSizes.base}
        color={focused ? colors.primary : colors.mutedForeground}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedForeground}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: alpha(colors.card, 0.5),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    borderRadius: radius.lg,
  },
  focused: {
    borderColor: alpha(colors.primary, 0.5),
    shadowColor: alpha(colors.primary, 0.25),
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: spacing.md,
    paddingVertical: 0,
    fontSize: fontSizes.sm,
    fontFamily: fonts.sans,
    color: colors.foreground,
  },
});
