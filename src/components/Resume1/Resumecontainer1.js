import React from "react";
import Photo from "./Header/Photo";
import Name from "./Header/Name";
import Title from "./Header/Title";
import "./Resume1.css";
import Workexperience from "./WorkExperiences/Workexperience";
import Profile from "./Profile";
import Skills from "./Skills/Skills";
import Contact from "./Contact";
import Languages from "./Language/Languages";
import Education from "./Education/Education";

function Resumecontainer1({
  photo,
  setPhoto,
  namecolor,
  backgroundcolor,
  titlecolor,
  brandfontsize,
  brandcolor,
  titlesize,
  namesize,
  font,
}) {
  return (
    <div className="resumecontainer" style={{ fontFamily: font }}>
      <div className="subresumecontainer">
        <div
          className="resumeheader"
          style={{ backgroundColor: backgroundcolor }}
        >
          {" "}
          <Photo photo={photo} setPhoto={setPhoto} />
          <div className="headerrightside">
            <Name namecolor={namecolor} namesize={namesize} />
            <Title titlecolor={titlecolor} titlesize={titlesize} />
          </div>
        </div>
        <div>
          <Profile brandfontsize={brandfontsize} brandcolor={brandcolor} />
        </div>
        <hr />
        <div>
          <Workexperience
            brandfontsize={brandfontsize}
            brandcolor={brandcolor}
          />
        </div>
        <hr />
        <div>
          <Skills brandfontsize={brandfontsize} brandcolor={brandcolor} />
        </div>
        <hr />
        <div>
          <Languages brandfontsize={brandfontsize} brandcolor={brandcolor} />
        </div>
        <hr />
        <div>
          <Education brandfontsize={brandfontsize} brandcolor={brandcolor} />
        </div>
        <hr />
        <div>
          <Contact brandfontsize={brandfontsize} brandcolor={brandcolor} />
        </div>
      </div>
    </div>
  );
}
export default Resumecontainer1;
