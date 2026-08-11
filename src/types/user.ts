import type { ImageSourcePropType } from 'react-native';

export interface User {
  id: string;
  name: string;
  handle: string;
  bio: string;
  avatar: ImageSourcePropType;
}

export interface Session {
  accessToken: string;
  user: User;
}
