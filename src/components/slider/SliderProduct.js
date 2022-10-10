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
      const productData = [
        {
        id: 1,
        title: 'Sạc Nhanh PD 20w - Bộ Sạc Nhanh ip 20W Dùng Cho Các Đời Máy IP, Củ Chân Dẹt Cáp Type C',
        pride: '50000',
        img: 'https://cf.shopee.vn/file/5367b3c0324ddf32c850046c9fb262e7',
        start: '2.5',
        }, {
        id: 2,
        title: 'Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464',
        pride: '100000',
        img: 'https://cf.shopee.vn/file/e6ae4f3ff7c88bed07372fe896988027',
        start: '3',
        }, {
        id: 3,
        title: 'Máy robot hút bụi lau sàn nhà thông minh 3 trong 1 tiện dụng cho gia đình kèm phụ kiện J23A',
        pride: '2390000',
        img: 'https://cf.shopee.vn/file/2f20489d7cd6805485a3611c24b37ec0',
        start: '2.6765',
        }, {
        id: 4,
        title: 'Khô 3 Vị Mix hộp 300gr : KHÔ GÀ + KHÔ HEO + MỰC SỢI HẤP DỪA đo ăn văt ngon rẻ sài gòn',
        pride: '250000',
        img: 'https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484',
        start: '5',
        }, {
        id: 5,
        title: 'Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464',
        pride: '540000',
        img: 'https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee',
        start: '2',
        }, {
        id: 6,
        title: 'Khô 3 Vị Mix hộp 300gr : KHÔ GÀ + KHÔ HEO + MỰC SỢI HẤP DỪA đo ăn văt ngon rẻ sài gòn',
        pride: '502000',
        img: 'https://cf.shopee.vn/file/e6ae4f3ff7c88bed07372fe896988027',
        start: '4.8',
        },
        {
        id: 7,
        title: 'Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464',
        pride: '250000',
        img: 'https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee',
        start: '4.9',
        }, {
        id: 8,
        title: 'Khô 3 Vị Mix hộp 300gr : KHÔ GÀ + KHÔ HEO + MỰC SỢI HẤP DỪA đo ăn văt ngon rẻ sài gòn',
        pride: '50000',
        img: 'https://cf.shopee.vn/file/e6ae4f3ff7c88bed07372fe896988027',
        start: '3',
        },{
        id: 9,
        title: 'Khô 3 Vị Mix hộp 300gr : KHÔ GÀ + KHÔ HEO + MỰC SỢI HẤP DỪA đo ăn văt ngon rẻ sài gòn',
        pride: '502000',
        img: 'https://cf.shopee.vn/file/e6ae4f3ff7c88bed07372fe896988027',
        start: '4.8',
        },
        {
        id: 10,
        title: 'Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464',
        pride: '250000',
        img: 'https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee',
        start: '4.9',
        }, {
        id: 11,
        title: 'Khô 3 Vị Mix hộp 300gr : KHÔ GÀ + KHÔ HEO + MỰC SỢI HẤP DỪA đo ăn văt ngon rẻ sài gòn',
        pride: '50000',
        img: 'https://cf.shopee.vn/file/e6ae4f3ff7c88bed07372fe896988027',
        start: '3',
        },
    ];

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-5 mb-4">
                <span className="h4">Sản phẩm nổi bật</span>
                <a href="/" className="btn btn-outline-info rounded-pill">Xem tất cả</a>
            </div>
            <Slider {...settings} className="container">
                {productData.map((product) =>
                <a href="#" className="product-card pb-3" key={product.id}>
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://topcoupon.vn/wp-content/uploads/2021/10/logo_lazada-300x300-1.png" alt="" />
                        <img src={product.img}  className="img-fluid"/>
                        <div className="m-2 product-title">{product.title}</div>
                        <b className="m-2 text-danger">{product.pride} đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i data-star={product.start}></i>
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
                )}
            </Slider>
        </div>
    );
};

export default SliderProduct;