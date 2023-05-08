import { NavLink } from "react-router-dom";
import css from "./HomeView.module.css";
export default function HomeView() {
  return (
    <div className={css.homePage}>
      <div className={css.title}>Welcome to TweetBox</div>
      <NavLink to="tweets" className={css.buttonBack}>
        Show Tweets!
      </NavLink>
    </div>
  );
}
