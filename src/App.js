import "./App.css";
import React, { useState, useRef } from "react";
import Download from "./components/Resume1/Sidebar/Download";
import Resumecontainer1 from "./components/Resume1/Resumecontainer1";

function App() {
  const [photo, setPhoto] = useState("");
  const [backgroundcolor, setBackgroundColor] = useState("#223238");
  const [namecolor, setNameColor] = useState("white");
  const [titlecolor, setTitleColor] = useState("#c66259");
  const [brandfontsize, setBrandFontSize] = useState("18px");
  const [brandcolor, setbrandcolor] = useState("#c66259");
  const [titlesize, settitlesize] = useState("20px");
  const [namesize, setnamesize] = useState("30px");
  const [font, setFont] = useState("Libre Baskerville");

  return (
    <div className="maincontainer">
      <Download
        photo={photo}
        setPhoto={setPhoto}
        setBackgroundColor={setBackgroundColor}
        setNameColor={setNameColor}
        setTitleColor={setTitleColor}
        setBrandFontSize={setBrandFontSize}
        setbrandcolor={setbrandcolor}
        settitlesize={settitlesize}
        setnamesize={setnamesize}
        setFont={setFont}
        font={font}
      />

      <Resumecontainer1
        photo={photo}
        setPhoto={setPhoto}
        backgroundcolor={backgroundcolor}
        namecolor={namecolor}
        titlecolor={titlecolor}
        brandfontsize={brandfontsize}
        brandcolor={brandcolor}
        titlesize={titlesize}
        namesize={namesize}
        font={font}
      />
    </div>
  );
}

export default App;
