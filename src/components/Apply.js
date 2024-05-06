import React from "react";
import Content from "./Content";

function Apply() {
  return (
    <div className="container">
      <Content
        header="We are hiring!"
        content={
          <div>
            Currently hiring Full-Time & Part-Time Caregivers. Do you want to
            make a difference in the lives of other? Get in touch with us via
            email{" "}
            <a
              href="mailto:ehcsonline1@gmail.com"
              className="f_400"
              style={{ color: "#002664", fontWeight: "bold" }}
            >
              ehcsonline1@gmail.com
            </a>{" "}
            or fill out the form below.
          </div>
        }
        buttn="Apply Now"
        // icon={<i className="your-icon-class"></i>}
        showButton={true}
      />
    </div>
  );
}

export default Apply;
