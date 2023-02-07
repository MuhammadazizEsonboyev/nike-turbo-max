import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import EditPage from "./components/EditPage";
import GetData from "./components/GetData/GetData";
import Header from "./components/Header/Header";
import NavbarFunc from "./components/Navbar";




function App() {



  return (
   <>
  <Router>
   <NavbarFunc/>
    <Routes>
      <Route path="/home" element={<Header />} />
      <Route path="/result" element={<GetData />} />
      <Route path="/result/edit/:id" element={<EditPage />} />
    </Routes>
  </Router>

  
   </>
  );
}

export default App;
