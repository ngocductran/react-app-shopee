import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const SliderProduct = () => {

    const settings = {
        dots: true,
        arrows: true,
        centerMode: false,
        infinite: false,
        speed: 1700,
        slidesToShow: 6,
        slidesToScroll: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
    
      ]
    
      };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-5 mb-4">
                <span className="h4">Sản phẩm nổi bật</span>
                <a href="/" className="btn btn-outline-info rounded-pill">Xem tất cả</a>
            </div>
            <Slider {...settings} className="container">
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="http://shopeeplus.com//images/logo.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
                <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/" className="product-link btn btn-info">Đến nơi bán</a>
                        </div>
                    </div>
                </a>
            </Slider>
        </div>
    );
};

export default SliderProduct;