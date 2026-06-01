import React from "react";
import { useGetBlogQuery } from "../../redux/Api/blog.api";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import DOMPurify from 'dompurify';

function BlogDetail(props) {
  const param = useParams();

  const { data: blog } = useGetBlogQuery();
  console.log(blog?.data);

  const blogdata = blog?.data?.find((v) => v._id === param._id);
  console.log("blogdata", blogdata);

  const cleanHtml = DOMPurify.sanitize(blogdata?.content);
  
  return (
    <div>
      <main>
        {/* =======================
Main Content START */}
        <section className="pb-0 pt-4 pb-md-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Title and Info START */}
                <div className="row">
                  {/* Avatar and Share */}
                  <div className="col-lg-3 align-items-center mt-4 mt-lg-5 order-2 order-lg-1">
                    <div className="text-lg-center">
                      {/* Author info */}
                      <div className="position-relative">
                        {/* Avatar */}
                        <div className="avatar avatar-xxl">
                          <img
                            className="avatar-img rounded-circle"
                            src="../../../public/assets/images/avatar/08.jpg"
                            alt="avatar"
                          />
                        </div>
                        <a
                          href="#"
                          className="h5 stretched-link mt-2 mb-0 d-block"
                        >
                          {blogdata?.instructor?.name}
                        </a>
                        <p className="mb-2">Editor at Eduport</p>
                      </div>
                      {/* Info */}
                      <ul className="list-inline list-unstyled">
                        <li className="list-inline-item d-lg-block my-lg-2">
                          {blogdata?.date}
                        </li>

                        <li className="list-inline-item badge bg-orange text-white">
                          <i className="far text-white fa-heart me-1" />
                          266
                        </li>
                        <li className="list-inline-item badge bg-info text-white">
                          <i className="far fa-eye me-1" />
                          2K
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="col-lg-9 order-1">
                    {/* Pre title */}
                    <span>40D ago</span>
                    <span className="mx-2">|</span>
                    <div className="badge bg-success text-white">
                      {blogdata?.tag}
                    </div>
                    {/* Title */}
                    <h1 className="mt-2 mb-0 display-5">{blogdata?.title}</h1>
                    {/* Info */}
                    <p className="mt-2">
                      {blogdata?.description}
                    </p>
                    
                  </div>
                </div>
                {/* Title and Info END */}
                {/* Video START */}
                <div className="row mt-4">
                  <div className="col-xl-10 mx-auto">
                    {/* Card item START */}
                    <div>
                      <Carousel>
                        {blogdata?.content_file?.map((v, i) => (
                          <img
                            key={i}
                            src={v?.url}
                            className="card-img-top"
                            alt="course"
                          />
                        ))}
                      </Carousel>
                    </div>
                    {/* Card item END */}
                  </div>
                </div>
                {/* Video END */}
                {/* Quote and content START */}
                <div className="row mt-4">
                  {/* Content */}
                  <div className="col-12 mt-4 mt-lg-0">
                      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
                  </div>
                 
                </div>
                {/* Quote and content END */}
               
                <div className="d-lg-flex justify-content-lg-between mb-4">
                  {/* Social media button */}
                  <div className="align-items-center mb-3 mb-lg-0">
                    <h6 className="mb-2 me-4 d-inline-block">Share on:</h6>
                    <ul className="list-inline mb-0 mb-2 mb-sm-0">
                      <li className="list-inline-item">
                        {" "}
                        <a className="btn px-2 btn-sm bg-facebook" href="#">
                          <i className="fab fa-fw fa-facebook-f" />
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn px-2 btn-sm bg-instagram-gradient"
                          href="#"
                        >
                          <i className="fab fa-fw fa-instagram" />
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a className="btn px-2 btn-sm bg-twitter" href="#">
                          <i className="fab fa-fw fa-twitter" />
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a className="btn px-2 btn-sm bg-linkedin" href="#">
                          <i className="fab fa-fw fa-linkedin-in" />
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  {/* Popular tags */}
                  <div className="align-items-center">
                    <h6 className="mb-2 me-4 d-inline-block">Popular Tags:</h6>
                    <ul className="list-inline mb-0 social-media-btn">
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn btn-outline-light btn-sm mb-lg-0"
                          href="#"
                        >
                          blog
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn btn-outline-light btn-sm mb-lg-0"
                          href="#"
                        >
                          business
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn btn-outline-light btn-sm mb-lg-0"
                          href="#"
                        >
                          bootstrap
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn btn-outline-light btn-sm mb-lg-0"
                          href="#"
                        >
                          data science
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className="btn btn-outline-light btn-sm mb-lg-0"
                          href="#"
                        >
                          deep learning
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Tags and share END */}
                <hr /> {/* Divider */}
                {/* Comment review and form START */}
                <div className="row mt-4">
                  {/* Comment START */}
                  <div className="col-md-7">
                    <h3>3 comments</h3>
                    {/* Comment level 1*/}
                    <div className="my-4 d-flex">
                      <img
                        className="avatar avatar-md rounded-circle me-3"
                        src="../../../public/assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2">
                          <h5 className="m-0">Frances Guerrero</h5>
                          <span className="me-3 small">
                            June 11, 2021 at 6:01 am
                          </span>
                        </div>
                        <p>
                          Satisfied conveying a dependent contented he gentleman
                          agreeable do be. Warrant private blushes removed an in
                          equally totally if. Delivered dejection necessary
                          objection do Mr prevailed. Mr feeling does chiefly
                          cordial in do.
                        </p>
                        <a href="#" className="btn btn-sm btn-light mb-0">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comment children level 2 */}
                    <div className="my-4 d-flex ps-2 ps-md-4">
                      <img
                        className="avatar avatar-md rounded-circle me-3"
                        src="../../../public/assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2">
                          <h5 className="m-0">Louis Ferguson</h5>
                          <span className="me-3 small">
                            June 11, 2021 at 6:55 am
                          </span>
                        </div>
                        <p>
                          Water timed folly right aware if oh truth. Imprudence
                          attachment him for sympathize. Large above be to
                          means. Dashwood does provide stronger is. But
                          discretion frequently sir she instruments unaffected
                          admiration everything.
                        </p>
                        <a href="#" className="btn btn-sm btn-light mb-0">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comment children level 3 */}
                    <div className="my-4 d-flex ps-3 ps-md-5">
                      <img
                        className="avatar avatar-md rounded-circle me-3"
                        src="../../../public/assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2">
                          <h5 className="m-0">Frances Guerrero</h5>
                          <span className="me-3 small">
                            June 12, 2021 at 7:30 am
                          </span>
                        </div>
                        <p>Water timed folly right aware if oh truth.</p>
                        <a href="#" className="btn btn-sm btn-light mb-0">
                          Reply
                        </a>
                      </div>
                    </div>
                    {/* Comment level 1 */}
                    <div className="my-4 d-flex">
                      <img
                        className="avatar avatar-md rounded-circle me-3"
                        src="../../../public/assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                      <div>
                        <div className="mb-2">
                          <h5 className="m-0">Judy Nguyen</h5>
                          <span className="me-3 small">
                            June 18, 2021 at 11:55 am
                          </span>
                        </div>
                        <p>
                          Fulfilled direction use continual set him propriety
                          continued. Saw met applauded favorite deficient
                          engrossed concealed and her. Concluded boy perpetual
                          old supposing. Farther-related bed and passage comfort
                          civilly.
                        </p>
                        <a href="#" className="btn btn-sm btn-light mb-0">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Comment END */}
                  {/* Form START */}
                  <div className="col-md-5">
                    {/* Title */}
                    <h3 className="mt-3 mt-sm-0">Your Views Please!</h3>
                    <small>
                      Your email address will not be published. Required fields
                      are marked *
                    </small>
                    <form className="row g-3 mt-2 mb-5">
                      {/* Name */}
                      <div className="col-lg-6">
                        <label className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="First name"
                        />
                      </div>
                      {/* Email */}
                      <div className="col-lg-6">
                        <label className="form-label">Email *</label>
                        <input type="email" className="form-control" />
                      </div>
                      {/* Comment */}
                      <div className="col-12">
                        <label className="form-label">Your Comment *</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      {/* Button */}
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mb-0">
                          Post comment
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Form END */}
                </div>
                {/* Comment review and form END */}
              </div>
            </div>{" "}
            {/* Row END */}
          </div>
        </section>
        {/* =======================
Main Content END */}
        {/* =======================
Related blog START */}
        <section className="pt-0">
          <div className="container">
            {/* Title */}
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="mb-0">You may also like</h2>
              </div>
            </div>
            {/* Slider START */}
            <div className="tiny-slider arrow-round arrow-hover arrow-dark">
              <div
                className="tiny-slider-inner"
                data-autoplay="false"
                data-arrow="true"
                data-edge={2}
                data-dots="false"
                data-items={3}
                data-items-lg={2}
                data-items-sm={1}
              >
                {/* Slider item */}
                <div className="card">
                  <div className="row g-0">
                    {/* Image */}
                    <div className="col-md-4">
                      <img
                        src="../../../public/assets/images/event/06.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    {/* Card body */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Title */}
                        <h6 className="card-title">
                          <a href="#">
                            Dirty little secrets about the business industry
                          </a>
                        </h6>
                        <span className="small">July 21, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider item */}
                <div className="card">
                  <div className="row g-0">
                    {/* Image */}
                    <div className="col-md-4">
                      <img
                        src="../../../public/assets/images/event/04.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    {/* Card body */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Title */}
                        <h6 className="card-title">
                          <a href="#">
                            This is why this year will be the year of startups
                          </a>
                        </h6>
                        <span className="small">50min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider item */}
                <div className="card">
                  <div className="row g-0">
                    {/* Image */}
                    <div className="col-md-4">
                      <img
                        src="../../../public/assets/images/event/03.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    {/* Card body */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Title */}
                        <h6 className="card-title">
                          <a href="#">Covid-19 and the college experienced</a>
                        </h6>
                        <span className="small">Aug 31, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider item */}
                <div className="card">
                  <div className="row g-0">
                    {/* Image */}
                    <div className="col-md-4">
                      <img
                        src="assets/images/event/05.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    {/* Card body */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Title */}
                        <h6 className="card-title">
                          <a href="#">
                            This is why this year will be the year of startups
                          </a>
                        </h6>
                        <span className="small">50min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider END */}
          </div>
        </section>
        {/* =======================
Related blog END */}
      </main>
    </div>
  );
}

export default BlogDetail;
