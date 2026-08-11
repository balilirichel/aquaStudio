import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'aquascape.auth.token';
const USER_KEY = 'aquascape.auth.user';

const memoryCache: { token: string | null; user: string | null } = {
  token: null,
  user: null,
};

const canUseSecureStore = Platform.OS !== 'web';

export interface StoredSession {
  accessToken: string | null;
  user: string | null;
}

export async function loadStoredSession(): Promise<StoredSession> {
  if (!canUseSecureStore) {
    return { accessToken: memoryCache.token, user: memoryCache.user };
  }
  try {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    const user = await SecureStore.getItemAsync(USER_KEY);
    memoryCache.token = token;
    memoryCache.user = user;
    return { accessToken: token, user };
  } catch {
    return { accessToken: null, user: null };
  }
}

export async function saveSession(accessToken: string, userJson: string): Promise<void> {
  memoryCache.token = accessToken;
  memoryCache.user = userJson;
  if (!canUseSecureStore) {
    return;
  }
  await SecureStore.setItemAsync(TOKEN_KEY, accessToken);
  await SecureStore.setItemAsync(USER_KEY, userJson);
}

export async function clearStoredSession(): Promise<void> {
  memoryCache.token = null;
  memoryCache.user = null;
  if (!canUseSecureStore) {
    return;
  }
  await SecureStore.deleteItemAsync(TOKEN_KEY).catch(() => {});
  await SecureStore.deleteItemAsync(USER_KEY).catch(() => {});
}

export function getCachedAccessToken(): string | null {
  return memoryCache.token;
}
