import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ReferFQ from './Components/ReferFQ/ReferFQ';
import Tablle from './Components/Tablle/Tablle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tablle />
      <ReferFQ />
      <Footer />
    </div>
  );
}

export default App;
