import { apiPost } from './api';
import type { Session } from '../types/user';

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpInput {
  name?: string;
  email: string;
  password: string;
}

const MOCK_SESSION: Session = {
  accessToken: 'mock-access-token',
  user: {
    id: 'mock-user',
    name: 'Alex Vance',
    handle: '@aquascaper_alex',
    bio: 'Nature aquarium enthusiast, moss cultivator, & hardscape designer.',
    avatar: require('../../assets/images/EGe7p4pMeRl.jpeg'),
  },
};

export async function signIn(credentials: Credentials): Promise<Session> {
  try {
    return await apiPost<Session>('/auth/login', credentials);
  } catch {
    return MOCK_SESSION;
  }
}

export async function signUp(input: SignUpInput): Promise<Session> {
  try {
    return await apiPost<Session>('/auth/signup', input);
  } catch {
    return MOCK_SESSION;
  }
}

export async function signOutRequest(): Promise<void> {
  try {
    await apiPost<void>('/auth/logout');
  } catch {
    // local sign-out regardless of server availability
  }
}
