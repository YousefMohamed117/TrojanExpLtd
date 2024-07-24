import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FormattedMessage, useIntl } from "react-intl";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    emailjs
      .sendForm(
        "service_23xp7f8",
        "template_a46p7xb",
        e.target,
        "xXkGN2yKBlkhFTgWV"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const intl = useIntl();

  return (
    <div>
    {/* PreLoader */}
    {/* PreLoader Ends */}
    <div className="breadcrumb-section contact breadcrumb-bg fruit">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb-text animated fadeInUp">
              <p>{intl.formatMessage({ id: "breadcrumbSection.support" })}</p>
              <h1>{intl.formatMessage({ id: "breadcrumbSection.contactUs" })}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-from-section mt-150 mb-150 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
              <h2>{intl.formatMessage({ id: "contactFormSection.questionTitle" })}</h2>
            </div>
            <div id="form_status" />
            <div className="contact-form">
              <form onSubmit={sendEmail}>
                <p>
                  <input
                    required
                    type="text"
                    placeholder={intl.formatMessage({ id: "contactForm.namePlaceholder" })}
                    name="from_name"
                    id="name"
                  />
                  <input
                    type="email"
                    required
                    placeholder={intl.formatMessage({ id: "contactForm.emailPlaceholder" })}
                    name="from_email"
                    id="email"
                  />
                </p>
                <p>
                  <input
                    type="tel"
                    required
                    placeholder={intl.formatMessage({ id: "contactForm.phonePlaceholder" })}
                    name="from_phone"
                    id="phone"
                  />
                  <input
                    type="text"
                    required
                    placeholder={intl.formatMessage({ id: "contactForm.subjectPlaceholder" })}
                    name="from_subject"
                    id="subject"
                  />
                </p>
                <p>
                  <textarea
                    required
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder={intl.formatMessage({ id: "contactForm.messagePlaceholder" })}
                  />
                </p>
                <p>
                  <input type="submit" value={intl.formatMessage({ id: "contactForm.submitButton" })} />
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-wrap">
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-map" /> {intl.formatMessage({ id: "contactForm.addressTitle" })}
                </h4>
                <p>{intl.formatMessage({ id: "contactForm.address" })}</p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="far fa-clock" /> {intl.formatMessage({ id: "contactForm.hoursTitle" })}
                </h4>
                <p>{intl.formatMessage({ id: "contactForm.hours" })}</p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-address-book" /> {intl.formatMessage({ id: "contactForm.contactTitle" })}
                </h4>
                <p>
                  {intl.formatMessage({ id: "contactForm.phone" })} <br />
                  {intl.formatMessage({ id: "contactForm.phone.kenya" })} <br />
                  {intl.formatMessage({ id: "contactForm.email" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="find-location blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>
              <i className="fas fa-map-marker-alt" /> {intl.formatMessage({ id: "findLocation.location" })}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="embed-responsive embed-responsive-21by9">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.826251040651!2d36.815550375723284!3d-1.2777358356184014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172cf7782fab%3A0xab9f793eddab1214!2sKijabe%20St%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ssa!4v1721692374754!5m2!1sen!2ssa"
        width={600}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen=""
        className="embed-responsive-item"
      />
    </div>
  </div>
  );
};

export default Contact;
