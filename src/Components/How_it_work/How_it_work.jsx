import React from "react";
import "./How_it_work.css";
import icon from "../Assets/wallet_icon.svg";
import discord from "../Assets/discord.svg";
import twi from "../Assets/twitter.svg";

export default function How_it_work() {
  return (
    <div className="main_how_work">
        <h1 className="work_content_h1">How it works?</h1>
      <div className="work_content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="main_content_box ">
                <h1 className="mb_mb">01</h1>
                <div className="left_bor_content">
                  <h4>Connect your wallet</h4>
                  <p>Go to the Refer a Friend page and connect your wallet.</p>
                  <button className="connect_wallet_hw">
                    {" "}
                    <img src={icon} alt="" /> connect wallet
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1 >02</h1>
                <div className="left_bor_content">
                  <h5>
                    ① Follow{" "}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://twitter.com/smelltoken"
                      target="_blank"
                    >
                      {" "}
                      GuildQB's official Twitter{" "}
                    </a>
                  </h5>
                  <h5>
                    ② Retweet the{" "}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://twitter.com/smelltoken/status/1669676068243111937?t=9JfxdbTHSLCyDoUv4bioOQ&s=19"
                      target="_blank"
                    >
                      {" "}
                      designated post{" "}
                    </a>
                  </h5>
                  <h5>
                    ③ Follow the{" "}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://discord.com/invite/7Xxvz5FUg7"
                      target="_blank"
                    >
                      {" "}
                      official GuildQB Discord{" "}
                    </a>
                  </h5>
                  <div className="two_btn flex-column flex-md-row d-flex gap-4">
                    <button className="dis_btn">
                      <img src={discord} alt="" /> <small>Connect </small>
                    </button>
                    <button className="dis_btn">
                      <img src={twi} alt="" /> <small>Connect </small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="main_content_box ">
                <h1>03</h1>
                <div className="left_bor_content">
                  <h4>Share your referral link with friends</h4>
                  <p>
                    Invite your friends by sharing your personal referral link.
                  </p>
                  {/* <button className="connect_wallet_hw"> <img src={icon} alt="" /> connect wallet</button> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>04</h1>
                <div className="left_bor_content">
                <h4>Invite friends to use GuildQB</h4>
                  <p>
                  Ask your friends using the link you shared. Once they complete the follow steps, you will both be rewarded with GuildQB points.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>05</h1>
                <div className="left_bor_content">
                <h4>Get rewarded</h4>
                  <p>
                  Enjoy a reward for you and each of the friends you refer. You can continue to earn points by referring your friends and accumulate your points to get better rewards!
                  {/* Ask your friends using the link you shared. Once they complete the follow steps, you will both be rewarded with GuildQB points. */}
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
