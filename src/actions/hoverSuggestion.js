import {CHANGE_HOVER_SUGGESTION} from '../constant';

export const changeHoverSuggestion = currentHover =>({
    type: CHANGE_HOVER_SUGGESTION,
    currentHover
});