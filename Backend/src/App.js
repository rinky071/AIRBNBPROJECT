import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Home from './component/home';
import Employeelist from './component/Employeelist';
import EmployeeAdd from './component/EmployeeAdd';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
     <Sidebar />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
        <Route path="/employeelist" element={<Employeelist />} />
        <Route path="/addemployee" element={<EmployeeAdd />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
