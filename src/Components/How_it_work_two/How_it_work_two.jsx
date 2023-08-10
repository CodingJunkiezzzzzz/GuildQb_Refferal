import React from "react";
import "./How_it_work.css";
import icon from "../Assets/green.svg";
import Wallet from "../Assets/wallet_icon.svg";
import discord from "../Assets/discord.svg";
import twi from "../Assets/twitter.svg";
import iconn from "../Assets/link.svg";
import { useTranslation } from "react-i18next";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { Link } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";

export default function How_it_work_two({Add_Follower,isFollow}) {
  const { t } = useTranslation();
  const { open, close } = useWeb3Modal();

  const { address } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();

  return (
    <div className="main_how_work">
      <h1 className="work_content_h1">How it works?</h1>
      <div className="work_contentt">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="main_content_box ">
                <h1 className="mb_mb">01</h1>
                <div className="left_bor_content">
                  <h4>{t("Connect your wallet")}</h4>
                  <p>
                    {t(
                      "Go to the Refer a Friend page and connect your wallet."
                    )}
                  </p>
                  {address?.startsWith("0x") ? (
                    <button className="conecctedWalte">
                      {`${address?.substring(0, 6)}...${address?.substring(
                        address?.length - 4
                      )}`}{" "}
                      <img src={icon} alt="" />
                    </button>
                  ) : (
                    <button
                      className="connect_wallet_hw"
                      onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }
                    >
                      {" "}
                      <img src={Wallet} alt="" /> connect wallet
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>02</h1>
                <div className="left_bor_content">
                  <h5>
                    ① {t("Follow")}{" "}
                    <a
                      className="text-decoration-underline text-white"
                      target="_blank"
                      href="https://twitter.com/GuildQB"
                     onClick={()=>Add_Follower("twitter")}
                    >
                      {" "}
                      {t("GuildQB's official")} {t("Twitter")}{" "}
                    </a>
                   
                   
                    {
                      isFollow && isFollow?.twitter_Follow==true && <><img src={icon} alt="" className="mx-2" /></>
                      
                    }
                    
                  </h5>
                  <h5>
                    {t("② Retweet the")}{" "}
                    <a
                      className="text-decoration-underline text-white"
                      target="_blank"
                      href="https://twitter.com/guildqb/status/1680093793956270080?s=46&t=uvRkGhFIpkzzPVj8jAkdig"
                     onClick={()=>Add_Follower("post")}
                    >
                      {" "}
                      {t("designated post")}
                    </a>
                  
                    {
                    isFollow &&  isFollow?.Post_Follow==true && <><img src={icon} alt="" className="mx-2" /></>
                    }
                  </h5>
                  <h5>
                    ③ {t("Follow the")}{" "}
                    <a
                      className="text-decoration-underline text-white"
                      target="_blank"
                      href="https://discord.com/invite/BNjFBTgpMt"
                     onClick={()=>Add_Follower("discord")}
                    >
                      {" "}
                      {t("official GuildQB Discord")}{" "}
                    </a>
                    {
                     isFollow && isFollow?.discord_Follow==true && <><img src={icon} alt="" className="mx-2" /></>
                    }
                  </h5>
                  <div className="two_btn flex-column flex-md-row d-flex gap-4">
                    <a
                      href="https://discord.com/invite/BNjFBTgpMt"
                     onClick={()=>Add_Follower("discord")}
                      className="text-decoration-none text-white"
                    >
                      <button className="dis_btn">
                        {" "}
                        <img src={discord} alt="" />{" "}
                        <small className="ps-1">Username </small>
                      </button>
                    </a>
                    <a
                      href="https://twitter.com/GuildQB"
                     onClick={()=>Add_Follower("twitter")}
                      className="text-decoration-none text-white"
                    >
                      <button className="dis_btn">
                        {" "}
                        <img src={twi} alt="" />{" "}
                        <small className="ps-1">Username </small>
                      </button>
                    </a>
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
                  <h4>{t("Share your referral link with friends")}</h4>
                  <p>
                    {t(
                      "Invite your friends by sharing your personal referral link."
                    )}
                  </p>
                  {address?.startsWith("0x") && (
                    <>
                      <Link
                        className="text-decoration-none"
                        to="/Refferal_main"
                      >
                  
                        <button disabled={isFollow &&  isFollow?.discord_Follow==true && isFollow?.twitter_Follow==true && isFollow?.Post_Follow == true ? false:true }  style={{cursor:(isFollow &&  isFollow?.discord_Follow==true && isFollow?.twitter_Follow==true && isFollow?.Post_Follow == true ? "pointer":"no-drop")}} className="connect_wallet_hw">
                          {" "}
                          <img src={iconn} alt="" /> Share link
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 ">
              <div className="main_content_box ">
                <h1>04</h1>
                <div className="left_bor_content">
                  <h4>{t("Invite friends to use GuildQB")}</h4>
                  <p>
                    {t(
                      "Ask your friends using the link you shared. Once they complete the follow steps, you will both be rewarded with GuildQB points."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 ">
              <div className="main_content_box ">
                <h1>05</h1>
                <div className="left_bor_content">
                  <h4>{t("Get rewarded")}</h4>
                  <p>
                    {t(
                      "Enjoy a reward for you and each of the friends you refer. You can continue to earn points by referring your friends and accumulate your points to get better rewards!"
                    )}
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
