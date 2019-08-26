import {
    SEARCH_CHANGE_KEYWORD,
    COUNT_UP_HOVER_SUGGESTION,
    CHANGE_HOVER_SUGGESTION,
    COUNT_DOWN_HOVER_SUGGESTION,
    MOUSE_HOVER_SUGGESTION
} from '../constant';

export const changeKeyword = keyWord => {
    return {
        type: SEARCH_CHANGE_KEYWORD,
        keyWord: keyWord
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
    }
};