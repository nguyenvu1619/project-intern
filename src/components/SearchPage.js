import React, { Component } from 'react';
import apiServices from '../utils/apiServices';
import SearchResults from './SearchResult';

const list = [1,2,3,4,5,6,7,8,9];
class SearchPage extends Component {
    state = {
        filter: 'all',
        data: []
    }
    async componentDidMount() {
        const result = await apiServices('get',`search/get_post_by_keyword?keyword=${this.props.keyWord}`)
        console.log(result);
    }
    handleFilter = (event) => {
        const filter = event.currentTarget.getAttribute('data-filter');
        if (filter !== this.state.filter)
            this.setState({
                filter
            })
    }
    render(){
        return( <section className="section__result-pages">
        <div className="container-fluid result-pages__container">
            <div className="result-pages__header layout-header">
                <div className="result-pages__header-container layout-header__container">
                    <div className="result-pages__header-top layout-header__top">
                        <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                            <div className="rp-header-top__logo lh-top__logo">
                                <div className="header-top--logo lh-top--logo"><a href="/"><img src="../assets/img/icon-asset.png" alt=""/></a></div>
                            </div>
                            <div className="rp-header-top__search-input lh-top__search-input">
                                <div className="search-input">
                                    <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                        <input className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabindex="1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto rp-header-top__menu lh-top__menu">
                                <div className="d-flex align-items-center ht-menu__items">
                                    <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                        <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../assets/img/Group 1.png" alt=""/></div>
                                        <div className="menu-tools__dropdown-menu dropdown-menu">
                                            <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../assets/img/Group 1569.png" alt=""/><span className="ht-menu--text">
                                                        T&iacute;nh
                                                        to&aacute;n
                                                        kho&#x1EA3;n
                                                        vay</span></a></div>
                                            <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../assets/img/baseline-insert_chart-24px.png" alt=""/><span className="ht-menu--text">
                                                        T&iacute;nh
                                                        to&aacute;n hi&#x1EC7;u qu&#x1EA3; d&#x1EF1; &aacute;n</span></a></div>
                                            <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../assets/img/baseline-monetization_on-24px.png" alt=""/><span className="ht-menu--text">T&agrave;i ch&iacute;nh c&aacute; nh&acirc;n</span></a></div>
                                        </div>
                                    </div>
                                    <div className="ht-menu--item">
                                        <div className="ht-menu__notify"><a href="#"><img className="ht-menu--icon" src="../assets/img/Group 22.png" alt=""/></a></div>
                                    </div>
                                    <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login" href="/dang-nhap"><img className="ht-menu--icon ht-menu--icon-avatar" src="../assets/img/icon-avatar.png" alt=""/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result-pages__header-navigation">
                        <div className="rp-header-navigation header-navigation__container">
                            <div className="header-navigation__items d-flex">
                                <div onClick={this.handleFilter} data-filter='all' className={`header-navigation--item ${this.state.filter==='all' ? 'is-actived' : ''}`}><a className="hn-item--text">T&#x1EA5;t c&#x1EA3;</a></div>
                                <div onClick={this.handleFilter} data-filter='infomation' className={`header-navigation--item ${this.state.filter==='infomation' ? 'is-actived' : ''}`}><a className="hn-item--text" >Th&ocirc;ng tin</a></div>
                                <div onClick={this.handleFilter} data-filter='map' className={`header-navigation--item ${this.state.filter==='map' ? 'is-actived' : ''}`}><a className="hn-item--text" >B&#x1EA3;n &dstrok;&#x1ED3;</a></div>
                                <div onClick={this.handleFilter} data-filter='price' className={`header-navigation--item ${this.state.filter==='price' ? 'is-actived' : ''}`}><a className="hn-item--text" >B&#x1EA3;ng gi&aacute;</a></div>
                                <div data-filter='' className="header-navigation--item dropdown">
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
                </div>
            <div className="result-pages__body">
                <div className="result-pages__body-container container">
                    <div className="result-pages__search-result">
                        <div className="rp-search-result__header">
                            <div className="text-result">Khoảng <strong>1.782</strong> kết quả</div>
                            <div className="search-result__header-map">
                                <div className="header-map__container">
                                    <div className="header-map__main">
                                        <div className="header-map--map">
                                            <div className="header-map__map-group"><img src="../assets/img/result-map.jpg" alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="header-map__details">
                                        <div className="map-details--name"><span>L&yacute; Ch&iacute;nh Th&#x1EAF;ng</span></div>
                                        <div className="map-details--address"><span>Qu&#x1EAD;n 3, Tp H&#x1ED3; Ch&iacute; Minh</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SearchResults resultList ={list} />
                            
                        </div>
                        <div className="rp-search-result__pagination">
                            <div className="search-result__pagination-container container">
                                <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end"><a className="sr-pagination--btn sr-pagination--previous" href="#">Tr&#x1B0;&#x1EDB;c</a>
                                    <div className="sr-pagination__items d-flex align-items-center"><a className="sr-pagination--item is-actived" href="#">1</a><a className="sr-pagination--item" href="#">2</a><a className="sr-pagination--item" href="#">3</a><a className="sr-pagination--item" href="#">4</a><a className="sr-pagination--item" href="#">5</a></div><a className="sr-pagination--btn sr-pagination--next" href="#">Ti&#x1EBF;p</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="result-pages__footer layout-footer">
                <div className="result-pages__footer-container">
                    <div className="rs-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                        <div className="rs-footer--link layout-footer--link"><a href="#">Gi&#x1EDB;i thi&#x1EC7;u</a></div>
                        <div className="rs-footer--link layout-footer--link"><a href="#">H&#x1B0;&#x1EDB;ng d&#x1EAB;n</a></div>
                    </div>
                  
                    <div className="rs-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                        <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                            <marquee>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                            </marquee>
                        </div>
                        <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                            <marquee>
                                <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                            </marquee>
                        </div>
                    </div>
                   
                    <div className="rs-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                        <div className="rs-footer__quick-view layout-footer--quick-view">
                            <marquee>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="d-none d-lg-block chat-sidebar collapsed" id="chat-sidebar">
            <div className="chat-sidebar__container">
                <div className="chat-sidebar__content d-flex flex-column justify-content-between">
                    <div className="chat-sidebar__top">
                        <div className="chat-sidebar--btn-collapse">
                            <div className="btn-expand__content">
                                <button className="btn btn-chat--expand" id="btn-chat--expand"><img src="../assets/img/Path 115.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                   
                    <div className="chat-sidebar__bottom">
                       
                        <div className="chat-sidebar__list chat-list">
                            <div className="chat-list__container">
                                <div className="chat-list__content">
                                    <div className="chat-list__contact">
                                        <div className="chat-list--contact-items">
                                           
                                            <div className="contact-items contact-items__active">
                                               
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-1.png" alt=""/></div>
                                                    <div className="contact-item--name">L&ecirc; &Aacute;nh H&#x1ED3;ng Nga</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                              
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-2.png" alt=""/></div>
                                                    <div className="contact-item--name">Peter Parker</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                               
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-3.png" alt=""/></div>
                                                    <div className="contact-item--name">Tom Hank</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                              
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-4.png" alt=""/></div>
                                                    <div className="contact-item--name">Amy Lee Johnson</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                              
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-5.png" alt=""/></div>
                                                    <div className="contact-item--name">Picasa Poo</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                            </div>
                                          
                                            <div className="contact-items contact-items__inactive">
                                                
                                                <div className="contact-item d-flex justify-content-center">
                                                    <div className="contact-item--avatar"><img src="../assets/img/chat-avt-6.png" alt=""/></div>
                                                    <div className="contact-item--name">Jessica Snow</div>
                                                    <div className="contact-item--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-sidebar__chat-message">
                            <div className="chat-message__container">
                                <div className="chat-message__content">
                                    <div className="chat-message d-flex justify-content-center align-items-center">
                                        <div className="chat-message--icon"><img src="../assets/img/chat-message.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-sidebar__search-input">
                            <div className="search-input">
                                <div className="search-input__container">
                                    <div className="search-input__content">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="search-icon"><img src="../assets/img/SVG/search.svg" alt=""/></div>
                                            </div>
                                            <input className="form-control" type="text" placeholder="Tìm kiếm bạn bè" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="chat-sidebar__pop-up">
                            <div className="chat-popup">
                                <div className="chat-popup__container">
                                    <div className="chat-popup__content">
                                        <div className="chat-popup__items" id="chat-popup__items">
                                            <div className="chat-popup--item">
                                                <div className="chat-popup--header d-flex">
                                                    <div className="chat-popup--status"><img src="../assets/img/icon-chat-active.png" alt=""/></div><span className="ml-2 header--text">Test</span>
                                                    <div className="chat-popup--close">&times;</div>
                                                </div>
                                                <div className="chat-popup--body">
                                                    <div className="message-received">
                                                        <div className="message-received__content row">
                                                            <div className="col-2 px-0 received__content--icon"><img src="../assets/img/chat-avt-1.png" alt=""/></div>
                                                            <div className="col-10 received__content--text"><span>
                                                                    KHLCNT c&#x1EE7;a Ban Qu&#x1EA3;n l&yacute; d&#x1EF1; &aacute;n &dstrok;&#x1EA7;u t&#x1B0; x&acirc;y .... KHLCNT c&#x1EE7;a S&#x1EDF; T&agrave;i ch&iacute;nh t&#x1EC9;nh H&#x1B0;ng Y&ecirc;n
                                                                    cho d&#x1EF1;
                                                                    &aacute;n &ldquo;Mua s&#x1EAF;m thi&#x1EBF;t b&#x1ECB; &dstrok;&#x1ECB;nh .... H&#x1EA1;ng m&#x1EE5;c: X&oacute;m Ao V&agrave;ng, C&#x1ED5; R&ugrave;a, G&ograve; Ch&egrave;, Ph&uacute;c L&#x1ED9;c, Quy&#x1EBF;t
                                                                    Th&#x1EAF;ng, T&acirc;n ...</span></div>
                                                            <div className="col-12 received__content--time text-right"><span>12:09 - 18/10/2019</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-send">
                                                        <div className="message-send__content row align-items-end flex-column">
                                                            <div className="message-send--text"><span>OK</span></div>
                                                            <div className="message-send--time text-right"><span>1 min</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-popup--input">
                                                    <div className="input-group">
                                                        <input className="form-control" type="text" placeholder="Nhập tin nhắn" aria-label="Username" aria-describedby="basic-addon1"/>
                                                        <div className="input-group-append">
                                                            <div className="send-icon"><img src="../assets/img/icon-send.png" alt=""/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        )
    }
}

export default SearchPage;