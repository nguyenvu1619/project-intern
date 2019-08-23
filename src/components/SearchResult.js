import React, { Component } from 'react';

function SearchResults(props){
    return {props.map(item => <div class="rp-search-result-item">
    <div class="search-result__item-container d-flex"><img class="sr-item__modal" src="../../public/assets/img/icon-modal.png"/>
        <div class="sr-item__poster">
            <div class="poster--avatar"><a href="#"><img src="../../public/assets/img/Rectangle 97.png" alt=""/></a></div>
        </div>
        <div class="sr-item__details">
            <div class="item-details__container">
                <div class="item-details__title">
                    <div class="ids-title__content">
                        <div class="ids-title--header d-flex"><a class="title--name" href="#">{item.name}</a>
                            <div class="title--rate d-flex align-items-center"><span>[Chung cư </span><span class="title_rate--highlight"> 4,5+ </span><img src="../../assets/img/star.png" alt=""/>]</div>
                        </div>
                        <p class="mb-0 ids-title--category">đã đăng một bài viết trong <a class="ids-title--category" href="/ket-qua/thong-tin">Thông tin</a></p>
                        <p class="mb-0 ids-title--date-posted">15 ngày trước</p>
                    </div>
                </div>
                <div class="item-details__post">
                    <div class="ids-post--title"><a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện</a></div>
                    <div class="ids-post--content"><span>
                            Ngày 10-12/05: Có 123 thông báo kế hoạch lựa chọn nhà thầu chậm .... 1527/QĐ-UBND ngày
                            14/02/2019; KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng
                            …. cho dự án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc,
                            Quyết Thắng, Tân ...</span></div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> )}
}