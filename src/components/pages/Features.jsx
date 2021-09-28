import React from "react";
import web from "../images/image8.png";

const Features = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">FEATURES</h1>
      <div className="container contact_div" style={{ marginTop: 20 }}>
        <div
          className="col-md-12 order-2 order-lg-2 d-flex justify-content-center flex-row"
          style={{ marginTop: 50 }}
        >
          <div
            className="col-md-4 order-2 order-lg-2 d-flex justify-content-left flex-column"
            style={{ paddingRight: 70, paddingTop: 140 }}
          >
            <h3 className="text-center">2. ProRAW Camera</h3>
            <p>
              When you next want to snap some pics, turn on the raw camera
              setting.
            </p>
            <h3 className="text-center">3. MagSafe Charging</h3>
            <p>
              These chargers attach to the back of the phone with a magnet, so
              you can just click and charge.{" "}
            </p>
            <h3 className="text-center">4. Back Tap</h3>
            <p>
              This feature enables you to double tap on the back of the phone
              and link it to a specific command,{" "}
            </p>
          </div>

          <div className="col-md-4 order-2 order-lg-2 d-flex justify-content-center flex-column">
            <h3 className="text-center">1. Camera and Microphone Use Icons</h3>
            <p>
              This is a cool feature for those interested in privacy and
              security.
            </p>
            <img src={web}></img>
            <h3 className="text-center" style={{ paddingTop: 30 }}>
              5. Alternative Face ID Settings
            </h3>
            <p>
              You can now get your phone to recognize their face as well as your
              own to unlock it.{" "}
            </p>
          </div>
          <div
            className="col-md-4 order-2 order-lg-2 d-flex justify-content-center flex-column"
            style={{ paddingLeft: 70 }}
          >
            <h3 className="text-center">8. Reading Modes</h3>
            <p>
              Click the ‘AA’ icon next to the URL you’re on in the browser app
              to go into reading mode
            </p>
            <h3 className="text-center">7. Bottom Line</h3>
            <p>
              The iPhone 12 Pro Max is by far the most customizable iPhone ever.
            </p>
            <h3 className="text-center">6.Change Default Browser</h3>
            <p>
              Not a fan of Safari? No problem. You can change your default
              browser to your favorite one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
