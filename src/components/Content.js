import React, { useEffect, useState } from "react";
import FallingTitle from "./FallingTitle";

function Content({
  header,
  content,
  buttn,
  link,
  icon,
  list,
  showButton,
  innerTitle,
  orderedList,
  textColor,
}) {
  const defaultTextColor = "black";
  return (
    <div style={{ paddingTop: "10px" }} className="container">
      <h1 style={{ textAlign: "center", color: textColor || defaultTextColor }}>
        {header}
      </h1>
      <p style={{ color: textColor || defaultTextColor, fontSize: "18px" }}>
        {content}
      </p>
      <div
        // className="falling-title-container"
        style={{
          // height: "10px",
          display: "flex",
          alignItems: "center",
          margin: "15px 0",
        }}
      >
        {innerTitle}
      </div>
      <ul
        style={{
          color: textColor || defaultTextColor,
          textTransform: "capitalize",
          fontSize: "18px",
        }}
      >
        {list}
      </ul>
      <ol
        style={{
          color: textColor || defaultTextColor,
          textTransform: "capitalize",
          fontSize: "18px",
        }}
      >
        {orderedList}
      </ol>
      {showButton && (
        <div
          className="action_btn d-flex mt_10 wow fadeInRight"
          data-wow-delay="0.6s"
          style={{ justifyContent: "center" }}
        >
          <a href={link} className="btn_hover app_btn">
            {buttn}
            {icon}
          </a>
        </div>
      )}
    </div>
  );
}

// function FallingTitle({ titles = [], currentTitleIndex }) {
//   return (
//     <div className="falling-title">
//       {titles &&
//         titles.map((title, index) => (
//           <div
//             key={index}
//             className={`title ${index === currentTitleIndex ? "visible" : ""}`}
//           >
//             {Array.isArray(title) && // Check if title is an array
//               title.map((word, i) => <span key={i}>{word}</span>)}
//           </div>
//         ))}
//     </div>
//   );
// }

export default Content;
