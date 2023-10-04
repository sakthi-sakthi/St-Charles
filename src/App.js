import Home from "./home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Mhouse from "./pages/Mhouse";
import Founder from "./pages/founder";
import ProvincialCouncil from "./pages/provincialcouncil";
import History from "./pages/history";
import Motto from "./pages/motto";
import Administration from "./pages/administration";
import Cosaf from "./pages/cosaf";
import Fac from "./pages/fac";
import Msp from "./pages/msp";
import Ecep from "./pages/ecep";
import Formation from "./pages/formation";
import Candidacy from "./pages/candidacy";
import Postulancy from "./pages/postulancy";
import Novitiate from "./pages/novitiate";
import Juniorate from "./pages/juniorate";

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
        <Route path="/cosaf" element={<Cosaf />} />
        <Route path="/fac" element={<Fac />} />
        <Route path="/msp" element={<Msp />} />
        <Route path="/ecep" element={<Ecep />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/candidacy" element={<Candidacy />} />
        <Route path="/postulancy" element={<Postulancy />} />
        <Route path="/novitiate" element={<Novitiate />} />
        <Route path="/juniorate" element={<Juniorate />} />
      </Routes>
    </>
  );
}

export default App;
