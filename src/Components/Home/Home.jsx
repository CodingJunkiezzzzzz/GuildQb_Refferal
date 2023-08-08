import React, { useState } from "react";
import Header_two from "../Header_two/Header_two";
import Header from "../Header/Header";
import Reward_sec from "../Reward_sec/Reward_sec";
import Tablle from "../Tablle/Tablle";
import How_it_work_two from "../How_it_work_two/How_it_work_two";
import How_it_work from "../How_it_work/How_it_work";
import Already_ref from "../Already_ref/Already_ref";
import ReferFQ from "../ReferFQ/ReferFQ";
import Footer from "../Footer/Footer";
import { useAccount } from "wagmi";

const Home = ({ collection, langValue }) => {
  const { address } = useAccount();

  return (
    <div>
      <Reward_sec langValue={langValue} collection={collection} />
      <Tablle />
      {address ? (
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
    </div>
  );
};

export default Home;
