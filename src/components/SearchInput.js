import React from 'react';
import SearchSugesstionPopup from './SuggestionPopup';
import {changeHoverSuggestion, changeKeyword} from '../actions/search.actions';
import {COUNT_DOWN_HOVER_SUGGESTION, COUNT_UP_HOVER_SUGGESTION } from '../constant';
import { connect } from 'react-redux';
import SuggestionPopup from './SuggestionPopup';

const list = [0,1,2,3,4,5,6,7];
function SearchInput({
    currentHover,
    changeHoverSugesstion,
    suggestionList,
    isShowPopup,
    changeKeyword
    }){
    suggestionList = list;
    console.log(currentHover);
    const lengthSuggestion = suggestionList.length;
    const searchInput = React.createRef();
    const handleKeydown = (event) => {
        let result;
        if(event.key === 'Enter' && lengthSuggestion !== 0)
        {
          
        }
        if (true){
        if(event.key === 'ArrowUp')
        {
          event.preventDefault();
          result = changeHoverSugesstion(COUNT_UP_HOVER_SUGGESTION, currentHover, lengthSuggestion);
        }
        if(event.key === 'ArrowDown')
        {
           result = changeHoverSugesstion(COUNT_DOWN_HOVER_SUGGESTION, currentHover, lengthSuggestion);
        }
        if(result){
            if(result.currentHover !== -1)
            {
                const nodeInput = searchInput.current;
                const keyword = changeKeyword(suggestionList[result.currentHover]).keyWord;
                nodeInput.value = keyword;
            }
        }
        }
      }
    const handleChange = (event) => {
        changeKeyword(event.target.value);
    }
    return <div className="search-input">
    <div className={`w-100 input-search__content collapsed ${isShowPopup ? 'active-toggle-content' : ''}`} id="autoComplete__content">
    <input ref={searchInput}  autocomplete="off" onKeyDown={handleKeydown} onChange={handleChange}  className={`form-control active-toggle ${isShowPopup ? 'active-toggle' :''}`} id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
    <SuggestionPopup listSuggestion={suggestionList} />
    </div>
</div>
}
const mapStateToProp = state => ({
    currentHover: state.search.currentHover,
});

const mapDispatchToProp = dispatch => ({
     changeHoverSugesstion: (type, currentHover, lengthSuggestion) => dispatch(changeHoverSuggestion(type, currentHover, lengthSuggestion)),
     changeKeyword: keyword => dispatch(changeKeyword(keyword))
});

export default connect(mapStateToProp, mapDispatchToProp)(SearchInput);