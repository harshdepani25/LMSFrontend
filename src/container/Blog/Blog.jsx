import React from "react";
import { useGetBlogQuery } from "../../redux/Api/blog.api";
import { NavLink } from "react-router-dom";

function Blog(props) {
  const { data: blog } = useGetBlogQuery();
  console.log(blog?.data);

  return (
    <div>
      <main>
        {/* =======================
Page Banner START */}
        <section className="py-5">
          <div className="container">
            <div className="row position-relative">
              {/* SVG decoration */}
              <figure className="position-absolute top-0 start-0 d-none d-sm-block">
                <svg width="22px" height="22px" viewBox="0 0 22 22">
                  <polygon
                    className="fill-purple"
                    points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
                  />
                </svg>
              </figure>
              {/* Title and breadcrumb */}
              <div className="col-lg-10 mx-auto text-center position-relative">
                {/* SVG decoration */}
                <figure className="position-absolute top-50 end-0 translate-middle-y">
                  <svg width="27px" height="27px">
                    <path
                      className="fill-orange"
                      d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
                    />
                  </svg>
                </figure>
                {/* Title */}
                <h1>Blog</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Page Banner END */}
        {/* =======================
Page content START */}
        <section className="position-relative pt-0">
          <div className="container">
            <div
              className="row g-4 filter-container overflow-hidden"
              data-isotope='{"layoutMode": "masonry"}'
            >
              {/* Card item START */}
              {blog?.data?.map((v) => (
                <div className="col-sm-6 col-lg-4 grid-item">
                  <div className="card">
                    <div className="overflow-hidden rounded-3">
                      <img
                        src={v?.content_file[0]?.url}
                        className="card-img"
                        alt="course image"
                      />
                      {/* Overlay */}
                      <div className="bg-overlay bg-dark opacity-4" />
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        {/* badge */}
                        <a href="#" className="badge bg-danger text-white">
                          {v.tag}
                        </a>
                      </div>
                    </div>
                    {/* Card body */}
                    <NavLink to={`/blog-details/${v._id}`}>
                    <div className="card-body px-3">
                      {/* Title */}
                      <h5 className="card-title">
                        <a href="#">{v.title}</a>
                      </h5>
                      <p className="text-truncate-2">
                        {v.description}
                      </p>
                      {/* Info */}
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <a href="#">{v.instructor.name}</a>
                        </h6>
                        <span className="small">{v.date}</span>
                      </div>
                    </div>
                    </NavLink>
                  </div>
                </div>
              ))}

              {/* Card item END */}
            </div>{" "}
            {/* Row end */}
            {/* Load more button START */}
            <div className="text-center mt-4">
              <a href="#" className="btn btn-primary-soft mb-0">
                Load more
                <i className="fas fa-sync ms-2" />
              </a>
            </div>
            {/* Load more button END */}
          </div>
        </section>
        {/* =======================
Page content END */}
      </main>
    </div>
  );
}

export default Blog;
