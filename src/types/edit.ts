export type EditStatus = 'idle' | 'uploading' | 'processing' | 'done' | 'error';

export interface EditJob {
  id: string;
  status: EditStatus;
  sourceImage?: string;
  resultImage?: string;
  error?: string;
  createdAt: number;
}
