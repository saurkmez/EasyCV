import React from "react";
import Photo from "./Header/Photo";
import Name from "./Header/Name";
import Title from "./Header/Title";
import "./Resume1.css";
import Workexperience from "./WorkExperiences/Workexperience";
import Profile from "./Profile";
import Skills from './Skills'
import Contact from "./Contact";
import Languages from "./Languages";
import Education from "./Education";

function Resumecontainer1() {
  return (
    
    <div className="resumecontainer">
      <div className="subresumecontainer">
      <div className="resumeheader"> <Photo/>
      <div className="headerrightside">
      <Name/>
      <Title/>
      </div>
     
      </div>
    <div ><Profile/></div>
    <div><Workexperience/></div>
    <div><Skills/></div>
    <div ><Languages/></div>
    <div><Education/></div>
    <div><Contact/></div>
    </div>
    </div>
  );
}
export default Resumecontainer1;
