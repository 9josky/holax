import React from "react";
// import Reveal from "react-reveal/Reveal";
import { useSpring, animated } from "react-spring";

function HomeServiceItem({ Title, TitleP, tClass, sClass }) {
  const titleSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1300 },
  });
  const textSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1600 },
  });

  return (
    <div className={`${sClass}`}>
      <animated.h2
        style={titleSpring}
        className={`f_p f_size_30 l_height50 f_600 ${tClass}`}
      >
        {Title}
      </animated.h2>
      <animated.p style={textSpring} className="f_400 f_size_16 mb-0">
        {TitleP}
      </animated.p>
    </div>
  );
}

export default HomeServiceItem;
