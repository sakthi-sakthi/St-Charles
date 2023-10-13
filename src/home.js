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
    <div>
      <Header />
      <Slider />
      <Scrollbar />
      <About />
      <Ourstatic />
      <Churchstatic />
      <Upcoming />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
