import React from "react";
import "./home.css";
//import img3 from "./component/assets/img3.jpg";
import img3 from "../../assets/img3.jpg";
import img2 from "../../assets/img2.jpg";
import img15 from "../../assets/img15.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img4 from "../../assets/img4.jpg";
function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(
      "reveal"
      /*".reveal_heading, .reveal, .reveal_2, .reveal_3, .reveal_4, .reveal_5"*/
    );

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    // <>
    <div className="container home">
      <div className="row gx-0 d-flex homeContent">
        <div className="col-6">
          <span className="textDiv d-block" style={{ fontSize: "86px;" }}>
            Engineering{" "}
          </span>
          <span className="textDiv" style={{ fontSize: "56px;" }}>
            Redefind
          </span>
          <h6>Seasoned Technopreneurs, Pioneering Software Solutions </h6>
        </div>
        <div class8remName="col-6 imgSection">
          <img src={img2} class="rounded float-end" alt="" />
        </div>
      </div>
      {/* MiddleSection */}
      <h1 className="textDiv homeText d-flex justify-content-center mt-5">
        Our Services
      </h1>
      <div className="row gx-0 d-flex middleSection mt-5">
        <div className="col-12 d-flex ">
          <div className="midImg col-6 mt-4 reveal">
            <img src={img15} class="service_img" alt="" />
          </div>
          <div className="col-6 reveal">
            <h4
              className="textDiv mt-lg-5 pt-lg-5"
              style={{ fontSize: "32px;" }}
            >
              Semiconductor
            </h4>
            <h6 d-block>
              Our top-notch, tailor-made softwareproducts simplify collaboration
              onintricate tasks, enhancing efficiency andingenuity.
            </h6>
          </div>
        </div>
      </div>
      <div className="row gx-0 middleSection mt-lg-5">
        <div className="col-12 d-flex">
          <div
            className="col-6 "
            style={{ top: "100px", position: "relative" }}
          >
            <h4 className="textDiv mt-lg-3 pt-lg-5">Telecom</h4>
            <h6>
              Our top-notch, tailor-made softwareproducts simplify collaboration
              onintricate tasks, enhancing efficiency andingenuity.
            </h6>
          </div>
          <div className="col-6 midImg tele">
            <img src={img13} class="service_img" alt="" />
          </div>
        </div>
      </div>

      <div className="row gx-0 middleSection mt-5 mb-5">
        <div className="col-12 d-flex">
          <div className="midImg col-6 mt-4">
            <img src={img14} class="service_img" alt="" />
          </div>
          <div className="col-6" style={{ top: "180px", position: "relative" }}>
            <h4 className="textDiv">Automotive</h4>
            <h6>
              Our top-notch, tailor-made softwareproducts simplify collaboration
              onintricate tasks, enhancing efficiency andingenuity.
            </h6>
          </div>
        </div>
      </div>

      <h1 className="textDiv homeText lastDiv d-flex  mt-5">Our Partners</h1>

      <div class="row align-item-center d-flex mt-5">
        <div className="col-4 myCard rounded" style={{}}>
          <div class="card cardView">
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

        <div className="col-4">
          <div class="card cardView">
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
        <div className="col-4">
          <div class="card cardView">
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
      {/* <div className="animationSection"> */}

      {/* </div> */}
    </div>
    //{" "}
  );
}

export default Home;
