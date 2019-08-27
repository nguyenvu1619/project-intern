import {
    CHANGE_HOVER_SUGGESTION,
    SEARCH_CHANGE_KEYWORD,
    SEARCH_CHECK_CLICK_OUT_SIDE,
} from '../constant';

const initializing = {
    keyWord: '',
    currentHover: -1,
    nodeClicked: null,
    isShowPopup: false,
    nodeInput: null
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
        case SEARCH_CHECK_CLICK_OUT_SIDE:
            return {
                ...state,
                nodeClicked: action.nodeClicked
            }
        default:
            return state;
    }
}