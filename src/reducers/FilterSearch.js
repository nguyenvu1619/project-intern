export const CHANGE_FILTER_SEARCH = 'CHANGE_FILTER_SEARCH';

export const filterSearch = filterSearch => ({
        type: CHANGE_FILTER_SEARCH,
        filterSearch
});

export default function reducer(state = {
    filterSearch : 'all'
},action){
    console.log(action);
    switch(action.type){
        case CHANGE_FILTER_SEARCH:
            return {
                ...state,
                filterSearch : action.filterSearch
            }
        default:
            return state;
    }
}