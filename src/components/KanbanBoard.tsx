import React from 'react';
import { Task } from '@/types';
import TaskItem from './TaskItem';
import useDragAndDrop from '@/hooks/useDragAndDrop';

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const { onDragOver, onDrop, onDragStart } = useDragAndDrop();

  return (
    <div className="kanban-board" onDragOver={onDragOver} onDrop={onDrop}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default KanbanBoard;