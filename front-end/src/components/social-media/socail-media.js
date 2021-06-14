import React from 'react';

import './social-media.css';
import sprite from '../../assets/svg-sprite.svg';


export default function SocialMedia() {
  console.log('--social-media');

  const renderButton = ( name, url) => {
    return (
      <div className={"svgDiv"} onClick={() => console.log("hello world")}>
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