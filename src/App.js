import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import UR from "./components/UR";
import Footer from "./components/Footer";


function App() {
  return (
      <div className="container">
          <Home></Home>
          <Navbar></Navbar>
          <UR></UR>
          <Footer></Footer>
      </div>
  );
}

export default App;
