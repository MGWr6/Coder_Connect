import React from "react";
import "./share.css";

function Share() {
  return (
    <div className="homefeed">
      <div className="homefeedWrapper">
        <div className="postBlock">
          <img className="profileImg" />
          <FontAwesomeIcon
            icon="fa-regular fa-circle-user"
            className="postIcon"
          />
          <input placeholder="Say Hello to the World" className="postEntry" />
        </div>

        <hr className="linebreak" />
        <div className="postBottom" />
        <div className="postOptions">
          <div className="postOption">
            <FontAwesomeIcon icon="fa-solid fa-image" className="postIcon" />
            <span className="postOptionText">Photo or Video</span>
          </div>

          <div className="postOption">
            <FontAwesomeIcon icon="fa-regular fa-tag" className="postIcon" />
            <span className="postOptionText">Tag</span>
          </div>
        </div>
        <div className="postOption">
          <FontAwesomeIcon
            icon="fa-regular fa-face-awesome"
            className="postIcon"
          />
          <span className="postOptionText">Feelings</span>
        </div>
        <button className="postButton">Share</button>
      </div>
    </div>
  );
}

export default Share;
