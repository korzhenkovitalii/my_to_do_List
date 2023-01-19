import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "../Projects/Projects.module.css";

const projectsNav = [
  { href: "all_tasks", text: "All projects" },
  { href: "to_do", text: "To do" },
  { href: "in_progress", text: "In progress" },
  { href: "done", text: "Done" },
];

export const Projects = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Add more ui/ux mockups",
      status: "to_do",
    },
    {
      id: 2,
      text: "Design new ui presentation",
      status: "in_progress",
    },
    {
      id: 3,
      text: "Create wireframe for ios app",
      status: "done",
    },
  ]);

  function deleteTask(id) {
    let newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  }

  const props = {
    tasks,
    setTasks,
    deleteTask,
  };

  return (
    <>
      <div className={css.projects__wrapper}>
        <h2 className={css.projects__title}>Projects</h2>
        <ul className={css.projects__list}>
          {projectsNav.map(({ href, text }) => (
            <NavLink to={href} className={css.projects__item} key={href}>
              {text}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={css.content}>
        <Outlet context={props} />
      </div>
    </>
  );
};
