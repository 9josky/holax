import React from "react";

function NavContact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
      }}
    >
      <h3 style={{ color: "black" }}>Speak with us 24/7</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="tel: 07035992841" className="f_400" style={{ color: "black" }}>
          0703 599 2841
        </a>
        <a href="tel: 07035992841" className="f_400" style={{ color: "black" }}>
          0703 599 2841
        </a>
      </div>
    </div>
  );
}

export default NavContact;
