import React from "react";
function Contact({ brandfontsize, brandcolor }) {
  return (
    <div className="contactstage">
      <div className="contactheader">
        {" "}
        <h2
          contentEditable="true"
          spellCheck="false"
          style={{ fontSize: brandfontsize, color: brandcolor }}
          suppressContentEditableWarning={true}
        >
          Contact
        </h2>
      </div>
      <div className="contactdescription">
        <div className="mail">
          <i
            className="far fa-envelope-open fa-1x"
            style={{ color: "#c66259" }}
          ></i>
          <p
            contentEditable="true"
            spellCheck="false"
            style={{ marginLeft: "10px" }}
            suppressContentEditableWarning={true}
          >
            {" "}
            E-Mail
          </p>
        </div>
        <div className="mail">
          <i className="far fa-compass  fa-1x" style={{ color: "#c66259" }}></i>
          <p
            contentEditable="true"
            spellCheck="false"
            style={{ marginLeft: "10px" }}
            suppressContentEditableWarning={true}
          >
            Location
          </p>
        </div>

        <div className="mail">
          <i
            className="fas fa-phone-volume fa-1x"
            style={{ color: "#c66259" }}
          ></i>
          <p
            contentEditable="true"
            spellCheck="false"
            style={{ marginLeft: "10px" }}
            suppressContentEditableWarning={true}
          >
            Phone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
