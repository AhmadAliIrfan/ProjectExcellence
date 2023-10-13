import "../../css/contactUspage.css";
import "../../css/grid.css";
import ContactUs from "../ContactUs";
import { Link } from "react-router-dom";

export default function ContactUsPage(props) {
  return (
    <div>
      <div className="contact-container">
        <div className="grid2">
          <div className="contactIntro">
            Thank you for considering Project Excellence Services for your
            business needs. We're excited to hear from you! Whether you're
            interested in any of the following:
          </div>
          <div className="gridCenter">
            <Link to="/services/hr-consultancy">
              <strong className="myServices">HR Consultancy</strong>
            </Link>
            <Link to="/services/financial-consultancy">
              <strong className="myServices"> Financial Consultancy</strong>
            </Link>
            <Link to="/services/staffing">
              <strong className="myServices">Staffing</strong>
            </Link>
            <Link to="/services/janitorial">
              <strong className="myServices"> Janitorial Services</strong>
            </Link>
            <Link to="/services/general-order">
              <strong className="myServices"> General Order Supplies</strong>
            </Link>
            <Link to="/services/printing">
              <strong className="myServices"> Printing Services</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="paddingContact paraContactColorB">
        We are here to provide top-notch solutions tailored to your
        requirements. Please feel free to reach out using the contact form
        below. Alternatively, you can also email us at
      </div>
      <div className="marginContact">
        <strong className="myServices email">
          <a href="mailto:project.excellence.services@gmail.com">
            project.excellence.services@gmail.com
          </a>
        </strong>
      </div>
      <div className="paddingContact paraContactColorB">
        or give us a call at the following
      </div>
      <br />
      <br />
      <div className="contactNumbers paddingContact">
        <div className="contactCard">
          <div className="contactName">Ahmad Ali (CEO)</div>
          <div className="contactNum">
            <a href="tel:+92 3094612947">
              <strong>+92 309 4612947</strong>
            </a>
          </div>
        </div>
        <div className="contactCard">
          <div className="contactName">
            Samad Khan (HOD Finance and Marketing)
          </div>
          <div className="contactNum">
            <a href="tel:+92 321 7095010">
              <strong>+92 321 7095010</strong>
            </a>
          </div>
        </div>
        <div className="contactCard">
          <div className="contactName">Sanaullah (Marketing Manager)</div>
          <div className="contactNum">
            <a href="tel:+92 308 1042066">
              <strong>+92 308 1042066</strong>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="color-2 callTo">
        We look forward to the opportunity of working together.
      </div>
      <ContactUs
        contactContainer="contactContainer color-2"
        headingClass="conHeading"
      />
    </div>
  );
}
