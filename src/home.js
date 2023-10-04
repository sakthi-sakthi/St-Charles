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
  return (
    <>
      <Header />
      <Slider />
      <Scrollbar />
      <About />
      <Ourstatic />
      <Churchstatic />
      <Upcoming />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
