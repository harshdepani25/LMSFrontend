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
          
        </div>{" "}
        {/* Row END */}
      </div>
    </div>
  );
}

export default Category;
