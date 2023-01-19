import css from "../Card/Card.module.css";
import { useState } from "react";

export const Card = ({ text, id, tasks, setTasks, deleteTask }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);

  function editTask(id) {
    setEdit(id);
  }

  function saveTask(id) {
    let newTask = tasks.map((item) => {
      if (item.id === id) {
        item.text = value;
      }
      return item;
    });
    setTasks(newTask);
    setEdit(null);
  }

  function changeStatus(e, id) {
    let newStatus = tasks.map((item) => {
      if (item.id === id) {
        item.status = e.target.value;
      }
      return item;
    });
    setTasks(newStatus);
  }

  return (
    <>
      {edit === id ? (
        <div>
          <input
            type="text"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <button onClick={() => saveTask(id)}>Сохранить</button>
        </div>
      ) : (
        <>
          <p className={css.task__name}>{text}</p>
          <div className={css.task__wrapper}>
            <button className={css.task__button} onClick={() => editTask(id)}>
              Rename
            </button>

            <button className={css.task__button} onClick={() => deleteTask(id)}>
              Delete
            </button>
          </div>
        </>
      )}

      <div className={css.radiogroup}>
        <div className={css.wrapper}>
          <input
            className={css.state}
            type="radio"
            name={id + "status"}
            id={id + "a"}
            value="to_do"
            onChange={(e) => changeStatus(e, id)}
          />
          <label className={css.label} htmlFor={id + "a"}>
            <div className={css.indicator}></div>
            <span className={css.text}>To do</span>
          </label>
        </div>
        <div className={css.wrapper}>
          <input
            className={css.state}
            type="radio"
            name={id + "status"}
            id={id + "b"}
            value="in_progress"
            onChange={(e) => changeStatus(e, id)}
          />
          <label className={css.label} htmlFor={id + "b"}>
            <div className={css.indicator}></div>
            <span className={css.text}>In progress</span>
          </label>
        </div>
        <div className={css.wrapper}>
          <input
            className={css.state}
            type="radio"
            name={id + "status"}
            id={id + "c"}
            value="done"
            onChange={(e) => changeStatus(e, id)}
          />
          <label className={css.label} htmlFor={id + "c"}>
            <div className={css.indicator}></div>
            <span className={css.text}>Done</span>
          </label>
        </div>
      </div>
    </>
  );
};
