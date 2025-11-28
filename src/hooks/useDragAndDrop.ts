import { useCallback } from 'react';
import { Task } from '@/types';

const useDragAndDrop = () => {
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    const taskId = event.dataTransfer.getData('text/plain');
    // Handle drop logic here
  }, []);

  const onDragStart = useCallback((event: React.DragEvent<HTMLDivElement>, task: Task) => {
    event.dataTransfer.setData('text/plain', task.id);
  }, []);

  return { onDragOver, onDrop, onDragStart };
};

export default useDragAndDrop;