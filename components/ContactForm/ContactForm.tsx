import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";
import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";

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
    <>
      <S.ContactForm>
        <S.Title>Formulario de contacto</S.Title>
        <S.Description>¿Tenés alguna duda? Mandanos un Email:</S.Description>
        <Form reference={form} onSubmit={sendEmail}>
          <Input
            label="Asunto"
            type="text"
            name="subject"
            placeholder="Asunto"
          />
          <Input
            label="Nombre"
            type="text"
            name="name"
            placeholder="Escribe aquí tu nombre"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Escribe aquí tu email para poder contactarte"
          />
          <Input label="Mensaje" type="textarea" name="message" placeholder="Escribe aquí tu mensaje" />
          <Button text="Send" />
        </Form>
      </S.ContactForm>
    </>
  );
};

export default ContactForm;
