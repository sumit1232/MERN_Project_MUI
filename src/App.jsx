import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import NoPage from './component/Nopage/Nopage';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
// Project Details
import All_Projects from './pages/ProjectPages/All_Projects';
import Add_Projects from './pages/ProjectPages/Add_Projects';
import Estimate from './pages/ProjectPages/Estimate';
import ProjectDetails from './pages/ProjectPages/ProjectDetails';
// Employee Pages
import AddEmployees from './pages/EmployeePages/AddEmployees';
import AllEmployees from './pages/EmployeePages/AllEmployees';
import EditEmployees from './pages/EmployeePages/EditEmployees';
import EmployeeProfile from './pages/EmployeePages/EmployeeProfile';
import Employeeshift from './pages/EmployeePages/Employeeshift';

const App = () => {
   return (
  <>
      <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
{/* Project page Routes */}
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />

{/* Project Page Routes */}
        <Route path="/allprojects" element={<All_Projects />} />
        <Route path="/addprojects" element={<Add_Projects />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/projectdetails" element={<ProjectDetails/>} />

{/* Employee page routes */}
        <Route path="/addemployee" element={<AddEmployees />} />
        <Route path="/allemployees" element={<AllEmployees />} />
        <Route path="/editemplyee" element={<EditEmployees />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/employeeshift" element={<Employeeshift />} />




        <Route path="/allprojects" element={<All_Projects />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App






