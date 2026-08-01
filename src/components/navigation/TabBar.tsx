import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { alpha, colors } from '../../theme/colors';
import { fontSizes } from '../../theme/typography';
import { sizes, spacing } from '../../theme/spacing';
import { PhosphorIcon, type IconName } from '../icons/PhosphorIcon';
import { Text } from '../ui/Text';

interface TabConfig {
  name: string;
  label: string;
  icon: IconName;
  activeIcon: IconName;
}

const TABS: TabConfig[] = [
  { name: 'index', label: 'Home', icon: 'house', activeIcon: 'house-fill' },
  { name: 'library', label: 'Library', icon: 'books', activeIcon: 'books-fill' },
  { name: 'projects', label: 'Projects', icon: 'folder', activeIcon: 'folder-fill' },
  { name: 'profile', label: 'Profile', icon: 'user', activeIcon: 'user-fill' },
];

export function TabBar({ state, navigation, insets }: BottomTabBarProps) {
  const bottomPadding = Math.max(insets.bottom, 0);

  return (
      <BlurView intensity={40} tint="dark" style={[styles.container, { height: sizes.tabBar + bottomPadding, paddingBottom: bottomPadding }]}>
      <View style={styles.border} />
      <View style={styles.row}>
        {state.routes.map((route, index) => {
          const tab = TABS.find((t) => t.name === route.name);
          if (!tab) return null;
          const isFocused = state.index === index;
          const color = isFocused ? colors.primary : colors.mutedForeground;

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable key={route.key} accessibilityRole="button" accessibilityState={{ selected: isFocused }} onPress={onPress} style={({ pressed }) => [styles.tab, pressed && styles.pressed]}>
              <PhosphorIcon name={isFocused ? tab.activeIcon : tab.icon} size={sizes.iconLg} color={color} />
              <Text size={fontSizes.xxs} weight="medium" color={color}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: alpha(colors.background, 0.95),
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: alpha(colors.white, 0.05),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.lg,
  },
  tab: {
    width: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
