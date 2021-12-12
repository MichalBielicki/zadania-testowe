import React from "react";
import style from "./Photo.module.css";
import photo from "../../images/photo.jpeg";

function Photo() {
  return (
    <div>
      <h2>Zadanie 4</h2>
      <img src={photo} alt="snow" className={style.fullscreen__photo} />
    </div>
  );
}

export default Photo;
