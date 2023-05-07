import { useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import css from "./CardList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/operations";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

export default function CardList() {
  const dispatch = useDispatch();
  const usersData = useSelector((store) => store.users.data);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className={css.userList}>
        {usersData.length >= 1 &&
          usersData.map((user) => {
            return (
              <div key={user.id}>
                <UserCard user={user} />
              </div>
            );
          })}
      </div>
      <LoadMoreButton />
    </>
  );
}
