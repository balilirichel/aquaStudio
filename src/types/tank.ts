import type { ImageSourcePropType } from 'react-native';

export interface Tank {
  id: string;
  name: string;
  image: ImageSourcePropType;
  volume: string;
  temp: string;
  co2: string;
  selectedElement: string;
}

export interface TankStats {
  label: string;
  value: string;
}
