import { apiGet } from './api';
import { libraryItems as mockLibraryItems } from '../data/mock';
import type { LibraryItem } from '../types/libraryItem';

export async function fetchLibraryItems(): Promise<LibraryItem[]> {
  try {
    return await apiGet<LibraryItem[]>('/library/items');
  } catch {
    return mockLibraryItems;
  }
}
