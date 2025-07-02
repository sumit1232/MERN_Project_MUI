import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import NoPage from './component/Nopage/Nopage';

const App = () => {
   return (
  <>
      <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App






