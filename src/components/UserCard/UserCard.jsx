import css from "./UserCard.module.css";
import logo from "../../pictures/Logo.svg";
import image from "../../pictures/picture2 1.svg";
import { useDispatch } from "react-redux";
import { fetchOneUser, followUserToggle } from "../../redux/operations";
import { toast } from "react-toastify";

export default function UserCard({ user }) {
  const dispatch = useDispatch();
  const isFollowed = user.isFollowed;

  return (
    <div className={css.card}>
      <div className={css.card_top}>
        <img src={logo} alt="goit logo" className={css.logoGoIt} />
        <img src={image} alt="user card background" className={css.image} />
        <div className={css.card_top_border}>
          <div className={css.card_top_elipse}>
            <img src={user.avatar} alt="user avatar" className={css.avatar} />
          </div>
        </div>
      </div>
      <div className={css.card_bottom}>
        <div className={css.stats}>
          <span>{user.user}</span>
          <span>{user.tweets} tweets</span>
          <span>
            {Math.round(user.followers).toLocaleString("en-US")} followers
          </span>
        </div>
        <button
          type="button"
          className={isFollowed ? css.followed : css.normal}
          onClick={() => {
            dispatch(followUserToggle(user)).then(() => {
              toast(isFollowed ? "User unfollowed" : "User followed", {
                className: css.toastrNotif,
              });
              dispatch(fetchOneUser(user.id));
            });
          }}
        >
          {isFollowed ? "following" : "follow"}
        </button>
      </div>
    </div>
  );
}
