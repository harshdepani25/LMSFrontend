import React from "react";
import { useGetallcourseQuery } from "../../redux/Api/Course.api";
import useSerch from "../../Hook/useSerch";

function Course(props) {
  const { data, error, isLoading } = useGetallcourseQuery();
  console.log(data?.data);

   const { search, setSeach, filterData } = useSerch(data?.data, [
      "name",
      "desciption",
    ]);
    console.log(search);

  return (
    <div className="container">
      <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
        <div className="nav-item w-10">
          <form className="position-relative">
            <input
              onChange={(e) => setSeach(e.target.value)}
              className="form-control pe-5 bg-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
              type="submit"
            >
              <i className="fas fa-search fs-6 " />
            </button>
          </form>
        </div>
      </div>

      <div className="tab-content" id="course-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="course-pills-tabs-1"
          role="tabpanel"
          aria-labelledby="course-pills-tab-1"
        >
          <div className="row g-4">
            {filterData?.map((v) => (
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="card shadow h-100">
                  <img
                    src={v.course_img?.url}
                    className="card-img-top"
                    alt="course image"
                  />
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between mb-2"></div>
                    <h5 className="card-title fw-normal">
                      <a href="#">{v.name}</a>
                    </h5>
                    <p className="mb-2 text-truncate-2">{v.desciption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Course;
