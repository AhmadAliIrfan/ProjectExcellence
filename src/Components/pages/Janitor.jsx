import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import ContactUs from "../ContactUs";
import para from "../../App";

export default function Janitor(props) {
  return (
    <div className="genContainer text-format">
      <div className="titleClass reveal">
        <h1 className="hrHeading">Janitorial Services</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          Our Janitorial Hygiene Services are designed to ensure that your
          business maintains a clean, healthy, and welcoming environment. Our
          trained professionals utilize effective cleaning techniques to
          sanitize and disinfect various spaces, including offices, commercial
          buildings, and healthcare facilities. By partnering with us, you can
          create a safer and more comfortable atmosphere for your employees and
          clients. Our janitorial services encompass routine cleaning, deep
          cleaning, and specialized cleaning solutions tailored to your specific
          needs.
        </div>
        <Image
          src="https://thecleanstart.com/wp-content/uploads/2022/03/Professional-Janitorial-Services.jpg"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">Our Janitorial Services</h2>
      <p className="subHeading reveal">
        As your janitorial service providers we offer
      </p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">Dedicated Uniformed Janitors</li>
          <li className="hrBenefitsListItems">
            Monthly Rations of Cleaning Supplies
          </li>
          <li className="hrBenefitsListItems">
            Monthly Comprehensive Cleaning & Washing
          </li>
          <li className="hrBenefitsListItems">
            Polishing of brass equipment and windows
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
