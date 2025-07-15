import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Box, 
  Stack,
  IconButton,
  Divider,
  CircularProgress
} from '@mui/material';
import { 
  AccessTime as AccessTimeIcon,
  Flag as FlagIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { Task } from '../types/task';
import { formatDate } from '../utils/dateUtils';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
  isLoading?: boolean;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'info';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'warning';
    case 'pending':
      return 'info';
    default:
      return 'default';
  }
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, isLoading = false }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: isLoading ? 'none' : 'translateY(-4px)',
          boxShadow: isLoading ? 2 : 4
        },
        opacity: isLoading ? 0.8 : 1,
        position: 'relative',
        borderLeft: 4,
        borderColor: `${getPriorityColor(task.priority)}.main`,
      }}
    >
      {isLoading && (
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            zIndex: 1,
            borderRadius: 1
          }}
        >
          <CircularProgress size={24} />
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h6" component="div" gutterBottom>
            {task.title}
          </Typography>
          <Box>
            <IconButton 
              size="small" 
              onClick={() => onEdit && onEdit(task)}
              disabled={isLoading}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={() => onDelete && onDelete(task.id)}
              disabled={isLoading}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {task.description}
        </Typography>
        
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <AccessTimeIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            Due: {formatDate(task.dueDate)}
          </Typography>
        </Stack>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip 
            label={isLoading ? 'Loading...' : task.status} 
            size="small" 
            color={getStatusColor(task.status) as any}
            sx={isLoading ? { opacity: 0.7 } : {}}
          />
          <Box display="flex" alignItems="center">
            <FlagIcon 
              fontSize="small" 
              color={getPriorityColor(task.priority) as any} 
              sx={isLoading ? { opacity: 0.7 } : {}}
            />
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {task.priority}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
