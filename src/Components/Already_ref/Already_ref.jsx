import React from 'react'
import "./Already_ref.css"
import lf from "../Assets/lf.svg"

export default function Already_ref() {
  return (
    <div className='alredy_ref_main'>
    <div className="container">
    <div className="row justify-content-center">

        <div className="col-md-10">
            <div className="box_ref">
            <div className="circlu">
                
            </div>
                <h1>Already referred? <br />
Connect wallet to see your rewards and <br /> get more rewards!</h1>
<img src={lf} className='lin' alt="" />
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
