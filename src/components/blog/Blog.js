import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Blog = () => {
  return (
    <div className="container">
        <div className="d-flex justify-content-between mt-5 mb-4">
            <span className="h4">Blog</span>
            <a href="/" className="btn btn-outline-info rounded-pill">Xem tất cả</a>
        </div>
        <div className="container blog">
            <div class="row">
                <a class="col-sm-6 col-md-6 col-xl-3 mb-3" href="#">
                    <div class="card">
                        <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg" alt="Bologna"/>
                        <div class="card-body">
                            <h5 class="card-title">Bologna</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                            <p class="card-text small">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                        </div>
                    </div>
                </a>
                <a class="col-sm-6 col-md-6 col-xl-3 mb-3" href="#">
                    <div class="card">
                        <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg" alt="Bologna"/>
                        <div class="card-body">
                            <h5 class="card-title">Bologna</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                            <p class="card-text small">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                        </div>
                    </div>
                </a>
                <a class="col-sm-6 col-md-6 col-xl-3 mb-3" href="#">
                    <div class="card">
                        <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg" alt="Bologna"/>
                        <div class="card-body">
                            <h5 class="card-title">Bologna</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                            <p class="card-text small">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                        </div>
                    </div>
                </a>
                <a class="col-sm-6 col-md-6 col-xl-3 mb-3" href="#">
                    <div class="card">
                        <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg" alt="Bologna"/>
                        <div class="card-body">
                            <h5 class="card-title">Bologna</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                            <p class="card-text small">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Blog;