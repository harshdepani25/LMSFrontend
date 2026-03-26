import React from "react";
import { useSelector } from "react-redux";

function Category() {
  const cateData = useSelector((state) => state.category);
  console.log(cateData);

  return (
    <div className="tab-content" id="course-pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="course-pills-tabs-1"
        role="tabpanel"
        aria-labelledby="course-pills-tab-1"
      >
        <div className="row g-4">
          {cateData.map((v) => (
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img
                  src={v.category_img.url}
                  className="card-img-top"
                  alt="course image"
                />
                {/* Card body */}
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal">
                    <a href="#">{v.name}</a>
                  </h5>
                  <p className="mb-2 text-truncate-2">
                    {v.desciption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default Category;
