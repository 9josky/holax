import React from "react";
import AboutUsInfoComp from "./AboutUsInfoComp";
import { useSpring, animated } from "react-spring";

function AboutUsInfo() {
  const fadeInUp = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { tension: 170, friction: 26 },
  });

  return (
    <section>
      <div className="container">
        <div className="row mb_30">
          <div className="col-lg-4 col-sm-6">
            <animated.div style={fadeInUp}>
              <AboutUsInfoComp
                // iShap="icon_shape1.png"
                Sicon="ti-panel"
                text="Our Vision"
                description="Providing a compassionate healthcare service that surpasses the expectations of our clients in other to help them live the best of their lives. Nobody can live forever, but Endurance gives care that makes clients live the best of their lives."
                // btn="Read More"
                // bicon="arrow_right"
              />
            </animated.div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <animated.div style={{ ...fadeInUp, delay: 200 }}>
              <AboutUsInfoComp
                // iShap="icon_shape2.png"
                Sicon="ti-layout-grid2"
                text="Our Mission"
                description="We are committed to providing the best possible caregiving experience that is tailored after the needs of clients served using highly trained and verified caregivers which will make it possible for clients served to lead dignified and independent lifestyles.
                "
                // btn="Read More"
                // bicon="arrow_right"
              />
            </animated.div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <animated.div style={{ ...fadeInUp, delay: 400 }}>
              <AboutUsInfoComp
                // iShap="icon_shape3.png"
                Sicon="ti-gallery"
                text="Our Principles"
                description="The best"
                // btn="Read More"
                // bicon="arrow_right"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsInfo;
