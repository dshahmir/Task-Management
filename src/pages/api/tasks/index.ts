import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from '@/types/task';
import { tasks } from '@/utils/mockData';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // Add artificial delay to simulate network latency
  const delay = () => new Promise(resolve => setTimeout(resolve, 800));

  switch (method) {
    case 'GET':
      // Get all tasks
      return delay().then(() => {
        // Return the tasks array directly instead of wrapping it in an object
        res.status(200).json(tasks);
      });

    case 'POST':
      // Create a new task
      return delay().then(() => {
        const newTask = {
          ...req.body,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        tasks.push(newTask);
        res.status(201).json({ task: newTask });
      });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
