import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles"
import Input from "../Input/Input";
import Form from "../Form/Form";

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
    <S.ContactForm>
      <Form reference={form} onSubmit={sendEmail}>
        <Input label="Subject" type="text" name="subject" placeholder="Subject test"/>
        <Input label="Name" type="text" name="name" placeholder="John Doe"/>
        <Input label="Email" type="email" name="email" placeholder="JohnDoe@gmail.com"/>
        <Input label="Message" type="textarea" name="message" />
        <input type="submit" value="Send" />
      </Form>
    </S.ContactForm>
  );
};

export default ContactForm;
