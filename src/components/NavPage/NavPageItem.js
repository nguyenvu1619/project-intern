import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {changeCurrentPage} from '../../actions/search.actions';

function NavPageItem({
    index,
    currentPage,
    changeCurrentPage,
    history,
    keyword})
    {
    const handleClick = e => {
        e.preventDefault();
        const newCurrentPage = changeCurrentPage(index).currentPage;
        history.push(`/search?keyword=${keyword}&page=${newCurrentPage}`);
    }
    if(currentPage === index){
    return <p class="sr-pagination--item page-choosed" key={`navPageItem-${index}}`} href="#">{index}</p>
}
    else 
    return <a onClick={handleClick} style ={{color: 'blue'}} class="sr-pagination--item" key={`navPageItem-${index}}`} href="#">{index}</a>
}

const mapDispatchToProp = dispatch => ({
    changeCurrentPage: (currentPage) => dispatch(changeCurrentPage(currentPage))
})
const mapStateToProp = state => ({
    currentPage: state.search.currentPage,
    keyword: state.search.keyword
})

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(NavPageItem));