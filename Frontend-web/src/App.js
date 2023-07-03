import './App.css';
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Farmers from './pages/Farmers';
import LogReg from './pages/LogReg';
import Farmer from './pages/Farmer';
import BuyTogether from './pages/BuyTogether';
import Signup from './components/Signup';
import PhoneSignUp from './pages/PhoneSignUp';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home2 from './pages/Home2';
import { useState } from 'react';
import Track from './pages/Track';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {

  const [loggedin, setloggedin] = useState({
    isloggedin: false,
    user: null,
  })

  return (
    <div className="App">
    <div className="logoimg">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt=""
          style={{ width: "12rem", height: "6rem" }}
        />
      </div>
   <Navbar loggedin={loggedin} setloggedin={setloggedin}></Navbar>
   <UserAuthContextProvider>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product/:name' element={<Product/>}></Route>
    <Route path='/farmers' element={<Farmers/>}></Route>
    <Route path='/logreg' element={<LogReg loggedin={loggedin} setloggedin={setloggedin}/>}></Route>
    <Route path='/farmer/:name' element={<Farmer/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/buyTogether/:type' element={<BuyTogether/>}></Route>
    <Route path='/phonesignup' element={<PhoneSignUp loggedin={loggedin} setloggedin={setloggedin}/>}></Route>
    <Route path='/panorama' element={<Home2 loggedin={loggedin}/>}></Route>
    <Route path='/track' element={<Track loggedin={loggedin}/>}></Route>
   </Routes>
   </UserAuthContextProvider>
 
    </div>
  );
}

export default App;
