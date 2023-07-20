import './App.css';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import How_it_work from './Components/How_it_work/How_it_work';
import How_it_work_two from './Components/How_it_work_two/How_it_work_two';
import ReferFQ from './Components/ReferFQ/ReferFQ';
import Reward_sec from './Components/Reward_sec/Reward_sec';
import Tablle from './Components/Tablle/Tablle';
import Already_ref from './Components/Already_ref/Already_ref';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}


      {/* <Reward_sec/> */}
      {/* <How_it_work/> */}
      {/* <How_it_work_two/> */}
      {/* <FAQ/> */}
      <Tablle/>
      <Already_ref />
      <ReferFQ/>
      <Footer />
    </div>
  );
}

export default App;
