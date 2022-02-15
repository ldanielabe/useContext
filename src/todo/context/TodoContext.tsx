import { createContext } from "react";
import { TodoState } from '../interface/interface';

export type TodoContextProps={
    todoState: TodoState;
    toggleTodo: (id:string) => void; //func que recibe el id y retorna nada
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);