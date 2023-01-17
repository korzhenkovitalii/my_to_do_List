import { NavLink } from "react-router-dom";

import css from "../Sidebar/Sidebar.module.css";
import { ReactComponent as LogoIcon } from "../../icons/Sidebar_icons/Logo.svg";
import { ReactComponent as ProjectsIcon } from "../../icons/Sidebar_icons/Projects.svg";
import { ReactComponent as UserIcon } from "../../icons/Sidebar_icons/User.svg";
import { ReactComponent as CalendarIcon } from "../../icons/Sidebar_icons/Calendar.svg";
import { ReactComponent as StatisticsIcon } from "../../icons/Sidebar_icons/Statistics.svg";
import { ReactComponent as CloudStorageIcon } from "../../icons/Sidebar_icons/Cloud_storage.svg";
import { ReactComponent as MeetingsIcon } from "../../icons/Sidebar_icons/Meetings.svg";
import { ReactComponent as SettingsIcon } from "../../icons/Sidebar_icons/Setting.svg";
import { ReactComponent as ExitIcon } from "../../icons/Sidebar_icons/ExitIcon.svg";

const navItems = [
  { href: "/", icon: <LogoIcon /> },
  { href: "projects", icon: <ProjectsIcon /> },
  { href: "user", icon: <UserIcon /> },
  { href: "calendar", icon: <CalendarIcon /> },
  { href: "cloud_storage", icon: <CloudStorageIcon /> },
  { href: "statistics", icon: <StatisticsIcon /> },
  { href: "meetings", icon: <MeetingsIcon /> },
  { href: "settings", icon: <SettingsIcon /> },
  { href: "exit", icon: <ExitIcon /> },
];

export const Sidebar = () => {
  return (
    <nav className={css.sidebar}>
      <ul className={css.sidebar__list}>
        {navItems.map(({ href, icon }) => (
          <NavLink to={href} className={css.sidebar__icons} key={href}>
            {icon}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
