import React from 'react';

import './social-media.css';
import sprite from '../../assets/svg-sprite.svg';


export default function SocialMedia() {

  const renderButton = ( name, url) => {
    return (
      <div className={"svgDiv"}>
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className={"svgSizeSocialMedia"}>
            <use href={sprite + name} />
          </svg>
        </a>
      </div>
    )
  }
  
  return (
    <div className={"socailMediaDiv"}>
      {renderButton("#icon-facebook", "https://www.facebook.com/")}
      {renderButton("#icon-twitter", "https://www.twitter.com/")}
      {renderButton("#icon-instagram", "https://www.instagram.com/")}
    </div>
  );
}