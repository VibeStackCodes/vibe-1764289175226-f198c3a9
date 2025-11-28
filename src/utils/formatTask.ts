import { Task } from '@/types';

export const formatTask = (task: Task) => {
  return {
    ...task,
    formattedDate: new Date(task.createdAt).toLocaleDateString(),
  };
};