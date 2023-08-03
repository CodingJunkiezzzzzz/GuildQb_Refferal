import React from "react";
import "./Reward_sec.css";
import { FaWallet } from "react-icons/fa";
import Header from "../Header/Header";
import Reward_slider from "../Reward_slider/Reward_slider";
import { useTranslation } from "react-i18next";
import badge from "../Assets/reward.svg";

function Reward_sec({ collection }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container-fluid rwd_back px-0">
        <div className="row frPad">
          <div className="col-lg-12 col-md-12 title_upper">
            <div className="titles_upprLayyer">
              <h1 className="main_titleLayer ">
                {t("Join QB Quest! ")}<br className="mob_res"/>{t("Refer a")} <br className="rk" />
                {t("friend and earn rewards!")}
              </h1>
              <h5 className="subtitle">
                {t(
                  "You’ll both earn Discord Supporter Role! And more for you to explore."
                )}
              </h5>
              {collection == 0 ? (
                <>
                  <div className="earn_btn">
                    <button className="reward_but">
                      <img src={badge} className="walletReward me-2" />
                      earn rewards
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-center">
                    <button className="reward_but">
                      <FaWallet className="walletReward me-2" />
                      Connect wallet
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="row exclusivemainUpper  justify-content-center rec">
          <div className="col-lg-7">
            <div className="exclusive_titleupper">
              <h1 className="exclusive_title">
                {t("Win GuildQB Exclusive")} <br />{" "}
                {t("Rewards for Referrals!")}
              </h1>
              <h5 className="exclu_subtitle">
                {t(
                  "Earn 1 point for every friend who installs"
                )}<br/>
                {t(
                  " GuildQB and your friend will get 1"
                )}
                <br className="rk3" /> {t("point too. Get different")}
                <br className="rk4" /> {t("kinds of rewards ")}{t("with your points.")}
              </h5>
            </div>
          </div>
        </div>

        <div className="row rec sldr_colorTab sldRmaiN">
          <div className="col-lg-12 pb-5 larglaptb sldrsecside">
            <div className="gradf"></div>
            <div className="gradf2"></div>
            <Reward_slider />
          </div>
        </div>
      </div>

      {/* <div className="container-fluid mobile_prt d-block d-md-none">
        <div className="row exclusivemainUpper  justify-content-center ">
          <div className="col-lg-7">
            <div className="exclusive_titleupper">
              <h1 className="exclusive_title">
                {t("Win GuildQB Exclusive")} <br className="hod" />{" "}
                {t("Rewards for Referrals!")}
              </h1>
              <h5 className="exclu_subtitle">
                {t(
                  "Earn 1 point for every friend who installs GuildQB and your friend will get 1"
                )}{" "}
                <br className="rk3" /> {t("point too. Get different")}{" "}
                {t("kinds of rewards with your points.")}
              </h5>
            </div>
          </div>
        </div>

        <div className="row  sldr_colorTab moblBackpurp ">
          <div className="col-lg-12 pb-5">
            <div className="gradf"></div>
            <Reward_slider />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Reward_sec;
