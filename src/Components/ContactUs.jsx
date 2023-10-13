import "../css/contact.css";
import Form from "./Form";
import emailjs from "@emailjs/browser";
import React from "react";
export default function ContactUs(props) {
  const [state, setState] = React.useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  function onSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hbbv3pv",
        "template_3w3x5ea",
        e.target,
        "TJYPxipvutfMzTqBv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setState({
            user_name: "",
            user_email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id={props.id} className={props.contactContainer}>
      <h1 className={props.headingClass}>Get in Touch</h1>
      <p className={props.paraClass}>{props.para}</p>
      <Form
        formContent="formContent"
        formContainer="formContainer"
        name="Name:"
        email="Email:"
        message="Message:"
        onSubmit={onSubmit}
        state={state}
        setState={setState}
      />
    </div>
  );
}
