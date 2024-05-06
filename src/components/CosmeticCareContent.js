import React from "react";
import Content from "./Content";

function CosmeticCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Introduction:</strong> Embrace
      innovation and efficiency with Holax's office glass partitions. Our
      partitions are designed to foster collaboration, creativity, and
      adaptability in today's dynamic work environments in Lagos, Nigeria.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Product Description:</strong>{" "}
      Discover our diverse selection of office glass partitions, including
      frameless partitions, frosted glass partitions, and acoustic partitions.
      Each partition is engineered for optimal performance and aesthetic appeal.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Features:</strong> Our office glass
      partitions boast features such as sound insulation, customizable designs,
      and eco-friendly materials. Create open and flexible workspaces that
      inspire productivity and engagement among your employees.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Benefits:</strong> Experience the
      benefits of our office glass partitions, including improved natural light
      penetration, space division, and acoustic privacy. Enhance the
      functionality and aesthetics of your office while promoting employee
      well-being and satisfaction.
    </span>,
  ];
  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Enhanced Self-Esteem:</strong>{" "}
      Cosmetic care contributes to an individual's sense of self-esteem and
      well-being by addressing grooming and aesthetic preferences.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Relaxation and Comfort:</strong>{" "}
      Massages and range motion activities offer not only physical benefits but
      also contribute to relaxation and emotional comfort.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Personalized Grooming:</strong>{" "}
      Assistance with hairdressing and barbering ensures that individuals can
      maintain a well-groomed appearance according to their preferences.
    </span>,
  ];
  return (
    <div>
      {/* <Content
        header="What is Cosmetic Care?"
        content="Cosmetic care involves specialized services focused on enhancing an individual's appearance and promoting a sense of well-being. It goes beyond basic personal care to include activities that contribute to a person's physical and emotional comfort. Cosmetic care is designed to address grooming and aesthetic needs, recognizing the importance of maintaining a positive self-image."
      /> */}
      <Content
        header=" Create Flexible Workspaces with Office Glass Partitions"
        // content="Endurance Healthcare's cosmetic caregivers provide personalized and attentive support that goes beyond traditional personal care. Our cosmetic care services include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare understands the significance of cosmetic care in contributing to an individual's confidence and self-esteem. Our caregivers approach cosmetic care with sensitivity and expertise, recognizing its positive impact on an individual's overall quality of life." />
      {/* <Content
        header="Benefits of Cosmetic Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's cosmetic care services are tailored to meet the unique needs and preferences of each individual, recognizing the importance of fostering a positive self-image and promoting overall emotional and physical comfort." /> */}
    </div>
  );
}

export default CosmeticCareContent;
