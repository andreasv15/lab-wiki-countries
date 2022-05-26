import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />

      <br />


      <div className="d-flex justify-content-around">
        <CountriesList />

        <Routes>
          <Route path="/:alpha3Code" element={ <CountryDetails /> } />
        </Routes>
      </div>

    </div>
  );
}

export default App;
