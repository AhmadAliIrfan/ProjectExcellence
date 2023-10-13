import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import ContactUs from "../ContactUs";
import para from "../../App";

export default function General(props) {
  return (
    <div className="genContainer text-format">
      <div className="titleClass reveal">
        <h1 className="hrHeading">General Order Supplies</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          As your General Order Suppliers, we provide a one-stop solution for
          your business's essential needs. From office supplies and equipment to
          stationery and consumables, we ensure that you have easy access to
          high-quality products that keep your operations running smoothly. Our
          streamlined procurement process simplifies ordering and ensures timely
          delivery. Whether you're restocking supplies or outfitting a new
          workspace, our comprehensive range of products saves you time and
          effort.
        </div>
        <Image
          src="https://terraquestint.com/wp-content/uploads/2016/01/gos2-960x500.jpg"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">Our Janitorial Services</h2>
      <p className="subHeading reveal">As General Order Suppliers we provide</p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">
            Close Camera Network Solutions
          </li>
          <li className="hrBenefitsListItems">
            Security Equipment and Security Gate
          </li>
          <li className="hrBenefitsListItems">Alarm Systems/ AC/ Generators</li>
          <li className="hrBenefitsListItems">
            Computers, Laptops, Printers, Scanners
          </li>
          <li className="hrBenefitsListItems">Toiletries</li>
          <li className="hrBenefitsListItems">Complete Office Stationary</li>
          <li className="hrBenefitsListItems">All General Merchandise</li>
          <li className="hrBenefitsListItems">All Office Furniture</li>
        </ul>
      </div>
      <ContactUs
        contactContainer="contactContainer color-2"
        headingClass="conHeading"
        para={para}
        paraClass="para"
      />
    </div>
  );
}
