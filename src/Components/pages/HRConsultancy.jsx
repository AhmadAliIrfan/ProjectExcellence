import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import Button from "../Button";
import ContactUs from "../ContactUs";
import para from "../../App";
import { Link } from "react-router-dom";

export default function HRConsulatancy(props) {
  return (
    <div className="genContainer text-format">
      <div className="titleClass reveal">
        <h1 className="hrHeading">HR Consultancy Expertise</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          Our HR Consultancy services provide comprehensive guidance to navigate
          the complex landscape of human resources. We offer expertise in
          employment regulations, compliance, performance management, and
          organizational development. Our seasoned consultants, partner with you
          to create HR strategies that align with your business goals. By
          staying updated on industry trends and best practices, we empower you
          to foster a productive, engaged, and legally compliant workforce. With
          our support, you can optimize your HR processes and enhance employee
          satisfaction.
        </div>
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">HR Consultancy as a Third Party</h2>
      <p className="subHeading reveal">
        All Staff will be catered to, from higher rank to lower rank i.e. Senior
        Management to peon by providing the following facilities as per the
        requirement of our worthy client:
      </p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">Social Security Services</li>
          <li className="hrBenefitsListItems">Group Insurance</li>
          <li className="hrBenefitsListItems">Provident Fund</li>
          <li className="hrBenefitsListItems">Health Insurance</li>
          <li className="hrBenefitsListItems">EOBI Registration (Optional)</li>
          <li className="hrBenefitsListItems">Gratuity Benefits</li>
          <li className="hrBenefitsListItems">Other Allowances</li>
          <li className="hrBenefitsListItems">
            Loans i.e. Financial Assistance
          </li>
        </ul>
      </div>

      <h2 className="hrHeading1 reveal">Essentials That You need to know</h2>
      <p className="subHeading1 reveal">Insurance and Health Plans we offer:</p>
      <ul className="insuranceList reveal">
        <li className="hrBenefitsListItems">PES Group Insurance Health Plan</li>
        <li className="hrBenefitsListItems">
          PES Family Health Insurance Plan
        </li>
        <li className="hrBenefitsListItems">PES Cancer Plan for Women</li>
        <li className="listButton">
          <Link to="/services/hr-consultancy/rights">
            <Button
              title="Explore the Rights of the Client"
              class="button hrButton"
            />
          </Link>
        </li>
      </ul>

      <div className="rights reveal">
        <ContactUs
          contactContainer="contactContainer color-2"
          headingClass="conHeading"
          para={para}
          paraClass="para"
        />
      </div>
    </div>
  );
}
