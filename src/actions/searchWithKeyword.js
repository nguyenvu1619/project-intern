import {SEARCH_CHANGE_KEYWORD} from '../constant';

export const searchWithKeywordAction = keyword => {
 
    return {
        type: SEARCH_CHANGE_KEYWORD,
        keyword
    }
}