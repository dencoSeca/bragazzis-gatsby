import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header({ location }) {
  return (
    <div
      className={location.pathname === "/" ? "header" : "header header--dark"}
      id="header"
    >
      <div className="header__tag">Purveyors of quality Italian goods</div>
      <div className="header__logo">
        <Link to="/">
          {location.pathname === "/" ? (
            <StaticImage
              className="header__logo"
              src="../images/big-b-white.png"
              alt="logo"
              loading="eager"
            />
          ) : (
            <StaticImage
              className="header__logo"
              src="../images/big-b-black.png"
              alt="logo"
              loading="eager"
            />
          )}
        </Link>
      </div>
      <nav className="header__nav">
        <Link className="header__link" to="/lastoria">
          La Storia
        </Link>
        <Link className="header__link" to="/ilgiorno">
          Il Giorno
        </Link>
      </nav>
    </div>
  )
}

export default Header