import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Footer = () => {
    return (
        <div className="footer py-5 bg-light text-black-50 mt-5">
            <div className="row mx-5 px-5">
                <div className="col-sm-8 col-md-5 mt-5">
                    <img className="footer-logo" src="https://lh3.googleusercontent.com/MpZdEvUaNPDlLJ1hLIuZDzAmKAXIyDMNgl5MDS1lCPitUItYHJU42508LuVs0iBCUM9QHqeLrYtP5m-vgARQl3pDr3EcnLkixaQXJlScjvaXv2JYmCJzSCnSOMWpTWUwz-FyIsHNEg=w256" alt="" />
                    <div className="my-3">BeeCost là ứng dụng tìm kiếm và xem lịch sử giá các món đồ trên Shopee, Lazada, Tiki, ... Giúp bạn mua rẻ, né Sale Ảo và trở thành người mua hàng thông thái. BeeCost không bán hàng!</div>
                    <div>KẾT NỐI VỚI CHÚNG TÔI</div>
                    <div className="footer-contact mt-2">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href="" className="mx-4"><i class="fa-brands fa-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="col-sm-8 col-md-3 mt-5">
                    <h5 className="text-uppercase">Về BeeCost</h5>
                    <ul className="list-unstyled footer-contact-2">
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Giới thiệu</a></li>
                        <li><a href="/">Chính sách bảo mật</a></li>
                        <li><a href="/">Điều khoản sử dụng</a></li>
                        <li><a href="/">Liên hệ</a></li>
                        <li><a href="/">Metric</a></li>
                    </ul>
                </div>
                <div className="col-sm-8 col-md-4 mt-5">
                    <h5 className="text-uppercase">Liên hệ</h5>
                    <div className="pd-16">
                        <b>Công ty Cổ phần Khoa học Dữ liệu</b>
                        <div>Số ĐKKD: 0108677693</div>
                        <div>Địa chỉ: Tầng 6 toà nhà AZ Lâm Viên, 107A Nguyễn Phong Sắc, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.</div>
                        <div>Email: contact@beecost.com</div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-12">
                <ul className="list-inline text-center">
                        <li className="list-inline-item">Quốc gia & Khu vực:</li>
                        <li className="list-inline-item"><a href="/">Việt Nam</a></li>
                        <li className="list-inline-item"><a href="/">Thái Lan</a></li>
                        <li className="list-inline-item"><a href="/">Indonesia</a></li>
                        <li className="list-inline-item"><a href="/">Philippines</a></li>
                        <li className="list-inline-item"><a href="/">Đài Loan</a></li>
                        <li className="list-inline-item"><a href="/">Lào</a></li>
                    </ul>
            </div>
        </div>
    );
};

export default Footer;