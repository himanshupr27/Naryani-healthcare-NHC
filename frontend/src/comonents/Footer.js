import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (<>
    <section className="info_section ">
    <div className="container">
      <div className="info_top">
        <div className="info_logo">
          <a href="/">
            <img src="favicon.ico" alt=""/>
          </a>
        </div>
        <div className="info_form">
          <form action="">
            <input type="email" placeholder="Your email"/>
            <button>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="info_bottom layout_padding2">
        <div className="row info_main_row">
          <div className="col-md-6 col-lg-3">
            <h5>
              Address
            </h5>
            <div className="info_contact">
              <a href="/">
              <i class="bi bi-geo-alt-fill"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="/">
              <i class="bi bi-telephone-fill"></i>
                <span>
                  Call +01 123456789
                </span>
              </a>
              <a href="/">
              <i class="bi bi-envelope-fill"></i>
                <span>
                  sample@gmail.com
                </span>
              </a>
            </div>
            <div className="social_box">
              <a href="/">
              <i class="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a href="/">
              <i class="bi bi-twitter" aria-hidden="true"></i>
              </a>
              <a href="/">
              <i class="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a href="/">
              <i class="bi bi-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_links">
              <h5>
                Useful link
              </h5>
              <div className="info_links_menu">
                <Link className="active" to="/">
                  Home
                </Link>
                <Link to="/about">
                  About
                </Link>
                <Link to="/services">
                  Treatment
                </Link>
                <Link to="/doctor">
                  Doctors
                </Link>
                <Link to="/testimonial">
                  Testimonial
                </Link>
                <Link to="/contact">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                LATEST POSTS
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post1.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post2.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                News
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post3.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post4.png" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <footer class="footer_section">
    <div class="container">
      <p>
        &copy; 2024 All Rights Reserved By Himanshu Prasad
      </p>
    </div>
  </footer>
  </>
  )
}

export default Footer
