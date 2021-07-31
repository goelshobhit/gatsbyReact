import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

const Header = () => (
  <div className="fixedheader">
    <header className="" id="myHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-xs-4">
            <div className="logo animation">
              <Link to="https://emoha.com/">
                <StaticImage
                  src={"../images/emohalogo_latest-red.webp"}
                  width={153}
                  quality={90}
                  formats={["WEBP"]}
                  alt="Emoha Elders Car"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-9 col-xs-8">
            <div className="headerright">
              <ul>
                <li className="contact_number">
                  <Link
                    to="tel:+18888660486"
                    // onlick="gtag('event', 'click', {'event_category':'Call Button','event_label':'Call'})"
                  >
                    <span>
                      <i className="fa fa-phone"></i>{" "}
                    </span>
                    +1 888-866-0486
                  </Link>
                </li>
                <li>
                  <Link
                    to="#;"
                    className="signbtn"
                    id="signup_btn_2"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
