import { create } from 'zustand';
import { currentTank as mockTank } from '../data/mock';
import { apiGet } from '../services/api';
import type { Tank } from '../types/tank';

type TankStatus = 'idle' | 'loading' | 'success' | 'error';

interface TankState {
  tank: Tank | null;
  status: TankStatus;
  error: string | null;
  loadTank: (id: string) => Promise<void>;
  selectTank: (tank: Tank) => void;
}

export const useTankStore = create<TankState>()((set) => ({
  tank: mockTank,
  status: 'idle',
  error: null,

  loadTank: async (id) => {
    set({ status: 'loading', error: null });
    try {
      const tank = await apiGet<Tank>(`/tanks/${id}`);
      set({ tank, status: 'success' });
    } catch {
      set({ tank: mockTank, status: 'error', error: 'Failed to load tank.' });
    }
  },

  selectTank: (tank) => set({ tank, status: 'success' }),
}));
