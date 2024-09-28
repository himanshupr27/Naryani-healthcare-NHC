import React from "react";

function About() {
  return (
    <><section className="about_section">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Hospital</span>
              </h2>
            </div>
            <p>
              has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
            </p>
            <a href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section></>
  );
}

export default About;
