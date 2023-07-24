import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import How_it_work from "./Components/How_it_work/How_it_work";
import How_it_work_two from "./Components/How_it_work_two/How_it_work_two";
import ReferFQ from "./Components/ReferFQ/ReferFQ";
import Reffereal_main from "./Components/Reffereal_main/Reffereal_main";
import Reward_sec from "./Components/Reward_sec/Reward_sec";
import Reward_slider from "./Components/Reward_slider/Reward_slider";
import Tablle from "./Components/Tablle/Tablle";
import Already_ref from "./Components/Already_ref/Already_ref";
// import MyVerticallyCenteredModal from './Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import SelectRewards from "./Components/SelectRewards/SelectRewards";
import { useState } from "react";
import Header_two from "./Components/Header_two/Header_two";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [collection, setcollection] = useState();

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  return (
    <div className="App">
      {collection == 0 ? (<><Header_two /></>) : (<><Header handleButtonClick={handleButtonClick}/></>)}
      <Routes>
        <Route path="/" element={<Home collection={collection}/>} />
        <Route path="/Reffereal" element={<Reffereal_main />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
