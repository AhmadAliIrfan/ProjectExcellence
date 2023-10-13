export default function TextArea(props) {
  return (
    <div className={props.TareaContainer}>
      {props.required ? (
        <textarea
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          cols={props.cols}
          form={props.formID}
          maxLength={props.maxLength}
          name={props.name}
          placeholder={props.placeholder}
          required
          rows={props.rows}
          wrap={props.wrap}
          className={props.class}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onClick={props.onClick}
          value={props.value}
        >
          {props.text}
        </textarea>
      ) : (
        <textarea
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          cols={props.cols}
          form={props.formID}
          maxLength={props.maxLength}
          name={props.name}
          placeholder={props.placeholder}
          rows={props.rows}
          wrap={props.wrap}
          className={props.class}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onClick={props.onClick}
          value={props.value}
        >
          {props.text}
        </textarea>
      )}
    </div>
  );
}
