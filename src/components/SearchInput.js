import React, { Component } from 'react';
import {changeHoverSuggestion, changeKeyword} from '../actions/search.actions';
import { connect } from 'react-redux';
import apiService from '../utils/apiServices';
import SuggestionPopup from './SuggestionPopup';
import {
    COUNT_DOWN_HOVER_SUGGESTION as DOWN,
    COUNT_UP_HOVER_SUGGESTION as UP,
} from '../constant';

const list = [0,1,2,3,4,5,6,7];
class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.inputRef = React.createRef();
        this.state = {
            keyword: '',
            listSuggestion: [],
            active: -1,
            isShowPopup: false,
            isSearch: false,
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            if (this.wrapperRef.current) 
                if (!this.wrapperRef.current.contains(this.nodeClicked)) {
                    this.setState({
                        isShowPopup: false
                    })
                }
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
        let result
        if (this.state.keyword !== 0)
            result = await apiService('get', `suggestion?keyword=${this.state.keyword}`, );
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
        const lengthSuggestion = list.length  //this.state.listSuggestion.length;
        const { currentHover, changeHoverSugesstion } = this.props;
        if (event.key === 'Enter' && lengthSuggestion !== 0) {
            this.props.changeKeyWordSearch(nodeInput.value);
            this.setState({
                isSearch: true
            })
        }
        if (this.state.isShowPopup) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                changeHoverSugesstion(UP, currentHover, lengthSuggestion);
            }
            if (event.key === 'ArrowDown') {
                changeHoverSugesstion(DOWN, currentHover, lengthSuggestion);                
            }
            if (this.state.listSuggestion.length > 0 && this.state.active !== -1)
                nodeInput.value = this.state.listSuggestion[this.state.active].name;
        }
    }

    render(){
    return <div className={`w-100 input-search__content collapsed ${this.state.isShowPopup ? 'active-toggle-content' : ''}`} id="autoComplete__content">
    <input ref={this.inputRef} autocomplete="off" onKeyDown={this.handleKeydown} onChange={this.handleChange}  className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
     <div ref={this.wrapperRef}>
        {this.state.isShowPopup &&<SuggestionPopup ref={this.wrapperRef} onChangeHover={this.handleChangeActiveByMouse} active ={this.state.active}  listSuggestion={list}/>}
    </div>
    </div>
    }
}
const mapStateToProp = state => ({
    currentHover: state.search.currentHover,
    nodeClicked: state.search.nodeClicked
});

const mapDispatchToProp = dispatch => ({
     changeHoverSugesstion: (type, currentHover, lengthSuggestion) => dispatch(changeHoverSuggestion(type, currentHover, lengthSuggestion)),
     changeKeyword: keyword => dispatch(changeKeyword(keyword)),
});

export default connect(mapStateToProp, mapDispatchToProp)(SearchInput);