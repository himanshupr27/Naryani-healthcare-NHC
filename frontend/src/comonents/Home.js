import React from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Carousel from "./Carousel";
import Bookappoint from "./Bookappoint"
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors"
import Testimonial from "./Testimonial";
import Contacts from "./Contacts";
import Footer from "./Footer";


function Home() {
  return (
    <>
      <NavBar />
      <Welcome/>
      <Carousel/>
      <Bookappoint/>
      <About/>
      <Services/>
      <Doctors/>
      <Testimonial/>
      <Contacts/>
      <Footer/>
      </>
  );
}
export default Home;
