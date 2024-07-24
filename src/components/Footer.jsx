import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      {/* footer */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">
                  <FormattedMessage id="footer.about.title" />
                </h2>
                <p>
                  <FormattedMessage id="footer.about.text" values={{
                    company: <span className="orange-text">TrojanExp.Ltd</span>
                  }} />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">
                  <FormattedMessage id="footer.contact.title" />
                </h2>
                <ul>
                  <li><FormattedMessage id="footer.contact.email" /></li>
                  <li><FormattedMessage id="footer.contact.phone1" /></li>
                  <li><FormattedMessage id="footer.contact.phone2" /></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">
                  <FormattedMessage id="footer.pages.title" />
                </h2>
                <ul>
                  <li>
                    <Link to="/"><FormattedMessage id="footer.pages.home" /></Link>
                  </li>
                  <li>
                    <Link to="/about"><FormattedMessage id="footer.pages.about" /></Link>
                  </li>
                  <li>
                    <a href="/#products"><FormattedMessage id="footer.pages.products" /></a>
                  </li>
                  <li>
                    <Link to="/contact"><FormattedMessage id="footer.pages.contact" /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end footer */}
    </div>
  );
};
