import { useDispatch, useSelector } from "react-redux";
import { increasePage } from "../../redux/pageSlice";
import css from "./LoadMoreButton.module.css";
import { selectPage } from "../../redux/selectors";

export default function LoadMoreButton() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  return (
    page < 5 && (
      <button
        className={css.loadMore}
        type="button"
        onClick={() => {
          dispatch(increasePage());
        }}
      >
        Load More
      </button>
    )
  );
}
