import React, { useState } from 'react';
import { Container, Box, Typography, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import TaskForm from './TaskForm';
import { Task } from '../types/task';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createNewTask, resetTaskStatus } from '../redux/taskSlice';

type TaskFormData = Omit<Task, 'id' | 'createdAt' | 'tags'>;

const CreateTaskClient: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.tasks);
  const isLoading = status === 'loading';
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleSubmit = async (data: TaskFormData) => {
    try {
      dispatch(resetTaskStatus());
      const resultAction = await dispatch(createNewTask(data));
      
      if (createNewTask.fulfilled.match(resultAction)) {
        setSnackbar({
          open: true,
          message: 'Task created successfully!',
          severity: 'success'
        });
        
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
      setSnackbar({
        open: true,
        message: 'Failed to create task. Please try again.',
        severity: 'error'
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Create New Task
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Fill in the details below to create a new task.
        </Typography>
      </Box>
      
      {isLoading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TaskForm onSubmit={handleSubmit} />
          
          {status === 'failed' && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              Error: {error}
            </Alert>
          )}
          
          <Box mt={3} display="flex" justifyContent="flex-start">
            <Button 
              variant="outlined" 
              onClick={() => router.push('/')}
              sx={{ mr: 2 }}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Box>
        </>
      )}

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreateTaskClient;
