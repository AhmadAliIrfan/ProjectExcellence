import "../css/button.css";

export default function Button(props) {
  return (
    <div className={props.buttonContainer}>
      {props.disabled ? (
        <button
          id={props.id}
          className={props.class}
          onClick={props.onClick}
          autoFocus={props.autoFocus}
          disabled
          form={props.formId}
          formAction={props.formAction}
          formEncType={props.formEncType}
          formMethod={props.formMethod}
          formNoValidate={props.formNoValidate}
          formTarget={props.formTarget}
          name={props.name}
          type={props.type}
          value={props.value}
        >
          {props.title}
        </button>
      ) : (
        <button
          id={props.id}
          className={props.class}
          onClick={props.onClick}
          autoFocus={props.autoFocus}
          form={props.formId}
          formAction={props.formAction}
          formEncType={props.formEncType}
          formMethod={props.formMethod}
          formNoValidate={props.formNoValidate}
          formTarget={props.formTarget}
          name={props.name}
          type={props.type}
          value={props.value}
        >
          {props.title}
        </button>
      )}
    </div>
  );
}
