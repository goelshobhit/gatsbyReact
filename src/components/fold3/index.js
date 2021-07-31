import React from "react"
import './style.css';

function Fold3() {
  return (
    <div className="fold_3">
      <div className="fold_3_left">
        <video
          autoPlay
          loop="loop"
          muted=""
          playsInline
          poster="video/fold_1.jpg"
          id="video_fold_5"
          src="video/fold_3_1.mp4"
        />
        <a
          style={{ bottom:'2px' }}
          href="#;"
          onClick={null}
          className="sound_btn"
          id="onsound_2"
        >
          <i id="changesound_2" className="fa fa-volume-off"></i>
        </a>
      </div>
      <div className="fold_3_right">
        <div className="fold_3_text">
          <h2>Emoha</h2>
          <p>
            Mom is far more active & engaged
            <br />
            Click to see how Emoha helped my Mom while I was miles away.
          </p>
          <a href="#">Get Enrolled</a>
        </div>
      </div>
    </div>
  )
}

export default Fold3;