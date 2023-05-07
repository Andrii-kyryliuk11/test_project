import css from "./UserCard.module.css";
import logo from "../../pictures/Logo.svg";
import image from "../../pictures/picture2 1.svg";
import av from "../../pictures/Hansel.png";

export default function UserCard() {
  return (
    <div className={css.card}>
      <div className={css.card_top}>
        <img src={logo} alt="" className={css.logoGoIt} />
        <img src={image} alt="" className={css.image} />
        <div className={css.card_top_border}>
          <div className={css.card_top_elipse}>
            <img
              src="https://img.icons8.com/?size=512&id=81139&format=png"
              alt=""
              className={css.avatar}
            />
          </div>
        </div>
      </div>
      <div className={css.card_bottom}>
        <div className={css.stats}>
          <span>777 tweets</span>
          <span>100 followers</span>
        </div>
        <button type="button">Follow</button>
      </div>
    </div>
  );
}
