import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"

function Fold5() {
  return (
    <div class="elder_care">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="row">
              <div class="col-sm-7">
                <div class="elder_care_txt">
                  <h2>
                    <span>Your Parents</span> Matter As Well
                  </h2>
                  <p>
                    As an NRI, I know how helpless &​ worried we all have felt.
                    I took the right call and I'm glad I did.​
                  </p>
                  <p>
                    <span>So should you!</span>
                  </p>
                  <a href="#">Send me Details</a>
                </div>
              </div>
              <div class="col-sm-5">
                <div>
                  <StaticImage
                    src={"../../images/elder_care_img.webp"}
                    width={353}
                    height={346}
                    quality={90}
                    formats={["WEBP"]}
                    alt="Emoha Elders Car"
                    class="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fold5
