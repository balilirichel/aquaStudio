import { create } from 'zustand';
import { libraryCategories as mockCategories, libraryItems as mockItems } from '../data/mock';
import { fetchLibraryItems } from '../services/libraryService';
import type { LibraryItem } from '../types/libraryItem';

type LibraryStatus = 'idle' | 'loading' | 'success' | 'error';

interface LibraryState {
  items: LibraryItem[];
  categories: string[];
  selectedCategory: string;
  status: LibraryStatus;
  error: string | null;
  fetchLibrary: () => Promise<void>;
  setCategory: (category: string) => void;
}

export const useLibraryStore = create<LibraryState>()((set) => ({
  items: mockItems,
  categories: [...mockCategories],
  selectedCategory: mockCategories[0],
  status: 'idle',
  error: null,

  fetchLibrary: async () => {
    set({ status: 'loading', error: null });
    const items = await fetchLibraryItems();
    set({ items, status: 'success' });
  },

  setCategory: (category) => set({ selectedCategory: category }),
}));
