import css from "../Card/Card.module.css";

export const Card = ({
  text,
  id,
  status,
  tasks,
  setTasks,
  deleteTask,
  edit,
  setEdit,
  value,
  setValue,
  editTask,
  saveTask,
}) => {
  return (
    <>
      {edit === id ? (
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button onClick={() => saveTask(id)}>Сохранить</button>
        </div>
      ) : (
        <>
          <p className={css.task__name}>{text}</p>
          <div className={css.task__wrapper}>
            <button className={css.task__button} onClick={() => editTask(id)}>
              Изменить
            </button>

            <button className={css.task__button} onClick={() => deleteTask(id)}>
              Удалить
            </button>
          </div>
        </>
      )}

      <div className={css.task__wrapper}>
        Status:
        <div style={{ display: "flex", gap: "10px" }}>
          <button className={css.button__status}>To do</button>
          <button className={css.button__status}>In progress</button>
          <button className={css.button__status}>Done</button>
        </div>
      </div>
    </>
  );
};
