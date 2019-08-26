import {CHANGE_HOVER_SUGGESTION } from '../constant';
import { SEARCH_CHANGE_KEYWORD } from '../constant';

const initializing ={
    keyWord: '',
    currentHover: -1
}

export default function searchReducer(state = initializing, action){
    switch (action.type){
        case CHANGE_HOVER_SUGGESTION:
            return {
                ...state,
                currentHover: action.currentHover
            }
        case SEARCH_CHANGE_KEYWORD:
            return {
                ...state,
                keyWord: action.keyWord
            }
        default:
            return state;
    }
}