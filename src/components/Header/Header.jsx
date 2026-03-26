import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { LogoutUser } from "../../redux/slice/auth.slice";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getCategory } from "../../redux/slice/CategorySlice.js";

function Header(props) {
  const themedata = useContext(ThemeContext);

  const isdark = themedata.theme === "light";
  console.log(isdark);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    themedata.toggletheme(themedata.theme);
  };

  console.log("themedata", themedata);

  const { logtype } = useParams();
  console.log(logtype);

  const cateData = useSelector((state) => state.category);
  console.log(cateData);

  const firstCat = cateData.category?.filter((v) => v.parent_id === null);
  console.log(firstCat);

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff",
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  return (
    <header className="navbar-light navbar-sticky header-static">
      {/* Logo Nav START */}
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          {/* Logo START */}
          <a className="navbar-brand" href="/">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/logo.svg"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/logo-light.svg"
              alt="logo"
            />
          </a>
          {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          {/* Main navbar START */}
          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            {/* Nav category menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              {/* Nav item 1 Demos */}
              <li className="nav-item dropdown dropdown-menu-shadow-stacked">
                <a
                  className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0"
                  href="#"
                  id="categoryMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-ui-radios-grid me-2" />
                  <span>Category</span>
                </a>

                <ul className="dropdown-menu" aria-labelledby="categoryMenu">
                  {firstCat?.map((v) => {
                    const secCat = cateData.category.filter(
                      (sc) => sc.parent_id === v._id,
                    );
                    console.log(secCat);

                    return (
                      <>
                        <li
                          className={
                            secCat.length > 0 ? "dropdown-submenu dropend" : ""
                          }
                        >
                          <a
                            className={
                              secCat.length > 0
                                ? "dropdown-item dropdown-toggle"
                                : "dropdown-item"
                            }
                            href="#"
                          >
                            {v.name}
                          </a>

                          {secCat && (
                            <ul
                              className="dropdown-menu dropdown-menu-start"
                              data-bs-popper="none"
                            >
                              {secCat.map((sc) => {
                                const thCat = cateData.category.filter(
                                  (tc) => tc.parent_id === sc._id,
                                );
                                console.log(thCat);

                                return (
                                  <li
                                    className={
                                      thCat.length > 0
                                        ? "dropdown-submenu dropend"
                                        : ""
                                    }
                                  >
                                    <a
                                      className={
                                        thCat.length > 0
                                          ? "dropdown-item dropdown-toggle"
                                          : "dropdown-item"
                                      }
                                      href="#"
                                    >
                                      {sc.name}
                                    </a>

                                    {thCat && (
                                      <ul
                                        className="dropdown-menu dropdown-menu-start"
                                        data-bs-popper="none"
                                      >
                                        {thCat.map((tc) => (
                                          <li
                                            className={
                                              thCat.length > 0
                                                ? "dropdown-submenu dropend"
                                                : ""
                                            }
                                          >
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              {tc.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                        <li className={"dropdown-submenu dropend"}>
                          {" "}
                          <a className={"dropdown-item"} href="#"><NavLink to={"/category"} >
                           All Category
                          </NavLink></a>
                          
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </ul>
            {/* Nav category menu END */}
            {/* Nav Main menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              {/* Nav item 1 Demos */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Demos
                </a>
                <ul className="dropdown-menu" aria-labelledby="demoMenu">
                  <li>
                    {" "}
                    <a className="dropdown-item active" href="index.html">
                      Home Default
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-2.html">
                      Home Education
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-3.html">
                      Home Academy
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-4.html">
                      Home Course
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-5.html">
                      Home University
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-6.html">
                      Home Kindergarten
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-7.html">
                      Home Landing
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="index-8.html">
                      Home Tutor
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="request-demo.html">
                      Request a demo
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="book-class.html">
                      Book a Class
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="request-access.html">
                      Free Access
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="university-admission-form.html"
                    >
                      Admission Form
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Dropdown levels
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      {/* dropdown submenu open right */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Dropdown (end)
                        </a>
                        <ul className="dropdown-menu" data-bs-popper="none">
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="#">
                          Dropdown item
                        </a>{" "}
                      </li>
                      {/* dropdown submenu open left */}
                      <li className="dropdown-submenu dropstart">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Dropdown (start)
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          data-bs-popper="none"
                        >
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="#">
                          Dropdown item
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Nav item 2 Pages */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Course
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-grid.html">
                          Course Grid Classic
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-grid-2.html">
                          Course Grid Minimal
                        </a>
                      </li>
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-list.html">
                          Course List Classic
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-list-2.html">
                          Course List Minimal
                        </a>
                      </li>
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-detail.html">
                          Course Detail Classic
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="course-detail-min.html"
                        >
                          Course Detail Minimal
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="course-detail-adv.html"
                        >
                          Course Detail Advance
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="course-video-player.html"
                        >
                          Course Full Screen Video
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      About
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        {" "}
                        <a className="dropdown-item" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="blog-grid.html">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="blog-masonry.html">
                          Blog Masonry
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="blog-detail.html">
                          Blog Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="pricing.html">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="instructor-list.html">
                      Instructor List
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="instructor-single.html">
                      Instructor Single
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="become-instructor.html">
                      Become an Instructor
                    </a>
                  </li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Authentication
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        {" "}
                        <a className="dropdown-item" href="sign-in.html">
                          Sign In
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="sign-up.html">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="forgot-password.html"
                        >
                          Forgot Password
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="faq.html">
                      FAQs
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="error-404.html">
                      Error 404
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="cart.html">
                      Cart
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="checkout.html">
                      Checkout
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="empty-cart.html">
                      Empty Cart
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="wishlist.html">
                      Wishlist
                    </a>
                  </li>
                </ul>
              </li>
              {/* Nav item 3 Account */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="accounntMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                </a>
                <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      <i className="fas fa-user-tie fa-fw me-1" />
                      Instructor
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-dashboard.html"
                        >
                          <i className="bi bi-grid-fill fa-fw me-1" />
                          Dashboard
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-manage-course.html"
                        >
                          <i className="bi bi-basket-fill fa-fw me-1" />
                          Courses
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-create-course.html"
                        >
                          <i className="bi bi-file-earmark-plus-fill fa-fw me-1" />
                          Create Course
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="course-added.html">
                          <i className="bi bi-file-check-fill fa-fw me-1" />
                          Course Added
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-earning.html"
                        >
                          <i className="fas fa-chart-line fa-fw me-1" />
                          Earnings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-studentlist.html"
                        >
                          <i className="fas fa-user-graduate fa-fw me-1" />
                          Students
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-order.html"
                        >
                          <i className="bi bi-cart-check-fill fa-fw me-1" />
                          Orders
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-review.html"
                        >
                          <i className="bi bi-star-fill fa-fw me-1" />
                          Reviews
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="instructor-payout.html"
                        >
                          <i className="fas fa-wallet fa-fw me-1" />
                          Payout
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      <i className="fas fa-user-graduate fa-fw me-1" />
                      Student
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="student-dashboard.html"
                        >
                          <i className="bi bi-grid-fill fa-fw me-1" />
                          Dashboard
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="student-subscription.html"
                        >
                          <i className="bi bi-card-checklist fa-fw me-1" />
                          My Subscriptions
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="student-course-list.html"
                        >
                          <i className="bi bi-basket-fill fa-fw me-1" />
                          Courses
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="student-payment-info.html"
                        >
                          <i className="bi bi-credit-card-2-front-fill fa-fw me-1" />
                          Payment Info
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="student-bookmark.html"
                        >
                          <i className="fas bi-cart-check-fill fa-fw me-1" />
                          Wishlist
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user-cog fa-fw me-1" />
                      Admin (Coming Soon)
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="instructor-edit-profile.html"
                    >
                      <i className="fas fa-fw fa-edit me-1" />
                      Edit Profile
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="instructor-setting.html">
                      <i className="fas fa-fw fa-cog me-1" />
                      Settings
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="instructor-delete-account.html"
                    >
                      <i className="fas fa-fw fa-trash-alt me-1" />
                      Delete Profile
                    </a>{" "}
                  </li>
                </ul>
              </li>
              {/* Nav item 4 Megamenu*/}
              <li className="nav-item dropdown dropdown-fullwidth">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Megamenu
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end pb-0"
                  data-bs-popper="none"
                >
                  <div className="row p-4 g-4">
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Get started</h6>
                      <hr />
                      <ul className="list-unstyled">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Market research
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Advertising
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Consumer behavior
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Digital marketing
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Marketing ethics
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Social media marketing
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Public relations
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Advertising
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Decision science
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            SEO
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Business marketing
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Degree</h6>
                      <hr />
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">
                          Contact management
                        </a>
                        <p className="mb-0 small text-truncate-2">
                          Speedily say has suitable disposal add boy. On forth
                          doubt miles of child.
                        </p>
                      </div>
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">
                          Sales pipeline
                        </a>
                        <p className="mb-0 small text-truncate-2">
                          Speedily say has suitable disposal add boy. On forth
                          doubt miles of child.
                        </p>
                      </div>
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">
                          Security &amp; Permission
                        </a>
                        <p className="mb-0 small text-truncate-2">
                          Speedily say has suitable disposal add boy. On forth
                          doubt miles of child.
                        </p>
                      </div>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Certificate</h6>
                      <hr />
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0">
                          <i className="fab fa-fw fa-google text-google-icon" />
                        </h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">
                            Google SEO certificate
                          </a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0">
                          <i className="fab fa-fw fa-linkedin-in text-linkedin" />
                        </h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">
                            Business Development Executive(BDE)
                          </a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0">
                          <i className="fab fa-fw fa-facebook text-facebook" />
                        </h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">
                            Facebook social media marketing
                          </a>
                          <p className="mb-0 small">Expert advice</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0">
                          <i className="fas fa-fw fa-basketball-ball text-dribbble" />
                        </h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">
                            Creative graphics design
                          </a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Download Eduport</h6>
                      <hr />
                      {/* Image */}
                      <img src="assets/images/element/14.svg" alt />
                      {/* Download button */}
                      <div className="row g-2 justify-content-center mt-3">
                        {/* Google play store button */}
                        <div className="col-6 col-sm-4 col-xxl-6">
                          <a href="#">
                            {" "}
                            <img
                              src="assets/images/client/google-play.svg"
                              className="btn-transition"
                              alt="google-store"
                            />{" "}
                          </a>
                        </div>
                        {/* App store button */}
                        <div className="col-6 col-sm-4 col-xxl-6">
                          <a href="#">
                            {" "}
                            <img
                              src="assets/images/client/app-store.svg"
                              className="btn-transition"
                              alt="app-store"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Action box */}
                    <div className="col-12">
                      <div
                        className="alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3"
                        role="alert"
                      >
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-2">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        The personality development class starts at 2:00 pm,
                        click to{" "}
                        <a href="#" className="alert-link">
                          Join Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Nav item 5 link*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="advanceMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end min-w-auto"
                  data-bs-popper="none"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://support.webestica.com/"
                      target="_blank"
                    >
                      <i className="text-warning fa-fw bi bi-life-preserver me-2" />
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/index.html"
                      target="_blank"
                    >
                      <i className="text-danger fa-fw bi bi-card-text me-2" />
                      Documentation
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://eduport.webestica.com/rtl/"
                      target="_blank"
                    >
                      <i className="text-info fa-fw bi bi-toggle-off me-2" />
                      RTL demo
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://themes.getbootstrap.com/store/webestica/"
                      target="_blank"
                    >
                      <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />
                      Buy Eduport!
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/alerts.html"
                      target="_blank"
                    >
                      <i className="text-orange fa-fw bi bi-puzzle-fill me-2" />
                      Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Nav Main menu END */}
            {/* Nav Search START */}
            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                <form className="position-relative">
                  <input
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
            {/* Nav Search END */}
          </div>
          {/* Main navbar END */}
          {/* Profile START */}
          <div className="dropdown ms-1 ms-lg-0">
            <a
              className="avatar avatar-sm p-0"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="avatar-img rounded-circle"
                src="assets/images/avatar/01.jpg"
                alt="avatar"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
              aria-labelledby="profileDropdown"
            >
              {/* Profile info */}
              <li className="px-3">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-3">
                    <img
                      className="avatar-img rounded-circle shadow"
                      src="assets/images/avatar/01.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <a className="h6" href="#">
                      Lori Ferguson
                    </a>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </div>
                <hr />
              </li>
              {/* Links */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person fa-fw me-2" />
                  Edit Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear fa-fw me-2" />
                  Account Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-info-circle fa-fw me-2" />
                  Help
                </a>
              </li>
              <li>
                {auth.user && logtype !== "instructor" ? (
                  <a
                    href="#"
                    className="dropdown-item bg-danger-soft-hover"
                    onClick={() => dispatch(LogoutUser(auth.user._id))}
                  >
                    Sign Out
                  </a>
                ) : (
                  <NavLink
                    className="dropdown-item bg-danger-soft-hover"
                    to="/auth"
                  >
                    <i className="bi bi-power fa-fw me-2" />
                    Sign In
                  </NavLink>
                )}
              </li>
              <li>
                {auth.user && logtype !== "instructor" ? (
                  <a
                    href="#"
                    className="dropdown-item bg-danger-soft-hover"
                    onClick={() => dispatch(LogoutUser(auth.user._id))}
                  >
                    Sign Out
                  </a>
                ) : (
                  <NavLink
                    className="dropdown-item bg-danger-soft-hover"
                    to="/auth/instructor"
                  >
                    <i className="bi bi-power fa-fw me-2" />
                    SignIn as Instructor
                  </NavLink>
                )}
              </li>
              <li>
                {" "}
                <hr className="dropdown-divider" />
              </li>
              {/* Dark mode switch START */}
              <li>
                <div className="modeswitch-wrap" id="darkModeSwitch">
                  {/* <FormControlLabel
                    checked={checked}
                    onChange={handleChange}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  /> */}
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    slotProps={{ input: { "aria-label": "controlled" } }}
                  />
                  <span>{`${themedata?.theme === "light" ? "Light" : "Dark"} Mode`}</span>
                </div>
              </li>
              {/* Dark mode switch END */}
            </ul>
          </div>
          {/* Profile START */}
        </div>
      </nav>
      {/* Logo Nav END */}
    </header>
  );
}

export default Header;
