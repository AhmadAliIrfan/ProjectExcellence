import "../css/jumbo.css";
import Button from "./Button";
import CarouselContainer from "./CarouselContainer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Jumbotron(props) {
  return (
    <div className="container">
      <Navbar />
      <div className={props.jumboClass}>
        <div className={props.left}>
          <h1 className="heading">Welcome to Excellence</h1>
          {props.info}
          <div className={props.buttonsClass}>
            <Link to="/services">
              <Button class="button" title="Our Services" />
            </Link>
            <Link to="/contact">
              <Button class="button" title="Contact Us" />
            </Link>
          </div>
        </div>
        <div className={props.right}>
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
}
