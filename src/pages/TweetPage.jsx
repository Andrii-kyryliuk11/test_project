import { NavLink } from "react-router-dom";
import CardList from "../components/CardList/CardList";

export default function TweetView() {
  return (
    <>
      <CardList />
      <NavLink to="/">
        <button type="button">back</button>
      </NavLink>
    </>
  );
}
