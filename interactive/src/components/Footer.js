import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="row mb-5 mt-5 ml-1 mr-1 pt-4">
      <ul className="nav col-6 flex-lg-row flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Terms and Conditions
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Privacy Policy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Contact Us
          </Link>
        </li>
      </ul>

      <ul className="nav col-6 flex-lg-row flex-column d-flex justify-content-lg-end">
        <li className="nav-item">
          <Link className="nav-link" to="#">
            {" "}
            Follow us{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <img
              className="icon__social"
              src="./icons/fb.svg"
              alt="facebook-logo"
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <img
              className="icon__social"
              src="./icons/tw.svg"
              alt="twitter-logo"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
