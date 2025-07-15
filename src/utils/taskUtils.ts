import { Task } from '../types/task';

// Mock data for initial tasks
export const generateMockTasks = (): Task[] => {
  return [
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Draft and submit the project proposal for client review',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-07-20',
      createdAt: '2025-07-10'
    },
    {
      id: '2',
      title: 'Schedule team meeting',
      description: 'Organize weekly team sync to discuss project progress',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-07-17',
      createdAt: '2025-07-12'
    },
    {
      id: '3',
      title: 'Review code changes',
      description: 'Review pull requests and provide feedback',
      status: 'completed',
      priority: 'high',
      dueDate: '2025-07-14',
      createdAt: '2025-07-13'
    },
    {
      id: '4',
      title: 'Update documentation',
      description: 'Update project documentation with recent changes',
      status: 'pending',
      priority: 'low',
      dueDate: '2025-07-25',
      createdAt: '2025-07-14'
    },
    {
      id: '5',
      title: 'Prepare presentation',
      description: 'Create slides for the upcoming client presentation',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-07-22',
      createdAt: '2025-07-11'
    }
  ];
};

// Filter tasks based on search term, status, and priority
export const filterTasks = (
  tasks: Task[],
  searchTerm: string = '',
  status: string = '',
  priority: string = ''
): Task[] => {
  return tasks.filter(task => {
    const matchesSearch = searchTerm === '' || 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (task.tags && task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesStatus = status === '' || task.status === status;
    const matchesPriority = priority === '' || task.priority === priority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });
};
