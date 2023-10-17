import React from "react";
import "./home.css";
//import img3 from "./component/assets/img3.jpg";
import img2 from "../../assets/img2.jpg";
import img15 from "../../assets/img15.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img4 from "../../assets/img4.jpg";
import unused1 from "../../assets/unused1.webp";
import unused2 from "../../assets/unused2.webp";
// import React, { useState, useEffect } from "react";

function Home() {
  return (
    // <div>
    <div className="container-fluid home">
      <div className="container hero d-flex ">
        <div className="row gx-0 d-flex homeContent mt-5">
          <div className="col-6 d-grid">
            <span className="textDiv d-block">Engineering</span>
            <span className="textDiv">Redefined</span>
            <h6 className="homeSubSec ">
              Seasoned Technopreneurs, Pioneering Software Solutions{" "}
            </h6>
          </div>
        </div>
        <div class8remName="col-6 imgSection d-flex mt-4">
          <img
            src={unused2}
            class="rounded heroImg"
            alt=""
            style={{ width: "200px", height: "400px" }}
          />
          <img
            src={unused1}
            class="rounded heroImg"
            alt=""
            style={{ width: "285px", height: "180px" }}
          />
        </div>
      </div>

      {/* MiddleSection */}

      <div
        className="container-fluid"
        style={{ backgroundColor: " rgb(219, 219, 219)" }}
      >
        <div className="row gx-0 middleSection">
          {/* <div className="col-12 d-flex"> */}
          <h1
            className=" heading textDiv homeText d-flex justify-content-center"
            style={{ fontSize: "100" }}
          >
            Our Services
          </h1>

          <div className="row gx-0 midDiv">
            <div className="midImg col-6 mt-5">
              <img src={img15} class="service_img" alt="" />
            </div>
            <div
              className="col-6"
              style={{ top: "180px", position: "relative" }}
            >
              <h4 className="textDiv">Semiconductor</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
            {/* </div> */}
          </div>

          <div className="row gx-0 midDiv slideInRight">
            <div
              className="col-6"
              style={{ top: "180px", position: "relative" }}
            >
              <h4 className="textDiv">Telecom</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
            <div className="col-6 midImg tele">
              <img src={img13} class="service_img" alt="" />
            </div>
          </div>

          <div className="row gx-0 midDiv">
            <div className="midImg col-6 mt-4">
              <img src={img14} class="service_img" alt="" />
            </div>
            <div
              className="col-6"
              style={{ top: "180px", position: "relative" }}
            >
              <h4 className="textDiv">Automotive</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row align-item-center d-flex mt-5 testimonials">
          <h1 className="textDiv homeText lastDiv d-flex  mt-5 justify-content-center">
            Our Partners
          </h1>
          <div className="carddd">
            <div className="col-4 myCard rounded px-5 mt-5">
              <div class="card_main ">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 myCard  px-5 mt-5">
              <div class="card_main ">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 myCard px-5 mt-5">
              <div class="card_main">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
