import "../css/image.css";

export default function Image(props) {
  return (
    <div className={props.imgContainer}>
      <img className={props.class} src={props.src} alt={props.alt} />
    </div>
  );
}
