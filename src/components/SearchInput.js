import React, { Component } from 'react';
import {changeHoverSuggestion, changeKeyword, toggleSearch, setListItem} from '../actions/search.actions';
import { connect } from 'react-redux';
import queryString from 'query-string';
import _ from 'lodash';
import { Redirect, withRouter } from 'react-router'
import apiService from '../utils/apiServices';
import SuggestionPopup from './SuggestionPopup';
import {
    COUNT_DOWN_HOVER_SUGGESTION as DOWN,
    COUNT_UP_HOVER_SUGGESTION as UP,
} from '../constant';
class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.inputRef = React.createRef();
        this.checkSearch = React.createRef();
        this.state = {
            keyword: '',
            listSuggestion: [],
            active: -1,
            isShowPopup: false
        }
    }
    componentDidMount(){
        const searchUrl = this.props.location.search;
        const keyword = queryString.parse(searchUrl).keyword;
        console.log(this.props.keyword)
        if(this.props.keyword){
            if(this.inputRef.current){
                this.inputRef.current.value = this.props.keyword;
            }
        }
        else if(keyword){
            console.log(this.props.keyword)
        if(this.inputRef.current){
            this.inputRef.current.value = keyword;
        }
    }
    }
    componentDidUpdate(prevProps){
        if(prevProps.nodeClicked !== this.props.nodeClicked){
            if (this.wrapperRef.current) 
                if (!this.wrapperRef.current.contains(this.nodeClicked)) {
                    this.setState({
                        isShowPopup: false
                    })
                }
            }
        if(this.checkSearch.current){
            this.props.toggleSearch(true)
            this.setState({
                isShowPopup: false
            })
        }
    }
    handleChangeActiveByMouse = (index) => {
        this.setState({
            active: index
        });
    }
    handleChange = async (event) => {
        await this.setState({
            keyword: event.target.value,
            isShowPopup: true
        });
        if (this.state.keyword.length === 0)
            this.setState({
                isShowPopup: false
            });
        await this.setState({
            active: -1
        })
        let result;
        if (this.state.keyword !== 0){
            result = await apiService('get', `search/suggestion?keyword=${this.state.keyword}`, 1000);
        }
        if (!result.data.statusMessage) {
            this.setState({
                listSuggestion: result.data
            })
        } else this.setState({
            listSuggestion: []
        })
    }

    handleKeydown = async (event) => {
        const nodeInput = this.inputRef.current;
        const lengthSuggestion = this.state.listSuggestion.length;
        const { currentHover, changeHoverSugesstion } = this.props;
        let newCurrentHover;
        if (event.key === 'Enter' && lengthSuggestion !== 0) {
            this.props.changeKeyword(nodeInput.value);
            this.props.toggleSearch(false);
        }
        if (this.state.isShowPopup) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                newCurrentHover = changeHoverSugesstion(UP, currentHover, lengthSuggestion).currentHover;
            }
            if (event.key === 'ArrowDown') {
                newCurrentHover = changeHoverSugesstion(DOWN, currentHover, lengthSuggestion).currentHover;   
            }
            if (this.state.listSuggestion.length > 0 && (event.key === 'ArrowDown' || event.key === 'ArrowUp')){
                if(newCurrentHover!== -1)
                nodeInput.value = this.state.listSuggestion[newCurrentHover].title;
                else nodeInput.value = this.state.keyword;
            }
        }
    }
    render(){
        console.log(this.state.keyword)
    return this.props.isSearch ? <div ref={this.checkSearch}>
     <Redirect to={`/search?keyword=${this.props.keyword}&page=1`} />
     </div> : <div style={this.props.style} className={`w-100 input-search__content collapsed ${this.state.isShowPopup ? 'active-toggle-content' : ''}`} id="autoComplete__content">
    <input defaultValue={this.props.keyword} ref={this.inputRef} autocomplete="off" onKeyDown={this.handleKeydown} onChange={this.handleChange}  className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
     <div ref={this.wrapperRef}>
        {this.state.isShowPopup &&<SuggestionPopup onChangeHover={this.handleChangeActiveByMouse}  listSuggestion={this.state.listSuggestion}/>}
    </div>
    </div>
    }
}
const mapStateToProp = state => ({
    currentHover: state.search.currentHover,
    nodeClicked: state.search.nodeClicked,
    isSearch: state.search.isSearch,
    keyword: state.search.keyword,
    currentPage: state.search.currentPage
});
const mapDispatchToProp = dispatch => ({
     changeKeyword: keyword => dispatch(changeKeyword(keyword)),
     toggleSearch: isSearch => dispatch(toggleSearch(isSearch)),
     changeHoverSugesstion: (type, currentHover, lengthSuggestion) => dispatch(changeHoverSuggestion(type, currentHover, lengthSuggestion))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(SearchInput));