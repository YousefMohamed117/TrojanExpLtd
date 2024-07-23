import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css/navigation";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

const Product = () => {
  const { name } = useParams();
  const { locale } = useIntl();
  const isRtl = locale === "ar"; // Adjust based on your locale logic
  if (name === "avocado") {
    return (
      <div className="apple-system">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-section avocado breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12  text-center">
                <div className="breadcrumb-text animated fadeInUp">
                  <h1
                    className="apple-system product-title"
                    style={{ color: "#acd629" }}
                  >
                    <FormattedMessage id="avocadoBreadcrumbSectionTitle" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Section */}

        {/* Single Product */}
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <Swiper
                  dir={isRtl ? "rtl" : "ltr"}
                  key={isRtl}
                  slidesPerView={1}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={true}
                  speed={1000}
                  className="fruit"
                  modules={[Autoplay, Navigation]}
                >
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado10.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado21.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado1.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado20.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado23.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado24.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado25.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado26.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado27.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado28.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado29.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado30.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado31.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado32.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado33.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado34.jpg" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-6   ">
                <div className="single-product-content">
                  <h3>
                    <FormattedMessage id="avocadoSingleProductTitle" />
                  </h3>
                  <p>
                    <FormattedMessage id="avocadoSingleProductDescription" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Product */}

        {/* Product Section */}
        <div className="product-section mt-150 mb-150 apple-system">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3 className="apple-system">
                    <FormattedMessage id="avocadoProductSectionTitle" />
                  </h3>
                  <h5 className="apple-system">
                    <FormattedMessage
                      id="passionfruitProductSectionDescription"
                      values={{
                        mango: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitmango" />
                          </span>
                        ),
                        avocado: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitavocado" />
                          </span>
                        ),
                        passionFruit: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpassionFruit" />
                          </span>
                        ),
                        pineapple: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpineapple" />
                          </span>
                        ),
                      }}
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to="/product/mangos">
                      <img src="/assets/img/general/mangos-ill.webp" alt="" />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="avocadoMangoTitle" />
                  </h3>
                  <Link className="cart-btn" to="/product/mangos">
                    <FormattedMessage id="avocadoMangoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to="/product/pineapple">
                      <img
                        src="/assets/img/general/pineapple-ill.webp"
                        alt=""
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="avocadoPineappleTitle" />
                  </h3>
                  <Link className="cart-btn" to="/product/pineapple">
                    <FormattedMessage id="avocadoPineappleLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to="/product/passionfruit">
                      <img src="/assets/img/general/Passion-Fruit.png" alt="" />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="avocadoPassionFruitTitle" />
                  </h3>
                  <Link className="cart-btn" to="/product/passionfruit">
                    <FormattedMessage id="avocadoPassionFruitLinkText" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Section */}
      </div>
    );
  } else if (name === "mangos") {
    return (
      <div className="apple-system fruit">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-section mango breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12     text-center">
                <div className="breadcrumb-text animated fadeInUp">
                  <h1
                    className="apple-system product-title"
                    style={{ color: "#F4BB44" }}
                  >
                    <FormattedMessage id="mangoBreadcrumbSectionTitle" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Section */}

        {/* Single Product */}
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={true}
                  speed={1000}
                  modules={[Autoplay, Navigation]}
                  className="fruit"
                  dir={isRtl ? "rtl" : "ltr"}
                  key={isRtl}
                >
                  <SwiperSlide>
                    <img src="/assets/img/blog/mango/mango1.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/mango/mango2.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/mango/mango3.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/mango/mango4.jpeg" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-6   ">
                <div className="single-product-content">
                  <h3>
                    <FormattedMessage id="mangoSingleProductTitle" />
                  </h3>
                  <p>
                    <FormattedMessage id="mangoSingleProductDescription" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Product */}

        {/* Product Section */}
        <div className="product-section mt-150 mb-150 apple-system">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3 className="apple-system">
                    <FormattedMessage
                      id="mangoProductSectionTitle"
                      values={{
                        highlight: (text) => (
                          <span className="orange-text">{text}</span>
                        ),
                      }}
                    />
                  </h3>
                  <h5 className="apple-system">
                    <FormattedMessage
                      id="passionfruitProductSectionDescription"
                      values={{
                        mango: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitmango" />
                          </span>
                        ),
                        avocado: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitavocado" />
                          </span>
                        ),
                        passionFruit: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpassionFruit" />
                          </span>
                        ),
                        pineapple: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpineapple" />
                          </span>
                        ),
                      }}
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/avocado"}>
                      <img src="/assets/img/general/avocado-ill.webp" alt="" />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="mangoAvocadoTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/avocado"}>
                    <FormattedMessage id="mangoAvocadoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/pineapple"}>
                      <img
                        src="/assets/img/general/pineapple-ill.webp"
                        alt=""
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="mangoPineappleTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/pineapple"}>
                    <FormattedMessage id="mangoPineappleLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/passionfruit"}>
                      <img src="/assets/img/general/Passion-Fruit.png" alt="" />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="mangoPassionFruitTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/passionfruit"}>
                    <FormattedMessage id="mangoPassionFruitLinkText" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Section */}
      </div>
    );
  } else if (name === "pineapple") {
    return (
      <div className="apple-system fruit">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-section pineapple breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12     text-center">
                <div className="breadcrumb-text animated fadeInUp">
                  <h1
                    className="apple-system product-title"
                    style={{ color: "#fff547" }}
                  >
                    <FormattedMessage id="pineappleBreadcrumbSectionTitle" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Section */}

        {/* Single Product */}
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={true}
                  speed={1000}
                  modules={[Autoplay, Navigation]}
                  className="fruit"
                  dir={isRtl ? "rtl" : "ltr"}
                  key={isRtl}
                >
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple2.jpg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple2.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple1.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple4.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple5.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple6.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple7.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple8.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple9.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple10.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple11.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple12.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple13.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple14.jpeg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple5.jpg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple3.jpg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/pineapple/pineapple4.jpg"
                      alt="Pineapple"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-6   ">
                <div className="single-product-content">
                  <h3>
                    <FormattedMessage id="pineappleSingleProductTitle" />
                  </h3>
                  <p>
                    <FormattedMessage id="pineappleSingleProductDescription" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Product */}

        {/* Product Section */}
        <div className="product-section mt-150 mb-150 apple-system">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3 className="apple-system">
                    <FormattedMessage
                      id="pineappleProductSectionTitle"
                      values={{
                        highlight: (text) => (
                          <span className="orange-text">{text}</span>
                        ),
                      }}
                    />
                  </h3>
                  <h5 className="apple-system">
                    <FormattedMessage
                      id="pineappleProductSectionDescription"
                      values={{
                        mango: (
                          <span className="orange-text">
                            <FormattedMessage id="mango" />
                          </span>
                        ),
                        avocado: (
                          <span className="orange-text">
                            <FormattedMessage id="avocado" />
                          </span>
                        ),
                        passionFruit: (
                          <span className="orange-text">
                            <FormattedMessage id="passionFruit" />
                          </span>
                        ),
                        pineapple: (
                          <span className="orange-text">
                            <FormattedMessage id="pineapple" />
                          </span>
                        ),
                      }}
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/avocado"}>
                      <img
                        src="/assets/img/general/avocado-ill.webp"
                        alt="Avocado"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="pineappleAvocadoTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/avocado"}>
                    <FormattedMessage id="pineappleAvocadoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/mangos"}>
                      <img
                        src="/assets/img/general/mangos-ill.webp"
                        alt="Mango"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="pineappleMangoTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/mangos"}>
                    <FormattedMessage id="pineappleMangoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/passionfruit"}>
                      <img
                        src="/assets/img/general/Passion-Fruit.png"
                        alt="Passion Fruit"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="pineapplePassionFruitTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/passionfruit"}>
                    <FormattedMessage id="pineapplePassionFruitLinkText" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Section */}
      </div>
    );
  } else if (name === "passionfruit") {
    return (
      <div className="apple-system fruit">
        {/* Breadcrumb Section */}
        <div className="breadcrumb-section passionfruit breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12     text-center">
                <div className="breadcrumb-text animated fadeInUp">
                  <h1
                    className="apple-system product-title"
                    style={{ color: "#81072c" }}
                  >
                    <FormattedMessage id="passionfruitBreadcrumbSectionTitle" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Section */}

        {/* Single Product */}
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={true}
                  speed={1000}
                  modules={[Autoplay, Navigation]}
                  className="fruit"
                  dir={isRtl ? "rtl" : "ltr"}
                  key={isRtl}
                >
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/passion-fruit/1.jpg"
                      alt="Passion Fruit 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/passion-fruit/2.jpeg"
                      alt="Passion Fruit 2"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/passion-fruit/3.jpeg"
                      alt="Passion Fruit 3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/assets/img/blog/passion-fruit/4.jpeg"
                      alt="Passion Fruit 4"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-6   ">
                <div className="single-product-content">
                  <h3>
                    <FormattedMessage id="passionfruitSingleProductTitle" />
                  </h3>
                  <p>
                    <FormattedMessage id="passionfruitSingleProductDescription" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Product */}

        {/* Product Section */}
        <div className="product-section mt-150 mb-150 apple-system">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3 className="apple-system">
                    <FormattedMessage
                      id="passionfruitProductSectionTitle"
                      values={{
                        highlight: (text) => (
                          <span className="orange-text">{text}</span>
                        ),
                      }}
                    />
                  </h3>
                  <h5 className="apple-system">
                    <FormattedMessage
                      id="passionfruitProductSectionDescription"
                      values={{
                        mango: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitmango" />
                          </span>
                        ),
                        avocado: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitavocado" />
                          </span>
                        ),
                        passionFruit: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpassionFruit" />
                          </span>
                        ),
                        pineapple: (
                          <span className="orange-text">
                            <FormattedMessage id="passionfruitpineapple" />
                          </span>
                        ),
                      }}
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/avocado"}>
                      <img
                        src="/assets/img/general/avocado-ill.webp"
                        alt="Avocado"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="passionfruitAvocadoTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/avocado"}>
                    <FormattedMessage id="passionfruitAvocadoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/mangos"}>
                      <img
                        src="/assets/img/general/mangos-ill.webp"
                        alt="Mango"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="passionfruitMangoTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/mangos"}>
                    <FormattedMessage id="passionfruitMangoLinkText" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={"/product/pineapple"}>
                      <img
                        src="/assets/img/general/pineapple-ill.webp"
                        alt="Pineapple"
                      />
                    </Link>
                  </div>
                  <h3>
                    <FormattedMessage id="passionfruitPineappleTitle" />
                  </h3>
                  <Link className="cart-btn" to={"/product/pineapple"}>
                    <FormattedMessage id="passionfruitPineappleLinkText" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Section */}
      </div>
    );
  }
};

export default Product;
