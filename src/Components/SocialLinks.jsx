import "../css/social.css";

export default function SocialLinks(props) {
  return (
    <div className="socialDiv">
      <a href={props.link}>
        <img className="socialImg" src={props.social} alt={props.alt} />
        <p className="socialText">{props.alt}</p>
      </a>
    </div>
  );
}
