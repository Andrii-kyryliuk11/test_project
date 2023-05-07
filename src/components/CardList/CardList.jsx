import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import css from "./CardList.module.css";
import UserCard from "../UserCard/UserCard";
import { filteredValue } from "../../redux/cardsSlice";

export default function CardList() {
  const dispatch = useDispatch();
  const usersData = useSelector((store) => store.users.data);
  const page = useSelector((state) => state.page);
  useEffect(() => {
    dispatch(fetchUsers(page));
    dispatch(filteredValue());
  }, [dispatch, page]);

  return (
    <>
      <div className={css.userList}>
        {usersData.map((user) => {
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
