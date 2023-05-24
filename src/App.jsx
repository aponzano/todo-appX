import {useEffect, useState} from "react";

import data from "./assets/data.json";
import {Moon, Sun} from "./assets/icons";
import {Button} from "./components/Button";
import {Panel} from "./components/Panel";
import {TodoInput} from "./components/TodoInput";
import {TodoListItem} from "./components/TodoListItem";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

function App() {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const [todos, setTodos] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState({all: true, active: false, completed: false});

  const handleSwitchTheme = () => {
    if (!document.documentElement.classList.contains(DARK_THEME)) {
      document.documentElement.classList.add(DARK_THEME);
      setTheme(DARK_THEME);
    } else {
      document.documentElement.classList.remove(DARK_THEME);
      setTheme(LIGHT_THEME);
    }
  };
  const handleDelete = (deletedTodo) => {
    const newTodos = todos.filter((todo) => todo.id !== deletedTodo.id);

    setTodos(newTodos);
  };
  const handleToggleComplete = (toggledTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === toggledTodo.id ? {...todo, isCompleted: !todo.isCompleted} : todo,
    );

    setTodos(newTodos);
  };
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const handleClearComplete = () => {
    if (
      confirm(
        `You are about to remove ${
          todos.filter((todo) => todo.isCompleted == true).length
        } completed task(s). Are you sure?`,
      )
    ) {
      const newTodos = todos.filter((todo) => todo.isCompleted !== true);

      setTodos(newTodos);
    }
  };
  let filteredTodos;

  const handleFilter = (event) => {
    const newFilter = {...filter};

    Object.keys(newFilter).forEach((key) => {
      newFilter[key] = false;
      if (key === event.target.name) {
        newFilter[key] = true;
      }
    });

    if (event.target.name === "active") {
      filteredTodos = todoData.filter((todo) => todo.isCompleted === false);
    } else if (event.target.name === "completed") {
      filteredTodos = todoData.filter((todo) => todo.isCompleted === true);
    } else {
      filteredTodos = todoData;
    }
    setFilter(newFilter);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    setTodos(data);
    setTodoData(data);
  }, []);

  let renderedContent;

  if (todos.length > 0) {
    renderedContent = todos.map((todo) => {
      return (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggleComplete}
        />
      );
    });
  } else {
    renderedContent = (
      <div className="flex md:py-4 px-5 md:px-6 border-b justify-center dark:border-VeryDarkGrayishBlue-dark">
        No tasks left!
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col m-auto max-w-xs md:max-w-xl text-xs md:text-lg">
        <header className="flex flex-row justify-between w-full items-center mt-12 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.45em] text-veryLightGray">
            TODO
          </h1>
          <div className="cursor-pointer" onClick={handleSwitchTheme}>
            {theme == "light" ? <Moon /> : <Sun />}
          </div>
        </header>

        <TodoInput onSubmit={handleAddTodo} />

        <Panel className="mt-5 md:mt-10">
          {renderedContent}
          <div className="flex flex-row py-3 md:py-4 px-5 md:px-6 justify-between text-sm dark:text-darkGrayishBlue-dark text-darkGrayishBlue">
            <div>{todos.filter((todo) => todo.isCompleted == false).length} item(s) left</div>
            <Button onClick={handleClearComplete}>Clear Completed</Button>
          </div>
        </Panel>

        <Panel className="flex flex-row mt-4 space-x-3 justify-center py-4 font-bold text-sm">
          <Button isActive={filter.all} name="all" onClick={handleFilter}>
            All
          </Button>
          <Button isActive={filter.active} name="active" onClick={handleFilter}>
            Active
          </Button>
          <Button isActive={filter.completed} name="completed" onClick={handleFilter}>
            Completed
          </Button>
        </Panel>

        <footer className="flex justify-center py-8">Drag and drop to reorder list</footer>
      </div>
    </>
  );
}

export default App;
