import React, { Component } from 'react';
import {Switch, Route } from 'react-router';
import { connect } from 'react-redux'
import {filterSearch} from '../reducers/FilterSearch';

const NavSearchPage = ({
    filterSearch,
    changeFilterSearch,
    history
}) => {
    console.log(filterSearch);
    console.log(history);
    const handleClick = (event) => {
        console.log(event.currentTarget.textContent);
        const filterSearch = event.currentTarget.getAttribute('data-filtersearch');
        console.log(filterSearch);
        changeFilterSearch(filterSearch);
    }
    return  <div className="result-pages__header-navigation">
                        <div className="rp-header-navigation header-navigation__container">
                            <div className="header-navigation__items d-flex">
                                <div onClick={handleClick} data-filtersearch='all' className="header-navigation--item is-actived"><a className="hn-item--text" >T&#x1EA5;t c&#x1EA3;</a></div>
                                <div onClick={handleClick} data-filtersearch='infomation' className="header-navigation--item"><a className="hn-item--text" >Th&ocirc;ng tin</a></div>
                                <div onClick={handleClick} data-filtersearch='map' className="header-navigation--item"><a className="hn-item--text" >B&#x1EA3;n &dstrok;&#x1ED3;</a></div>
                                <div onClick={handleClick} data-filtersearch='price' className="header-navigation--item"><a className="hn-item--text" >B&#x1EA3;ng gi&aacute;</a></div>
                                <div onClick={handleClick} data-filtersearch='more' className="header-navigation--item dropdown">
                                    <div className="hn-item--text dropdown-toggle" data-toggle="dropdown">Thêm <span className="fa icon"></span></div>
                                    <div className="dropdown-menu hn-menu__add">
                                        <div className="dropdown-item"><a href="#">Danh b&#x1EA1;</a></div>
                                        <div className="dropdown-item"><a href="#">T&agrave;i nguy&ecirc;n</a></div>
                                        <div className="dropdown-item"><a href="#">H&#x1ECF;i &dstrok;&aacute;p</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
}

const mapStateToProp = state => ({
    filterSearch : state.filterSearch
});
const mapDispatchToProp = (dispatch, ownProps) => ({
    changeFilterSearch: (filter) => dispatch(filterSearch(filter))
});

export default connect(mapStateToProp, mapDispatchToProp)(NavSearchPage);

