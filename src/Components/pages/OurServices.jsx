import React from "react";
import Features from "../Features";

export default function OurServices(props) {
  const features = [
    {
      src: "https://www.ghaffarsons.com/images/hr-1.jpg",
      headText: "HR Consultancy",
      link: "/services/hr-consultancy",
      paraText:
        "Human Resources are one of the backbones of any organization. We offer professional human resource employment services as 3rd Party Contracter. We understand the needs of our esteemed clients and are commited to find professionals who align with their vision."
    },
    {
      src:
        "https://www.talentproindia.com/wp-content/uploads/2019/03/staf-sol.jpg",
      headText: "Staffing Solutions",
      link: "/services/staffing",
      paraText:
        "Integrated staffing services recruit, train, and groom talent. They offer tailored training, skill enhancement, and leadership development. This approach boosts employee satisfaction, productivity, and an organization's competitive edge."
    },
    {
      src:
        "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/03/getty-image874962420-what-is-a-financial-consultant-2400x1440.jpg",
      headText: "Financial Consultancy",
      link: "/services/financial-consultancy",
      paraText:
        "Discover empowerment through Financial Consultancy Services for Corporate, Commercial, SME, and Consumer Clients. Our experts provide tailored guidance, navigating complexities, and offering insights on investments, taxes, and risk. Let's transform possibilities into realities"
    },
    {
      src:
        "https://lirp.cdn-website.com/0ceb2054/dms3rep/multi/opt/Terrans+Hero+Image-80d31b4d-640w.png",
      headText: "Janitorial Services",
      link: "/services/janitorial",
      paraText:
        "Cleaning and Hygiene is one of the key aspects when highlighting a business and its services. We provide cleanliness and maintenance solutions for various establishments, in order to ensure a hygienic and pleasant environment."
    },
    {
      src:
        "https://terraquestint.com/wp-content/uploads/2016/01/gos2-960x500.jpg",
      headText: "General Order Supplies",
      link: "/services/general-order",
      paraText:
        "General Order Suppliers play a fundamental role in providing a wide array of essential products and materials to businesses, organizations and individuals. Our services include sourcing, pricing and delivering a diverse range of products."
    },
    {
      src:
        "https://silverlinks.pk/wp-content/uploads/2019/01/slideshow-bg-41.jpg",
      headText: "Printing Services",
      link: "/services/printing",
      paraText:
        "Printing Services encompass a broad range of professional solutions that involve reproducing visual content onto various physical mediums. Whether for marketing materials, informational documents, promotional items or creative projects. "
    }
  ];

  return (
    <Features
      featuresMain="main"
      featuresContainer="featuresContainer reveal"
      title="Our Services"
      titleClass="featuresTitle"
      featureContainer="feaCon"
      featuresArray={features}
    />
  );
}
