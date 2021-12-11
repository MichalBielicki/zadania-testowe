import React from "react";
import style from "./Quote.module.css";

const Quote = ({ quote }) => {
  return (
    <div>
      {quote === undefined ? (
        <p className={style.error}>No quotes here...</p>
      ) : (
        <div className={style.wrapper}>
          <p className={style.quote}>&ldquo;{quote.quote}&bdquo;</p>
          <p className={style.author}>{quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
