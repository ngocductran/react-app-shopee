import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Search = () => {
  return (
    <div className="container category">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-5">
                <li className="breadcrumb-item"><a href="/"><i class="fa-solid fa-house"></i></a></li>
                <li className="breadcrumb-item"><a href="#">Dày dép nam</a></li>
                <li className="breadcrumb-item active" aria-current="page">Tất cả danh mục</li>
            </ol>
        </nav>
      <div className="row ct">
        <div className="col-md-12 my-5">
            <span className="h2 text-info">Giày Dép Nam</span>
        </div>
        <div className="col-md-3">
            <div className="bg-primary h5 mb-3 text-uppercase text-center py-2 text-white rounded">Danh mục</div>
            <div class="list-group">
                <a href="" class="list-group-item list-group-item-action">Giày Oxfords & Giày buộc dây</a>
                <a href="" class="list-group-item list-group-item-action">Giày thể thao/ Sneakers</a>
                <a href="" class="list-group-item list-group-item-action">Giày sục</a>
                <a href="" class="list-group-item list-group-item-action">Xăng-đan & Dép</a>
            </div>
        </div>
        <div className="col-md-9">
          <div className="bg-light px-2 py-3 search-sort">
            <span>Sắp xếp theo: </span>
            <a href="" className="btn btn-primary text-white ms-2">Liên quan</a>
            <a href="" className="btn btn-white ms-2">Mua nhiều</a>
            <a href="" className="btn btn-white ms-2">Giá thấp trước</a>
            <a href="" className="btn btn-white ms-2">Giá cao trước</a>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6 ">
              <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <a href="#" className="product-card">
                    <div className="shadow p-2 mb-1 bg-white rounded">
                        <img className="product-brand" src="https://bloggiamgia.vn/wp-content/uploads/2020/06/logo_tiki.png" alt="" />
                        <img src="https://cf.shopee.vn/file/d4ff5037d4958fe7fee2ba6fc6fb1fee"  className="img-fluid"/>
                        <div className="m-2 product-title">Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464</div>
                        <b className="m-2 text-danger">50000 đ</b>
                        <div className="m-2 text-warning product-icon d-flex justify-content-between">
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <span className="text-dark"> (10)</span>
                            </div>
                            <div>
                                <span className="text-dark">5.6k</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;