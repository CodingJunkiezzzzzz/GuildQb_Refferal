import React from "react";
import "./Already_ref.css";
import lf from "../Assets/lf.svg";
import lK from "../Assets/b.png";
import lb from "../Assets/a.png";
import { FaWallet } from "react-icons/fa";

export default function Already_ref() {
  return (
    <div className="alredy_ref_main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="box_ref   jojo">
              <div className="circlu"></div>
              <h1>
                Already referred? <br />
                Connect wallet to see your rewards and <br /> get more rewards!
              </h1>

              <div className="mt-5 ">
                <button className="btn waletbtn poniter">
                  {" "}
                  <FaWallet /> <span className="some"> Connect wallet</span>
                </button>
              </div>

              <img src={lf} className="lin lim" alt="" />
              <img src={lb} className="lie" alt="" />
              <img src={lK} className="lia" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
