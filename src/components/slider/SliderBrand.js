import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const SliderBrand = () => {
  const settings = {
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    speed: 2500,
    rows: 2,
    slidesPerRow: 2,
    initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    slidesPerRow: 1,
                }
            }
    
      ]
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5 mb-4">
        <span className="h4">Danh mục nổi bật</span>
        <a href="/" className="btn btn-outline-info rounded-pill">Xem tất cả</a>
      </div>
    <Slider {...settings} className="brand-slider container">
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
      <a href="#" className="brand-card border text-center">
        <img src="http://shopeeplus.com//images/logo.png" class="my-4 mx-auto rounded-circle img-fluid" alt="..."/>
        <span>Dày dép nam</span>
      </a>
    </Slider>
    </div>
  );
};

export default SliderBrand;