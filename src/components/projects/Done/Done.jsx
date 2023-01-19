import { useOutletContext } from "react-router-dom";
import { Card } from "../../Card/Card";
import { Menu } from "../../Menu/Menu";
import css from "../AllTasks/AllTasks.module.css";

export const Done = () => {
  const props = useOutletContext();
  const { tasks, setTasks, deleteTask } = props;

  const to_do_Tasks = tasks.filter((item) => item.status === "done");

  return (
    <div className={css.tasks__box}>
      <Menu tasks={to_do_Tasks} setTasks={setTasks} />
      <ul className={css.tasks__list}>
        {to_do_Tasks.map(({ id, text, status }) => (
          <li className={css.tasks__item} key={id}>
            <Card
              text={text}
              id={id}
              status={status}
              tasks={tasks}
              setTasks={setTasks}
              deleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
