import React from "react";
import Content from "./Content";

function WelcomeContent() {
  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <Content
        header="Welcome to Holax's Tech Aluminium"
        content={
          <>
            <p style={{ color: "black", fontSize: "18px" }}>
              At Holax's Tech Aluminium, we are committed to providing
              top-quality glass and aluminium solutions for our clients in Lagos
              and across Nigeria. With years of experience and a team of
              experts, we deliver exceptional results that meet our clients'
              needs.
            </p>
            {/* <p style={{ color: "black", fontSize: "18px" }}>
              Endurance caregivers are specially trained to provide services
              both at home and at healthcare facilities. Most of our clients
              love to remain in their homes and communities because it makes
              them happier, healthier, and live longer; that is why at Endurance
              we do everything humanly possible to take high quality and
              compassionate healthcare services to them at home unless the
              condition requires hospitalization or any other emergency services
              and we would be by our clients’ side throughout the travail.
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              Our caregivers are verified through nurse aide registry and
              misconduct registry to make sure we are sending the best in the
              industry to our clients. They are pre-screened and past employers
              up to 5 years prior are checked for reference purposes. All our
              caregivers must be willing to go beyond and above for our clients
              before they are hired.
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              The leadership team of Endurance are seasoned caregivers who
              understand the needs of clients they serve. We have trained our
              staff to always show compassion regardless of the situation they
              find themselves in with the clients served. We don’t just send our
              caregivers out; we make regular visits to clients served not only
              to get to know them, but also to ask if they have concerns and
              most of the time our clients always have good things to say about
              our caregivers. We can’t wait to serve you in the comfort zone of
              your home. Give us a call today for your home care services to
              experience our impeccable and compassionate healthcare services.
            </p> */}
          </>
        }
        // buttn="Our Story"
        // link="/story"
        // icon={<i className="ti-arrow-right"></i>}
        // showButton={true}
      />
    </div>
  );
}

export default WelcomeContent;
