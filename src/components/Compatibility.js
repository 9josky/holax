import React from "react";
import Content from "./Content";

function Compatibility() {
  const guaranteed = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Personalized Matching Process:
      </strong>{" "}
      Our rigorous selection process involves a detailed assessment of not only
      the professional qualifications but also the interpersonal qualities of
      our caregivers. We believe that a compatible connection fosters trust,
      comfort, and a positive caregiving experience.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Client-Centric Approach:</strong>{" "}
      By prioritizing compatibility, we aim to create a warm and supportive
      environment where clients feel understood, respected, and cared for. Our
      dedication to personalizing the caregiver-client match reflects our
      commitment to delivering a level of service that goes beyond mere
      assistance—it’s about building meaningful connections.
    </span>,
  ];
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <Content
        header="Guaranteed Compatibility"
        content="At Endurance Healthcare, we understand the significance of a harmonious caregiver-client relationship. Our commitment to providing exceptional care begins with ensuring compatibility between our caregivers and the individuals they serve. We go beyond mere skills and qualifications; we carefully match caregivers based on personality, values, and individual preferences."
        list={guaranteed.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
    </div>
  );
}

export default Compatibility;
