import { Task } from '@/types/task';

// Mock database - this is just for demonstration
// In a real app, this would be stored in a database
export let tasks: Task[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the project',
    priority: 'high',
    status: 'pending',
    dueDate: new Date(2025, 7, 20).toISOString(),
    createdAt: new Date(2025, 7, 10).toISOString(),
  },
  {
    id: '2',
    title: 'Review pull requests',
    description: 'Review and merge pending pull requests',
    priority: 'medium',
    status: 'in-progress',
    dueDate: new Date(2025, 7, 18).toISOString(),
    createdAt: new Date(2025, 7, 9).toISOString(),
  },
  {
    id: '3',
    title: 'Fix UI bugs',
    description: 'Address reported UI issues in the dashboard',
    priority: 'high',
    status: 'in-progress',
    dueDate: new Date(2025, 7, 17).toISOString(),
    createdAt: new Date(2025, 7, 8).toISOString(),
  },
  {
    id: '4',
    title: 'Implement new feature',
    description: 'Add the requested analytics dashboard feature',
    priority: 'medium',
    status: 'pending',
    dueDate: new Date(2025, 7, 25).toISOString(),
    createdAt: new Date(2025, 7, 7).toISOString(),
  },
  {
    id: '5',
    title: 'Deploy to production',
    description: 'Deploy the latest version to production servers',
    priority: 'high',
    status: 'completed',
    dueDate: new Date(2025, 7, 15).toISOString(),
    createdAt: new Date(2025, 7, 5).toISOString(),
  },
];
