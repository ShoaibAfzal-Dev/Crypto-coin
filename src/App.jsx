import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Coin from "./Components/Coin"
import Exchange from "./Components/Exchange"
import Navbar from "./Components/Navbar"
import Coinid from "./Components/Coinid"
function App() {
  return (
     <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin" element={<Coin/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coin/:id" element={<Coinid/>}/>
       </Routes>
     </Router>

   
  );
}

export default App;
