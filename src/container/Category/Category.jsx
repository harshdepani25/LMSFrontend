import React, { useState } from "react";
import { useSelector } from "react-redux";

function Category() {
  const cateData = useSelector((state) => state.category);
  console.log(cateData.category);

  const [Search, setSeach] = useState(" ");
  console.log(Search);


  const handleFilter = () => {
        let search = []
        search = cateData?.category?.filter((v) => 
            v.name?.toLowerCase().includes(Search?.toLowerCase()) ||
            v.desciption?.toLowerCase().includes(Search?.toLowerCase()) 
        )
         console.log("search", search);

        return search;
    }

    const filterData = handleFilter()
    console.log(filterData);

  return (
    <>
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
                  src={v.category_img.url}
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
    </>
  );
}

export default Category;
