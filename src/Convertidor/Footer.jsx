import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  position: "relative",
  marginTop: "auto",
};
function Footer() {
  return (
    <footer
      className="page-footer font-small cyan darken-3 "
      style={footerStyle}
    >
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5">
            <div className="mb-5 d-flex justify-content-around">
              {" "}
              {/* Utilizamos flex y justify-content para espaciar los iconos */}
              <a className="fb-ic" href="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="white-text fa-2x"
                  style={{ marginRight: "5px", color: "white" }}
                />{" "}
                {/* Añadimos margen a la derecha */}
              </a>
              <a className="tw-ic" href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="white-text fa-2x"
                  style={{ marginRight: "5px", color: "white" }}
                />{" "}
                {/* Añadimos margen a la derecha */}
              </a>
              <a className="gplus-ic" href="#">
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  className="white-text fa-2x"
                  style={{ marginRight: "5px", color: "white" }}
                />{" "}
                {/* Añadimos margen a la derecha */}
              </a>
              <a
                className="ins-ic"
                href="https://www.instagram.com/miguel.millaan/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="white-text fa-2x"
                  style={{ marginRight: "5px", color: "white" }}
                />{" "}
                {/* Añadimos margen a la derecha */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-2 text-light">
        © 2023 Copyright: <b>€nligne</b>
      </div>
    </footer>
  );
}

export default Footer;
