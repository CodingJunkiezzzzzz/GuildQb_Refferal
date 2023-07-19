import './App.css';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import How_it_work from './Components/How_it_work/How_it_work';
import How_it_work_two from './Components/How_it_work_two/How_it_work_two';
import ReferFQ from './Components/ReferFQ/ReferFQ';
import Tablle from './Components/Tablle/Tablle';

function App() {
  return (
    <div className="App">
      <Header/>
      <How_it_work/>
      <How_it_work_two/>
      <FAQ/>
      <ReferFQ/>
      <Tablle/>
    </div>
  );
}

export default App;
