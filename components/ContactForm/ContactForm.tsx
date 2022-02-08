import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input/Input";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", alignItems: "flexStart" }}>
        <Input label="Subject" type="text" name="subject" placeholder="Subject test"/>
        <Input label="Name" type="text" name="name" placeholder="John Doe"/>
        <Input label="Email" type="email" name="email" placeholder="JohnDoe@gmail.com"/>
        <Input label="Message" type="textarea" name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
