import { NavLink } from "react-router-dom";
import CardList from "../CardList/CardList";
import css from "./TweetView.module.css";
export default function TweetView() {
  return (
    <>
      <NavLink to="/" className={css.buttonBack}>
        back
      </NavLink>
      <CardList />
    </>
  );
}
