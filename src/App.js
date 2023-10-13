import Features from "./Components/Features";
import "./css/features.css";
import "./styles.css";
import "./css/button.css";
import ContactUs from "./Components/ContactUs";
import "./css/general.css";
import "./css/contact.css";

export const para = () => (
  <div>
    Thank you for considering Project Excellence Services for your business
    needs. We're excited to hear from you! Whether you're interested in our{" "}
    <strong>HR Consultancy</strong> , <strong>Staffing</strong>,{" "}
    <strong>Financial Consultancy</strong>, <strong>Janitorial Services</strong>
    , <strong>General Order supplies</strong>, or{" "}
    <strong>Printing Services</strong>, we're here to provide top-notch
    solutions tailored to your requirements. Please feel free to reach out using
    the contact form below. Alternatively, you can also email us at <br />
    <br />
    <div className="email">
      <strong>
        <a href="mailto:project.excellence.services@gmail.com">
          project.excellence.services@gmail.com
        </a>
      </strong>
    </div>
    <br />
    or give us a call at the following
    <br />
    <br />
    <ul>
      <li className="tel">
        <div>Ahmad Ali (CEO)</div>
        <div className="number">
          <a href="tel:+92 3094612947">
            <strong>+92 309 4612947</strong>
          </a>
        </div>
      </li>
      <li className="tel">
        <div>Samad Khan (HOD Finance and Marketing)</div>
        <div className="number">
          <a href="tel:+92 321 7095010">
            <strong>+92 321 7095010</strong>
          </a>
        </div>
      </li>
      <li className="tel">
        <div>Sanaullah (Marketing Manager)</div>
        <div className="number">
          <a href="tel:+92 308 1042066">
            <strong>+92 308 1042066</strong>
          </a>
        </div>
      </li>
    </ul>
    <br />
    We look forward to the opportunity of working together.
  </div>
);

export default function App() {
  const features = [
    {
      src: "https://www.ghaffarsons.com/images/hr-1.jpg",
      headText: "HR Consultancy",
      paraText:
        "Human Resources are one of the backbones of any organization. We offer professional human resource employment services as 3rd Party Contracter. We understand the needs of our esteemed clients and are commited to find professionals who align with their vision.",
      link: "/services/hr-consultancy"
    },
    {
      src:
        "https://www.talentproindia.com/wp-content/uploads/2019/03/staf-sol.jpg",
      headText: "Staffing Solutions",
      paraText:
        "Integrated staffing services recruit, train, and groom talent. They offer tailored training, skill enhancement, and leadership development. This approach boosts employee satisfaction, productivity, and an organization's competitive edge.",
      link: "/services/staffing"
    },
    {
      src:
        "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/03/getty-image874962420-what-is-a-financial-consultant-2400x1440.jpg",
      headText: "Financial Consultancy",
      paraText:
        "Discover empowerment through Financial Consultancy Services for Corporate, Commercial, SME, and Consumer Clients. Our experts provide tailored guidance, navigating complexities, and offering insights on investments, taxes, and risk. Let's transform possibilities into realities",
      link: "/services/financial-consultancy"
    },
    {
      src:
        "https://www.businesslist.pk/img/pk/r/1549612641-52-lahore-janitorial-services.jpg",
      headText: "Janitorial Services",
      paraText:
        "Cleaning and Hygiene is one of the key aspects when highlighting a business and its services. We provide cleanliness and maintenance solutions for various establishments, in order to ensure a hygienic and pleasant environment.",
      link: "/services/janitorial"
    },
    {
      src:
        "https://terraquestint.com/wp-content/uploads/2016/01/gos2-960x500.jpg",
      headText: "General Order Supplies",
      paraText:
        "General Order Suppliers play a fundamental role in providing a wide array of essential products and materials to businesses, organizations and individuals. Our services include sourcing, pricing and delivering a diverse range of products.",
      link: "/services/general-order"
    },
    {
      src:
        "https://silverlinks.pk/wp-content/uploads/2019/01/slideshow-bg-41.jpg",
      headText: "Printing Services",
      paraText:
        "Printing Services encompass a broad range of professional solutions that involve reproducing visual content onto various physical mediums. Whether for marketing materials, informational documents, promotional items or creative projects.",
      link: "/services/printing"
    }
  ];

  const features1 = [
    {
      src:
        "https://www.marketing91.com/wp-content/uploads/2020/07/Service-Excellence.jpg",
      headText: "Commitment to Excellence",
      paraText:
        "Our commitment to excellence is unwavering. We uphold the highest standards in everything we do, ensuring that the services we provide are of exceptional quality. Our dedication to excellence is not just a promise; it's a fundamental principle that drives our actions."
    },
    {
      src:
        "https://www.questionpro.com/blog/wp-content/uploads/2022/05/service-quality.jpg",
      headText: "Reliability and Consistency",
      paraText:
        "Reliability is at the core of our operations. You can count on us to deliver consistent results, meeting deadlines and adhering to the highest standards in every project. Our track record of reliability is a testament to our dedication to being a trustworthy partner."
    },
    {
      src:
        "https://images.tmcnet.com/tmc/misc/articles/image/2021-sep/1189630548-AdobeStock_142347410_CX_compass_SUPERSIZE.jpg",
      headText: "Customer-Centric Focus",
      paraText:
        "Your satisfaction is our priority. We adopt a customer-centric approach, actively listening to your feedback and incorporating it into our processes. Your input guides our actions, ensuring that our services are aligned with your vision and objectives."
    }
  ];

  return (
    <div className="App text-format">
      <Features
        featuresMain="main"
        featuresContainer="featuresContainer reveal"
        title="Our Services"
        titleClass="featuresTitle"
        featureContainer="feaCon"
        featuresArray={features}
      />
      <Features
        featuresMain="main colorMain"
        featuresContainer="featuresContainer reveal"
        title="Why Choose Us"
        titleClass="featuresTitle titleColor"
        featureContainer="feaCon colorCard"
        featuresArray={features1}
      />
      <ContactUs
        contactContainer="contactContainer color-2"
        headingClass="conHeading"
        para={para()}
        paraClass="para"
      />
    </div>
  );
}
