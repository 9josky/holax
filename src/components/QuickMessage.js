import React, { useState } from "react";

function QuickMessage({ inquiry }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission goes here
  const submitForm = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div
      className="container bg_color col-lg-9"
      style={{
        border: "#002664 2px solid",
        padding: "15px",
        borderRadius: "10px",
        margin: "50px auto",
        // backgroundColor: "black",
      }}
    >
      <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
        {inquiry}
      </h2>
      <form
        action="https://formspree.io/f/nijoskysadeeq@gmail.com"
        method="POST"
        className="contact_form_box"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group text_box">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group text_box">
              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group text_box">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group text_box">
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message . . ."
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn_three"
          style={{ backgroundColor: "#353c44" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default QuickMessage;
