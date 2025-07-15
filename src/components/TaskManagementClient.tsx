import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Divider,
  Fab,
  CircularProgress
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import TaskList from './TaskList';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchTasks } from '../redux/taskSlice';
import Link from 'next/link';

const TaskManagementClient: React.FC = () => {
  const { tasks, status } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [dispatch, status]);
  
  const isLoading = status === 'loading';
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Task Management
        </Typography>
        <Link href="/create-task" passHref>
          <Fab 
            color="primary" 
            aria-label="add"
            component="a"
            sx={{ 
              position: 'fixed', 
              bottom: 16, 
              right: 16,
              zIndex: 1000
            }}
          >
            <AddIcon />
          </Fab>
        </Link>
      </Box>
      
      {/* Only show loading indicator on initial load, not during updates */}
      {isLoading && tasks.length === 0 && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          borderRadius: 2,
          mb: 3
        }}
      >
        <Box mb={2}>
          <Typography variant="h6" gutterBottom>
            Task Overview
          </Typography>
          <Divider />
        </Box>
        
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                bgcolor: 'info.light',
                color: 'info.contrastText'
              }}
            >
              <Typography variant="h5">
                {tasks.filter(t => t.status === 'pending').length}
              </Typography>
              <Typography variant="subtitle1">Pending Tasks</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                bgcolor: 'warning.light',
                color: 'warning.contrastText'
              }}
            >
              <Typography variant="h5">
                {tasks.filter(t => t.status === 'in-progress').length}
              </Typography>
              <Typography variant="subtitle1">In Progress</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                bgcolor: 'success.light',
                color: 'success.contrastText'
              }}
            >
              <Typography variant="h5">
                {tasks.filter(t => t.status === 'completed').length}
              </Typography>
              <Typography variant="subtitle1">Completed</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h6" gutterBottom>
          Your Tasks
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <TaskList />
      </Paper>
    </Container>
  );
};

export default TaskManagementClient;
