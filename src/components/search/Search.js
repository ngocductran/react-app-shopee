import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Search = () => {
  return (
    <div className="container">
      <div className="my-5">         
          <b className="h3 mb-3">Tìm kiếm tương tự</b>
          <div className="mt-3">
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> áo phông</a>
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> quần dài</a>
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> mũ hảo hiểm</a>
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> áo phông</a>
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> quần dài</a>
              <a href="" className="btn similar-search rounded-pill"><i className="fa-solid fa-magnifying-glass"></i> mũ hảo hiểm</a>
          </div>
      </div>
      <div className="row ft">
        <div className="col-md-3">
          <b className="h3 mb-3">Bộ lọc tìm kiếm</b>
          <div className="my-5 border p-3">
            <p>Theo sàn</p>
            <div className="custom-control custom-checkbox px-3">
              <div className="ft-radio custom-control custom-radio rounded-pill border p-2 bg-light">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked/>
                <label className="custom-control-label" for="customRadio1">&nbsp; Shopee</label>
              </div>
              <div className="custom-control custom-radio rounded-pill border p-2 mt-2 bg-light">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                <label className="custom-control-label" for="customRadio2">&nbsp; Lazada</label>
              </div>
              <div className="custom-control custom-radio rounded-pill border p-2 mt-2 bg-light">
                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" checked/>
                <label className="custom-control-label" for="customRadio3">&nbsp; Tiki</label>
              </div>
              <div className="custom-control custom-radio rounded-pill border p-2 mt-2 bg-light">
                <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"/>
                <label className="custom-control-label" for="customRadio4">&nbsp; Sendo</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="h3 mb-3">Tìm kiếm cho từ khóa: 
            <span className="text-danger">&nbsp; áo khoác</span>
          </div><br/>
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