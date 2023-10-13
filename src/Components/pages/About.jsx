import "../../css/about.css";
import "../../css/general.css";
import Image from "../Image";

export default function About() {
  return (
    <div className="aboutContainer reveal">
      <h1 className="aboutHeading">About Us</h1>
      <p className="text-format-justify aboutPara color-2">
        <strong>Mr. Ahmad Ali (Eng) </strong>,{" "}
        <strong>Mrs. Zaeema Parvaiz (Architect)</strong> , and{" "}
        <strong>Mr. Samad Khan (Ex-Banker)</strong> founded{" "}
        <strong>M/s. Project Excellence Services </strong>
        <br />
        <br />
        We offers devoted services through a team of highly skilled, and trained
        professionals with cutting-edge equipment adhering to the highest
        standards in the fields of HR Consultancy, Staffing Solutions, Financial
        Consultancy Services for Corporate, Commercial, SMEs and Consumers,
        Janitorial Hygiene Services, General Order Suppliers, and all type of
        Commercial Printing Services for our esteemed and valued clients.
      </p>

      <div>
        <div>
          <h1 className="aboutHeading">Our Team</h1>
        </div>
        <div className="teamContainer color-2">
          <div className="teamCardImage">
            <Image
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              imgContainer="teamImgContainer"
              class="teamImg full"
              alt="team-card-img"
            />
            <div className="details">
              <div className="nameTitle">Name: </div>
              <div className="nameUser">Ahmad Ali</div>
              <div className="nameTitle">Designation:</div>
              <div className="nameUser">CEO</div>
              <div className="nameTitle">Contact:</div>
              <div className="nameUser">
                <a href="tel:+92 3094612947">
                  <strong>+92 309 -4612947</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
