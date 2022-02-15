import { TodoItem } from "./TodoItem";
import { useTodo } from '../hooks/useTodo';

export const TodoList = () => {

  const {todo}=useTodo();

  return (
  <ul>
    {todo.map(t => <TodoItem key={t.id} todo={t}/> )}
  </ul>);
};
