import React from "react";

const AboutMe = ({ heading, message, link, imgSize }) => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={link}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
          </div>
          <div className={`col-lg-7`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
