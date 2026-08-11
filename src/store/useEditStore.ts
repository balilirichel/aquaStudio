import { create } from 'zustand';
import { createEditJob, getEditStatus } from '../services/editService';
import type { EditJob } from '../types/edit';

type EditStatus = 'idle' | 'loading' | 'success' | 'error';

interface EditState {
  job: EditJob | null;
  status: EditStatus;
  error: string | null;
  createEdit: (sourceImage: string, prompt?: string) => Promise<void>;
  pollStatus: () => Promise<void>;
}

export const useEditStore = create<EditState>()((set, get) => ({
  job: null,
  status: 'idle',
  error: null,

  createEdit: async (sourceImage, prompt) => {
    set({ status: 'loading', error: null });
    const job = await createEditJob({ sourceImage, prompt });
    set({ job, status: 'success' });
  },

  pollStatus: async () => {
    const job = get().job;
    if (!job) {
      return;
    }
    const updated = await getEditStatus(job.id);
    set({ job: updated });
  },
}));
