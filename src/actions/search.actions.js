import {
    SEARCH_CHANGE_KEYWORD,
    COUNT_UP_HOVER_SUGGESTION,
    CHANGE_HOVER_SUGGESTION,
    COUNT_DOWN_HOVER_SUGGESTION,
    MOUSE_HOVER_SUGGESTION,
    SEARCH_CHECK_CLICK_OUT_SIDE,
    SEARCH_CHANGE_CURRENT_PAGE,
    SEARCH_TOGGLE_SEARCH,
    SEARCH_SET_LIST_ITEM,
    SEARCH_SET_CATEGORY_LIST,
    SEARCH_SET_SHOW_MODAL,
    SEARCH_SET_ID_MODAL,
    SEARCH_SET_SCROLL_POSTION
} from '../constant';

export const changeKeyword = keyword => {
    return {
        type: SEARCH_CHANGE_KEYWORD,
        keyword
    }
}

export const setScrollPostion = positionScroll => {
    return {
    type: SEARCH_SET_SCROLL_POSTION,
    positionScroll
    }
}

export const setIDModal = id =>{
    return {
        type: SEARCH_SET_ID_MODAL,
        idModal: id
    }
}

export const setListItem = listItem => {
    return {
        type: SEARCH_SET_LIST_ITEM,
        listItem
    }
}

export const setShowModal = isShowModal => {
    return {
        type: SEARCH_SET_SHOW_MODAL,
        isShowModal
    }
}

export const setListCategory = (listCategory) => {
    return {
        type: SEARCH_SET_CATEGORY_LIST,
        listCategory
    }
}

export const checkClickOutSide = nodeClicked =>{
    return {
        type: SEARCH_CHECK_CLICK_OUT_SIDE,
        nodeClicked
    }
}

export const toggleSearch = isSearch => {
    return {
        type: SEARCH_TOGGLE_SEARCH,
        isSearch: !isSearch
    }
}
export const changeCurrentPage = currentPage => {
    return {
        type: SEARCH_CHANGE_CURRENT_PAGE,
        currentPage
    }
}

export const changeHoverSuggestion = (type,currentHover, lengthSuggestion) =>{
    switch (type){
        case COUNT_UP_HOVER_SUGGESTION:
            if(currentHover === -1)
            return {
                type: CHANGE_HOVER_SUGGESTION,
                currentHover: lengthSuggestion -1
            }
            else return {
                type: CHANGE_HOVER_SUGGESTION,
                currentHover: currentHover - 1
            }
        case COUNT_DOWN_HOVER_SUGGESTION: 
            if( currentHover === lengthSuggestion -1)
                return {
                    type: CHANGE_HOVER_SUGGESTION,
                    currentHover: -1
                }
            else return {
                type: CHANGE_HOVER_SUGGESTION,
                currentHover: currentHover + 1 
            }
        case MOUSE_HOVER_SUGGESTION:
            return {
                type: CHANGE_HOVER_SUGGESTION,
                currentHover
            }
        default: 
        return
    }
};