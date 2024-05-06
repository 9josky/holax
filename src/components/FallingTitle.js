import React, { useState, useEffect } from "react";

const titleList = [
  "Aluminium Window",
  "Hand Railing",
  "Office Pertition",
  "Shower Cubicle",
];

const FallingTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Adjust the number based on the number of items
    }, 3000); // 3 seconds delay for each element

    return () => clearInterval(interval);
  }, []);

  return (
    // <ul className="list">
    //   {titleList.map((title, index) => (
    //     <li
    //       key={index}
    //       className={index === currentTitleIndex ? "visible" : ""}
    //       style={{
    //         transition: "opacity 1s ease-in-out",
    //         fontSize: "24px",
    //         color: "#002664",
    //       }}
    //     >
    //       {title}
    //     </li>
    //   ))}
    // </ul>
    // <div id="scroll-container">
    //   <div id="scroll-text">
    //     <div className="text" style={{ fontSize: "30px", color: "#002664" }}>
    //       Personal Care
    //     </div>
    //     <div className="text" style={{ fontSize: "30px", color: "#002664" }}>
    //       Respite Care
    //     </div>
    //     <div className="text" style={{ fontSize: "30px", color: "#002664" }}>
    //       Cosmetic Care
    //     </div>
    //     <div className="text" style={{ fontSize: "30px", color: "#002664" }}>
    //       Other services
    //     </div>
    //   </div>
    // </div>
    // <div id="scroll-cont">
    <div className="scroll-tex">
      <div className="text">
        <span>Aluminium Window</span>
        <span style={{ paddingLeft: "50px" }}>Hand Railing</span>
        <span style={{ paddingLeft: "50px" }}>Office Pertition</span>
        <span style={{ paddingLeft: "50px" }}>Shower Cubicle</span>
        {/* <span style={{ paddingLeft: "50px" }}>Other services</span> */}
      </div>
    </div>
  );
};

export default FallingTitle;
