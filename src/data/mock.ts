import type { LibraryItem } from '../types/libraryItem';
import type { Tank } from '../types/tank';

export const currentTank: Tank = {
  id: 'neon-tetra-scape',
  name: 'Neon Tetra Scape',
  image: require('../../assets/images/EGe7p4pMeRl.jpeg'),
  volume: '15.0 gal',
  temp: '78.2\u00B0F',
  co2: '30 ppm',
  selectedElement: 'Anubias Nana',
};

export const libraryItems: LibraryItem[] = [
  {
    id: 'java-fern',
    title: 'Java Fern',
    subtitle: 'Microsorum pteropus',
    category: 'Plant',
    image: require('../../assets/images/X6PiXz4EDtZ.jpeg'),
    accent: 'secondary',
  },
  {
    id: 'seiryu-stone',
    title: 'Seiryu Stone',
    subtitle: 'Japanese Slate',
    category: 'Hardscape',
    image: require('../../assets/images/VUHmZbCK94s.jpeg'),
    accent: 'primary',
  },
];

export const libraryCategories = ['All Items', 'Plants', 'Hardscape', 'Fish', 'Decor'] as const;

export type ProjectStatus = 'Active' | 'Concept';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  date: string;
  items: string;
  volume: string;
  image: number;
}

export const projects: Project[] = [
  {
    id: 'ancient-woodland',
    title: 'Ancient Woodland',
    status: 'Active',
    date: 'Oct 12',
    items: '45 Items',
    volume: '20g',
    image: require('../../assets/images/lrg5nGboLqi.jpeg'),
  },
  {
    id: 'silent-peaks',
    title: 'Silent Peaks',
    status: 'Concept',
    date: 'Oct 08',
    items: '12 Items',
    volume: '10g',
    image: require('../../assets/images/W5VVIGYqEyF.jpeg'),
  },
];

export const profile = {
  name: 'Alex Vance',
  handle: '@aquascaper_alex',
  bio: 'Nature aquarium enthusiast, moss cultivator, & hardscape designer.',
  avatar: require('../../assets/images/EGe7p4pMeRl.jpeg'),
  stats: [
    { value: '4', label: 'Tanks', accent: 'foreground' as const },
    { value: '28', label: 'Plants', accent: 'secondary' as const },
    { value: '1.2k', label: 'Likes', accent: 'primary' as const },
  ],
} as const;

export const accountSettings = [
  {
    id: 'water-care',
    title: 'Water Care Schedules',
    subtitle: 'Water changes & dosing alerts',
    icon: 'drop-fill' as const,
    accent: 'primary' as const,
  },
  {
    id: 'saved-layouts',
    title: 'Saved Layouts',
    subtitle: '12 bookmarked designs',
    icon: 'floppy-disk-fill' as const,
    accent: 'secondary' as const,
  },
  {
    id: 'notifications',
    title: 'Notifications',
    subtitle: 'Custom Reminders & Updates',
    icon: 'bell-fill' as const,
    accent: 'foreground' as const,
  },
] as const;
