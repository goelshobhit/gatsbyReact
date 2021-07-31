import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"
import Icon1 from '../../images/icons_1.svg';
import Icon2 from '../../images/icon_2.svg';
import Icon3 from '../../images/icon_3.svg';
import Icon4 from '../../images/icon_4.svg';
import Icon5 from '../../images/icon_5.svg';
import Icon6 from '../../images/icon_6.svg';

function Fold4() {
  return (
    <div className="emoha_impact">
      <div className="container">
        <div className="emoha_impact_header">
          <h2>
            Emoha Extended <span>Family</span>
          </h2>
          <p>
            <span>500+</span> elders signed up with Emoha across <span>88</span>{" "}
            cities and town PAN India
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-sm-4 bor-bottom">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg demo">
                      <Icon1 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>170+</h3>
                    <p>Elder Lives Saved</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 bor-bottom bor-both">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg">
                      <Icon2 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>5000+</h3>
                    <p>Elders Empowered</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 bor-bottom">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg">
                      <Icon3 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>1300+</h3>
                    <p>Elder Events</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg">
                     <Icon4 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>100,000</h3>
                    <p>Care Calls</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 bor-both">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg">
                      <Icon5 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>PAN India</h3>
                    <p>Coverage</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="e_impact_box">
                  <div className="e_icon_box">
                    <div className="e_icon_bg">
                      <Icon6 />
                    </div>
                  </div>
                  <div className="e_icon_txt">
                    <h3>500+</h3>
                    <p>Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fold4
