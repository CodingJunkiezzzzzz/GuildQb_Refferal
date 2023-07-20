import React from 'react'
import "./Reward_sec.css"
import { FaWallet } from "react-icons/fa";
import Header from '../Header/Header';
import Reward_slider from '../Reward_slider/Reward_slider';


function Reward_sec() {
  return (
    <div>
      <div className='container-fluid rwd_back px-0'>
        <div className="row frPad">
          <div className="col-lg-7 col-md-7 title_upper">
            <div className='titles_upprLayyer'>
              <h1 className="main_titleLayer ">Refer a friend to GuildQB <br className='rk' /> and earn rewards!</h1>
              <h5 className='subtitle'>You’ll both earn Discord Supporter Role! And more for you to explore.</h5>
              <div className='d-flex justify-content-start'>
              <button className='reward_but'><FaWallet className="walletReward me-2"/>Connect wallet</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row exclusivemainUpper  justify-content-center rec">
          <div className="col-lg-7">
            <div className="exclusive_titleupper">
              <h1 className='exclusive_title'>Win GuildQB Exclusive <br /> Rewards for Referrals!</h1>
              <h5 className='exclu_subtitle'>Earn 1 point for every friend who installs GuildQB and your friend will get 1 <br className='rk3'/> point too. Get different kinds of rewards with your points.</h5>
            </div>
          </div>
        </div>

        <div className="row rec sldr_colorTab ">
          <div className="col-lg-12 pb-5 larglaptb">
            <Reward_slider/>
          </div>
        </div>
        
      </div>

      
      <div className="container-fluid mobile_prt d-block d-md-none">
      <div className="row exclusivemainUpper  justify-content-center ">
          <div className="col-lg-7">
            <div className="exclusive_titleupper">
              <h1 className='exclusive_title'>Win GuildQB Exclusive <br className='hod' /> Rewards for Referrals!</h1>
              <h5 className='exclu_subtitle'>Earn 1 point for every friend who installs GuildQB and your friend will get 1 <br className='rk3'/> point too. Get different kinds of rewards with your points.</h5>
            </div>
          </div>
        </div>

        <div className="row  sldr_colorTab ">
          <div className="col-lg-12 pb-5">
            <Reward_slider/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Reward_sec
