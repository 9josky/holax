import React from "react";
import { useSpring, animated } from "react-spring";

function HRServiceItems({
  HRtitle,
  HRdescription,
  Hicon,
  rclass,
  // iclass,
  // image,
}) {
  console.log("Hicon:", Hicon);

  // Define the spring animation
  const revealAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <div
      className="container care_mobile"
      style={{
        marginBottom: "18px",
        marginTop: "18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Use the animated.div component for animated elements */}
      <animated.div style={revealAnimation}>
        <div className={`p_service_item ${rclass}`}>
          <div>
            <img
              src={require(`../img/${Hicon}`)}
              alt="Image by freepik"
              width="60px"
              height="60px"
            />
          </div>
          <h5 className="f_600 f_p t_color3">{HRtitle}</h5>
          <p className="f_400" style={{ color: "black", fontSize: "18px" }}>
            {HRdescription}
          </p>
        </div>
      </animated.div>
      {/* <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require(`../img/${image}`)}
          alt="image by freepik"
          // className="rounded-image-copy"
          style={{ width: "650px", height: "500px", borderRadius: "10px" }}
        />
      </div> */}
    </div>
  );
}

export default HRServiceItems;
