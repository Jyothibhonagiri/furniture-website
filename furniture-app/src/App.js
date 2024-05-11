import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
   
      <Route path="/" element={<Home/>}></Route>
      <Route path="products" element={<Products/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
