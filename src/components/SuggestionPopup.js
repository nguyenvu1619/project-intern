import React, { Component, useState } from 'react';
import { changeHoverSuggestion } from '../actions/search.actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {MOUSE_HOVER_SUGGESTION} from '../constant';
function RowItem(props){
    const [isSearch,setIsSearch] = useState(0);
    const handleClick = async (event) => {
        setIsSearch(true);
    }
    const handleHover = (event) => {
      props.changeCurrentHover(MOUSE_HOVER_SUGGESTION, props.index);
    }
    return isSearch ? <Redirect to='/search'/> :<div onClick={handleClick} onMouseEnter={handleHover}  className ={`row-item-suggestion-popup ${props.active ? 'active' : ''}`}>
    {props.item.title}
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
    else return <div className='suggestion-list'>
    <div className ='row-item-suggestion-popup'>
    Không tìm thấy kết quả nào
    </div>
    </div>
}
const mapStateToProp = state => ({
    currentHover: state.search.currentHover
})
const mapDispatchToProp = (dispatch, ownProps) => ({
    changeCurrentHover:(type, currentHover) => dispatch(changeHoverSuggestion(type, currentHover))
})

export default connect(mapStateToProp,mapDispatchToProp)(SuggestionPopup);