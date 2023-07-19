import React from 'react'
import "./Reward_sec.css"
import { FaWallet } from "react-icons/fa";
import Header from '../Header/Header';


function Reward_sec() {
  return (
    <div>
      <div className='container-fluid rwd_back px-0'>
        <Header/>
        <div className="row ">
          <div className="col-lg-7 title_upper">
            <div >
              <h1 className="main_titleLayer ">Refer a friend to GuildQB <br className='rk' /> and earn rewards!</h1>
              <h5 className='subtitle'>You’ll both earn Discord Supporter Role! And more for you to explore.</h5>
              <div className='d-flex justify-content-start'>
              <button className='reward_but'><FaWallet className="walletReward me-2"/>Connect wallet</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row exclusivemainUpper  justify-content-center">
          <div className="col-lg-7">
            <div className="exclusive_titleupper">
              <h1 className='exclusive_title'>Win GuildQB Exclusive <br /> Rewards for Referrals!</h1>
              <h5 className='exclu_subtitle'>Earn 1 point for every friend who installs GuildQB and your friend will get 1 point too. Get different kinds of rewards with your points.</h5>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Reward_sec
