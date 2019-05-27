import React from 'react';
import './Btn.css';

const Btn = (props) =>
    <button type='button' id={props.id} className={props.classNameBtn} onClick={props.onBtnClick}>
        <span className={props.classNameSpan}>{props.element.name}</span>
    </button>

export default Btn;
