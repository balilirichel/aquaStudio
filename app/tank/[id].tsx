import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { TankStats, type Stat } from '../../src/components/home/TankStats';
import { PhosphorIcon } from '../../src/components/icons/PhosphorIcon';
import { Glass } from '../../src/components/ui/Glass';
import { Text } from '../../src/components/ui/Text';
import { currentTank } from '../../src/data/mock';
import { alpha, colors } from '../../src/theme/colors';
import { fontSizes } from '../../src/theme/typography';
import { radius, sizes, spacing } from '../../src/theme/spacing';
import { shadows } from '../../src/theme/shadows';

const stats: Stat[] = [
  { label: 'Volume', value: currentTank.volume },
  { label: 'Temp', value: currentTank.temp },
  { label: 'CO2', value: currentTank.co2, accent: 'secondary' },
];

export default function TankScreen() {
  useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.root}>
      <ImageBackground source={currentTank.image} style={styles.background} resizeMode="cover">
        <LinearGradient
          colors={[alpha(colors.background, 0.6), alpha(colors.background, 0.2), colors.background]}
          style={styles.overlay}
          pointerEvents="none"
        />
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={({ pressed }) => [pressed && styles.pressed]}>
            <Glass borderRadius={radius.full} style={styles.backButton}>
              <PhosphorIcon name="arrow-u-up-left-bold" size={sizes.iconLg} color={colors.foreground} />
            </Glass>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text variant="heading" size={fontSizes['2xl']} color={colors.foreground} style={styles.title}>
            {currentTank.name}
          </Text>
          <TankStats stats={stats} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: spacing['2xl'],
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
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing['2xl'],
    gap: spacing.lg,
  },
  title: {
    textAlign: 'center',
  },
});
