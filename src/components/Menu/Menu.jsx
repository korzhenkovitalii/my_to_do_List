import css from "../Menu/Menu.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Menu = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  function addTask() {
    setTasks([...tasks, { id: uuidv4(), text: value, status: "to_do" }]);
    setValue("");
  }

  return (
    <div className={css.tasks__header}>
      <h2 className={css.tasks__title}>All Tasks {tasks.length}</h2>
      <div>
        <input
          type="text"
          placeholder="New task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.tasks__button} onClick={addTask}>
          +Add new task
        </button>
      </div>
    </div>
  );
};
