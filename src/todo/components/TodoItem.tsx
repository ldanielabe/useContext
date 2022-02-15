import { Todo } from "../interface/interface";
import { useTodo } from '../hooks/useTodo';

interface props{
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

  const { toggleTodo } = useTodo();

  return (
  <li style={{
        cursor:"pointer",
        textDecoration:todo.completed? 'line-through':''
      }} 
      onDoubleClick={()=>toggleTodo(todo.id)}
  >
    {todo.desc}
  </li>);
};
