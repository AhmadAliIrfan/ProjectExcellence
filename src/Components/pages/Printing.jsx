import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import para from "../../App";
import ContactUs from "../ContactUs";

export default function Printing() {
  return (
    <div className="genContainer text-format">
      {" "}
      <div className="titleClass reveal">
        <h1 className="hrHeading">Printing Services</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          Our Printing Services cater to your branding and communication needs.
          From business cards and brochures to banners and promotional
          materials, we offer a wide range of printing solutions that enhance
          your brand's visibility. Our state-of-the-art printing technology
          ensures vibrant colors, sharp details, and consistent quality across
          all materials. Whether you need to impress clients with polished
          marketing collateral or maintain professional documentation, our
          printing services are designed to exceed your expectations
        </div>
        <Image
          src="https://epihab.org/wp-content/uploads/2021/07/Printing.jpg"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">Our Printing Services</h2>
      <p className="subHeading reveal">In Printing Services we provide:</p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">
            Printing of complete office stationary
          </li>
          <li className="hrBenefitsListItems">
            Printing of Packing Material for Products
          </li>
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
