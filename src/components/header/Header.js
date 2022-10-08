import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Header = () => {
    return (
    <div className="header ">
        <div className="d-flex justify-content-around bg-info py-4">
            <div className="header-logo">
                <a className="" href="/">
                    <img className="img-fluid" src="https://lh3.googleusercontent.com/uDocDDzAMAZj6l1JTiDxUr6hUlU0p5DkaqZPS-6EdmG-kVbD8X5icygNn8usugAcvRji8qCYE2DQrsB20yNVA5oLIJawrzXQWScHXeC6rj4X-lu6m2WRhGbOz0NnnQWDJAzv6VTzDw=w256" class="img-avatar-circle"/>
                </a>
            </div>
            <div className="header-search">
                <span class="fa fa-search header-search-icon"></span>
                <input type="search" className="form-control header-search-input" placeholder="Tìm kiếm sản phẩm"/>
            </div>
            <div className="list-inline text-uppercase">
                <a href="/" className="list-inline-item font-weight-bold text-white"><span>Blog</span></a>
            </div>
        </div>
    </div>
    );
};

export default Header;