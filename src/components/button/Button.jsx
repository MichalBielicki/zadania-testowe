import React from "react";
import style from "./Button.module.css";

const Button = ({ func, text }) => {
  return (
    <>
      <button className={style.button} type="button" onClick={func}>
        {text}
      </button>
    </>
  );
};

export default Button;
