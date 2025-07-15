import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from '@/types/task';
import { tasks } from '@/utils/mockData';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  // Add artificial delay to simulate network latency
  const delay = () => new Promise(resolve => setTimeout(resolve, 800));

  // Find the task by ID
  const taskIndex = tasks.findIndex(task => task.id === id);

  switch (method) {
    case 'GET':
      // Get a specific task
      return delay().then(() => {
        if (taskIndex === -1) {
          return res.status(404).json({ message: 'Task not found' });
        }
        // Return the task directly without wrapping it in an object
        res.status(200).json(tasks[taskIndex]);
      });

    case 'PUT':
      // Update a task
      return delay().then(() => {
        if (taskIndex === -1) {
          return res.status(404).json({ message: 'Task not found' });
        }
        
        const updatedTask: Task = {
          ...tasks[taskIndex],
          ...req.body,
          id: id as string, // Ensure ID doesn't change
          createdAt: tasks[taskIndex].createdAt // Preserve the original creation date
        };
        
        tasks[taskIndex] = updatedTask;
        // Return the task directly without wrapping it in an object
        res.status(200).json(updatedTask);
      });

    case 'DELETE':
      // Delete a task
      return delay().then(() => {
        if (taskIndex === -1) {
          return res.status(404).json({ message: 'Task not found' });
        }
        
        tasks.splice(taskIndex, 1);
        res.status(200).json({ message: 'Task deleted successfully' });
      });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
