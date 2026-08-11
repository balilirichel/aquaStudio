import { create } from 'zustand';
import { setOnUnauthorized } from '../services/api';
import * as authService from '../services/authService';
import { clearStoredSession, loadStoredSession, saveSession } from '../services/tokenStorage';
import type { User } from '../types/user';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';

interface AuthState {
  status: AuthStatus;
  user: User | null;
  accessToken: string | null;
  hydrate: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (input: { name?: string; email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
}

function parseUser(raw: string | null): User | null {
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export const useAuthStore = create<AuthState>()((set, get) => {
  setOnUnauthorized(() => {
    void get().signOut();
  });

  return {
    status: 'idle',
    user: null,
    accessToken: null,

    hydrate: async () => {
      set({ status: 'loading' });
      const stored = await loadStoredSession();
      const user = parseUser(stored.user);
      if (stored.accessToken && user) {
        set({ status: 'authenticated', user, accessToken: stored.accessToken });
      } else {
        set({ status: 'unauthenticated', user: null, accessToken: null });
      }
    },

    signIn: async (email, password) => {
      set({ status: 'loading' });
      const session = await authService.signIn({ email, password });
      await saveSession(session.accessToken, JSON.stringify(session.user));
      set({ status: 'authenticated', user: session.user, accessToken: session.accessToken });
    },

    signUp: async (input) => {
      set({ status: 'loading' });
      const session = await authService.signUp(input);
      await saveSession(session.accessToken, JSON.stringify(session.user));
      set({ status: 'authenticated', user: session.user, accessToken: session.accessToken });
    },

    signOut: async () => {
      await authService.signOutRequest();
      await clearStoredSession();
      set({ status: 'unauthenticated', user: null, accessToken: null });
    },
  };
});
