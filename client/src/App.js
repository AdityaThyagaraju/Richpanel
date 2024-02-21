import React from "react";
import { useState, createContext, useContext } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserContext from "./context/User";
import Agent from "./pages/Agent";
import PageIntegration from "./pages/PageIntegration";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="text-gray-700">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Agent" element={<Agent />}></Route>
            <Route path="/Integrate" element={<PageIntegration />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
