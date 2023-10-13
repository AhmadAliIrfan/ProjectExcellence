import React from "react";
import "../../css/financial.css";
import "../../css/hrCon.css";
import "../../css/general.css";
import Image from "../Image";
import para from "../../App";
import ContactUs from "../ContactUs";

export default function FinancialConsultancy(props) {
  return (
    <div className="genContainer text-format">
      <div className="titleClass">
        <h1 className="hrHeading">Financial Consultancy</h1>
      </div>
      <div className="hrCombine reveal">
        <div className="intro">
          Welcome to the world of financial consultancy services, where
          expertise meets empowerment for Corporate, Commercial, SME, and
          Consumer Clients. In today's dynamic economic landscape, making the
          right decisions is crucial. Our experienced consultants offer tailored
          guidance, whether you're an SME optimizing your financial strategies
          or an individual securing loans. We navigate complexities, provide
          insights on investments, taxes, and risk management, & and collaborate
          with you to achieve your goals.
        </div>
        <Image
          src="https://dsnint.com/wp-content/uploads/2019/11/consultancyservices.jpg"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="Financial Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">As your financial consultants</h2>
      <p className="subHeading reveal">
        We specialize in providing professional consultancy and procedures for
        obtaining loans, and related facilities from different scheduled
        banks/DFI’s to our worthy clients, regarding the following matters:
      </p>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">Running Finance (RF)</li>
          <li className="hrBenefitsListItems">Fleet Finance Facility</li>
          <li className="hrBenefitsListItems">Import and export Facilities</li>
          <li className="hrBenefitsListItems">Bank Guarantees (BGs)</li>
          <li className="hrBenefitsListItems">Consumer Finance Facilities</li>
          <li className="hrBenefitsListItems">Seasonal Commodities Finances</li>
          <li className="hrBenefitsListItems">Solar Panel Facilities</li>
        </ul>
      </div>
      <h2 className="hrHeading1 reveal">Taxation Matters</h2>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">
            NTN Certificates or Sales Tax Registration
          </li>
          <li className="hrBenefitsListItems">SECP Related all matters</li>
          <li className="hrBenefitsListItems">Trademark Registration</li>
          <li className="hrBenefitsListItems">Feasibility Report</li>
          <li className="hrBenefitsListItems">Project finance</li>
          <li className="hrBenefitsListItems">Society and NGO’s Foundations</li>
        </ul>
      </div>
      <h2 className="hrHeading1 reveal">Legal Assistance</h2>
      <div className="hrBenefits">
        <ul className="hrBenefitsList reveal">
          <li className="hrBenefitsListItems">Patwarkhana</li>
          <li className="hrBenefitsListItems">Each and every type of MAP’s</li>
          <li className="hrBenefitsListItems">
            Succession Certificates & Succession Issues
          </li>
          <li className="hrBenefitsListItems">
            Partnership Deeds / Redemption Deeds
          </li>
          <li className="hrBenefitsListItems">
            Assistance in Civil and Corporate Matters
          </li>
          <li className="hrBenefitsListItems">Assistance in Court Matters</li>
        </ul>
      </div>
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
