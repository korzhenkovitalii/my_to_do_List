import { useOutletContext } from "react-router-dom";
import { Card } from "../../Card/Card";
import { Menu } from "../../Menu/Menu";
import css from "../AllTasks/AllTasks.module.css";

export const AllTasks = () => {
  const props = useOutletContext();
  const { tasks, setTasks, deleteTask } = props;

  // console.log(props);

  return (
    <div className={css.tasks__box}>
      <Menu tasks={tasks} setTasks={setTasks} />
      <ul className={css.tasks__list}>
        {tasks.map(({ id, text, status }) => (
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
