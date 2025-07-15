import { Task } from '@/types/task';

// Base API URL
const API_URL = '/api/tasks';

// Get all tasks
export const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  const data = await response.json();
  // Ensure we're returning an array of tasks
  if (Array.isArray(data)) {
    return data;
  } else if (data && Array.isArray(data.tasks)) {
    return data.tasks;
  } else {
    console.error('Unexpected API response format:', data);
    return [];
  }
};

// Get a single task by ID
export const getTaskById = async (id: string): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch task');
  }
  const data = await response.json();
  // Handle both response formats for backward compatibility
  return data.task || data;
};

// Create a new task
export const createTask = async (task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  
  const data = await response.json();
  return data.task;
};

// Update an existing task
export const updateTask = async (id: string, task: Partial<Task>): Promise<Task> => {
  console.log('Task service updating task:', id, task);
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to update task: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Raw API response:', data);
    
    // Handle both response formats: { task: Task } or Task directly
    const result = data.task || data;
    
    // Validate the response
    if (!result || !result.id) {
      throw new Error('Invalid response format from server');
    }
    
    return result;
  } catch (error) {
    console.error('Error in updateTask service:', error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id: string): Promise<void> => {
  console.log('Task service deleting task:', id);
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to delete task: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Delete response:', data);
    
    return;
  } catch (error) {
    console.error('Error in deleteTask service:', error);
    throw error;
  }
};
