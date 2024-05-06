import React from "react";
import Content from "./Content";

function GettingStarted() {
  return (
    <div
      className="container getting_started_background "
      style={{
        marginBottom: "100px",
        marginTop: "15px",
        padding: "10px 10px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#002664",
        position: "relative",
        height: "500px",
      }}
    >
      <Content
        header="How to Get Started"
        content={
          <>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Getting started on your path to exceptional healthcare is simple
              with Endurance. Our dedicated team is here to guide you through
              every step, ensuring a seamless and compassionate experience.
              Begin by reaching out to us – whether you're exploring
              personalized caregiving, seeking support for a loved one, or
              simply wanting to learn more about our comprehensive services.
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Your journey to exceptional healthcare begins here. Contact us
              today to take the first step toward a brighter and more
              comfortable future with Endurance Healthcare Services.
            </p>
          </>
        }
        textColor="white"
      />
    </div>
  );
}

export default GettingStarted;
