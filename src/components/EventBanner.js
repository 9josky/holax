import React from "react";
import { useSpring, animated } from "react-spring";

const EventBanner = () => {
  const contentAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 1200 },
  });
  return (
    <section className="new_startup_banner_area">
      <div className="container">
        <div className="row">
          <animated.div
            className="col-lg-6 wow fadeInLeft"
            // style={imageAnimation}
          >
            <div className="new_startup_img">
              {/* <div className="line line_one">
                <img src={require('../../img/new/line_01.png')} alt="" />
              </div>
              <div className="line line_two">
                <img src={require('../../img/new/line_02.png')} alt="" />
              </div>
              <div className="line line_three">
                <img src={require('../../img/new/line_03.png')} alt="" />
              </div> */}
              <img src={require("../img/home-event/railing1.jpg")} alt="" />
            </div>
          </animated.div>
          <animated.div
            className="col-lg-6 d-flex align-items-center"
            style={contentAnimation}
          >
            <div className="new_startup_content">
              <h2
                className="f_700 f_size_40 l_height50 w_color mb_20 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                Ready to see <br />
                <span>Holax's Tech Aluminium</span> in Action?
              </h2>
              <p
                className="f_400 w_color l_height28 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                Expert Glass and Aluminium Services in Lagos, and Allover
                Nigeria
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
