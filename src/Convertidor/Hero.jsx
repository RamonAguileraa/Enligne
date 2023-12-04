import React from "react";
import img from "./imagenesHero/5.jpg";
import "./style.css";
const heroStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.30)",
  // Resto de estilos para el hero...
};

function Hero() {
  return (
    <section className="hero-block" style={heroStyle}>
      <div className="overflow-hidden ">
        <div className="container-fluid col-xxl-8 ">
          <div className="row flex-lg-nowrap align-items-center g-5">
            <div className="order-lg-1 w-100">
              <img
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
                }}
                src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768"
                className="d-block mx-lg-auto img-fluid"
                alt=""
                loading="lazy"
                srcSet={img}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="760"
                height="768"
              />
            </div>
            <div className="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4">
              <div className="lc-block mb-4">
                <div editable="rich">
                  <h1 className="fw-bold display-3 text-light">
                    Convert Currencies Instantly with €nligne
                  </h1>
                </div>
              </div>

              <div className="lc-block mb-6">
                <a
                  className="btn btn-warning px-4 me-md-2 btn-lg my-4"
                  href="/Main"
                  role="button"
                >
                  Start Converting
                </a>
              </div>
              <div className="lc-block mb-5">
                <div editable="rich">
                  <p className="rfs-8  text-light   mt-4">
                    Our tool allows you to calculate exchange rates instantly,
                    facilitating your international transactions. No
                    complications or hidden fees!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
