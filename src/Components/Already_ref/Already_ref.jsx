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
import { useBalance, useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

export default function Already_ref() {
  const { t } = useTranslation();

  const { open, close } = useWeb3Modal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();

  return (
    <div className="alredy_ref_main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="box_ref   jojo">
              <div className="circlu"></div>
              <h1>
                {t("Already referred?")} <br />
                {t("Connect wallet to see your rewards and")} <br />{" "}
                {t("get more rewards!")}
              </h1>

              <div className="mt-5 ">
              {chain?.id == chains[0]?.id ? (
                  address ? (
                    <>
                      <button className="btn waletbtn poniter">
                  {" "}
                  <FaWallet className="me-2" />{" "}
                  <span className="some">  {`${address.substring(0, 6)}...${address.substring(
                              address.length - 4
                            )}`}</span>
                </button>
                    </>
                  ) : (
                    <>
                    <button className="btn waletbtn poniter" onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }>
                  {" "}
                  <FaWallet className="me-2" />{" "}
                  <span className="some"> Connect wallet</span>
                </button>
                    {/* <div className="d-flex justify-content-center">
                    <button className="reward_but" onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }>
                      <FaWallet className="walletReward me-2" />
                      Connect wallet
                    </button>
                  </div> */}
                    </>
                  )
                ) : (
                  <>
                  <div className="d-flex justify-content-center">
                    <button className="reward_but" onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }>
                      <FaWallet className="walletReward me-2" />
                      {chain?.id == chains[0]?.id ? (
                        address ? (
                          <>
                            {`${address.substring(0, 6)}...${address.substring(
                              address.length - 4
                            )}`}{" "}
                          </>
                        ) : (
                          <>
                          <button className="btn waletbtn poniter" onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }>
                  {" "}
                  <FaWallet className="me-2" />{" "}
                  <span className="some"> Connect wallet</span>
                </button>
                          </>
                        )
                      ) : (
                        "Switch NetWork"
                      )}
                    </button>
                  </div>
                  </>
                )}
                
              </div>

              <img src={Mask} className="position-absolute mask" alt="" />
              <img
                src={Mask_tab}
                className="position-absolute Mask_tab"
                alt=""
              />
              <img
                src={Mask_mob}
                className="position-absolute Mask_mob"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
