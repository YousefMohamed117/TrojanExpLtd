import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

// Install Swiper modules
// Import Swiper styles
const Home = () => {
  useEffect(() => {
    // Initial animation when the component mounts
    document
      .querySelectorAll(
        ".hero-text-tablecell .subtitle, .hero-text-tablecell h1, .hero-btns"
      )
      .forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animated", "fadeInUp");
          element.style.opacity = "1";
        }, index * 150); // Adjust initial animation delay as needed
      });
  }, []);
  const { locale } = useIntl();
  const isRtl = locale === "ar"; // Adjust based on your locale logic
  const handleSlideChange = () => {
    // Remove animation classes and reset opacity
    document
      .querySelectorAll(
        ".hero-text-tablecell .subtitle, .hero-text-tablecell h1, .hero-btns"
      )
      .forEach((element) => {
        element.classList.remove("animated", "fadeInUp");
        element.style.opacity = "0";
      });
    document
      .querySelectorAll(
        ".swiper-slide-active .hero-text-tablecell .subtitle, .swiper-slide-active .hero-text-tablecell h1, .swiper-slide-active .hero-btns"
      )
      .forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animated", "fadeInUp");
          element.style.opacity = "1";
        }, index * 150); // Adjust animation delay as needed
      });
  };

  const handleSlideChangeTransitionEnd = () => {
    // Add animation classes and set opacity after delay
    document
      .querySelectorAll(
        ".swiper-slide-active .hero-text-tablecell .subtitle, .swiper-slide-active .hero-text-tablecell h1, .swiper-slide-active .hero-btns"
      )
      .forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animated", "fadeInUp");
          element.style.opacity = "1";
        }, index * 150); // Adjust animation delay as needed
      });
  };
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, [locale]);
  return (
    <>
      {/*PreLoader*/}
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>
      {/*PreLoader Ends*/}
      {/* home page slider */}
      <div className="homepage-slider vh-100">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          loop={true}
          speed={300}
          dir={isRtl ? "rtl" : "ltr"}
          key={locale}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSlideChange={handleSlideChange}
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        >
          <SwiperSlide>
            <div
              className="single-homepage-slider homepage-bg-1"
              style={{ backgroundImage: "url(./assets/img/hero-bg.webp)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 offset-lg-1 ">
                    <div className="hero-text">
                      <div className="hero-text-tablecell">
                        <p className="subtitle">
                          <FormattedMessage
                            id="slide1.subtitle"
                            defaultMessage="Fresh from Our Farms"
                          />
                        </p>
                        <h1>
                          <FormattedMessage
                            id="slide1.title1"
                            defaultMessage="Trojans for Exporting Avocados from Kenya"
                          />
                        </h1>
                        <h1>
                          <FormattedMessage
                            id="slide1.title2"
                            defaultMessage="We Offer the Best Types of Avocados"
                          />
                        </h1>
                        <div className="hero-btns">
                          <Link
                            to="/about"
                            className="bordered-btn d-inline-flex"
                          >
                            <FormattedMessage
                              id="slide1.more"
                              defaultMessage="Learn More"
                            />
                          </Link>
                          <Link
                            to="https://wa.me/966542750750"
                            target="_blank"
                            className="boxed-btn icon d-inline-flex "
                          >
                            <FormattedMessage
                              id="slide1.contact"
                              defaultMessage="Contact Us"
                            />
                            <i className="fab fa-whatsapp "></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="single-homepage-slider homepage-bg-2"
              style={{ backgroundImage: "url(./assets/img/hero-bg-2.webp)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 offset-lg-1 ">
                    <div className="hero-text">
                      <div className="hero-text-tablecell">
                        <p className="subtitle">
                          <FormattedMessage
                            id="slide2.subtitle"
                            defaultMessage="Delicious and Sweet Mangoes"
                          />
                        </p>
                        <h1>
                          <FormattedMessage
                            id="slide2.title"
                            defaultMessage="Carefully Grown for the Best Taste, Providing You with a Unique Experience."
                          />
                        </h1>
                        <div className="hero-btns">
                          <Link
                            to="/about"
                            className="bordered-btn d-inline-flex"
                          >
                            <FormattedMessage
                              id="slide1.more"
                              defaultMessage="Learn More"
                            />
                          </Link>
                          <Link
                            to="https://wa.me/966542750750"
                            target="_blank"
                            className="boxed-btn icon d-inline-flex "
                          >
                            <FormattedMessage
                              id="slide1.contact"
                              defaultMessage="Contact Us"
                            />
                            <i className="fab fa-whatsapp "></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="single-homepage-slider homepage-bg-3"
              style={{ backgroundImage: "url(./assets/img/hero-bg-3.webp)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 offset-lg-1 ">
                    <div className="hero-text">
                      <div className="hero-text-tablecell">
                        <p className="subtitle">
                          <FormattedMessage
                            id="slide3.subtitle"
                            defaultMessage="Fresh and Enjoyable Pineapples"
                          />
                        </p>
                        <h1>
                          <FormattedMessage
                            id="slide3.title"
                            defaultMessage="With its Distinct Tropical Flavor, Perfect for Juices and Desserts, Adding Unique Flavor to Your Dishes."
                          />
                        </h1>
                        <div className="hero-btns">
                          <Link
                            to="/about"
                            className="bordered-btn d-inline-flex"
                          >
                            <FormattedMessage
                              id="slide1.more"
                              defaultMessage="Learn More"
                            />
                          </Link>
                          <Link
                            to="https://wa.me/966542750750"
                            target="_blank"
                            className="boxed-btn icon d-inline-flex "
                          >
                            <FormattedMessage
                              id="slide1.contact"
                              defaultMessage="Contact Us"
                            />
                            <i className="fab fa-whatsapp "></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="single-homepage-slider homepage-bg-4"
              style={{ backgroundImage: "url(./assets/img/hero-bg-4.webp)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 offset-lg-1 ">
                    <div className="hero-text">
                      <div className="hero-text-tablecell">
                        <p className="subtitle">
                          <FormattedMessage
                            id="slide4.subtitle"
                            defaultMessage="Rich in Flavors"
                          />
                        </p>
                        <h1>
                          <FormattedMessage
                            id="slide4.title"
                            defaultMessage="Passion Fruit is Full of Vitamins and Antioxidants, Ideal for Snacks and Refreshments."
                          />
                        </h1>
                        <div className="hero-btns">
                          <Link
                            to="/about"
                            className="bordered-btn d-inline-flex"
                          >
                            <FormattedMessage
                              id="slide1.more"
                              defaultMessage="Learn More"
                            />
                          </Link>
                          <Link
                            to="https://wa.me/966542750750"
                            target="_blank"
                            className="boxed-btn icon d-inline-flex "
                          >
                            <FormattedMessage
                              id="slide1.contact"
                              defaultMessage="Contact Us"
                            />
                            <i className="fab fa-whatsapp "></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* end home page slider */}
      <div className="abt-section mb-150 mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub font-weight-bold">
                  <FormattedMessage id="about.top-sub" />
                </p>
                <h2>
                  <FormattedMessage
                    id="about.company"
                    values={{
                      company: (
                        <span className="orange-text">TrojanExp.Ltd</span>
                      ),
                    }}
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="about.description1"
                    values={{
                      company: (
                        <span className="orange-text">TrojanExp.Ltd</span>
                      ),
                    }}
                  />
                </p>
                <p>
                  <FormattedMessage id="about.description2" />
                </p>
                <Link to="/about" className="boxed-btn mt-4">
                  <FormattedMessage id="about.read-more" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg" />
            </div>
          </div>
        </div>
      </div>
      {/* product section */}
      <div className="product-section mt-150 mb-150 apple-system" id="products">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h3 className="apple-system">
                  <span className="orange-text">
                    <FormattedMessage id="product-section.title" />
                  </span>
                </h3>
                <h5 className="apple-system">
                  <FormattedMessage id="product-section.subtitle" />
                  <span className="orange-text mr-1 ml-1">
                    <FormattedMessage id="product-section.subtitle.mango" />,
                  </span>
                  <span className="orange-text mr-1 ml-1">
                    <FormattedMessage id="product-section.subtitle.avocado" />,
                  </span>
                  <span className="orange-text mr-1 ml-1">
                    <FormattedMessage id="product-section.subtitle.passionfruit" />
                    ,
                  </span>
                  <span className="orange-text mr-1 ml-1">
                    <FormattedMessage id="product-section.subtitle.pineapple" />
                  </span>
                  .
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="/product/avocado">
                    <img src="/assets/img/general/avocado-ill.webp" alt="" />
                  </Link>
                </div>
                <h3>
                  <FormattedMessage id="product.avocado" />
                </h3>
                <Link className="cart-btn" to="/product/avocado">
                  <FormattedMessage id="product.view-more" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="/product/mangos">
                    <img src="/assets/img/general/mangos-ill.webp" alt="" />
                  </Link>
                </div>
                <h3>
                  <FormattedMessage id="product.mango" />
                </h3>
                <Link className="cart-btn" to="/product/mangos">
                  <FormattedMessage id="product.view-more" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="/product/pineapple">
                    <img src="/assets/img/general/pineapple-ill.webp" alt="" />
                  </Link>
                </div>
                <h3>
                  <FormattedMessage id="product.pineapple" />
                </h3>
                <Link className="cart-btn" to="/product/pineapple">
                  <FormattedMessage id="product.view-more" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="/product/passionfruit">
                    <img src="/assets/img/general/Passion-Fruit.png" alt="" />
                  </Link>
                </div>
                <h3>
                  <FormattedMessage id="product.passionfruit" />
                </h3>
                <Link className="cart-btn" to="/product/passionfruit">
                  <FormattedMessage id="product.view-more" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end product section */}
      <div className="logo-carousel-section  mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <h2 className="orange-text mb-4 ">
                <FormattedMessage id="export.title" />
              </h2>
              <img src="./assets/img/export.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* cart banner section */}
      <section className="cart-banner py-5 position-relative">
        <div
          className="bg-holder"
          style={{
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            height: "100%",
          }}
        />
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-9 col-xl-5 text-center py-5">
              <h3 className="fw-bold apple-system mb-4 text-white">
                <FormattedMessage id="cart-banner.title" />
              </h3>
              {/* <p className="mb-5 h5 text-white">
                <FormattedMessage id="cart-banner.description" />
              </p> */}
            </div>
            <div className="col-sm-9 col-md-12 col-xxl-9">
              <div className="theme-tab">
                <ul
                  className="nav nav-tabs justify-content-between"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active fw-semi-bold"
                      id="tab-1"
                      data-bs-toggle="tab"
                      href="#tab1"
                      role="tab"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">01</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      id="tab-2"
                      data-bs-toggle="tab"
                      href="#tab2"
                      role="tab"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">02</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      id="tab-3"
                      data-bs-toggle="tab"
                      href="#tab3"
                      role="tab"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">03</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      id="tab-4"
                      data-bs-toggle="tab"
                      href="#tab4"
                      role="tab"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">04</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <div className="row align-items-center mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          <FormattedMessage id="tab1.title" />
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1 ">
                        <img src="assets/img/general/growing.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          <FormattedMessage id="tab2.title" />
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <img src="assets/img/general/planting.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          <FormattedMessage id="tab3.title" />
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <img src="assets/img/general/packing.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab4"
                    role="tabpanel"
                    aria-labelledby="tab-4"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          <FormattedMessage id="tab4.title" />
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <img src="assets/img/general/dist.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end cart banner section */}
      {/* advertisement section */}

      {/* logos section */}
      <div className="logo-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                // slidesPerView={4}
                dir={isRtl ? "rtl" : "ltr"}
                key={locale}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                // dir="rtl"
                loop={true}
                speed={300}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div className="single-logo-item text-center align-items-center">
                    <div className="img">
                      <img src="assets/img/company-logos/1.png" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-logo-item text-center align-items-center">
                    <div className="img">
                      <img src="assets/img/company-logos/2.png" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-logo-item text-center align-items-center">
                    <div className="img">
                      <img src="assets/img/company-logos/3.png" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-logo-item text-center align-items-center">
                    <div className="img">
                      <img src="assets/img/company-logos/4.png" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-logo-item text-center align-items-center">
                    <div className="img">
                      <img src="assets/img/company-logos/5.png" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* end logos section */}
    </>
  );
};

export default Home;
