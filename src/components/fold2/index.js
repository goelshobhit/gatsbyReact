import React from "react"
import "./style.css"

function Fold2() {
  return (
    <>
      <div className="sec_slide_fold">
        <div className="container">
          <div className="sec_slider_22">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="sec_bx video-left-corv">
                      <a
                        className="animation video_on_click"
                        data-toggle="modal"
                        data-target="#modal-fullscreen"
                        onClick={null}
                        href="/"
                      >
                        <video
                          autoPlay
                          loop="loop"
                          muted=""
                          playsInline
                          poster="../../video/emergency_new.jpg"
                          id="video_fold_2_1"
                          src="../../video/emergency_new.mp4"
                        ></video>
                      </a>
                      <h3 className="sec_head_1">
                        <a
                          className="animation video_on_click"
                          data-toggle="modal"
                          data-target="#modal-fullscreen"
                          onClick={null}
                          href="/"
                        >
                          Mom feels secure with​ 24x7 Emergency Support​
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="sec_bx">
                      <a
                        className="animation video_on_click"
                        data-toggle="modal"
                        data-target="#modal-fullscreen"
                        onClick={null}
                        href="#"
                      >
                        <video
                          autoPlay
                          loop="loop"
                          muted=""
                          playsInline
                          poster="video/health_new.jpg"
                          id="video_fold_2_2"
                          src="video/health_new.mp4"
                        ></video>
                      </a>
                      <h3 className="sec_head_2">
                        <a
                          className="animation video_on_click"
                          data-toggle="modal"
                          data-target="#modal-fullscreen"
                          onClick={null}
                          href="#"
                        >
                          I feel less worried about​ my Mom’s health now​
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="sec_bx video-right-corv">
                      <a
                        className="animation video_on_click"
                        data-toggle="modal"
                        data-target="#modal-fullscreen"
                        onClick={null}
                        href="#"
                      >
                        <video
                          autoPlay
                          loop="loop"
                          muted=""
                          playsInline
                          poster="video/active_new.jpg"
                          id="video_fold_2_3"
                          src="video/active_new.mp4"
                        ></video>
                      </a>
                      <h3 className="sec_head_3">
                        <a
                          className="animation video_on_click"
                          data-toggle="modal"
                          data-target="#modal-fullscreen"
                          onClick={null}
                          href="#"
                        >
                          Mom is far more active & engaged
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fold2
