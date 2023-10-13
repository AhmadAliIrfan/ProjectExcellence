import "../css/footer.css";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

export default function Footer() {
  var social = [
    {
      link: "https://www.instagram.com/project_excellence1/",
      social:
        "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png",
      alt: "Instagram"
    },
    {
      link: "https://www.facebook.com/ProjectExcelteam",
      social:
        "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png",
      alt: "Facebook"
    },
    {
      link: "/",
      social:
        "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-512.png",
      alt: "Reddit"
    }
  ];

  return (
    <div id="footer">
      <div id="section1" className="sections">
        <h3 className="ftitle">About</h3>
        <div className="aboutText">
          We offers devoted services in the fields of HR Consultancy, Staffing
          Solutions, Financial Consultancy Services for Corporate, Commercial,
          SMEs and Consumers, Janitorial Hygiene Services, General Order
          Suppliers, and all type of Commercial Printing Services for our
          esteemed and valued clients.
        </div>
      </div>
      <div id="section2" className="sections">
        <h3 className="ftitle">Social Meida</h3>
        <div className="linkHolder">
          {social.map((link, index) => {
            return (
              <SocialLinks
                link={link.link}
                social={link.social}
                alt={link.alt}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div id="section3" className="sections">
        <h3 className="ftitle">Nav Links</h3>
        <div className="linkHolder">
          <Link to="/">
            <div className="navLinks">Home</div>
          </Link>
          <Link to="/about-us">
            <div className="navLinks">About Us</div>
          </Link>
          <Link to="/services">
            <div className="navLinks">Our Services</div>
          </Link>
          <Link to="/contact">
            <div className="navLinks">Contact us</div>
          </Link>
          <Link to="/faq">
            <div className="navLinks">FAQ</div>
          </Link>
        </div>
      </div>
      <div id="section4" className="sections">
        <h3 className="ftitle">Copyright @2023</h3>
      </div>
    </div>
  );
}
