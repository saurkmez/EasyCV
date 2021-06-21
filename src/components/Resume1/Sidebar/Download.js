import React, { useState } from "react";

function Download({
  setPhoto,
  setBackgroundColor,
  setNameColor,
  setTitleColor,
  setBrandFontSize,
  setbrandcolor,
  settitlesize,
  setnamesize,
  setFont,
  font,
}) {
  const photoHandler = (e) => {
    const selected = e.target.files[0]; //İlk dosyayı alır
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"]; // izin verilen dosya tipleri
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      // includes, array içerisindeki istedi seçtiğimiz dosyanın tipini bulur.
      //selected.type dizininde selected yüklediğimiz dosya,type ise dosya tipi. include ise array içerisindeki dosya tiplerine bakıyor.
      let reader = new FileReader(); //FileReader API çalıştırıyoruz.Dosyaları asenkron okumamızı sağlar
      reader.readAsDataURL(selected); // Datayı URL olarak okuma metodu.
      reader.onloadend = () => {
        // onloadend, okumayı bitirdiğimiz dosyayı sayfaya yüklemeyi çalıştıran fonksiyon
        setPhoto(reader.result);
      };
    } else {
      console.log("fick dich");
    }
  };
  const removeHandler = () => {
    setPhoto("");
  };

  /*POPUP*/
  const [photopopup, setPhotoPopup] = useState(false);
  const [active, setActive] = useState(false);
  const [fontpopup, setfontpopup] = useState(false);
  const fontHandler = () => {
    setfontpopup(!fontpopup);
  };

  const [backgroundcolorpopup, setbackgroundcolorpopup] = useState(false);
  const backgroundcolorpopupHandler = () => {
    setbackgroundcolorpopup(!backgroundcolorpopup);
  };

  const [namecolorpopup, setnamecolorpopup] = useState(false);
  const namecolorpopupHandler = () => {
    setnamecolorpopup(!namecolorpopup);
  };

  const [titlecolorpopup, settitlecolorpopup] = useState(false);
  const titlecolorpopupHandler = () => {
    settitlecolorpopup(!titlecolorpopup);
  };
  const [headercolorpopup, setheadercolorpopup] = useState(false);
  const headercolorpopupHandler = () => {
    setheadercolorpopup(!headercolorpopup);
  };

  /*BACKGROUND COLOR*/

  const defaultHandler = () => {
    setBackgroundColor("#223238");
  };

  const greyHandler = () => {
    setBackgroundColor("grey");
  };
  const brownHandler = () => {
    setBackgroundColor("#B99D80");
  };

  const orangeHandler = () => {
    setBackgroundColor("orange");
  };

  const hexcodechangeHandler = (e) => {
    setBackgroundColor(`#${e.target.value}`);
  };

  /*Namecolor*/

  const defaultnameHandler = () => {
    setNameColor("white");
  };

  const greynameHandler = () => {
    setNameColor("grey");
  };
  const brownnameHandler = () => {
    setNameColor("#B99D80");
  };

  const orangenameHandler = () => {
    setNameColor("orange");
  };

  const hexcodenamechangeHandler = (e) => {
    setNameColor(`#${e.target.value}`);
  };
  const namefontsizeHandler = (e) => {
    setnamesize(`${e.target.value}px`);
  };

  /*Titlecolor*/

  const defaulttitleHandler = () => {
    setTitleColor("#c66259");
  };

  const greytitleHandler = () => {
    setTitleColor("grey");
  };
  const browntitleHandler = () => {
    setTitleColor("#B99D80");
  };

  const orangetitleHandler = () => {
    setTitleColor("orange");
  };

  const hexcodetitlechangeHandler = (e) => {
    setTitleColor(`#${e.target.value}`);
  };
  const titlefontsizeHandler = (e) => {
    settitlesize(`${e.target.value}px`);
  };
  /*Brand Color & Font-Size */

  const headerfontsizeHandler = (e) => {
    setBrandFontSize(`${e.target.value}px`);
  };
  const defaultbrandHandler = () => {
    setbrandcolor("#c66259");
  };

  const greybrandHandler = () => {
    setbrandcolor("grey");
  };
  const brownbrandHandler = () => {
    setbrandcolor("#B99D80");
  };

  const orangebrandHandler = () => {
    setbrandcolor("orange");
  };

  const hexcodebrandchangeHandler = (e) => {
    setbrandcolor(`#${e.target.value}`);
  };
  const print = () => {
    window.print();
    return false;
  };
  return (
    <div className="downloadcontainer">
      <div className="icons">
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={print}
        >
          <i class="far fa-save fa-3x"></i>
        </li>
        <li>
          <h2
            className="headerchange"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#c66259",
            }}
          >
            Customize It!
          </h2>
          <div className="headermenu" style={{ display: "block" }}>
            <li>
              <h4
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: photopopup ? "1s" : "",
                }}
                onClick={() => {
                  setPhotoPopup(!photopopup);
                  setActive(!active);
                }}
              >
                Change Photo
              </h4>

              <div
                className="photomenu"
                style={{
                  display: photopopup ? "block" : "none",
                }}
              >
                <div className="photoicons">
                  <label htmlFor="fileupload">
                    <i
                      className="fas fa-upload fa-2x"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </label>
                  <input type="file" id="fileupload" onChange={photoHandler} />
                  <i
                    className="fas fa-trash fa-2x"
                    onClick={removeHandler}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>
            </li>
            <li>
              <h4
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={fontHandler}
              >
                Choose Font
              </h4>

              <div
                className="fontmenu"
                style={{ display: fontpopup ? "block" : "none" }}
              >
                <select
                  onChange={(e) => setFont(`"${e.target.value}"`)}
                  defaultValue={font}
                  style={{
                    fontSize: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <option
                    value="Libre Baskerville"
                    style={{
                      fontFamily: "Libre Baskerville",

                      width: "50%",
                    }}
                  >
                    Libre Baskerville
                  </option>
                  <option
                    value="Baloo Tammudu 2"
                    style={{ fontFamily: "Baloo Tammudu 2" }}
                  >
                    Baloo Tammudu 2
                  </option>
                  <option value="Open Sans" style={{ fontFamily: "Open Sans" }}>
                    Open Sans
                  </option>
                  <option value="Raleway" style={{ fontFamily: "Raleway" }}>
                    Raleway
                  </option>
                  <option value="Roboto" style={{ fontFamily: "Roboto" }}>
                    Roboto
                  </option>
                </select>
                <p>or add a custom font</p>
                <input
                  type="text"
                  style={{ borderRadius: "5px" }}
                  onChange={(e) => setFont(`"${e.target.value}"`)}
                />
              </div>
            </li>
            <li>
              <h4
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={backgroundcolorpopupHandler}
              >
                Header Color
              </h4>

              <div
                className="backgroundcolormenu"
                style={{ display: backgroundcolorpopup ? "block" : "none" }}
              >
                <p>Choose a color</p>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#223238" }}
                  title="Default"
                  onClick={defaultHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "grey" }}
                  title="Grey"
                  onClick={greyHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#B99D80" }}
                  title="Beige"
                  onClick={brownHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "orange" }}
                  title="Orange"
                  onClick={orangeHandler}
                ></button>
                <h5>or enter hex code</h5>
                <div>
                  <p>
                    #{" "}
                    <input
                      type="text"
                      style={{ width: "60%" }}
                      onChange={hexcodechangeHandler}
                      style={{ borderRadius: "5px" }}
                    />
                  </p>
                </div>
              </div>
            </li>
            <li>
              <h4
                onClick={namecolorpopupHandler}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Name Color&Font-Size
              </h4>

              <div
                className="namemenu"
                style={{ display: namecolorpopup ? "block" : "none" }}
              >
                <p>Choose a color</p>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "white" }}
                  title="Default"
                  onClick={defaultnameHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "grey" }}
                  title="Grey"
                  onClick={greynameHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#B99D80" }}
                  title="Beige"
                  onClick={brownnameHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "orange" }}
                  title="Orange"
                  onClick={orangenameHandler}
                ></button>
                <p>or enter hex code</p>
                <div>
                  <p>
                    #{" "}
                    <input
                      type="text"
                      style={{ width: "60%" }}
                      onChange={hexcodenamechangeHandler}
                      style={{ borderRadius: "5px" }}
                    />
                  </p>
                </div>
                <p>Choose Font Size</p>
                <input
                  type="text"
                  style={{ width: "60%" }}
                  onChange={namefontsizeHandler}
                  style={{
                    borderRadius: "5px",
                    width: "30%",
                    marginRight: "5%",
                  }}
                />
                px
              </div>
            </li>
            <li>
              <h4
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={titlecolorpopupHandler}
              >
                Title Color&Font-Size
              </h4>

              <div
                className="titlemenu"
                style={{ display: titlecolorpopup ? "block" : "none" }}
              >
                <p>Choose a color</p>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#c66259" }}
                  title="Default"
                  onClick={defaulttitleHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "grey" }}
                  title="Grey"
                  onClick={greytitleHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#B99D80" }}
                  title="Beige"
                  onClick={browntitleHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "orange" }}
                  title="Orange"
                  onClick={orangetitleHandler}
                ></button>
                <p>or enter hex code</p>
                <div>
                  <p>
                    #{" "}
                    <input
                      type="text"
                      style={{ width: "60%" }}
                      onChange={hexcodetitlechangeHandler}
                      style={{ borderRadius: "5px" }}
                    />
                  </p>
                  <p>Choose Font Size</p>
                  <input
                    type="text"
                    style={{
                      width: "60%",
                      width: "30%",
                      marginRight: "5%",
                      borderRadius: "5px",
                    }}
                    onChange={titlefontsizeHandler}
                  />
                  px
                </div>
              </div>
            </li>
            <li>
              <h4
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: headercolorpopup ? "0" : "20%",
                }}
                onClick={headercolorpopupHandler}
              >
                Section Color & Font-Size
              </h4>

              <div
                className="titlemenu"
                style={{
                  display: headercolorpopup ? "block" : "none",
                  paddingLeft: "5%",
                  marginBottom: "20%",
                }}
              >
                <p>Choose a color</p>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#c66259" }}
                  title="Default"
                  onClick={defaultbrandHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "grey" }}
                  title="Grey"
                  onClick={greybrandHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "#B99D80" }}
                  title="Beige"
                  onClick={brownbrandHandler}
                ></button>
                <button
                  className="colorbuttons"
                  style={{ backgroundColor: "orange" }}
                  title="Orange"
                  onClick={orangebrandHandler}
                ></button>
                <p>or enter hex code</p>
                <div>
                  <p>
                    #{" "}
                    <input
                      type="text"
                      style={{ width: "60%", borderRadius: "5px" }}
                      onChange={hexcodebrandchangeHandler}
                    />
                  </p>
                  <p>Choose Font Size</p>
                  <input
                    type="text"
                    style={{
                      width: "60%",
                      width: "30%",
                      marginRight: "5%",
                      borderRadius: "5px",
                    }}
                    onChange={headerfontsizeHandler}
                  />
                  px
                </div>
              </div>
            </li>
          </div>
        </li>
      </div>
    </div>
  );
}
export default Download;
