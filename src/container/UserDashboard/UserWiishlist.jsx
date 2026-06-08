import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetWhistlistQuery,
  useUpdateWhistlistMutation,
} from "../../redux/Api/wishlist.api";
import { useGetallcourseQuery } from "../../redux/Api/Course.api";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";

function UserWiishlist(props) {
  const auth = useSelector((state) => state.auth);
  console.log("checklogin", auth?.user?.data);

  const { data: wishlist } = useGetWhistlistQuery();
  const { data: course } = useGetallcourseQuery();
  console.log("wishlits", wishlist?.data);
  const [updateWhitlist] = useUpdateWhistlistMutation();
  const filterwishlist = wishlist?.data?.find(
    (v) => v.user_id === auth?.user?.data?._id,
  );
  console.log("filterwishlist", filterwishlist);

  const filtercoure = course?.data?.filter((v) =>
    filterwishlist?.items?.some((w) => w.course === v._id),
  );
  console.log("filter course", filtercoure);

  const handlewhistlist = async (course_id) => {
    let existData = filterwishlist?.items?.find((v) => v.course === course_id);
    console.log(existData);

    if (existData) {
      let deletdata = filterwishlist?.items.filter(
        (v) => v._id !== existData._id,
      );
      console.log(deletdata);

      await updateWhitlist({
        _id: filterwishlist._id,
        user_id: auth?.user?.data?._id,
        items: deletdata,
      });

      return;
    }
  };

  const handleRemoveall = async () => {
    await updateWhitlist({
      _id: filterwishlist._id,
      user_id: auth?.user?.data?._id,
      items: [],
    });
  };
  return (
    <div>
      <main>
        {/* =======================
Page Banner START */}
        <section className="py-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-light p-4 text-center rounded-3">
                  <h1 className="m-0">Wishlist</h1>
                  {/* Breadcrumb */}
                  <div className="d-flex justify-content-center">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Courses</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Wishlist
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Page Banner END */}
        {/* =======================
Page content START */}
        <section className="pt-5">
          <div className="container">
            {/* Content and button */}
            <div className="d-sm-flex justify-content-sm-between align-items-center mb-4">
              <h5 className="mb-2 mb-sm-0">
                You have {filtercoure?.length} items in wishlist
              </h5>
              <div className="text-end">
                {" "}
                <button
                  className="btn btn-danger-soft mb-0"
                  onClick={() => handleRemoveall()}
                >
                  <i className="fas fa-trash me-2" />
                  Remove all
                </button>{" "}
              </div>
            </div>
            <div className="row g-4">
              {/* Card item START */}
              {filtercoure?.map((v) => (
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card shadow">
                    {/* Image */}
                    <Carousel>
                      {v?.course_img?.map((v, i) => (
                        <img
                          key={i}
                          src={v?.url}
                          className="card-img-top"
                          alt="course"
                        />
                      ))}
                    </Carousel>
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          className="h6 fw-light mb-0"
                          onClick={() => handlewhistlist(v._id)}
                        >
                          <FavoriteIcon />
                        </a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal">
                        <a href="#">{v.desciption}</a>
                      </h5>
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
              ))}

              {/* Card item END */}
            </div>
          </div>
        </section>
        {/* =======================
Page content END */}
      </main>
    </div>
  );
}

export default UserWiishlist;
