import React from "react";
import Photo from "./Photo";
import Name from "./Name";
import Title from "./Title";
import "./Resume1.css";
import Workexperience from "./Workexperience";
import Profile from "./Profile";
import Personaldetails from "./Personaldetails";
import Contact from "./Contact";

function Resumecontainer1() {
  return (
    <div className="resumecontainer">
      <div className="leftside">
        <Photo />
        <Profile />
        <Personaldetails />
        <Contact />
      </div>
      <div className="rightside">
        <Name />
        <Title />
        <Workexperience />
      </div>
    </div>
  );
}
export default Resumecontainer1;
