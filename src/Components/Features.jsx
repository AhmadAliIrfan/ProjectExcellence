import Feature from "./Feature";
import "../css/features.css";

export default function Features(props) {
  return (
    <div className={props.featuresMain}>
      <h1 className={props.titleClass}>{props.title}</h1>
      <div id={props.id} className={props.featuresContainer}>
        {props.featuresArray.map((item, index) => {
          return (
            <Feature
              key={index}
              featureContainer={props.featureContainer}
              src={item.src}
              headText={item.headText}
              para={item.paraText}
              headClass="featureHead pointer"
              paraClass="featureText"
              links={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
