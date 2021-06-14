import React from 'react';

import './details-button.css';
import sprite from '../../assets/svg-sprite.svg';

export default function DetailsButton(props) {

  const renderButton = (iconName, detailsTitle) => {
    return (
      <div className={"iconsDiv"} onClick={() => handleOnClick(detailsTitle)}>
        <svg className={"svgSize"}>
          <use href={sprite + iconName} />
        </svg>
      </div>
    )
  }

  const handleOnClick = (title) => {
    props.caller(title);
  }
  
  return (
    <div className={"detailsIconsDiv"}>
      {renderButton("#icon-address-book", "Name")}
      {renderButton("#icon-map", "Location")}
      {renderButton("#icon-envelope", "E-mail")}
      {renderButton("#icon-phone", "Phone Number")}
      {renderButton("#icon-birthday-cake", "Date of Birth")}
      {renderButton("#icon-key", "Logins Information")}
      
    </div>
  );
}