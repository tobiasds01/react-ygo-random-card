import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import CardsTable from './components/CardsTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className='title'>Random YGO Card Generator</h1>
      <CardsTable/>
      <Footer/>
    </div>
  );
}

export default App;
