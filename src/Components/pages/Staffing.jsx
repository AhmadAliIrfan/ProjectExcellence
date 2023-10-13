import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import para from "../../App";
import ContactUs from "../ContactUs";

export default function Staffing(props) {
  return (
    <div className="genContainer text-format">
      {" "}
      <div className="titleClass reveal">
        <h1 className="hrHeading">HR Consultancy Expertise</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          Our Staffing Solutions Plan offers a strategic approach to workforce
          management. We understand that finding the right talent can be
          challenging, which is why we specialize in matching skilled candidates
          with your organization's unique requirements. Our experienced team
          utilizes advanced recruitment techniques to identify candidates who
          not only possess the necessary skills but also align with your company
          culture. By outsourcing your recruitment to us, you can focus on your
          core business while we handle the complexities of finding the perfect
          fit for your team.
        </div>
        <Image
          src="https://www.apollotechnical.com/wp-content/uploads/2020/05/reasons-companies-use-staffing-agencies.png"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">Employee Training</h2>
      <p className="subHeading reveal">
        We train the employees in the following matters:
      </p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">File Management</li>
          <li className="hrBenefitsListItems">
            Basic Report Writing Techniques
          </li>
          <li className="hrBenefitsListItems">Book Handling/Keeping</li>
          <li className="hrBenefitsListItems">Meeting and Greeting</li>
          <li className="hrBenefitsListItems">
            Handling of security stationery
          </li>
          <li className="hrBenefitsListItems">Basic and Advanced IT Skills</li>
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
