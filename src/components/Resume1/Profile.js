import React from "react";

function Profile({ brandfontsize, brandcolor }) {
  return (
    <div className="profilestage">
      <div className="profileheader">
        <h2
          contentEditable="true"
          spellCheck="false"
          style={{
            fontSize: brandfontsize,
            color: brandcolor,
          }}
          suppressContentEditableWarning={true}
        >
          Profile
        </h2>
      </div>
      <div className="profiledescription">
        <p
          contentEditable="true"
          spellCheck="false"
          suppressContentEditableWarning={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          posuere quam. Curabitur dapibus magna ac nisl venenatis laoreet. Nulla
          pharetra pretium neque, sed fermentum libero commodo elementum. In
          tempor mollis rhoncus. Phasellus turpis odio, blandit eget pharetra
          at, fringilla commodo ipsum. In hac habitasse platea dictumst. In
          facilisis justo vitae enim dapibus, quis vulputate ligula varius.
          Mauris tincidunt urna eget nibh placerat, sed feugiat libero vehicula.
        </p>
      </div>
    </div>
  );
}
export default Profile;
