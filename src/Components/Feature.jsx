import Image from "./Image";
import "../css/image.css";
import { Link } from "react-router-dom";

export default function Feature(props) {
  return (
    <div className={props.featureContainer}>
      <Link to={props.links}>
        <Image
          class="full curve-10 image"
          imageContainer="imgCon"
          src={props.src}
          alt="None"
          links={props.links}
        />
      </Link>
      <div className={props.textClass}>
        <Link to={props.links}>
          <h2 className={props.headClass}>{props.headText}</h2>
        </Link>
        <p className={props.paraClass}>{props.para}</p>
      </div>
    </div>
  );
}
