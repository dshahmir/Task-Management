import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper,
  Grid
} from '@mui/material';
import { Task } from '../types/task';
import { formatDate } from '../utils/dateUtils';

type TaskFormData = Omit<Task, 'id' | 'createdAt' | 'tags'>;
interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  initialData?: Partial<TaskFormData>;
  isEditMode?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ 
  onSubmit, 
  initialData = {}, 
  isEditMode = false 
}) => {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<TaskFormData>({
    defaultValues: {
      title: initialData.title || '',
      description: initialData.description || '',
      status: initialData.status || 'pending',
      priority: initialData.priority || 'medium',
      dueDate: initialData.dueDate || formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) // Default to 1 week from now
    }
  });

  const onFormSubmit = (data: TaskFormData) => {
    onSubmit(data);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        {isEditMode ? 'Edit Task' : 'Create New Task'}
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Task title is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Task Title"
                  fullWidth
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Controller
              name="priority"
              control={control}
              rules={{ required: 'Priority is required' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.priority}>
                  <InputLabel id="priority-label">Priority</InputLabel>
                  <Select
                    {...field}
                    labelId="priority-label"
                    label="Priority"
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                  {errors.priority && (
                    <FormHelperText>{errors.priority.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Controller
              name="status"
              control={control}
              rules={{ required: 'Status is required' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.status}>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    {...field}
                    labelId="status-label"
                    label="Status"
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="in-progress">In Progress</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                  {errors.status && (
                    <FormHelperText>{errors.status.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Controller
              name="dueDate"
              control={control}
              rules={{ 
                required: 'Due date is required',
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: 'Date must be in YYYY-MM-DD format'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Due Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.dueDate}
                  helperText={errors.dueDate?.message}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ minWidth: 120 }}
              >
                {isEditMode ? 'Update Task' : 'Create Task'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default TaskForm;
