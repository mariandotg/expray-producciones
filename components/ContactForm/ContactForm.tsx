import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "expray_contact",
        "expray_contact_template",
        form.current!,
        "user_ePzggtbTcyBm3kmmambrY"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div >
      <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
