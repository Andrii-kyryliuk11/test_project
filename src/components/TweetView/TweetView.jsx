import { NavLink } from "react-router-dom";
import CardList from "../CardList/CardList";
import css from "./TweetView.module.css";
import { Filter } from "../Filter/Filter";
import { useDispatch } from "react-redux";
import { cleareData } from "../../redux/cardsSlice";
import { resetPage } from "../../redux/pageSlice";
import { showAllUsers } from "../../redux/filterSlice";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function TweetView() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.btnContainer}>
        <NavLink
          to="/"
          className={css.buttonBack}
          onClick={() => {
            dispatch(cleareData());
            dispatch(resetPage());
            dispatch(showAllUsers());
          }}
        >
          back
        </NavLink>
        <Filter />
      </div>
      <CardList />
      <ToastContainer
        transition={Zoom}
        position="bottom-right"
        autoClose={800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}
