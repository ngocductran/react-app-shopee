import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const ProductSimilar = () => {
    return (
        <div className="container product-similar mt-5">
            <div className="row">
                <div className="col-md-12 col-12 mb-3"> 
                    <h4>Review sản phẩm</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-md-3 col-sm-3 col-6">
                        <iframe className="img-fluid" src="https://www.youtube.com/embed/yJglXB2zljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-3 col-sm-3 col-6">
                        <iframe className="img-fluid" src="https://www.youtube.com/embed/yJglXB2zljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-3 col-sm-3 col-6">
                        <iframe className="img-fluid" src="https://www.youtube.com/embed/yJglXB2zljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-3 col-sm-3 col-6">
                        <iframe className="img-fluid" src="https://www.youtube.com/embed/yJglXB2zljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-7 col-sm-7 col-12">
                    <div className="col-md-12 col-12 mb-3"> 
                        <h4>Sản phẩm liên quan</h4>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-2 col-sm-2 col-3">
                            <img className="img-fluid" src="https://cf.shopee.vn/file/ff10c0d97ab926663a1f51b1cec26484" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-around">
                            <div className="h5 product-similar-name"><a href="/">Điện thoại Samsung Galaxy Z Fold4 512GB</a></div>
                            <div className="price-current">50.000 đ</div>
                            <small>Nơi bán: Hà Nội</small>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 d-flex flex-column justify-content-around">
                            <a href=""><div className="btn btn-info text-white btn-sm">Tới nơi bán</div></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-5 col-12">
                    <div className="col-md-12 col-12 mb-3"> 
                        <h4>Bài viết về sản phẩm</h4>
                    </div>
                    <div className="border mb-3 p-2">
                        <a href="" className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="">
                                    <h5>Bài viết blog</h5>
                                    <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border mb-3 p-2">
                    <a href="" className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="https://i.imgur.com/OTfFpey.png" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <h5>Bài viết blog</h5>
                                <small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                            </div>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSimilar;