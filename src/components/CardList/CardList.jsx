import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import css from "./CardList.module.css";
import UserCard from "../UserCard/UserCard";
import { Filtration } from "../Filter/Filter";
import { selectPage, selectUsersData } from "../../redux/selectors";


export default function CardList() {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUsersData);
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <>
      <div className={css.userList}>
        {Filtration(usersData).map((user) => {
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
