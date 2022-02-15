import { useReducer } from "react";
import { TodoState } from "../interface/interface";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

interface props{
    children: JSX.Element | JSX.Element[]
}

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

export const TodoProvider = ({children}: props) => {

  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const toggleTodo=(id:string)=>{
    dispatch({type:'toggleTodo', payload:{id}})
  }

  return (
  <TodoContext.Provider value={{
    todoState, 
    toggleTodo,
  }}>
      {children}
  </TodoContext.Provider>);
};
