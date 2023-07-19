import './App.css';
import Already_ref from './Components/Already_ref/Already_ref';
import FAQ from './Components/FAQ/FAQ';
import Header from './Components/Header/Header';
import How_it_work from './Components/How_it_work/How_it_work';
import How_it_work_two from './Components/How_it_work_two/How_it_work_two';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <How_it_work/> */}
      {/* <How_it_work_two/> */}
      <FAQ/>
    </div>
  );
}

export default App;
