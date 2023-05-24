import {useState} from "react";

import {Panel} from "./Panel";

export const TodoInput = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return;
    }
    const newTodo = {
      id: +new Date(),
      text: inputValue,
      isCompleted: false,
    };

    onSubmit(newTodo);
    setInputValue("");
  };

  return (
    <Panel className={"flex items-center space-x-3 py-3 md:py-4 px-5 md:px-6 mt-7 md:mt-10"}>
      <div className="border rounded-full min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center cursor-pointer dark:border-VeryDarkGrayishBlue-dark" />
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          className="w-full bg-transparent focus-visible:outline-none"
          placeholder="Create a new todo..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </Panel>
  );
};
