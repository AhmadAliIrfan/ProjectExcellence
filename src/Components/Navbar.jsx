import React from "react";
import "../css/navbar.css";
import Brand from "./Brand";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = React.useState(false);
  function handleClick() {
    setClick(!click);
  }

  return (
    <nav id="navbar">
      <div id="my-container">
        <Link to="/">
          <Brand title="Project Excellence Services" class="brand" />
        </Link>
        <div id="list-container">
          <i
            onClick={handleClick}
            className={
              click ? "fa-solid fa-xmark menu" : "fa-solid fa-bars menu"
            }
          ></i>
          <ul className={click ? "list active" : "list"}>
            <Link to="/">
              <li className="list-item" onClick={handleClick}>
                Home
              </li>
            </Link>
            <Link to="/about-us">
              <li className="list-item" onClick={handleClick}>
                About Us
              </li>
            </Link>
            <Link to="/services">
              <li className="list-item services" onClick={handleClick}>
                Our Services
                <div className="dropContainer">
                  <ul className="dropdown">
                    <Link to="/services/hr-consultancy">
                      <li className="list-item" onClick={handleClick}>
                        HR Consultancy
                      </li>
                    </Link>
                    <Link to="/services/financial-consultancy">
                      <li className="list-item" onClick={handleClick}>
                        Financial Consultancy
                      </li>
                    </Link>
                    <Link to="/services/staffing">
                      <li className="list-item" onClick={handleClick}>
                        Staffing Solutions
                      </li>
                    </Link>
                    <Link to="/services/janitorial">
                      <li className="list-item" onClick={handleClick}>
                        Janitorial Services
                      </li>
                    </Link>
                    <Link to="/services/general-order">
                      <li className="list-item" onClick={handleClick}>
                        General Order Supplies
                      </li>
                    </Link>
                    <Link to="/services/printing">
                      <li className="list-item" onClick={handleClick}>
                        Printing Servies
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>

            <Link to="/contact">
              <li className="list-item" onClick={handleClick}>
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
