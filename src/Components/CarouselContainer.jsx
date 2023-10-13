import Carousel from "react-material-ui-carousel";
import CarouselCard from "../Components/CarouselCard";
import "../css/carousel.css";

export default function CarouselContainer() {
  var items = [
    {
      name: "HR Consultancy",
      description:
        "Our HR Consultancy services provide comprehensive guidance to navigate the complex landscape of human resources. We offer expertise in employment regulations, compliance, performance management, and organizational development!",
      image:
        "https://tmrc.com.pk/wp-content/uploads/2022/12/tmrac-web-image-hr-consultancy.jpg"
    },
    {
      name: "Staffing Solutions",
      description:
        "Our Staffing Solutions offer a strategic approach to workforce management. We understand that finding the right talent can be challenging, which is why we specialize in matching skilled candidates with your organization's unique requirements!",
      image:
        "https://static.vecteezy.com/system/resources/previews/010/051/990/non_2x/sign-of-staffing-symbol-is-isolated-on-a-white-background-icon-color-editable-free-vector.jpg"
    },
    {
      name: "Financial Consultancy",
      description:
        "Welcome to the world of financial consultancy services, where expertise meets empowerment for Corporate, Commercial, SME, and Consumer Clients.  In today's dynamic economic landscape, making the right decisions is crucial. Our experienced consultants offer tailored guidance, whether you're an SME optimizing your financial strategies or an individual securing loans!",
      image:
        "https://www.cedarpointcap.com/application/files/6016/7157/2429/financial_planner_v_wealth_manager_750x750.jpg"
    },
    {
      name: "Janitorial Services",
      description:
        "Our Janitorial Hygiene Services are designed to ensure that your business maintains a clean, healthy, and welcoming environment. Our trained professionals utilize effective cleaning techniques to sanitize and disinfect various spaces, including offices, commercial buildings, and healthcare facilities!",
      image:
        "https://www.businesslist.com.ng/img/ng/h/1572292772-42-fsv-cleaning-services.jpg"
    },
    {
      name: "General Order Supplies",
      description:
        "As your General Order Suppliers, we provide a one-stop solution for your business's essential needs. From office supplies and equipment to stationery and consumables, we ensure that you have easy access to high-quality products that keep your operations running smoothly!",
      image:
        "https://www.mamooje.com/wp-content/uploads/2021/11/General-order-supplier.jpg"
    },
    {
      name: "Printing Services",
      description:
        "Our Printing Services cater to your branding and communication needs. From business cards and brochures to banners and promotional materials, we offer a wide range of printing solutions that enhance your brand's visibility. Our state-of-the-art printing technology ensures vibrant colors, sharp details, and consistent quality across all materials!",
      image:
        "https://blog.rjyoung.com/hubfs/Imported_Blog_Media/Printing-Business-Success1.jpg"
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {items.map((item, i) => {
          return (
            <CarouselCard
              cardText="cardText"
              image={item.image}
              title={item.name}
              body={item.description}
              key={i}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
