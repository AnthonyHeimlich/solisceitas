import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import UR from "./components/UR";
import NU from "./components/NU"
import Footer from "./components/Footer";


function App() {
  return (
      <div className="container">
          <Routes>
              <Route path='/' element={[<Navbar/>,<Home/>,<UR/>,<NU/>,<Footer/>]}/>
              <Route path='/ur' element={<UR/>}/>
          </Routes>
      </div>

  );
}

export default App;
