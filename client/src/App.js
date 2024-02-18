import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Producers from "./pages/Producers";
<<<<<<< HEAD
import SongsPage from "./pages/SongsPage";
=======
import Demo from "./pages/Demo";
>>>>>>> e8ce9637bf84f4a6464a4debfe7583d93833ebf6

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="producers" element={<Producers />} />
      </Routes>
      <Demo />
    </BrowserRouter>
  );
}
