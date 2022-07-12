import * as React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import Index from './pages/Index'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
