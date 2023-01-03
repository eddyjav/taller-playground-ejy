import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import ImcCalc from './Pages/ImcCalc';
import AgeCalc from './Pages/AgeCalc';
import Clock from './Pages/Clock';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imccalc' element={<ImcCalc />} />
          <Route path='/agecalc' element={<AgeCalc />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />    
    </BrowserRouter>   
    </>    
  );
}

export default App;
