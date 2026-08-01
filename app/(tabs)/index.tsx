import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AddPanel } from '../../src/components/home/AddPanel';
import { SelectionBox } from '../../src/components/home/SelectionBox';
import { TopBar } from '../../src/components/home/TopBar';
import { currentTank } from '../../src/data/mock';
import { alpha, colors } from '../../src/theme/colors';
import type { Stat } from '../../src/components/home/TankStats';

const stats: Stat[] = [
  { label: 'Volume', value: currentTank.volume },
  { label: 'Temp', value: currentTank.temp },
  { label: 'CO2', value: currentTank.co2, accent: 'secondary' },
];

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <ImageBackground source={currentTank.image} style={styles.background} resizeMode="cover">
        <LinearGradient
          colors={[alpha(colors.background, 0.7), alpha(colors.background, 0.2), colors.background]}
          style={styles.overlay}
          pointerEvents="none"
        />
        <TopBar tankName={currentTank.name} />
        <SelectionBox label={currentTank.selectedElement} />
        <AddPanel stats={stats} />
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
});
