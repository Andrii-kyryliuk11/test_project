import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import {
  showAllUsers,
  showFollowedUsers,
  showUnfollowedUsers,
} from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <button type="button" className={css.dropdown}>
        Filter
      </button>
      <div className={css.contentBox}>
        <button
          type="button"
          className={css.content}
          onClick={() => {
            dispatch(showAllUsers());
          }}
        >
          show all
        </button>
        <button
          type="button"
          className={css.content}
          onClick={() => {
            dispatch(showUnfollowedUsers());
          }}
        >
          follow
        </button>
        <button
          type="button"
          className={css.content}
          onClick={() => {
            dispatch(showFollowedUsers());
          }}
        >
          followings
        </button>
      </div>
    </div>
  );
}

export function Filtration(usersData) {
  const filterValue = useSelector(selectFilter);
  let filteredUsers = [];
  usersData.forEach((user) => {
    if (filterValue === null) {
      filteredUsers = [...usersData];
    }
    switch (user.isFollowed) {
      case filterValue:
        filteredUsers.push(user);
        break;

      default:
        break;
    }
  });
  return filteredUsers;
}
