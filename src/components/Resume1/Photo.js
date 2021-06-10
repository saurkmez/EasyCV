import React, { useState } from "react";

function Photo() {
  const [photo, setPhoto] = useState("Fotoğraf Ekle");
  const photoHandler = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("yanlış");
    }
  };

  return (
    <div className="photocontainer">
      <div className="photo" style={{ background: `url("${photo}")` }}></div>
      <input type="file" name="Add Photo" id="" onChange={photoHandler} />
    </div>
  );
}
export default Photo;
