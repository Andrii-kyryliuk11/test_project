import { useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import getTweets from "../../utilutes/api";

export default function CardList() {
  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div>
      <UserCard />
    </div>
  );
}
