import {SEARCH_CHANGE_KEYWORD} from '../constant';

export const searchWithKeywordAction = keyword => {
    console.log('da goi action')
    return {
        type: SEARCH_CHANGE_KEYWORD,
        keyword
    }
}