import React from 'react';
import { Task } from '@/types';

interface TaskItemProps {
  task: Task;
  onDragStart?: (event: React.DragEvent<HTMLDivElement>, task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDragStart }) => {
  return (
    <div
      className="p-4 border rounded shadow"
      draggable={!!onDragStart}
      onDragStart={(e) => onDragStart && onDragStart(e, task)}
    >
      <h2 className="font-semibold">{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;