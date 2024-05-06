import React from "react";
import { useSpring, animated } from "react-spring";

function Breadcrumb({
  Ptitle,
  Pdescription,
  // breadcrumbClass,
  backgroundColor,
}) {
  // Define the spring animation
  const fadeInUp = useSpring({
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
  });

  return (
    <section
      style={{
        backgroundColor: "#353c44",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="breadcrumb_content text-center">
          {/* Apply the spring animation to the animated.div */}
          <animated.h1
            className="f_p f_700 f_size_50 w_color l_height50 mb_20"
            style={fadeInUp}
          >
            {Ptitle}
          </animated.h1>
          <p className="f_400 w_color f_size_16 l_height26">{Pdescription}</p>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
