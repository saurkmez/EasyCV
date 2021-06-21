import React from "react";

function Photo({ photo, setPhoto }) {
  return (
    <div className="photocontainer">
      <div className="photo">
        {!photo ? (
          <i className="fas fa-camera-retro fa-5x"></i>
        ) : (
          <img src={photo} alt="" className="photo" />
        )}
      </div>
    </div>
  );
}
export default Photo;
