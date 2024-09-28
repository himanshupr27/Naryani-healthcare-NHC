import React from 'react';
// import OwlCarousel from 'react-owl-carousel'; 
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  
// // import './owl.css';  

function doctors() {
  
  return (
    <section className="team_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>Doctors</span>
        </h2>
      </div>
      <div className="carousel-wrap ">
        <div className="owl-carousel team_carousel">
        {/* <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} > */}
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="images/team1.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Hennry
                </h5>
                <h6>
                <b> MBBS</b>
                </h6>
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
            </div>
          </div>
          <div className="item mx-3">
            <div className="box">
              <div className="img-box">
                <img src="images/team2.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Jenni
                </h5>
                <h6>
                 <b> MBBS</b>
                </h6>
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
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="images/team3.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Morco
                </h5>
                <h6>
                <b>MBBS</b>
                </h6>
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
            </div>
          </div>
        {/* </OwlCarousel> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default doctors
