import Jumbotron from "./Jumbotron";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Jumbotron
        jumboClass="jumbotrn"
        left="data reveal"
        right="reveal"
        info="Project Excellence Services stands as a testament to the founder’s commitment to elevating the standards of service provision across various sectors. 
The multifaceted nature of their services encompasses HR Consultancy, Staffing Solutions, Financial Consultancy Services for Corporate, Commercial, SMEs, and Consumers, Janitorial Hygiene Services, General Order Suppliers, and all types of Commercial Printing Services."
        buttonsClass="myButtons"
      />
      <Outlet />
      <Footer />
    </div>
  );
}
