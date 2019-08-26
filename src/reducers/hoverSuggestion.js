import {CHANGE_HOVER_SUGGESTION} from '../constant'; 
const payload = -1;

export default function reducer(state = {
    currentHover
},hoverSuggestion){
    switch(hoverSuggestion.type){
        case CHANGE_HOVER_SUGGESTION:
            return {
                ...state,
                currentHover: hoverSuggestion.currentHover
            }
        default:
            return;
    }
}