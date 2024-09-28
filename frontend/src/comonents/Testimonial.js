import React,{useState} from 'react'

function Testimonial() {
  const [value,setValue]=useState(1);
  function changeClassup(){
   
    const va=(value+1) % 3;
    setValue(va);
  }
  function changeClassdown(){
    if(value%3===1){
      setValue(0);
    }
    if(value%3===2){
      setValue(1);
    }
    if(value%3===0){
      setValue(2);
    }
    console.log(value);
  }

  return (
    <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          <span>Testimonial</span>
        </h2>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className={value===1 ? "carousel-item active" : "carousel-item"}>
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Morijorch
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i class="bi bi-twitch"></i>
              </div>
              <p>
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
          <div className={value===2 ? "carousel-item active" : "carousel-item"}>
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Rochak
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i class="bi bi-twitch"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
          <div className={value===0 ? "carousel-item active" : "carousel-item"}>
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Brad Johns
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i class="bi bi-twitch"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <button className="carousel-control-prev" onClick={changeClassdown}>
          <i class="bi bi-caret-left-fill"></i>
            {/* <span className="sr-only">Previous</span> */}
          </button>
          <button className="carousel-control-next" onClick={changeClassup}>
            <i class="bi bi-caret-right-fill"></i>
            {/* <span className="sr-only">Next</span> */}
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial
