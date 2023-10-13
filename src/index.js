import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import About from "./Components/pages/About";
import Layout from "./Components/Layout";
import OurServices from "./Components/pages/OurServices";
import ContactUsPage from "./Components/pages/ContactUsPage";
import HRConsulatancy from "./Components/pages/HRConsultancy";
import FinancialConsultancy from "./Components/pages/FinancialConsultancy";
import Staffing from "./Components/pages/Staffing";
import Janitor from "./Components/pages/Janitor";
import General from "./Components/pages/General";
import Printing from "./Components/pages/Printing";
import Rights from "./Components/pages/Rights";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<App />} />
          <Route path={"/about-us"} element={<About />} />
          <Route path={"/services"} element={<OurServices />} />
          <Route
            path={"/services/hr-consultancy"}
            element={<HRConsulatancy />}
          />
          <Route
            path={"/services/hr-consultancy/rights"}
            element={<Rights />}
          />

          <Route
            path={"/services/financial-consultancy"}
            element={<FinancialConsultancy />}
          />
          <Route path={"/services/staffing"} element={<Staffing />} />
          <Route path={"/services/janitorial"} element={<Janitor />} />
          <Route path={"/services/general-order"} element={<General />} />
          <Route path={"/services/printing"} element={<Printing />} />
          <Route path={"/contact"} element={<ContactUsPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
