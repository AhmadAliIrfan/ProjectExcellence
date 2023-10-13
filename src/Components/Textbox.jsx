import "../css/text.css";

export default function Textbox(props) {
  return (
    <div className={props.TboxContainer}>
      {props.required ? (
        <input
          type={props.type}
          accept={props.accept}
          alt={props.alt}
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          checked={props.checked}
          className={props.class}
          disabled={props.disabled}
          form={props.formId}
          formAction={props.formAction}
          formNoValidate={props.formNoValidate}
          formTarget={props.formTarget}
          max={props.max}
          maxLength={props.maxLength}
          min={props.min}
          minLength={props.minLength}
          multiple={props.multiple}
          name={props.name}
          pattern={props.pattern}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          required
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onClick={props.onClick}
        />
      ) : (
        <input
          type={props.type}
          accept={props.accept}
          alt={props.alt}
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          checked={props.checked}
          className={props.class}
          disabled={props.disabled}
          form={props.formId}
          formAction={props.formAction}
          formNoValidate={props.formNoValidate}
          formTarget={props.formTarget}
          max={props.max}
          maxLength={props.maxLength}
          min={props.min}
          minLength={props.minLength}
          multiple={props.multiple}
          name={props.name}
          pattern={props.pattern}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onClick={props.onClick}
        />
      )}
    </div>
  );
}
