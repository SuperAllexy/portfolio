import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/alex-p-356273289/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin"/>
      </a>
      <a
        href="https://github.com/SuperAllexy"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
    </section>
  );
};

export default NavigationSocials;
