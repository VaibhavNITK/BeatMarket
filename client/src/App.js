import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import SongsPage from "./pages/SongsPage";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
// import { SongProvider } from "./contexts/SongContext";

import "./App.css";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="home" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="producers/:id" element={<SongsPage />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}



