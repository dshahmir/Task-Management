export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  tags?: string[];
}

export interface TaskFilter {
  searchTerm: string;
  status: string;
  priority: string;
}
