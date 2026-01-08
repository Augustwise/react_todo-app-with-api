import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, completed: boolean) => void;
  tempTodo: Todo | null;
  loadingTodos: number[];
}

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  onStatusChange,
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
        isLoading={loadingTodos.includes(todo.id)}
      />
    ))}

    {tempTodo && <TodoItem todo={tempTodo} isLoading />}
  </section>
);
