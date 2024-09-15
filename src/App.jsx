import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


function App() {

  return (
   <div>
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Service />} />
    </Routes>
    </Router>
   </div>
  )
}

export default App;
