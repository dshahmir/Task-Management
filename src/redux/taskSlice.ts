import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from '../types/task';
import * as taskService from '@/services/taskService';

interface TaskState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
  error: null
};

// Async thunks for API operations
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      return await taskService.getAllTasks();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  'tasks/fetchTaskById',
  async (id: string, { rejectWithValue }) => {
    try {
      return await taskService.getTaskById(id);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const createNewTask = createAsyncThunk(
  'tasks/createTask',
  async (task: Omit<Task, 'id' | 'createdAt'>, { rejectWithValue }) => {
    try {
      return await taskService.createTask(task);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateExistingTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, task }: { id: string; task: Partial<Task> }, { rejectWithValue }) => {
    try {
      console.log('Updating task in thunk:', id, task);
      const updatedTask = await taskService.updateTask(id, task);
      console.log('Response from API:', updatedTask);
      
      // Ensure we have a valid task object with an id
      if (!updatedTask || !updatedTask.id) {
        throw new Error('Invalid response from server');
      }
      
      return updatedTask;
    } catch (error) {
      console.error('Error in updateExistingTask thunk:', error);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const removeTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id: string, { rejectWithValue }) => {
    try {
      console.log('Deleting task in thunk:', id);
      await taskService.deleteTask(id);
      console.log('Task deleted successfully:', id);
      return id;
    } catch (error) {
      console.error('Error in removeTask thunk:', error);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    resetTaskStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all tasks
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      
      // Fetch task by ID
      .addCase(fetchTaskById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        } else {
          state.tasks.push(action.payload);
        }
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      
      // Create new task
      .addCase(createNewTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.push(action.payload);
      })
      .addCase(createNewTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      
      // Update task
      .addCase(updateExistingTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateExistingTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateExistingTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      
      // Delete task
      .addCase(removeTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
