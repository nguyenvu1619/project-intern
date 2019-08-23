import React, { Component } from 'react';

function RowItem(props){
    const isActive = false;
    const handleClick = async (event) => {
        window.location = `./search?key-word=${props.item.title}`;
    }
    const handleHover = (event) => {
        props.onChangeHover(props.index);
    }
    
     return props.active ?
      <div onClick={handleClick}  className ='row-item-suggestion-popup active'>
    {props.item.title}
    </div> : <div onMouseEnter={handleHover} onClick={handleClick}  className ='row-item-suggestion-popup'>
    {props.item.title}
    </div>
};

function SuggestionPopup(props){
    console.log(typeof props.onChangeHover);
    return <div className='suggestion-list'>
    {props.listSuggestion.map((item,i) => {
        if(i ===props.active)
         return <RowItem onChangeHover={props.onChangeHover} index={i} active={true} item={item}/>
        else return <RowItem onChangeHover={props.onChangeHover} active={false} index={i} item={item}/>
    })
    }
    </div>
}


export default SuggestionPopup;