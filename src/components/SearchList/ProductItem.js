import React from 'react';

function ProductItem({item}){
    return <div class="rp-search-result-item">
    <div class="search-result__item-container d-flex"><img class="sr-item__modal" src="../../public/assets/img/icon-modal.png"/>
        <div class="sr-item__poster">
            <div class="poster--avatar"><a href="#"><img src="../../public/assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt=""/></a></div>
        </div>
        <div class="sr-item__details">
            <div class="item-details__container">
                <div class="item-details__title">
                    <div class="ids-title__content">
                        <div class="ids-title--header d-flex"><a class="title--name" href="#">Asset data team</a>
                            <div class="title--rate d-flex align-items-center"><span>[Chung cư </span><span class="title_rate--highlight"> 3,5+ </span><img src="../../public/assets/img/star.png" alt=""/>]</div>
                        </div>
                        <p class="mb-0 ids-title--category">đã đăng một bài viết trong <a class="ids-title--category" href="/ket-qua/thong-tin">Nhà riêng</a> cùng với <a href="#" class="ids-title--category">Homekeys 97891</a> cập nhật trạng thái <span class="red bold">Bán</span></p>
                        <p class="mb-0 ids-title--date-posted">10 ngày trước</p>
                    </div>
                </div>
                <div class="item-details__post">
                    <div class="realestate-item">
                        <div class="post-image" style="background-image: url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg);">
                            <img src="../../public/assets/img/125x130.jpg" alt=""/>
                            <div class="like  fa fa-heart-o"></div>
                        </div>
                        <div class="post-content">
                            <div class="top"><span>2,66 tỷ</span>  <span class="#" style="color: #189655;">60,78m<sub class="subtop">2</sub></span>  <span class="#" style="color: #189655;">150,0m<sub class="subtop">2</sub> <em style="font-weight: normal;">sàn</em> </span> </div>
                            <div class="location">711014P0001- Hồ Thị Kỷ, Phường 4, Quận 6, Hồ Chí Minh</div>
                            <div class="actions">
                                <button class="btn">
                                    <img src="../../public/assets/img/bxs-edit.svg" alt=""/>
                                </button>
                                <button class="btn">
                                    <img src="../../public/assets/img/earth.svg" alt=""/>
                                </button>
                                <button class="btn">
                                    <img src="../../public/assets/img/baseline-map-24px.svg" alt=""/>
                                </button>
                            </div>
                            <div class="map">
                                <img src="../../assets/uploads/map.jpg" alt=""/>
                            </div>
                            <div class="info -top">
                                <span>Nhà xây dựng</span>  <span>Bàn giao T2.2010</span>  <span>Đã hoàn công</span>  <span>Sổ hồng</span>
                            </div>
                            <div class="info -ban">
                                <span class="status -ban">Bán</span>  <span>Avalue: <strong>2,65 tỷ</strong></span>  <span>Arent: <strong>7,5 triệu/ Tháng</strong></span>
                                
                               
                            </div>
                            <div class="info">
                                <span><strong>47,2 triệu/m</strong> <sub class="subtop">2</sub></span>  <span>Trả trước: <strong>700 triệu</strong></span><span>Thanh toán: <strong>13,2 triệu/tháng</strong></span>
                            </div>
                            <div class="location"> <span>Hẻm xe hơi</span> <span>Đường vào 4,5m (LG 5,0m)</span></div>
                            <div class="bottom-info">
                                <span>
                                    <img src="../../public/assets/img/cauthang.svg" alt=""/> 3 tầng
                                </span>
                                <span>
                                    <img src="../../public/assets/img/icons/bx-bed.svg" alt=""/> 2
                                </span>
                                <span>
                                    <img src="../../public/assets/img/icons/bx-bath.svg" alt=""/> 2
                                </span>
                                <span>
                                    <img src="../../public/assets/img/icons/location.svg" alt=""/> Đông Nam
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

export default ProductItem;