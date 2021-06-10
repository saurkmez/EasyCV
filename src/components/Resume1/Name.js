import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("İsim Giriniz");
  const nameHolder = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="namecontainer">
      <input
        type="text"
        name="Name"
        id=""
        placeholder={name}
        onClick={nameHolder}
      />
    </div>
  );
}
export default Name;
