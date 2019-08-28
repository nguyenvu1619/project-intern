import React from 'react'

function AddressItem({item}){
    return <div class="rp-search-result-item">
    <div class="search-result__item-container d-flex"><img class="sr-item__modal" src="../../assets/img/icon-modal.png"/>
        <div class="sr-item__poster">
            <div class="poster--avatar"><a href="#"><img src="../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt=""/></a></div>
        </div>
        <div class="sr-item__details">
            <div class="item-details__container">
                <div class="item-details__title">
                    <div class="ids-title__content">
                        <div class="ids-title--header d-flex"><a class="title--name" href="#">{item.company_id}</a>
                            <div class="title--rate d-flex align-items-center"><span>[Chung cư </span><span class="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt=""/>]</div>
                        </div>
                        <p class="mb-0 ids-title--category">đã đăng một <a class="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
                        <p class="mb-0 ids-title--date-posted">10 ngày trước</p>
                    </div>
                </div>
                <div class="item-details__post box-info-line">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12">
                            <div class="name">{item.address_name}</div>
                            <div class="location">Địa chỉ đường</div>
                            <p class="info-left">Bất động sản trên đường này</p>
                            <div class="info-row">
                                <span>
                                    <span class="value">12</span>
                                    <span class="key">đất nền</span>
                                </span>
                                <span>
                                    <span class="value">12</span>
                                    <span class="key">căn hộ</span>
                                </span>
                            </div>  
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="map">
                                <img src="../../assets/uploads/map.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12 box-right">
                            <p class="info-right">Phân đoạn: <span style={{color: '#707070'}}>Toàn đường</span></p>
                            <div class="info-line">
                                <span>Hiện hữu 15,5m</span>
                                <span>Lộ giới 15,5m</span>
                            </div>
                            <p class="info-right">Lộ giới 15,5m</p>
                            <p class="info-right">Avalue: 140tr/m <span class="subtop">2</span></p>
                            <p class="info-right">Gợi ý kinh doanh: Làm khách sạn</p>
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
export default AddressItem;