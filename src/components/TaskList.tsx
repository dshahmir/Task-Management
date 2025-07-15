import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Alert, CircularProgress, Snackbar } from '@mui/material';
import TaskCard from './TaskCard';
import TaskFilterComponent from './TaskFilter';
import EditTaskModal from './EditTaskModal';
import { Task, TaskFilter } from '../types/task';
import { filterTasks } from '../utils/taskUtils';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchTasks, removeTask, updateExistingTask, resetTaskStatus } from '../redux/taskSlice';

const TaskList: React.FC = () => {
  const { tasks, status, error } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<TaskFilter>({
    searchTerm: '',
    status: '',
    priority: ''
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [localLoading, setLocalLoading] = useState<{[key: string]: boolean}>({});
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
    
    // If the global status is failed, show the error in our local error state
    if (status === 'failed' && error) {
      setLocalError(error);
      setSnackbarOpen(true);
    }
  }, [dispatch, status, error]);

  const filteredTasks = filterTasks(
    tasks,
    filter.searchTerm,
    filter.status,
    filter.priority
  );

  const handleFilterChange = (newFilter: TaskFilter) => {
    setFilter(newFilter);
  };

  const handleEditClick = (task: Task) => {
    setSelectedTask(task);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async (id: string, taskData: Partial<Task>) => {
    setLocalLoading(prev => ({ ...prev, [id]: true }));
    setLocalError(null);
    setSuccessMessage(null);
    try {
      console.log('Updating task with ID:', id, 'Data:', taskData);
      const result = await dispatch(updateExistingTask({ id, task: taskData })).unwrap();
      console.log('Update result:', result);
      
      // Show success message
      setLocalError(null);
      setSuccessMessage('Task updated successfully');
      setSnackbarOpen(true);
      
      // Reset status to ensure we don't show duplicate loading indicators
      dispatch(resetTaskStatus());
      
      // Close the edit modal
      setEditModalOpen(false);
      setSelectedTask(null);
    } catch (error) {
      console.error('Failed to update task:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to update task';
      setLocalError(errorMessage);
      setSuccessMessage(null);
      setSnackbarOpen(true);
    } finally {
      setLocalLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const handleDeleteClick = async (id: string) => {
    setLocalLoading(prev => ({ ...prev, [id]: true }));
    setLocalError(null);
    try {
      console.log('Deleting task with ID:', id);
      const result = await dispatch(removeTask(id)).unwrap();
      console.log('Delete result:', result);
      
      // Show success message
      setLocalError(null);
      setSuccessMessage('Task deleted successfully');
      setSnackbarOpen(true);
      
      // Reset status to ensure we don't show duplicate loading indicators
      dispatch(resetTaskStatus());
    } catch (error) {
      console.error('Failed to delete task:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete task';
      setLocalError(errorMessage);
      setSuccessMessage(null);
      setSnackbarOpen(true);
    } finally {
      setLocalLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    // Reset messages after snackbar closes
    setSuccessMessage(null);
  };

  return (
    <Box>
      <TaskFilterComponent filter={filter} onFilterChange={handleFilterChange} />
      
      {status === 'loading' && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={localError ? "error" : "success"} 
          sx={{ width: '100%' }}
        >
          {localError || successMessage || 'Operation completed successfully'}
        </Alert>
      </Snackbar>
      
      {status === 'succeeded' && tasks.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
          You don't have any tasks yet. Click the + button to create your first task.
        </Alert>
      ) : status === 'succeeded' && filteredTasks.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No tasks match your current filters. Try adjusting your search criteria.
        </Alert>
      ) : status === 'succeeded' && (
        <Grid container spacing={2}>
          {filteredTasks.map((task) => (
            <Grid item xs={12} md={6} lg={4} key={task.id}>
              <TaskCard 
                task={task} 
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
                isLoading={localLoading[task.id] || false}
              />
            </Grid>
          ))}
        </Grid>
      )}
      
      <Box mt={3} display="flex" justifyContent="flex-end">
        <Typography variant="body2" color="text.secondary">
          Showing {filteredTasks.length} of {tasks.length} tasks
        </Typography>
      </Box>

      <EditTaskModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        task={selectedTask}
        onSubmit={handleEditSubmit}
      />
      
    </Box>
  );
};

export default TaskList;
