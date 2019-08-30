import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShowModal } from '../../actions/search.actions';
import apiServices from '../../utils/apiServices';
import {URL_PHOTO} from '../../constant/url';
import InfoFix from './InfoFix';

class PostModal extends Component {
    constructor(props){
        super(props);
        this.WrapperModal = React.createRef();
        this.Modal = React.createRef();
        this.infoFix = React.createRef();
        this.baseDiv = React.createRef();
        this.modalRef = React.createRef();
        this.state = {
            postInfo: {},
            isShowInfo: true
        }
    }
    async componentDidMount(){
        const result = await apiServices('get', `post/get_by_id?postID=${this.props.idModal}`)
        if(result){
            let content = result.data[0].document;
            content = content.replace(/src="document\?id=/g,`src="${URL_PHOTO}/`)
            result.data[0].content = content
             this.setState({
                postInfo: result.data[0]
            })
        }
        this.setState({
            infoFixHeigh: this.infoFix.clientHeight
        })
    }
    createMarkup(){
        return {__html: this.state.postInfo.content};
    }
    handleClick= event => {
        const node = this.Modal.current;
        if(node){
            if(!node.contains(event.target))
             this.props.setShowModal(false);
        }
    }
    handleScroll = event => {
        const baseDivNode = this.baseDiv.current;
        const marginTop = (window.innerHeight *40)/100;
        if(event.target.scrollTop+marginTop +197 >= baseDivNode.clientHeight+ 75){
            this.setState({
                isShowInfo: false
            })
        } else if(!this.state.isShowInfo){
            this.setState({
                isShowInfo: true
            })
        }
    }
    handleClickButton = event => {
        this.props.setShowModal(false)
    }
    handleKeyDown = event => {
        if(event.key === 'Escape')
        this.props.setShowModal(false);
    }
    render(){
        const { name } = this.state.postInfo;
        return (
            this.props.isShowModal && <div onScroll={this.handleScroll} tabIndex="0" onKeyDown={this.handleKeyDown} onClick={this.handleClick} ref={this.WrapperNode}  class="modal news-details__modal show" id="newsDetailsModal" style={{display: 'block', paddingLeft: "17px",overflowY:'auto'}}>
            <div ref={this.modalRef} class="ndt-modal__container">
                <div ref={this.Modal} class="modal-content">
                <div style={{padding: '9px', backgroundColor: 'rgba(59, 99, 161, 0.2)'}} class="modal-header">
                        <button onClick={this.handleClickButton} type="button" class="close close-button" data-dismiss="modal">×</button>
                        <div class="clearfix"></div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body__container container">
                            <div ref={this.baseDiv} class="news-details__content-top">
                                <div class="news-details__header d-flex">
                                    <div class="nd-header__logo">
                                        <img class="nd-header--logo" src="../../assets/img/avatar-user.png"/>
                                    </div>
                                    <div class="nd-header__title">
                                        <div class="header-title__container">
                                            <a href="#" class="header-title-name">Nam Anh</a>
                                            <div class="header-title__content">[
                                                <span class="small-text">Chuyên gia</span>
                                                <span class="content-1">
                                                    3,5+
                                                    <img class="edit-star" src="../../assets/img/SVG/star.svg"/>
                                                </span>
                                                ]</div>
                                            <span class="header-title--time-post">3 ngày trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="nd-header__title-text">{name} </div>
                                <img class="edit-picture" src="../../assets/img/phong_detail.png"/>
                                <div class="nd-content__texts">
                                    <div dangerouslySetInnerHTML={this.createMarkup()}>

                                    </div>
                                    <div>
                                        <div class="edit-tags__content d-flex flex-wrap">
                                            <span style={{marginTop: '10px',fontSize: '16px',fontWeight: '500', color: '#3b63a1'}}>Tags:</span>
                                            <div class="nav-item edit-tags">
                                                <a class="tag-item  text-2">
                                                    BatDongSan
                                                </a>
                                            </div>
                                            <div class="nav-item edit-tags">
                                                <a class="tag-item text-2 tag-item-3">
                                                    Laisuatnganhang
                                                </a>
                                            </div>
                                            <div class="nav-item edit-tags">
                                                <a class="tag-item  text-2">
                                                    BatDongSan
                                                </a>
                                            </div>
                                            <div class="nav-item edit-tags">
                                                <a class="tag-item  text-2">
                                                    BatDongSan
                                                </a>
                                            </div>
                                            <div class="nav-item edit-tags">
                                                <a class="tag-item  text-2">
                                                    BatDongSan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div  ref ={this.infoFix} class="info-fix">
                              {this.state.isShowInfo && <InfoFix />}
                            </div>
                            <div style={{width:'100%',height:'1px',margin:'0',position:'absolute',left:'0'}}></div>
                            <div class="divider-gray"></div>
                            <div class="news-details__content-bottom">
                                <div class="box-comments" style={{paddingTop: '20px'}}>
                                    <h2 class="title-main">Bình luận</h2>
                                    <div class="comments">
                                        <div class="item">
                                            <div class="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png'}}>
                                            </div>
                                            <div class="username">Lâm Thy Văn Tần <span class="datetime">12:09 - 18/10/2019</span></div>
                                            <div class="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                                0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                                                lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                            <div class="action-buttons-bottom">
                                                <a href="#" class="btn">
                                                    Trả lời
                                                </a>
                                                <a href="#" class="btn -comment">
                                                    <span class="fa fa-comment-o icon"></span> 40
                                                </a>
                                                <a href="#" class="btn">
                                                    <span class="-ap  icon-like2 icon"></span> 40
                                                </a>
                                                <a href="#" class="btn -share">
                                                    <span class="-ap  icon-share4 icon"></span> 40
                                                </a>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png'}}>
                                            </div>
                                            <div class="username">Lâm Thy Văn Tần <span class="datetime">12:09 - 18/10/2019</span></div>
                                            <div class="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                                0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                                                lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                            <div class="action-buttons-bottom">
                                                <a href="#" class="btn">
                                                    Trả lời
                                                </a>
                                                <a href="#" class="btn -comment">
                                                    <span class="fa fa-comment-o icon"></span> 40
                                                </a>
                                                <a href="#" class="btn">
                                                    <span class="-ap  icon-like2 icon"></span> 40
                                                </a>
                                                <a href="#" class="btn -share">
                                                    <span class="-ap  icon-share4 icon"></span> 40
                                                </a>
                                            </div>
                                            <div class="comments">
                                                <div class="item">
                                                    <div class="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png'}}></div>
                                                    <div class="username">Lâm Thy Văn Tần <span class="datetime">12:09 - 18/10/2019</span></div>
                                                    <div class="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                                        0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                                                        vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                                    <div class="action-buttons-bottom">
                                                        <a href="#" class="btn">
                                                            Trả lời
                                                        </a>
                                                        <a href="#" class="btn -comment">
                                                            <span class="fa fa-comment-o icon"></span> 40
                                                        </a>
                                                        <a href="#" class="btn">
                                                            <span class="-ap  icon-like2 icon"></span> 40
                                                        </a>
                                                        <a href="#" class="btn -share">
                                                            <span class="-ap  icon-share4 icon"></span> 40
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png'}}></div>
                                                    <div class="username">Lâm Thy Văn Tần <span class="datetime">12:09 - 18/10/2019</span></div>
                                                    <div class="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                                        0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                                                        vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                                    <div class="action-buttons-bottom">
                                                        <a href="#" class="btn">
                                                            Trả lời
                                                        </a>
                                                        <a href="#" class="btn -comment">
                                                            <span class="fa fa-comment-o icon"></span> 40
                                                        </a>
                                                        <a href="#" class="btn">
                                                            <span class="-ap  icon-like2 icon"></span> 40
                                                        </a>
                                                        <a href="#" class="btn -share">
                                                            <span class="-ap  icon-share4 icon"></span> 40
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item -input">
                                                    <div class="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png'}}></div>
                                                    <input class="form-control comment-input" placeholder="Viết bình luận"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider-gray">
                            </div>
                            <div class="bottom-related-news">
                                <div class="title-main">Các bài viết liên quan</div>
                                <div class="list-news">
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="wrap">
                                            <a href="#" class="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg'}}>
                                                <img src="../../assets/img/204x102.jpg" alt=""/>
                                            </a>
                                            <h3 class="post-title">
                                                <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                            </h3>
                                            <div class="post-time">
                                                12:09 - 18/10/2019
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
        )
    }
}
const mapStateToProp = state => ({
    isShowModal: state.search.isShowModal,
    idModal: state.search.idModal
});

const mapDispatchToProp = dispatch => ({
    setShowModal: isShowModal => dispatch(setShowModal(isShowModal))
})

export default connect(mapStateToProp,mapDispatchToProp)(PostModal);