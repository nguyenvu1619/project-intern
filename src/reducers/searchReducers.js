import {
    CHANGE_HOVER_SUGGESTION,
    SEARCH_CHANGE_KEYWORD,
    SEARCH_CHECK_CLICK_OUT_SIDE,
    SEARCH_CHANGE_CURRENT_PAGE,
    SEARCH_TOGGLE_SEARCH,
    SEARCH_SET_LIST_ITEM
} from '../constant';

const initializing = {
    keyword: '',
    currentHover: -1,
    nodeClicked: null,
    currentPage: 1,
    isSearch: false,
    listItem: []
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
                keyword: action.keyword
            }
        case SEARCH_CHECK_CLICK_OUT_SIDE:
            return {
                ...state,
                nodeClicked: action.nodeClicked
            }
        case SEARCH_CHANGE_CURRENT_PAGE:
            return {

                ...state,
                currentPage: action.currentPage
            }
        case SEARCH_TOGGLE_SEARCH:
            return {
                ...state,
                isSearch: action.isSearch
            }
        case SEARCH_SET_LIST_ITEM:
            return {
                ...state,
                listItem: action.listItem
            }
        default:
            return state;
    }
}