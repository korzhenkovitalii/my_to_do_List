import css from "../Header/Header.module.css";
import { ReactComponent as SearchIcon } from "../../icons/Header/Search.svg";
import { ReactComponent as BellIcon } from "../../icons/Header/Bell.svg";
import { ReactComponent as CalendarIcon } from "../../icons/Header/Calendar.svg";

export const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.header__title}>Welcome back,Vitalii</h1>
      <div className={css.header__box}>
        <SearchIcon className={css.header__icons}/>
        <BellIcon className={css.header__icons}/>
        <CalendarIcon className={css.header__icons}/>
        <p className={css.header__data}>09 January 2023</p>
        <div>User</div>
      </div>
    </header>
  );
};
