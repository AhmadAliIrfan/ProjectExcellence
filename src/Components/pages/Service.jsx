import React from "react";

export default function Service(props) {
  const subHeading2 = () => {
    return (
      <div>
        Our health insurance policy covers your employees and their family
        members against hospitalization expenses, following illness, accident,
        or disease. In case of hospitalization, a cashless facility is also
        available.
        <br />
        <br />
        For extra covers available for larger groups an additional premium will
        be charged these covers include:
      </div>
    );
  };

  const service = [
    {
      title: "HR Consultancy Expertise",
      intro:
        "Our HR Consultancy services provide comprehensive guidance to navigate the complex landscape of human resources. We offer expertise in employment regulations, compliance, performance management, and organizational development. Our seasoned consultants, partner with you to create HR strategies that align with your business goals. By staying updated on industry trends and best practices, we empower you to foster a productive, engaged, and legally compliant workforce. With our support, you can optimize your HR processes and enhance employee satisfaction.",
      image: "",
      heading: "HR Consultancy as a Third Party",
      subHeading:
        "All Staff will be catered to, from higher rank to lower rank i.e. Senior Management to peon by providing the following facilities as per the requirement of our worthy client:",
      list: [
        "Social Security Services",
        "Group Insurance",
        "Provident Fund",
        "Health Insurance",
        "EOBI Registration (Optional)",
        "Gratuity",
        "Other Allowances",
        "Loans i.e. Financial Assistance"
      ],
      heading1: "Essentials That You need to know",
      subHeading1: "Insurance and Health Plans we offer:",
      list1: [
        "Salat Salamat Plan (Group Insurance Health Plan)",
        "Sahara Family Health Insurance Plan",
        "Sinf-e-Aahan Cancer (SACP) Plan for Women"
      ],
      image1: "",

      heading2: "Salat Salamat Plan (Group Insurance Health Plan)",
      subHeading2: subHeading2(),
      list2: [
        "Maternity Cover",
        "Baby Cover from Day One",
        "Waiver of 30 days / 1 year exclusion",
        "Coverage of pre-existing diseases"
      ],
      image2: "",
      heading3: "",
      subHeading3: "Key Benefits:",

      list3: [
        "Employees and their families are covered for all in-patient expenses in case their stay in the hospital lasts 24 hours or more.",
        "Room/Boarding Expenses are provided by the hospital as per the benefit selected.",
        "Treatment taken for Cataract.",
        "All Medical expenses incurred during 30 days after hospitalization are considered part of an admissible claim.",
        "Treatments/Operations that require hospitalization for less than 24 hours are also covered.",
        "Facility  for online intimation of claims through our insurance provider’s website is also available",
        "SMS alerts to customers updating the status of the claim at 3 stages",

        "The employee will be able to get treatment from over 1050+ hospitals across Pakistan.",

        "Robust Grievance Redressal Mechanism",

        "Sehat salamat plan is a customizable product. Its premium depends on the group data and requirements."
      ],
      image3: "",
      heading4: "Sahara Family health Insurance",
      subHeading4:
        "The objective of this product is to provide financial protection to a family in case of illness, or accident that leads to hospitalization.",
      list4: [],
      image4: "",
      heading5: "",
      subHeading5: "The Benefits include:",
      list5: [
        "Inpatient Care",
        "Hospital Accommodation",
        "DayCare Treatment",
        "Emergency Ambulance/ Medical Evacuation",
        "General Waiting Period"
      ],
      image5: "",
      heading6: "",
      subHeading6: "",
      list6: [],
      image6: "",
      heading7: "",
      subHeading7: "",
      list7: [],
      image7: "",
      heading8: "Sinf-e-Aahan Cancer (SACP) Plan for Women",
      subHeading8:
        "The objective of this product is to provide financial protection to women diagnosed with Cancer at very affordable costs. The Benefits include 100% of the sum assured will be payable on diagnosis of the cancer. The coverage period will be one year after which the policy can be renewed.",
      list8: [],
      image8: "",
      heading9: "Provident Fund",
      subHeading9:
        "This scheme will come into operation on a mutually agreed date.  By agreeing to the terms of the scheme the employee will authorize Project Excellence Services to deduct a monthly payable premium amount from the employee’s salary. All records will be maintained. The monthly premium will be subject to the employee’s salary and can be as low as Rs 100 per month.",
      list9: [],
      image9: "",
      heading10: "",
      subHeading10: "Benefits: ",
      list10: [
        "Loan Facility",
        "Family Income Benefit",
        "Accidental Indemnity Benefit",
        "Maturity Benefit"
      ],
      image10: "",
      heading11: "Rights of The Client",
      subheading11: "",
      list11: [
        "Our extensive Policies keep our clients covered in all aspects, where their policies are silent.",
        "Project Excellence Services (PES) will only act as a custodian of the staff for the client and provide all the benefits to the employees at the client's discretion.",
        "Project Excellence Services will only keep and manage the staff files. The Client has all the rights to Hire, Fire, Terminate, and Reinstate an employee. However, PES can manage the staff according to the client's recommendations.",
        "The Client reserves the right to increase or decrease the staff under the contract with the 3rd Party i.e. PES.",
        "The captioned staff will perform their duties according to their Job descriptions.",
        "The Client will ensure that the employees from the 3rd party do not handle any form of Currency / Money or precious items (other than their JD).",
        "In case of any disputes/misconduct/theft, the client will be required to provide concrete evidence before any action is taken by either party.",
        "Any employee can be made permanent or brought under a periodic contract through mutual consent between the Client and Third Party (PES).",
        "The Client has the right to resume/stop the salary of the employees under a third party (PES) contract under prior intimation to the third party (PES)."
      ],
      image11: ""
    }
  ];

  return <div className={props.pageContainer}></div>;
}
