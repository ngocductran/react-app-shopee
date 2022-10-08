import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Product = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });


    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    const slidesData = [
        {
        id: 1,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        img: 'https://cf.shopee.vn/file/b7646d2ef4f1f9aab365eabbb57512d6'
        }, {
        id: 2,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
        img: 'https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484'
        }, {
        id: 3,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        img: 'https://cf.shopee.vn/file/b7646d2ef4f1f9aab365eabbb57512d6'
        }, {
        id: 4,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        img: 'https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484'
        }, {
        id: 5,
        title: 'nemo dolorem necessitatibus',
        label: 'Placeat odit velit itaque voluptatem.',
        img: 'https://cf.shopee.vn/file/b7646d2ef4f1f9aab365eabbb57512d6'
        }, {
        id: 6,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
        img: 'https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484'
        },
    ];

    return (
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-5">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
        <div className="mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="slider-wrapper border">
                        <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}
                        >

                        {slidesData.map((slide) =>

                            <div className="slick-slide" key={slide.id}>
                                {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                                <img className="slick-slide-image" src={slide.img} />
                                {/* <label className="slick-slide-label">{slide.label}</label> */}
                            </div>

                        )}

                        </Slider>
                        <div className="thumbnail-slider-wrap">
                            <Slider
                                {...settingsThumbs}
                                asNavFor={nav1}
                                ref={slider => (setSlider2(slider))}>

                                {slidesData.map((slide) =>

                                <div className="slick-slide" key={slide.id}>
                                    <img className="slick-slide-image border" src={slide.img} />
                                </div>

                                )}

                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h3"> Ấm siêu tốc cao cấp Bình đun nước dung tích 1.8 lít Công suất 1500W VTM</div>
                    <a href="#" className="btn btn-outline-success rounded-pill my-3 discount_code"><i className="fa-solid fa-bell fa-shake"></i> Xem thêm mã giảm giá</a>
                    <div className="d-flex justify-content-between">
                        <div className="price-current">50.000 đ</div>
                        <a href=""><div className="btn btn-info text-white"><i className="fa-solid fa-right-long"></i> Đến shop</div></a>
                    </div>
                    <div className="price-before-discount">100.000 đ</div>
                    <div className="my-2">
                        <span className="h6 text-warning">
                            <b>5.0 </b>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="text-gray-500"> (10)</span>
                        </span>
                        <b> | </b> <span className="text-gray-500">15 Đánh giá</span>
                        <b> | </b> <span className="text-gray-500">300 Lượt mua</span>
                    </div>

                    <div className="mt-5">
                        <b className="h3 mb-3">Tìm kiếm tương tự</b>
                        <div className="mt-3">
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> áo phông</a>
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> quần dài</a>
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> mũ hảo hiểm</a>
                        </div>
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="col-md-12 mt-2">
                    <Tabs defaultActiveKey="second" className="h6">
                        <Tab eventKey="first" title="Mô tả sản phẩm">
                            <div className="text-center mt-4">
                                <span>
                                Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày

Thương hiệu: UPaitou 
Mẫu sản phẩm tương thích: 
iPhone 11 / iPhone 11 Pro / iPhone 11 Pro Max / iPhone SE 2020 
iPhone Xs Max / iPhone XR / iPhone Xs / iPhone X 
iPhone 6 / iPhone 6s / iPhone 6 Plus / iPhone 6s Plus 
iPhone 7 / iPhone 7 Plus / iPhone 8 / iPhone 8 Plus 

Đặc điểm: 

1. Độ dày bề mặt: 9H 
2. Lớp phủ của oleophobomatic: chống dầu, chống axit và chống kiềm. 
3. Sản phẩm thân thiện với môi trường và không gây ô nhiễm. 
4. Hệ số an toàn cao, độ nhạy cảm ứng cao, độ vừa vặn tốt và dễ tháo gỡ. 
5. Kính cường lực có độ trong suốt cao và màu sắc sẽ không bao giờ thay đổi. 
6. Phần xung quanh trơn tru để bảo vệ màn hình khỏi bị vỡ. 

Lưu ý ◆ ◆ Chúng tôi không thể tải lên tất cả hình ảnh của các mẫu điện vì có quá nhiều. Vui lòng chọn mẫu điện thoại của bạn, chúng tôi sẽ gửi hàng đúng với mẫu điện thoại bạn chọn; 
◆◆ 10.3 Vui lòng không đánh giá mẫu điện thoại của bạn từ hình ảnh sản phẩm của chúng tôi. 
----------------------------------------------------------- 
Khách hàng thân mến: 
Chào mừng đến với upaitou! II 
Dưới đây là một số thông tin mà bạn có thể bạn cần biết trước khi đặt hàng. 
Chi tiết vận chuyển: 
t▲ Vui lòng xác nhận ĐỊA CHỈ của bạn một cách cẩn thận sau khi bạn đặt hàng. Nếu địa chỉ không đúng, vui lòng hủy đơn hàng trước khi giao hàng 
t▲ Tất cả các sản phẩm đều là hàng có sẵn. 
t▲ Đơn hàng được vận chuyển từ Trung Quốc. 
---------------------------------------------------------- 
◆ Nếu bạn thích sản phẩm của chúng tôi, nó sẽ được đánh giá cao nếu bạn có thể để lại cho chúng tôi một phản hồi tích cực, đó sẽ là một sự khích lệ lớn đối với chúng tôi. Chúng tôi sẽ được đánh giá cao khi bạn đánh giá "5 SAO" ★★★★★ với những bình luận và hình ảnh đẹp JJJJ 
◆ Nếu sản phẩm sai hàng, có vấn đề hoặc mất sản phẩm, xin vui lòng liên hệ ngay với chúng tôi, xin đừng để lại đánh giá tiêu cực, chúng tôi sẽ cố gắng để hỗ trợ bạn hết mức có thể.
                                </span>
                            </div>
                        </Tab>
                        <Tab eventKey="second" title=" Đánh giá người dùng">
                            <div className="comment">
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 năm trước</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            Sản phẩm tốt phù hợp với giá tiền shop đóng gói cẩn thận sp hơi cũ nhưng vẫn dùng tốt nhé
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 năm trước</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            Sản phẩm tốt phù hợp với giá tiền shop đóng gói cẩn thận sp hơi cũ nhưng vẫn dùng tốt nhé
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 năm trước</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            Sản phẩm tốt phù hợp với giá tiền shop đóng gói cẩn thận sp hơi cũ nhưng vẫn dùng tốt nhé
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 năm trước</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            Sản phẩm tốt phù hợp với giá tiền shop đóng gói cẩn thận sp hơi cũ nhưng vẫn dùng tốt nhé
                                        </span>
                                    </div>
                               </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Product;