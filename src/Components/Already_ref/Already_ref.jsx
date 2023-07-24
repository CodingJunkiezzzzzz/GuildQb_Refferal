import React from "react";
import "./Already_ref.css";
import lf from "../Assets/lf.svg";
import lK from "../Assets/b.png";
import lb from "../Assets/a.png";
import Mask from "../Assets/Mask.png";
import Mask_tab from "../Assets/Mask_tab.png";
import Mask_mob from "../Assets/Mask_mob.png";
import { FaWallet } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Already_ref() {
  const {t} = useTranslation();
  return (
    <div className="alredy_ref_main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="box_ref   jojo">
              <div className="circlu"></div>
              <h1>
                {t('Already referred?')} <br />
                {t('Connect wallet to see your rewards and')} <br /> {t('get more rewards!')}
              </h1>

              <div className="mt-5 ">
                <button className="btn waletbtn poniter">
                  {" "}
                  <FaWallet className="me-2"/> <span className="some"> Connect wallet</span>
                </button>
              </div>

              <img src={Mask} className="position-absolute mask" alt="" />
              <img src={Mask_tab} className="position-absolute Mask_tab" alt="" />
              <img src={Mask_mob} className="position-absolute Mask_mob" alt="" />

              {/* <img src={lf} className="lin lim" alt="" />
              <img src={lb} className="lie" alt="" />
              <img src={lK} className="lia" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
