import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import NoPage from './component/Nopage/Nopage';
import All_Projects from './pages/All_Projects';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import Add_Projects from './pages/Add_Projects';
import Estimate from './pages/Estimate';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
   return (
  <>
      <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />

        <Route path="/allprojects" element={<All_Projects />} />
        <Route path="/addprojects" element={<Add_Projects />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/projectdetails" element={<ProjectDetails/>} />




        <Route path="/allprojects" element={<All_Projects />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App






