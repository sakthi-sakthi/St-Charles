import Home from "./home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mhouse from "./pages/Mhouse";
import Founder from "./pages/founder";
import ProvincialCouncil from "./pages/provincialcouncil";

import History from "./pages/history";
import Motto from "./pages/motto";
import Administration from "./pages/administration";

import Calendar from "./pages/Calendar";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motherhouse" element={<Mhouse />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/provincial-council" element={<ProvincialCouncil />} />

        <Route path="/history" element={<History />} />
        <Route path="/the-motto-of-the-province" element={<Motto />} />
        <Route path="/general-administration" element={<Administration />} />

        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </>
  );
}

export default App;
