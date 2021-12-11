import React from "react";
import photo from "../images/photo.jpeg";

function Photo() {
  return (
    <div>
      <img src={photo} alt="snow" className="fullscreen-photo" />
    </div>
  );
}

export default Photo;
