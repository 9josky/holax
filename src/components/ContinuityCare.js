import React from "react";
import Content from "./Content";

function ContinuityCare() {
  const continuity = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Consistent Caregiver Assignments:
      </strong>{" "}
      We strive to maintain continuity by assigning the same caregiver(s) to a
      client whenever possible. This approach allows for the development of a
      strong rapport, a deep understanding of individual needs, and a sense of
      familiarity that promotes emotional well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Seamless Transitions:</strong> In
      situations where changes may occur, we ensure seamless transitions by
      facilitating thorough communication and introductions. Our goal is to
      maintain a smooth flow of care, minimizing disruptions and ensuring that
      the transition is as comfortable as possible for both the client and
      caregiver.
    </span>,
  ];
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <Content
        header="Continuity of Care"
        content="At Endurance Healthcare, we recognize the importance of continuity in caregiving. We prioritize the establishment of lasting relationships between our caregivers and clients, understanding that consistent care enhances overall well-being and contributes to a sense of security."
        list={continuity.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
    </div>
  );
}

export default ContinuityCare;
