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

import Calendar from "./pages/Calendar";

import NewsLetter from "./pages/NewsLetter";

import VocationPromotion from "./pages/vocationpromotion";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";

import Ranipet from "./pages/community/Ranipet";
import Jolarpet from "./pages/community/Jolarpet";
import Yercaud from "./pages/community/Yercaud";
import Chilakaluripet from "./pages/community/Chilakaluripet";
import Yelagiri from "./pages/community/Yelagiri";
import Madurai from "./pages/community/Madurai";
import Thirupattur from "./pages/community/Thirupattur";
import Perambur from "./pages/community/Perambur";
import Kanapparu from "./pages/community/Kanapparu";
import Kadakkal from "./pages/community/Kadakkal";
import Perumon from "./pages/community/Perumon";

import Vilathikulam from "./pages/community/vilathikulam";
import Vinayagapuram from "./pages/community/vinayagapuram";
import Ammoor from "./pages/community/ammoor";
import Puliampatty from "./pages/community/puliampatty";
import Gummidipoondi from "./pages/community/gummidipoondi";
import Mugandanur from "./pages/community/mugandanur";
import Kizhakkambalam from "./pages/community/kizhakkambalam";
import Ponnapally from "./pages/community/ponnapally";
import Periakottai from "./pages/community/periakottai";
import Dindigul from "./pages/community/dindigul";
import Muttom from "./pages/community/muttom";
import Eventscelebrations from "./pages/footerpage/eventscelebrations";
import Obitury from "./pages/footerpage/obituary";
import OverseasMission from "./pages/footerpage/overseasmission";
import SCBAssociates from "./pages/footerpage/scbassociates";
import Statistics from "./pages/footerpage/statistics";
import SignificantDates from "./pages/footerpage/significantdates";
import Location from "./pages/footerpage/location";
import Videos from "./pages/footerpage/videos";
import NewsEvents from "./pages/NewsEvents";
import ProvincialProgram from "./pages/ProvincialProgram";

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
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/general-administration" element={<Administration />} />

        <Route path="/ranipet" element={<Ranipet />} />
        <Route path="/jolarpet" element={<Jolarpet />} />
        <Route path="/yercaud" element={<Yercaud />} />
        <Route path="/chilakaluripet" element={<Chilakaluripet />} />
        <Route path="/yelagiri" element={<Yelagiri />} />
        <Route path="/madurai" element={<Madurai />} />
        <Route path="/thirupattur" element={<Thirupattur />} />
        <Route path="/perambur" element={<Perambur />} />
        <Route path="/kanapparu" element={<Kanapparu />} />
        <Route path="/kadakkal" element={<Kadakkal />} />
        <Route path="/perumon" element={<Perumon />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/cosaf" element={<Cosaf />} />
        <Route path="/fac" element={<Fac />} />
        <Route path="/msp" element={<Msp />} />
        <Route path="/ecep" element={<Ecep />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/candidacy" element={<Candidacy />} />
        <Route path="/postulancy" element={<Postulancy />} />
        <Route path="/novitiate" element={<Novitiate />} />
        <Route path="/juniorate" element={<Juniorate />} />
        <Route path="/vocation-promotion" element={<VocationPromotion />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vilathikulam" element={<Vilathikulam />} />
        <Route path="/vinayagapuram" element={<Vinayagapuram />} />
        <Route path="/ammoor" element={<Ammoor />} />
        <Route path="/puliampatty" element={<Puliampatty />} />
        <Route path="/gummidipoondi" element={<Gummidipoondi />} />
        <Route path="/mugandanur" element={<Mugandanur />} />
        <Route path="/kizhakkambalam" element={<Kizhakkambalam />} />
        <Route path="/ponnapally" element={<Ponnapally />} />
        <Route path="/periakottai" element={<Periakottai />} />
        <Route path="/dindigul" element={<Dindigul />} />
        <Route path="/muttom" element={<Muttom />} />

        <Route
          path="/events-and-celebrations"
          element={<Eventscelebrations />}
        />
        <Route path="/obitury" element={<Obitury />} />
        <Route path="/overseas-mission" element={<OverseasMission />} />
        <Route path="/scb-associates" element={<SCBAssociates />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/significant-dates" element={<SignificantDates />} />
        <Route path="/location" element={<Location />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/provincial-programs" element={<ProvincialProgram />} />
      </Routes>
    </>
  );
}

export default App;
