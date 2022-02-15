import { Todo, TodoState } from '../interface/interface';

type TodoActions=
            | {type: 'addTodo', payload: Todo}
            | {type: 'toggleTodo', payload: {id: string}}

export const TodoReducer = (state: TodoState, action: TodoActions ): TodoState => {

    switch (action.type) {
        case 'addTodo':
            
            return {
                ...state,
                todo:[
                    ...state.todo,
                    action.payload
                ]
            };

        case 'toggleTodo':
            
            return {
                ...state,
                todo: state.todo.map(({...todo})=>{
                    if(todo.id==action.payload.id){
                        todo.completed=!todo.completed;
                    }
                return todo;
                })
            };
    
        default:
            return state;
    }
};
