import React from 'react';
import { BlurView } from 'expo-blur';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { alpha, colors } from '../../theme/colors';

interface GlassProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  backgroundColor?: string;
  intensity?: number;
}

export function Glass({
  children,
  style,
  borderRadius,
  backgroundColor = alpha(colors.card, 0.4),
  intensity = 40,
}: GlassProps) {
  return (
    <View style={[{ borderRadius, backgroundColor, overflow: 'hidden' }, style]}>
      <BlurView
        intensity={intensity}
        tint="dark"
        style={[StyleSheet.absoluteFillObject, borderRadius ? { borderRadius } : undefined]}
      />
      <View style={borderRadius ? { borderRadius } : undefined}>{children}</View>
    </View>
  );
}
