import React from "react"
import { Link } from "gatsby"
import './style.css';

function Fold() {
  return (
    <>
      <div className="fold_1">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="fold_1_txt">
                <h1>
                  Give Best Care To Your Elders With <br />
                  <span>Emoha</span>
                </h1>
                <h2 className="fold_1_heading_1">
                  Thanks to Emoha, my Mom in India is safer, healthier & more
                  active.
                </h2>
                <div className="fold_1_heading_2">
                  <h3>
                    Get your parents signed up for the​ <br />
                    <span>Emoha Empower Membership</span>
                  </h3>
                  <div
                    className="fold_1_heading_3"
                    onClick={null}
                    style={{ cursor: 'pointer' }}
                  >
                    <h4>Dr. Smita Ohri, MD</h4>
                    <span>Medical Director & CEO,​ New Jersey​</span>
                  </div>
                </div>
                <Link to="#;">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fold_1_video"></div>
      </div>
    </>
  )
}

export default Fold
