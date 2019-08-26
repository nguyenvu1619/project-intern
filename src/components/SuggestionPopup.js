import React, { Component, useState } from 'react';
import { changeHoverSuggestion } from '../actions/search.actions';
import { connect } from 'react-redux';
import {MOUSE_HOVER_SUGGESTION} from '../constant';
function RowItem(props){
    const isActive = false;
    
    const handleClick = async (event) => {
        window.location = `./search?key-word=${props.item.name}`;
    }
    const handleHover = (event) => {
      props.changeCurrentHover(MOUSE_HOVER_SUGGESTION, props.index);
    }
     return  <div onClick={handleClick} onMouseEnter={handleHover}  className ={`row-item-suggestion-popup ${props.active ? 'active' : ''}`}>
    {props.item}
    </div>
};

function SuggestionPopup(props){
    if (props.listSuggestion.length > 0)
    return <div className='suggestion-list'>
    {props.listSuggestion.map((item,i) =>{
        if(props.currentHover === i)
    return <RowItem changeCurrentHover={props.changeCurrentHover} active={true} index={i} item={item}/>
    return <RowItem changeCurrentHover={props.changeCurrentHover} active={false} index={i} item={item}/>    
   })}
    </div>
    return <></>
}
const mapStateToProp = state => ({
    currentHover: state.search.currentHover
})
const mapDispatchToProp = (dispatch, ownProps) => ({
    changeCurrentHover:(type, currentHover) => dispatch(changeHoverSuggestion(type, currentHover))
})

export default connect(mapStateToProp,mapDispatchToProp)(SuggestionPopup);