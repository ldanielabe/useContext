import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';
import { TodoState } from './interface/interface';

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todo: [
    {
      id:'1',
      desc: 'Agregar',
      completed: false
    },{
      id:'2',
      desc: 'Eliminar',
      completed: false
    },
],
  completed: 0,
  pending: 2
}

export const Todo = () => {
  return (
  <TodoProvider>
    <Title/>
    <TodoList/>
  </TodoProvider>);
};
