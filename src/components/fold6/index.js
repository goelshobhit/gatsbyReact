import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './style.css';

export function Fold6() {
  return (
    <div className="five_slide_fold">
      <div className="container">
        <div className="row">
          <div className="five_heading">
            <h2>
              Our <span>Stories</span>
            </h2>
            <p>
              Many like me have trusted Emoha with their loved ones.
              <br /> Here are their stories...
            </p>
          </div>
        </div>
        <div className="row">
          <div className="owl-carousel" id="sec_slider2">
            <div>
              <a
                className="animation video_on_click"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                onclick="onYouTube1('eFhbnVFlRbM')"
                href="javascript:void(0)"
              >
                  <StaticImage
                    src={"../../images/Image-7.jpg"}
                    width={353}
                    height={346}
                    quality={90}
                    formats={["JPG"]}
                    alt="Emoha Elders Car"
                    class="img-responsive"
                  />
              </a>
              <div className="our_story_txt">
                <h3>Mr. Anushth Sharma</h3>
                <p>
                  <i className="fa fa-map-marker"></i> Toronto, Canada
                </p>
              </div>
            </div>
            <div>
              <a
                className="animation video_on_click"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                onclick="onYouTube1('uJxSsh1W-68')"
                href="javascript:void(0)"
              >
                 <StaticImage
                    src={"../../images/Image-8.jpg"}
                    width={353}
                    height={346}
                    quality={90}
                    formats={["JPG"]}
                    alt="Emoha Elders Car"
                    class="img-responsive"
                  />
              </a>
              <div className="our_story_txt">
                <h3>Ms. Rajlakshmi</h3>
                <p>
                  <i className="fa fa-map-marker"></i> Netherlands, Europe
                </p>
              </div>
            </div>
            <div>
              <a
                className="animation video_on_click"
                data-toggle="modal"
                data-target="#modal-fullscreen"
                onclick="onYouTube1('5bDLYG7s6EI')"
                href="javascript:void(0)"
              >
                <StaticImage
                    src={"../../images/Image-7.jpg"}
                    width={353}
                    height={346}
                    quality={90}
                    formats={["JPG"]}
                    alt="Emoha Elders Car"
                    class="img-responsive"
                  />
              </a>
              <div className="our_story_txt">
                <h3>Mr. Mahesh Bansal</h3>
                <p>
                  <i className="fa fa-map-marker"></i> New Jersey, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fold6
