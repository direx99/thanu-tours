import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VillaPage from './pages/VillaPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villa" element={<VillaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
