import Textbox from "./Textbox";
import TextArea from "./TextArea";
import "../css/form.css";
import "../css/button.css";
import Button from "./Button";
import React from "react";

export default function Form(props) {
  function detectChange(e) {
    const [name, value] = [e.target.name, e.target.value];

    props.setState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <form
      onSubmit={props.onSubmit}
      action={props.action}
      id={props.form}
      className={props.formContainer}
      autoComplete={props.autoComplete}
      encType={props.encType}
      method={props.method}
      name={props.name}
      noValidate={props.noValidate}
      rel={props.rel}
      target={props.target}
    >
      <div className={props.formContent}>
        <div className={props.textClass}>{props.name}</div>
        <Textbox
          class="textbox"
          type="text"
          name="user_name"
          value={props.state.from_name}
          onChange={detectChange}
          placeholder="Name"
          required={true}
        />
        <div className={props.textClass}>{props.email}</div>
        <Textbox
          class="textbox"
          type="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          name="user_email"
          value={props.state.user_email}
          onChange={detectChange}
          placeholder="Email"
          required={true}
        />
        <div className={props.textClass}>{props.message}</div>

        <TextArea
          class="textarea"
          placeholder="Message"
          name="message"
          value={props.state.message}
          onChange={detectChange}
          required={true}
        />
      </div>
      <Button class="formButton" title="Submit" />
    </form>
  );
}
