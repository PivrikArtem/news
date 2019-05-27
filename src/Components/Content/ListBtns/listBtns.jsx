import React from 'react';
import Btn from './Btn/Btn';
import './listBtns.css'

const ListBtns = (props) => {
    let id = 0;
    const elements = props.sourcesResponse.map((element, i) => {
        return <Btn onBtnClick={props.onBtnClick} key={i} element={element} id={id++} classNameBtn='source_item'
                    classNameSpan='source_item-name'/>

    });
    return (
        <div className='sources-list'>
            {elements}
        </div>
    );
}


export default ListBtns;
