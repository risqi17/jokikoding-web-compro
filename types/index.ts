export interface Project {
    details: string;
    createdAt: Date;
    status: 'pending' | 'in-progress' | 'completed';
  }