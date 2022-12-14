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
                <li className="breadcrumb-item"><a href="/"><i class="fa-solid fa-house"></i></a></li>
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
                    <div className="h3"> ???m si??u t???c cao c???p B??nh ??un n?????c dung t??ch 1.8 l??t C??ng su???t 1500W VTM</div>
                    <a href="#" className="btn btn-outline-success rounded-pill my-3 discount_code"><i className="fa-solid fa-bell fa-shake"></i> Xem th??m m?? gi???m gi??</a>
                    <div className="d-flex justify-content-between">
                        <div className="price-current">50.000 ??</div>
                        <a href=""><div className="btn btn-info text-white"><i className="fa-solid fa-right-long"></i> ?????n shop</div></a>
                    </div>
                    <div className="price-before-discount">100.000 ??</div>
                    <div className="my-2 h5">
                        <span className="text-warning">
                            <b>5.0 </b>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="text-gray-500"> (10)</span>
                        </span>
                        <b> | </b> <span className="text-gray-500">15 ????nh gi??</span>
                        <b> | </b> <span className="text-gray-500">300 L?????t mua</span>
                    </div>

                    <div className="mt-5">
                        <b className="h3 mb-3">T??m ki???m t????ng t???</b>
                        <div className="mt-3">
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> ??o ph??ng</a>
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> qu???n d??i</a>
                            <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> m?? h???o hi???m</a>
                        </div>
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="col-md-12 mt-2">
                    <Tabs defaultActiveKey="second" className="h6">
                        <Tab eventKey="first" title="M?? t??? s???n ph???m">
                            <div className="text-center mt-4">
                                <span>
                                Th???i gian giao h??ng d??? ki???n cho s???n ph???m n??y l?? t??? 7-9 ng??y

Th????ng hi???u: UPaitou 
M???u s???n ph???m t????ng th??ch: 
iPhone 11 / iPhone 11 Pro / iPhone 11 Pro Max / iPhone SE 2020 
iPhone Xs Max / iPhone XR / iPhone Xs / iPhone X 
iPhone 6 / iPhone 6s / iPhone 6 Plus / iPhone 6s Plus 
iPhone 7 / iPhone 7 Plus / iPhone 8 / iPhone 8 Plus 

?????c ??i???m: 

1. ????? d??y b??? m???t: 9H 
2. L???p ph??? c???a oleophobomatic: ch???ng d???u, ch???ng axit v?? ch???ng ki???m. 
3. S???n ph???m th??n thi???n v???i m??i tr?????ng v?? kh??ng g??y ?? nhi???m. 
4. H??? s??? an to??n cao, ????? nh???y c???m ???ng cao, ????? v???a v???n t???t v?? d??? th??o g???. 
5. K??nh c?????ng l???c c?? ????? trong su???t cao v?? m??u s???c s??? kh??ng bao gi??? thay ?????i. 
6. Ph???n xung quanh tr??n tru ????? b???o v??? m??n h??nh kh???i b??? v???. 

L??u ?? ??? ??? Ch??ng t??i kh??ng th??? t???i l??n t???t c??? h??nh ???nh c???a c??c m???u ??i???n v?? c?? qu?? nhi???u. Vui l??ng ch???n m???u ??i???n tho???i c???a b???n, ch??ng t??i s??? g???i h??ng ????ng v???i m???u ??i???n tho???i b???n ch???n; 
?????? 10.3 Vui l??ng kh??ng ????nh gi?? m???u ??i???n tho???i c???a b???n t??? h??nh ???nh s???n ph???m c???a ch??ng t??i. 
----------------------------------------------------------- 
Kh??ch h??ng th??n m???n: 
Ch??o m???ng ?????n v???i upaitou! II 
D?????i ????y l?? m???t s??? th??ng tin m?? b???n c?? th??? b???n c???n bi???t tr?????c khi ?????t h??ng. 
Chi ti???t v???n chuy???n: 
t??? Vui l??ng x??c nh???n ?????A CH??? c???a b???n m???t c??ch c???n th???n sau khi b???n ?????t h??ng. N???u ?????a ch??? kh??ng ????ng, vui l??ng h???y ????n h??ng tr?????c khi giao h??ng 
t??? T???t c??? c??c s???n ph???m ?????u l?? h??ng c?? s???n. 
t??? ????n h??ng ???????c v???n chuy???n t??? Trung Qu???c. 
---------------------------------------------------------- 
??? N???u b???n th??ch s???n ph???m c???a ch??ng t??i, n?? s??? ???????c ????nh gi?? cao n???u b???n c?? th??? ????? l???i cho ch??ng t??i m???t ph???n h???i t??ch c???c, ???? s??? l?? m???t s??? kh??ch l??? l???n ?????i v???i ch??ng t??i. Ch??ng t??i s??? ???????c ????nh gi?? cao khi b???n ????nh gi?? "5 SAO" ??????????????? v???i nh???ng b??nh lu???n v?? h??nh ???nh ?????p JJJJ 
??? N???u s???n ph???m sai h??ng, c?? v???n ????? ho???c m???t s???n ph???m, xin vui l??ng li??n h??? ngay v???i ch??ng t??i, xin ?????ng ????? l???i ????nh gi?? ti??u c???c, ch??ng t??i s??? c??? g???ng ????? h??? tr??? b???n h???t m???c c?? th???.
                                </span>
                            </div>
                        </Tab>
                        <Tab eventKey="second" title=" ????nh gi?? ng?????i d??ng">
                            <div className="comment">
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 n??m tr?????c</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            S???n ph???m t???t ph?? h???p v???i gi?? ti???n shop ????ng g??i c???n th???n sp h??i c?? nh??ng v???n d??ng t???t nh??
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 n??m tr?????c</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            S???n ph???m t???t ph?? h???p v???i gi?? ti???n shop ????ng g??i c???n th???n sp h??i c?? nh??ng v???n d??ng t???t nh??
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 n??m tr?????c</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            S???n ph???m t???t ph?? h???p v???i gi?? ti???n shop ????ng g??i c???n th???n sp h??i c?? nh??ng v???n d??ng t???t nh??
                                        </span>
                                    </div>
                               </div>
                               <div className="comment-avatar p-3 row border-bottom">
                                    <img className="col-md-1 col-3 col-sm-1 img-fluid" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                                    <div className="col-md-11 col-9 col-sm-11">
                                        <span className="">username</span> <small className="text-light">1 n??m tr?????c</small>
                                        <div className="text-warning my-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className="comment-content">
                                            S???n ph???m t???t ph?? h???p v???i gi?? ti???n shop ????ng g??i c???n th???n sp h??i c?? nh??ng v???n d??ng t???t nh??
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