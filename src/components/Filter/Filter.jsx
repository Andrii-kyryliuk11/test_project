import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { filteredValue } from "../../redux/cardsSlice";

export default function Filter() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <button type="button" className={css.dropdown}>
        Filter
      </button>
      <div className={css.contentBox}>
        <button type="button" className={css.content}>
          show all
        </button>
        <button
          type="button"
          className={css.content}
          onClick={() => {
            const filteredUusers = users.filter((user) => user.isFollowed);
            dispatch(filteredValue(filteredUusers));
          }}
        >
          follow
        </button>
        <button type="button" className={css.content}>
          followings
        </button>
      </div>
    </div>
  );
}
