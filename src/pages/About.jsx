import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FormattedMessage, useIntl } from "react-intl";

const About = () => {
  const { locale } = useIntl();
  const isRtl = locale === 'ar'; // Adjust based on your locale logic
  return (
    <div>
      <>
        <div className="breadcrumb-section about breadcrumb-bg">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb-text animated fadeInUp">
                  <p>
                    <FormattedMessage id="breadcrumb.productsFresh" />
                  </p>
                  <h1>
                    <FormattedMessage id="breadcrumb.whoWeAre" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="abt-section mb-150 mt-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="abt-text">
                  <p className="top-sub font-weight-bold">
                    <FormattedMessage id="abtSection.since2010" />
                  </p>
                  <h2>
                    <FormattedMessage
                      id="abtSection.intro"
                      values={{
                        company: (
                          <span className="orange-text">TrojanExp.Ltd</span>
                        ),
                      }}
                    />
                  </h2>
                  <p style={{ fontSize: "18px" }}>
                    <FormattedMessage
                      id="abtSection.description"
                      values={{
                        company: (
                          <span className="orange-text">TrojanExp.Ltd</span>
                        ),
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Swiper
                 dir={isRtl ? 'rtl' : 'ltr'}
                 key={isRtl}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  speed={300}
                  modules={[Navigation,Autoplay]}
                  className="fruit"
                >
                  <SwiperSlide>
                    <img src="/assets/img/blog/1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/pineapple15.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/5.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/6.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/7.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/8.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado20.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado10.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/avocado/avocado29.jpeg" alt="" />
                  </SwiperSlide>
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
                    <img src="/assets/img/blog/passion-fruit/1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/passion-fruit/2.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/passion-fruit/3.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/pineapple/pineapple2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/pineapple/pineapple7.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/blog/pineapple/pineapple8.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <video muted controls src="/assets/img/blog/9.mp4" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <video muted controls src="/assets/img/blog/11.mp4" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <video muted controls src="/assets/img/blog/12.mp4" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <video muted src="/assets/img/blog/13.mp4" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="feature-bg">
          <div className="container">
            <div className="row ">
              <div className="col-lg-7">
                <div className="featured-text">
                  <h2 className="pb-3">
                    <FormattedMessage
                      id="featureSection.whyChoose"
                      values={{
                        company: (
                          <span className="orange-text">TrojanExp.Ltd</span>
                        ),
                      }}
                    />
                  </h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                      <div className="list-box flex-row-reverse d-flex">
                        <div className="list-icon">
                          <i className="fas fa-shipping-fast" />
                        </div>
                        <div className="content">
                          <h3>
                            <FormattedMessage id="featureSection.delivery" />
                          </h3>
                          <p>
                            <FormattedMessage id="featureSection.deliveryDesc" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                      <div className="list-box flex-row-reverse d-flex">
                        <div className="list-icon">
                          <i className="fas fa-money-bill-alt" />
                        </div>
                        <div className="content">
                          <h3>
                            <FormattedMessage id="featureSection.competitivePrices" />
                          </h3>
                          <p>
                            <FormattedMessage id="featureSection.competitivePricesDesc" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                      <div className="list-box flex-row-reverse d-flex">
                        <div className="list-icon">
                          <i className="fas fa-seedling" />
                        </div>
                        <div className="content">
                          <h3>
                            <FormattedMessage id="featureSection.productVariety" />
                          </h3>
                          <p>
                            <FormattedMessage id="featureSection.productVarietyDesc" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="list-box flex-row-reverse d-flex">
                        <div className="list-icon">
                          <i className="fas fa-user" />
                        </div>
                        <div className="content">
                          <h3>
                            <FormattedMessage id="featureSection.excellentService" />
                          </h3>
                          <p>
                            <FormattedMessage id="featureSection.excellentServiceDesc" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 why-us-bg">
                <img src="assets/img/feature-bg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="abt-section mb-150 mt-150">
          <div className="container">
            <div className="row">
                <Swiper
                 dir={isRtl ? 'rtl' : 'ltr'}
                 key={isRtl}
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  breakpoints={{
                    767:{
                      slidesPerView:2
                    }
                  }}
                  speed={300}
                  modules={[Navigation,Autoplay]}
                  className="certificates"
                >
                  <SwiperSlide>
                    <img src="/assets/img/certificates/1.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/2.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/5.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/6.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/7.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/8.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/3.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/4.jpeg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/certificates/9.jpeg" alt="" />
                  </SwiperSlide>

                </Swiper>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
