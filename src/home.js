import { useEffect, useState } from "react";
import About from "./components/about";
import Churchstatic from "./components/churchstatic";
import Footer from "./components/footer";
import Header from "./components/header";
import Ourstatic from "./components/ourstatic";
import Scrollbar from "./components/scrollbar";
import Slider from "./components/slider";
import Testimonials from "./components/testimonials";
import Upcoming from "./components/upcoming";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      {isMobile ? null : <Scrollbar />}
      <About />
      <Ourstatic />
      {isMobile ? null : <Churchstatic />}
      <Upcoming />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
