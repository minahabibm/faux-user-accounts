import React from 'react';

import './details-box.css'

export default function DetailsBox(props) {
  const { title, description } = props
  
  return (
    <div className="contentDiv">

      <h2 className="titleDiv">{title}</h2>
      <p className="paragraphDiv">{description}</p>   
    
    </div>
  );
}