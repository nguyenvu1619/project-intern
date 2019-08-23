import React, { Component } from 'react';
import apiServices from '../utils';

const url = window.location.href;

class SearchPage extends Component {
    async componentDidMount() {
        const result = await apiServices('get',`search/get_post_by_keyword?keyword=${this.props.keyWord}`)
        console.log(result);
    }
    render(){
        console.log(url);
        return(
            <div>
                
            </div>
        )
    }
}