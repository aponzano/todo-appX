import className from "classnames";

import {Check, Cross} from "../assets/icons";

export const TodoListItem = ({todo, onToggle, onDelete}) => {
  const checkClasses = className(
    "rounded-full min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center cursor-pointer",
    {
      "border dark:border-VeryDarkGrayishBlue group-hover:border-[#AA73C5]": !todo.isCompleted,
      "bg-gradient-to-br from-[#57DDFF] to-[#C058F3]": todo.isCompleted,
    },
  );

  const textClasses = className("grow", {
    "line-through text-lightGrayishBlue dark:text-VeryDarkGrayishBlue-dark": todo.isCompleted,
  });

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleToggleComplete = () => {
    onToggle(todo);
  };

  return (
    <div className="group flex py-3 md:py-4 px-5 md:px-6 border-b items-center space-x-3 dark:border-VeryDarkGrayishBlue-dark">
      <div className={checkClasses} onClick={handleToggleComplete}>
        {todo.isCompleted && <Check />}
      </div>

      <div className={textClasses}>{todo.text}</div>
      <div className="md:hidden md:group-hover:block cursor-pointer" onClick={handleDelete}>
        <Cross />
      </div>
    </div>
  );
};
