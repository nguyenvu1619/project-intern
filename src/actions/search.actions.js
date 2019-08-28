import {
    SEARCH_CHANGE_KEYWORD,
    COUNT_UP_HOVER_SUGGESTION,
    CHANGE_HOVER_SUGGESTION,
    COUNT_DOWN_HOVER_SUGGESTION,
    MOUSE_HOVER_SUGGESTION,
    SEARCH_CHECK_CLICK_OUT_SIDE,
    SEARCH_CHANGE_CURRENT_PAGE,
    SEARCH_TOGGLE_SEARCH,
    SEARCH_SET_LIST_ITEM
} from '../constant';

export const changeKeyword = keyword => {
    return {
        type: SEARCH_CHANGE_KEYWORD,
        keyword
    }
}

export const setListItem = listItem => {
    return {
        type: SEARCH_SET_LIST_ITEM,
        listItem
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