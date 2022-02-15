import { useTodo } from "../hooks/useTodo";

export const Title = () => {

  const {pendingTodo}=useTodo();

  return (
  <h1>
      TODO: {pendingTodo}
  </h1>);
};
