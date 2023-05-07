import { useDispatch, useSelector } from "react-redux";
import { increasePage } from "../../redux/pageSlice";
import { fetchMoreUsers } from "../../redux/operations";
import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    page < 6 && (
      <button
        className={css.loadMore}
        type="button"
        onClick={() => {
          dispatch(increasePage());
          dispatch(fetchMoreUsers(page));
        }}
      >
        Load more
      </button>
    )
  );
}
