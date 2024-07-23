import React from "react";
import { Link } from "react-router-dom"; // Optional, if using React Router

const NotFound = () => {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>404 - Not Found</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-height-section error-section">
        <div className="full-height-tablecell">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="error-text">
                  <i className="far fa-sad-cry"></i>
                  <h1>Oops! Not Found.</h1>
                  <p>The page you requested for is not found.</p>
                  <Link to="/" className="boxed-btn">
                    Back to Home
                  </Link>{" "}
                  {/* Use Link for internal navigation */}
                  {/* Alternatively, use a regular anchor tag if not using React Router */}
                  {/* <a href="index.html" className="boxed-btn">Back to Home</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
