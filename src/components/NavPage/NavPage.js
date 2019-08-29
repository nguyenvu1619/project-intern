import React from 'react';
import { connect } from 'react-redux';
import {changeCurrentPage} from '../../actions/search.actions';
import NavPageItem from './NavPageItem';


function NavPageListItems({currentPage}){
    const arr = [];
    if(currentPage < 7){
        for (let i= 1; i<= 10; i++){
            arr.push(i);
        }
    }
    else 
     for (let i= currentPage -5; i<= currentPage + 4; i++){
        arr.push(i);
    }
    return arr.map(index => <NavPageItem index={index} />)
}
function NavPage({currentPage, changeCurrentPage}){
    const handleCountDown = e => {
        e.preventDefault();
        changeCurrentPage(currentPage -1 );
    }
    const handleCountUp = e => {
        e.preventDefault();
        changeCurrentPage(currentPage + 1 );
    }
    return <div class="rp-search-result__pagination">
    <div class="search-result__pagination-container container">
        <div  class="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
        {currentPage > 1 &&<a onClick={handleCountDown} class="sr-pagination--btn sr-pagination--previous" href="#">Tr&#x1B0;&#x1EDB;c</a>}
            <div class="sr-pagination__items d-flex align-items-center">
           <NavPageListItems currentPage={currentPage} />
            </div>
            <a onClick={handleCountUp} class="sr-pagination--btn sr-pagination--next" href="#">
            Ti&#x1EBF;p</a>
        </div>
    </div>
</div>
}
const mapStateToProp = state => ({
    currentPage: state.search.currentPage
})
const mapDispatchToProp = dispatch => ({
    changeCurrentPage: (currentPage) => dispatch(changeCurrentPage(currentPage))
})

export default connect(mapStateToProp, mapDispatchToProp)(NavPage);