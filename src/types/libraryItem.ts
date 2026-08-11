import type { ImageSourcePropType } from 'react-native';

export type LibraryCategory = 'Plant' | 'Hardscape';

export interface LibraryItem {
  id: string;
  title: string;
  subtitle: string;
  category: LibraryCategory;
  image: ImageSourcePropType;
  accent: 'primary' | 'secondary';
}
