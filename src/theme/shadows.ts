import { Platform, type ViewStyle } from 'react-native';
import { alpha } from './colors';

type Shadow = ViewStyle;

const make = (ios: Shadow, android: Shadow): Shadow => {
  if (Platform.OS === 'android') {
    return android;
  }
  return ios;
};

export const shadows = {
  sm: make(
    { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.15, shadowRadius: 2 },
    { elevation: 2 },
  ),
  md: make(
    { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
    { elevation: 4 },
  ),
  lg: make(
    { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.25, shadowRadius: 15 },
    { elevation: 10 },
  ),
  primary: make(
    {
      shadowColor: alpha('#C08552', 0.3),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 20,
    },
    { elevation: 8 },
  ),
  avatar: make(
    {
      shadowColor: alpha('#C08552', 0.25),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 20,
    },
    { elevation: 6 },
  ),
  sheet: make(
    {
      shadowColor: alpha('#0B1614', 0.8),
      shadowOffset: { width: 0, height: -20 },
      shadowOpacity: 1,
      shadowRadius: 40,
    },
    { elevation: 16 },
  ),
} as const;
