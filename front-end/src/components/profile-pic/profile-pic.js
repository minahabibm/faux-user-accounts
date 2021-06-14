import React from 'react';

import './profile-pic.css';

export default function ProfilePic(props) {
  const { large } = props.imageUrl ? props.imageUrl : ""; 
  
  const handleOnClick = (title, descriptionRendr) => {
    props.caller(title, descriptionRendr);
  }
  
  return (
    <div className={"profilePicDiv"} onClick={() => handleOnClick(null, true)}>
      <div className="imageDiv">
          <img
            src={large}
            className={'circleImageLayout'}
            alt="Avatar"
          />
      </div>
    </div>
  );
}