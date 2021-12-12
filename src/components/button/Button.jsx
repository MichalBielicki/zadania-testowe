import React from "react";
import style from "./Button.module.css";

const Button = ({ func, text, form, type }) => {
  return (
    <>
      <button className={style.button} form={form} type={type} onClick={func}>
        {text}
      </button>
    </>
  );
};

export default Button;
