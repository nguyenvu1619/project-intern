import React, { Component } from 'react';
import { formatNumber as _ } from '../../utils/formatData';
import { connect } from 'react-redux';
import { URL_PHOTO } from '../../constant/url';

function ProductItem ({item, listCategory}){
    const category  = listCategory.filter(category => item.category_id === category._id)
    return <div class="rp-search-result-item">
    <div class="search-result__item-container d-flex"><img class="sr-item__modal" src="../../assets/img/icon-modal.png"/>
        <div class="sr-item__poster">
            <div class="poster--avatar"><a href="#"><img src="../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt=""/></a></div>
        </div>
        <div class="sr-item__details">
            <div class="item-details__container">
                <div class="item-details__title">
                    <div class="ids-title__content">
                        <div class="ids-title--header d-flex"><a class="title--name" href="#">{item.name}</a>
                            <div class="title--rate d-flex align-items-center"><span>[Chung cư </span><span class="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt=""/>]</div>
                        </div>
                        <p class="mb-0 ids-title--category">đã đăng một bài viết trong <a class="ids-title--category" href="/ket-qua/thong-tin">{category[0].category_name}</a> cùng với <a href="#" class="ids-title--category">Homekeys 97891</a> cập nhật trạng thái <span class="red bold">Bán</span></p>
                        <p class="mb-0 ids-title--date-posted">10 ngày trước</p>
                    </div>
                </div>
                <div class="item-details__post">
                    <div class="realestate-item">
                        <div class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                            <img src="../../assets/img/125x130.jpg" alt=""/>
                            <div class="like  fa fa-heart-o"></div>
                        </div>
                        <div class="post-content">
                            <div class="top"><span>{`${_(item.sale_price)} ${item.sale_price_unit_id}`}</span>  <span class="#" style={{color: '#189655'}}>60,78m<sub class="subtop">2</sub></span>  <span class="#" style={{color: '#189655'}}>{item.floor_area}m<sub class="subtop">2</sub> <em style={{fontWeight: 'normal'}}>sàn</em> </span> </div>
                            <div class="location">{item.location}</div>
                            <div class="actions">
                                <button class="btn">
                                    <img src="../../assets/img/bxs-edit.svg" alt=""/>
                                </button>
                                <button class="btn">
                                    <img src="../../assets/img/earth.svg" alt=""/>
                                </button>
                                <button class="btn">
                                    <img src="../../assets/img/baseline-map-24px.svg" alt=""/>
                                </button>
                            </div>
                            <div class="map">
                                <img src="../../assets/uploads/map.jpg" alt=""/>
                            </div>
                            <div class="info -top">
                                <span>{item.investor_id}</span>  <span>{item.handover_status}</span>  <span>Đã hoàn công</span>  <span>{item.legal}</span>
                            </div>
                            <div class="info -ban">
                                <span class="status -ban">Bán</span>  <span>Avalue: <strong>{`${_(item.a_value)} ${item.a_value_unit_id}`}</strong></span>  <span>Arent: <strong>{`${_(item.a_rent)} ${item.a_rent_unit_id}`}</strong></span>
                                
                               
                            </div>
                            <div class="info">
                                <span><strong>{item.unit_price} triệu/m</strong> <sub class="subtop">2</sub></span>  <span>Trả trước: <strong>700 triệu</strong></span><span>Thanh toán: <strong>13,2 triệu/tháng</strong></span>
                            </div>
                            <div class="location"> <span>Hẻm xe hơi</span> <span>{item.access_road}</span></div>
                            <div class="bottom-info">
                                <span>
                                    <img style={{margin: '1px'}} src="../../assets/img/cauthang.svg" alt=""/>{item.floor} tầng
                                </span>
                                <span>
                                    <img style={{margin: '1px'}} src="../../assets/img/icons/bx-bed.svg" alt=""/> {`${item.bedroom} ${item.bedroom_unit_id}`}
                                </span>
                                <span>
                                    <img style={{margin: '1px',width:'25.33%'}} src="../../assets/img/icons/bx-bath.svg" alt=""/> {`${item.bathroom} ${item.bathroom_unit_id}`}
                                </span>
                                <span>
                                    <img src="../../assets/img/icons/location.svg" alt=""/> Đông Nam
                                </span>
                            </div>

                        </div>
                    </div>      
                </div>
                <div class="item-details__actions">
                    <div class="action-buttons-bottom">
                        <a href="#" class="btn -marked">
                            <span class="fa fa-star icon"></span> 40
                        </a>
                        <a href="#" class="btn -comment">
                            <span class="fa fa-comment-o icon"></span> 40
                        </a>
                        <a href="#" class="btn -liked">
                            <span class="-ap  icon-like2 icon"></span> 40
                        </a>
                        <a href="#" class="btn -share">
                            <span class="-ap  icon-share4 icon"></span> 40
                        </a>
                        <a href="#" class="btn -mail">
                            <span class="-ap  icon-mail6 icon"></span> 10
                        </a>
                        <a href="#" class="btn -mail">
                            <span class="-ap   icon-add_shopping_cart icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

const mapStateToProp = state => ({
    listCategory: state.search.listCategory
})

export default connect(mapStateToProp, null)(ProductItem);