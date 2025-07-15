import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button
} from '@mui/material';
import { Task } from '@/types/task';
import TaskForm from './TaskForm';

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
  onSubmit: (id: string, taskData: Partial<Task>) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ open, onClose, task, onSubmit }) => {
  if (!task) return null;

  const handleSubmit = (data: Omit<Task, 'id' | 'createdAt' | 'tags'>) => {
    console.log('Form data received in EditTaskModal:', data);
    
    // Create a clean object with only the fields we need
    const updatedTask = {
      title: data.title,
      description: data.description,
      status: data.status as 'pending' | 'in-progress' | 'completed',
      priority: data.priority as 'low' | 'medium' | 'high',
      dueDate: data.dueDate
    };
    
    console.log('Submitting updated task:', updatedTask);
    onSubmit(task.id, updatedTask);
    // Don't close the modal here - let the parent component handle it after the API call completes
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TaskForm 
          onSubmit={handleSubmit} 
          initialData={task}
          isEditMode={true}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskModal;
