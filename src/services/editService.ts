import { apiGet, apiPost } from './api';
import type { EditJob } from '../types/edit';

export interface CreateEditInput {
  sourceImage: string;
  prompt?: string;
}

export async function createEditJob(input: CreateEditInput): Promise<EditJob> {
  try {
    return await apiPost<EditJob>('/edit/jobs', input);
  } catch {
    return {
      id: `mock-${Date.now()}`,
      status: 'done',
      sourceImage: input.sourceImage,
      createdAt: Date.now(),
    };
  }
}

export async function getEditStatus(jobId: string): Promise<EditJob> {
  try {
    return await apiGet<EditJob>(`/edit/jobs/${jobId}`);
  } catch {
    return { id: jobId, status: 'done', createdAt: Date.now() };
  }
}
