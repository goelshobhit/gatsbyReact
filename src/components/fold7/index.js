import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './style.css';

function Fold7() {
  return (
    <div className="about-empower">
      <div className="container">
        <div className="footer-logo">
          <StaticImage
            src={"../images/emohalogo_latest.webp"}
            width={53}
            quality={90}
            formats={["WEBP"]}
            alt="Emoha Elders Car"
          />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="footer_box">
              <p>
                <i className="fa fa-home"></i> 216, Ocus Quantum Plaza, Sector
                51, Opposite BPTP Freedom Park, Near Artemis Hospital Gurugram,
                Haryana 122003
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_box">
              <p>
                <a href="mailto:eldersfirst@emoha.com">
                  <i className="fa fa-envelope-o"></i> eldersfirst@emoha.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_box">
              <p>
                <i className="fa fa-edit"></i> For feedback or concerns, please
                email us at{" "}
                <a href="mailto:feedback@emoha.com" style= {{ color: '#fff' }}>
                  feedback@emoha.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="appbox">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Get the Emoha App</h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://apps.apple.com/in/app/emoha/id1485996520"
                    onClick={null}
                  >
                    <StaticImage
                      src={"../../images/appstore_button.svg"}
                      width={263}
                      height={91}
                      quality={90}
                      formats={["WEBP"]}
                      alt="Emoha Elders Car"
                    />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.emoha&hl=en_IN"
                    onClick={null}
                  >
                    <StaticImage
                      src={"../../images/google-playb-utton.svg"}
                      width={263}
                      height={91}
                      quality={90}
                      formats={["WEBP"]}
                      alt="Emoha Elders Car"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footersocial">
          <div className="footer-social footer-social-media">
            <ul>
              <li>
                <span>
                  <i className="fa fa-facebook-square">
                    <span>&nbsp;</span>
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-twitter-square">
                    <span>&nbsp;</span>
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-instagram">
                    <span>&nbsp;</span>
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-youtube-square">
                    <span>&nbsp;</span>
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fold7
