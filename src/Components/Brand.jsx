import "../css/brand.css";
import Image from "./Image";
import { Link } from "react-router-dom";

export default function Brand(props) {
  return (
    <div className={props.brandContainer}>
      <div className="brand">
        <Image
          imgContainer=""
          class="pfp-av2 brandImage"
          alt="None"
          src="https://res.cloudinary.com/do0fqsmpe/image/upload/v1694253274/Logo-removebg-preview_sufxxs.png"
        />

        <div className="logo-text">{props.title}</div>
      </div>
    </div>
  );
}
