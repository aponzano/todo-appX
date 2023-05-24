import {Panel} from "./Panel";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({data}) => {
  const renderedContent = data.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return (
    <Panel className="mt-5 md:mt-10">
      {renderedContent}
      <div className="flex flex-row py-3 md:py-4 px-5 md:px-6 justify-between">
        <div>item(s) left</div>
        <div>clear completed</div>
      </div>
    </Panel>
  );
};
