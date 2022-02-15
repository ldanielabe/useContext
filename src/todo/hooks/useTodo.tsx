import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";



export const useTodo = () => {
 
    const {todoState, toggleTodo} = useContext(TodoContext);
    const {todo}=todoState;

    return{
        todo,
        pendingTodo:todo.filter(todo=>!todo.completed).length,
        toggleTodo,
    };

};
