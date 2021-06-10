import React, { useState } from "react";

function Title() {
  const [title, setTitle] = useState("Ünvan Giriniz");
  const titleHolder = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="titlecontainer">
      <input
        type="text"
        name="Name"
        id=""
        placeholder={title}
        onClick={titleHolder}
      />
    </div>
  );
}
export default Title;
