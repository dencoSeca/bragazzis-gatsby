import React from "react"
import { Link as ScrollToLink } from "react-scroll"

function Footer() {
  return (
    <footer>
      <div className="footer__lists">
        <div className="list contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a
                className="text-link"
                href="https://goo.gl/maps/n4uLGJGtaqSjSfoo6"
                target="_blank"
                rel="noreferrer"
              >
                <p>224-228 Abbeydale Road</p>
                <p>Sheffield</p>
                <p>S7 1FL</p>
              </a>
            </li>
            <li>
              <a className="text-link" href="mailto:info@braazzis.co.uk">
                info@bragazzis.co.uk
              </a>
            </li>
            <li>
              <a className="text-link" href="tel:+441142581483">
                0114 258 1483
              </a>
            </li>
          </ul>
        </div>
        <div className="list site">
          <h4>Site</h4>
          <ul>
            <li>&copy; 2020 Bragazzi's Ltd</li>
            <li>
              photography by{" "}
              <a
                className="text-link"
                href="https://www.maytreephotography.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                maytree
              </a>
            </li>
            <li>
              site by{" "}
              <a
                className="text-link"
                href="https://leonbrown.dev"
                target="_blank"
                rel="noreferrer"
              >
                LEON BROWN
              </a>
            </li>
          </ul>
        </div>
        <div className="list social">
          <h4>Social</h4>
          <ul>
            <li>
              <a
                className="text-link"
                href="https://www.facebook.com/bragazzis/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://www.instagram.com/bragazzis/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://www.tripadvisor.co.uk/Restaurant_Review-g186364-d3435970-Reviews-Bragazzis-Sheffield_South_Yorkshire_England.html"
                target="_blank"
                rel="noreferrer"
              >
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__scroll-to-top">
        <ScrollToLink to="cover" spy={true} smooth={true} duration={1000}>
          <svg
            className="footer__scroll-to-top"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.989 1.00001C12.1818 1.01574 1.00172 12.2214 1.01745 26.0285C1.03318 39.8356 12.2388 51.0157 26.0459 51C39.853 50.9842 51.0331 39.7786 51.0174 25.9715C51.0017 12.1644 39.7961 0.98428 25.989 1.00001ZM27.4162 12.4126L34.0095 18.9909L32.5969 20.4067L27.0047 14.8273L27.0357 41.9988L25.0357 42.0011L25.0047 14.8296L19.4253 20.4217L18.0095 19.0091L24.5877 12.4158L25.0015 12.0011L26.0003 11L27.0015 11.9989L27.4162 12.4126Z"
              fill="#1d1d1d"
            />
          </svg>
        </ScrollToLink>
      </div>
    </footer>
  )
}

export default Footer
