import {
    CHANGE_HOVER_SUGGESTION,
    SEARCH_CHANGE_KEYWORD,
    SEARCH_CHECK_CLICK_OUT_SIDE,
    SEARCH_CHANGE_CURRENT_PAGE,
    SEARCH_TOGGLE_SEARCH,
    SEARCH_SET_LIST_ITEM,
    SEARCH_SET_CATEGORY_LIST,
    SEARCH_SET_SHOW_MODAL,
    SEARCH_SET_ID_MODAL
} from '../constant';

const initializing = {
    keyword: '',
    currentHover: -1,
    nodeClicked: null,
    currentPage: 1,
    isSearch: false,
    listItem: [],
    listCategory: [],
    isShowModal: false,
    idModal: ''
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
        case SEARCH_SET_CATEGORY_LIST:
            return {
                ...state,
                listCategory: action.listCategory
            }
        case SEARCH_SET_SHOW_MODAL:
            return {
                ...state,
                isShowModal: action.isShowModal
            } 
        case SEARCH_SET_ID_MODAL:
            return {
                ...state,
                idModal: action.idModal
            }
        default:
            return state;
    }
}