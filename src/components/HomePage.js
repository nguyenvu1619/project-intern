import React, { Component } from 'react';
import apiService from '../utils/apiServices';
import SuggestionPopup from './SuggestionPopup';
import SearchInput from './SearchInput';
import {searchWithKeywordAction} from '../actions/searchWithKeyword';
import {changeHoverSuggestion} from '../actions/search.actions';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.inputRef = React.createRef();
        this.state = {
            keyword : '',
            listSuggestion: [],
            active: -1,
            isShowPopup: false,
            isSearch: false
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
        console.log(this.state.isShowPopup);
        if (this.state.keyword.length ===0)
             this.setState({
                isShowPopup:false
            });
        await this.setState({
            active: -1
        })
        let result
        if (this.state.keyword !== 0)
          result = await apiService('get',`suggestion?keyword=${this.state.keyword}`,);
        if (!result.data.statusMessage){
             this.setState({
                listSuggestion: result.data
            })
        }
        else  this.setState({
          listSuggestion: []
      })
    }
    handleClickOutSide = async (event) => {
        if(this.wrapperRef.current)
        {
        if (!this.wrapperRef.current.contains(event.target)) {
           await this.setState({
               isShowPopup: false
           })
        }
    }
      }
    handleKeydown = async (event) => {
        const nodeInput = this.inputRef.current;
        const lengthSuggestion = this.state.listSuggestion.length;
        
        if(event.key === 'Enter' && lengthSuggestion !== 0)
        {
          this.props.changeKeyWordSearch(nodeInput.value);
          this.setState({
            isSearch: true
          })
        }
        if (this.state.isShowPopup){
        if(event.key === 'ArrowUp')
        {
          event.preventDefault();
            if(this.state.active ===-1)
                await this.setState({
                active: lengthSuggestion-1
            });
            else 
            await this.setState({
            active: this.state.active-1
        })
        }
        if(event.key === 'ArrowDown')
        {
            if(this.state.active ===lengthSuggestion -1)
            await this.setState({
                active: -1
            });
            else 
            await this.setState({
            active: this.state.active+1
        })
        }
        if(this.state.listSuggestion.length > 0 && this.state.active != -1)
        nodeInput.value = this.state.listSuggestion[this.state.active].name;
      }
    }
    render(){
      return this.state.isSearch ? (
        <Redirect to='/search' />
      ) : (
         <div className="section-homepage" onClick ={this.handleClickOutSide} >
            <div ref={this.abc} className="container-fluid homepage__container">
              <div className="homepage__header layout-header d-none d-lg-block">
                <div className="homepage__header-container layout-header__container">
                  <div className="homepage__header-top layout-header__top">
                    <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                      <div className="ml-auto hp-header-top__menu lh-top__menu">
                        <div className="d-flex align-items-center ht-menu__items">
                          <div className="ht-menu--item"><a href="/ket-qua/thong-tin">Th&ocirc;ng tin</a></div>
                          <div className="ht-menu--item"><a href="/ban-do">B&#x1EA3;n &dstrok;&#x1ED3;</a></div>
                          <div className="ht-menu--item"><a href="/ket-qua/bang-gia">B&#x1EA3;ng gi&aacute;</a></div>
                          <div className="ht-menu--item dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown">Th&ecirc;m</div>
                            <div className="dropdown-menu ht-menu__add">
                              <div className="dropdown-item"><a href="#">Danh b&#x1EA1;</a></div>
                              <div className="dropdown-item"><a href="#">T&agrave;i nguy&ecirc;n</a></div>
                              <div className="dropdown-item"><a href="#">H&#x1ECF;i &dstrok;&aacute;p</a></div>
                            </div>
                          </div>
                          <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                            <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt=""/></div>
                            <div className="menu-tools__dropdown-menu dropdown-menu">
                              <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/Group 1569.png" alt=""/><span className="ht-menu--text">T&iacute;nh to&aacute;n kho&#x1EA3;n vay</span></a></div>
                              <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt=""/><span className="ht-menu--text">
                                    T&iacute;nh
                                    to&aacute;n hi&#x1EC7;u qu&#x1EA3; d&#x1EF1; &aacute;n</span></a></div>
                              <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt=""/><span className="ht-menu--text">T&agrave;i ch&iacute;nh c&aacute; nh&acirc;n</span></a></div>
                            </div>
                          </div>
                          <div className="ht-menu--item">
                            <div className="ht__menu-notify"><a href="#"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt=""/></a></div>
                          </div>
                          <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login btn btn-primary" href="/dang-nhap">Đăng Nhập</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homepage-body">
                <div className="homepage-body__container">
                  <div className="homepage-body__content">
                    <div className="center d-flex justify-content-center align-items-center">
                      <div className="center-content d-flex flex-column justify-content-center">
                        <div className="homepage--logo">
                          <div className="logo--container d-flex justify-content-center"><img src="../../assets/img/asset-logo.png" alt=""/></div>
                        </div>
                        <div className="homepage--description">
                          <div className="description--container d-flex flex-column align-items-center"><span className="description-line line-1">Thị trường bất động sản Việt Nam</span></div>
                        </div>
                        <div className="homepage--input-search">
                          <div className="input-search__container d-flex justify-content-center">
                            <div className={`w-100 input-search__content collapsed ${this.state.isShowPopup ? 'active-toggle-content' : ''}`} id="autoComplete__content">
                            {this.state.isShowPopup ? <input ref={this.inputRef} autocomplete="off" onKeyDown={this.handleKeydown} onChange={this.handleChange}  className="form-control active-toggle" id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
                            : <input ref={this.inputRef} autocomplete="off" onKeyDown={this.handleKeydown} onChange={this.handleChange}  className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
                            }
                             {this.state.isShowPopup ?
                             <div ref={this.wrapperRef}>
                             <SuggestionPopup ref={this.wrapperRef} onChangeHover={this.handleChangeActiveByMouse} active ={this.state.active}  listSuggestion={this.state.listSuggestion}/>
                             </div>
                             : null }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homepage__footer layout-footer">
                <div className="homepage__footer-container">
                  <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                    <div className="hp-footer--link layout-footer--link"><a href="#">Gi&#x1EDB;i thi&#x1EC7;u</a></div>
                    <div className="hp-footer--link layout-footer--link"><a href="#">H&#x1B0;&#x1EDB;ng d&#x1EAB;n</a></div>
                  </div>
                  <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                    <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                      <marquee>
                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                                sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                      </marquee>
                    </div>
                    <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                      <marquee>
                        <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                                auctor aliquet. Aenean
                                                sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                      </marquee>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          )
    }
}


export default HomePage;