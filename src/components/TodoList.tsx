import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => Promise<void>;
  onStatusChange: (id: number, completed: boolean) => Promise<void>;
  onUpdateTitle: (id: number, title: string) => Promise<void>;
  tempTodo: Todo | null;
  loadingTodos: number[];
}

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  onStatusChange,
  onUpdateTitle,
  tempTodo,
  loadingTodos,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
        onUpdateTitle={onUpdateTitle}
        isLoading={loadingTodos.includes(todo.id)}
      />
    ))}

    {tempTodo && <TodoItem todo={tempTodo} isLoading />}
  </section>
);
