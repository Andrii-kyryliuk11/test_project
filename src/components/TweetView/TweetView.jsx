import { NavLink } from "react-router-dom";
import CardList from "../CardList/CardList";
import css from "./TweetView.module.css";
import Filter from "../Filter/Filter";
export default function TweetView() {
  return (
    <>
      <div className={css.btnContainer}>
        {" "}
        <NavLink to="/" className={css.buttonBack}>
          back
        </NavLink>
        <Filter />
      </div>
      <CardList />
    </>
  );
}
