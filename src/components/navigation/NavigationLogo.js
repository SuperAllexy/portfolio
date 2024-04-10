import { NavLink } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}
    >
    </NavLink>
  );
};

export default NavigationLogo;
