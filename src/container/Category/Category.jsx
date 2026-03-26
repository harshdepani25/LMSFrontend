import React from "react";
import { useSelector } from "react-redux";

function Category() {
  const cateData = useSelector((state) => state.category);
  console.log(cateData);

  return (
    <div className="tab-content" id="course-pills-tabContent">
        {/* {
            cateData.map((v) => )
        } */}

      <div
        className="tab-pane fade show active"
        id="course-pills-tabs-1"
        role="tabpanel"
        aria-labelledby="course-pills-tab-1"
      >
        <div className="row g-4">
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/08.jpg"
                className="card-img-top"
                alt="course image"
              />
              {/* Card body */}
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-purple bg-opacity-10 text-purple"
                  >
                    All level
                  </a>
                  <a href="#" className="h6 mb-0">
                    <i className="far fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Sketch from A to Z: for app designer</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Proposal indulged no do sociable he throwing settling.
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="far fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    12h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    15 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/02.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success"
                  >
                    Beginner
                  </a>
                  <a href="#" className="text-danger">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Graphic Design Masterclass</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Rooms oh fully taken by worse do Points afraid but may end
                  Rooms Points afraid but may end Rooms
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.5/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between ">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    9h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    65 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/03.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success"
                  >
                    Beginner
                  </a>
                  <a href="#" className="h6 fw-light mb-0">
                    <i className="far fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Create a Design System in Figma</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Rooms oh fully taken by worse do. Points afraid but may end
                  afraid but may end.
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.5/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    5h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    32 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/07.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success"
                  >
                    Beginner
                  </a>
                  <a href="#" className="text-danger">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Deep Learning with React-Native </a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Far advanced settling say finished raillery. Offered chiefly
                  farther
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="far fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    18h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    99 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/11.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-purple bg-opacity-10 text-purple"
                  >
                    All level
                  </a>
                  <a href="#" className="text-danger">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Build Responsive Websites with HTML</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  Far advanced settling say finished raillery. Offered chiefly
                  farther
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="far fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.0/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    15h 30m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    68 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/12.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success"
                  >
                    Beginner
                  </a>
                  <a href="#" className="h6 fw-light mb-0">
                    <i className="far fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Build Websites with CSS</a>
                </h5>
                <p className="text-truncate-2 mb-2">
                  Far advanced settling say finished raillery. Offered chiefly
                  farther
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    4.5/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    36h 30m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    72 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/04.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-purple bg-opacity-10 text-purple"
                  >
                    All level
                  </a>
                  <a href="#" className="text-danger">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">Learn Invision</a>
                </h5>
                <p className="mb-2">
                  Arrived off she elderly beloved him Course regard to up he
                  hardly.
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star-half-alt text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="far fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    3.5/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    6h 56m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    82 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
              {/* Image */}
              <img
                src="assets/images/courses/4by3/09.jpg"
                className="card-img-top"
                alt="course image"
              />
              <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href="#"
                    className="badge bg-purple bg-opacity-10 text-purple"
                  >
                    All level
                  </a>
                  <a href="#" className="h6 fw-light mb-0">
                    <i className="far fa-heart" />
                  </a>
                </div>
                {/* Title */}
                <h5 className="card-title fw-normal">
                  <a href="#">JavaScript: Full Understanding</a>
                </h5>
                <p className="text-truncate-2 mb-2">
                  Far advanced settling say finished raillery. Offered chiefly
                  farther.
                </p>
                {/* Rating star */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item me-0 small">
                    <i className="fas fa-star text-warning" />
                  </li>
                  <li className="list-inline-item ms-2 h6 fw-light mb-0">
                    5.0/5.0
                  </li>
                </ul>
              </div>
              {/* Card footer */}
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2" />
                    35h 20m
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2" />
                    89 lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
        </div>{" "}
        {/* Row END */}
      </div>
    </div>
  );
}

export default Category;
