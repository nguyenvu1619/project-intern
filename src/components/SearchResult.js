import React, { Component } from 'react';

function SearchResults(props){
    return <div className = "rp-search-result__items" >
    {props.resultList.map(item => <div className="rp-search-result-item">
    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../assets/img/icon-modal.png"/>
        <div className="sr-item__poster">
            <div className="poster--avatar"><a href="#"><img src="../assets/img/Rectangle 97.png" alt=""/></a></div>
        </div>
        <div className="sr-item__details">
            <div className="item-details__container">
                <div className="item-details__title">
                    <div className="ids-title__content">
                        <div className="ids-title--header d-flex"><a className="title--name" href="#">Name</a>
                            <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 4,5+ </span><img src="../assets/img/star.png" alt=""/>]</div>
                        </div>
                        <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Thông tin</a></p>
                        <p className="mb-0 ids-title--date-posted">15 ngày trước</p>
                    </div>
                </div>
                <div className="item-details__post">
                    <div className="ids-post--title"><a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện</a></div>
                    <div className="ids-post--content"><span>
                            Ngày 10-12/05: Có 123 thông báo kế hoạch lựa chọn nhà thầu chậm .... 1527/QĐ-UBND ngày
                            14/02/2019; KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng
                            …. cho dự án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc,
                            Quyết Thắng, Tân ...</span></div>
                </div>
                <div className="item-details__actions">
                    <div className="action-buttons-bottom">
                        <a href="#" className="btn -marked">
                            <span className="fa fa-star icon"></span> 40
                        </a>
                        <a href="#" className="btn -comment">
                            <span className="fa fa-comment-o icon"></span> 40
                        </a>
                        <a href="#" className="btn -liked">
                            <span className="-ap  icon-like2 icon"></span> 40
                        </a>
                        <a href="#" className="btn -share">
                            <span className="-ap  icon-share4 icon"></span> 40
                        </a>
                        <a href="#" className="btn -mail">
                            <span className="-ap  icon-mail6 icon"></span> 10
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> )}
    </div>
}
export default SearchResults;