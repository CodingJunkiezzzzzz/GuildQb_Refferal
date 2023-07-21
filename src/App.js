import './App.css';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import How_it_work from './Components/How_it_work/How_it_work';
import How_it_work_two from './Components/How_it_work_two/How_it_work_two';
import ReferFQ from './Components/ReferFQ/ReferFQ';
import Reffereal_main from './Components/Reffereal_main/Reffereal_main';
import Reward_sec from './Components/Reward_sec/Reward_sec';
import Reward_slider from './Components/Reward_slider/Reward_slider';
import Tablle from './Components/Tablle/Tablle';
import Already_ref from './Components/Already_ref/Already_ref';
// import MyVerticallyCenteredModal from './Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import SelectRewards from './Components/SelectRewards/SelectRewards';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MyVerticallyCenteredModal /> */}

<SelectRewards />

<Reffereal_main />



      <Reward_sec/>
      <Tablle/>
      <How_it_work/>
      <How_it_work_two/>
      <Already_ref />
      <ReferFQ/>
      <FAQ/>
      <Footer />
    </div>
  );
}

export default App;
