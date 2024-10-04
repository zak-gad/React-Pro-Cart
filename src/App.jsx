
import { Routes, Route} from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";


// Components: *********************************************
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AboutUs  from "./components/AboutUs";
import Contact from "./components/Contact";



// Cart contex: 

export const Kart = createContext()

function App() {

  const [cart, setCart] = useState([])

  return (
    <Kart.Provider value={[cart, setCart]}>
      <NavBar />

      <Routes>
        <Route index element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact />}/>
       
      </Routes>
    </Kart.Provider>
  );
}

export default App;
