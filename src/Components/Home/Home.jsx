import React, { useState } from 'react'
import Header_two from '../Header_two/Header_two'
import Header from '../Header/Header'
import Reward_sec from '../Reward_sec/Reward_sec'
import Tablle from '../Tablle/Tablle'
import How_it_work_two from '../How_it_work_two/How_it_work_two'
import How_it_work from '../How_it_work/How_it_work'
import Already_ref from '../Already_ref/Already_ref'
import ReferFQ from '../ReferFQ/ReferFQ'
import Footer from '../Footer/Footer'

const Home = ({collection}) => {

    

  return (
    <div>
      
      {/* <Reffereal_main /> */}
      <Reward_sec />
      <Tablle />
      {collection == 0 ? (
        <>
          <How_it_work_two />
        </>
      ) : (
        <>
          <How_it_work />
        </>
      )}

      <Already_ref />
      <ReferFQ />
      {/* <FAQ /> */}
    </div>
  )
}

export default Home
