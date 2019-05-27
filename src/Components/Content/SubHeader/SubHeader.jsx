import React from 'react';
import './SubHeader.css';

function SubHeader(props) {
  return (
    <div className="sub-header">{props.nameNews}</div>
  );
}

export default SubHeader;