import React from "react";
import Image from "../Image";
import "../../css/hrCon.css";
import "../../css/general.css";
import Button from "../Button";
import ContactUs from "../ContactUs";
import para from "../../App";

export default function Rights(props) {
  return (
    <div className="genContainer text-format">
      <div className="titleClass reveal">
        <h1 className="hrHeading">Rights of the Client</h1>
      </div>
      <div className="reveal">
        <Image
          src="https://www.jcfs.org/sites/default/files/styles/banner_xs/public/banner-images/496819415_0.jpg?itok=wh7XF-Zl"
          imgContainer="hrImgContainer"
          class="hrImage"
          alt="HR Consultancy"
        />
      </div>
      <h2 className="hrHeading2 reveal">HR Consultancy as a Third Party</h2>
      <p className="subHeading reveal">
        The following are the rights reserved by the client in case a contract
        is signed between the first party (Client) and Project Excellence
        Services:
      </p>
      <div className="hrBenefits">
        <ul className=" reveal">
          <li className="hrBenefitsListItems">
            Our extensive Policies keep our clients covered in all aspects,
            where their policies are silent.
          </li>
          <li className="hrBenefitsListItems">
            Project Excellence Services (PES) will only act as a custodian of
            the staff for the client and provide all the benefits to the
            employees at the client's discretion
          </li>
          <li className="hrBenefitsListItems">
            Project Excellence Services will only keep and manage the staff
            files. The Client has all the rights to Hire, Fire, Terminate, and
            Reinstate an employee. However, PES can
          </li>
          <li className="hrBenefitsListItems">
            The Client reserves the right to increase or decrease the staff
            under the contract with the 3rd Party i.e. PES.
          </li>
          <li className="hrBenefitsListItems">
            The captioned staff will perform their duties according to their Job
            descriptions.
          </li>
          <li className="hrBenefitsListItems">
            The Client will ensure that the employees from the 3rd party do not
            handle any form of Currency / Money or precious items (other than
            their JD).
          </li>
          <li className="hrBenefitsListItems">
            In case of any disputes/misconduct/theft, the client will be
            required to provide concrete evidence before any action is taken by
            either party.
          </li>
          <li className="hrBenefitsListItems">
            Any employee can be made permanent or brought under a periodic
            contract through mutual consent between the Client and Third Party
            (PES).
          </li>
          <li className="hrBenefitsListItems">
            The Client has the right to resume/stop the salary of the employees
            under a third party (PES) contract under prior intimation to the
            third party (PES).
          </li>
          <li className="hrBenefitsListItems">
            The Client has the right to change the job description of the staff
            as per their requirement, under intimation to the 3rd party.
          </li>
          <li className="hrBenefitsListItems">
            The Client has the right to direct Project Excellence Services to
            issue Offer letters, termination, experience letters, lease letters
            etc. for any staff under the 3rd party contract.
          </li>
          <li className="hrBenefitsListItems">
            The Client has the right to increase or decrease salary, award
            bonuses, festival bonuses, or any allowance for the staff under the
            3rd party contract.
          </li>
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
