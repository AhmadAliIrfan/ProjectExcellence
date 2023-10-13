import Image from "./Image";
import "../css/carousel.css";

export default function CarouselCard(props) {
  return (
    <div>
      <div className="card-container">
        <Image class="scale" src={props.image} alt="None" />
      </div>
      <div className={props.cardText}>
        <h1 className="title">{props.title}</h1>
        <p className="body-text">{props.body}</p>
      </div>
    </div>
  );
}
