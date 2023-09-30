import About from './components/about';
import Churchstatic from './components/churchstatic';
import Footer from './components/footer';
import Header from './components/header';
import Latestevent from './components/latestevent';
import Ourstatic from './components/ourstatic';
import Scrollbar from './components/scrollbar';
import Slider from './components/slider';
import Testimonials from './components/testimonials';
import Upcoming from './components/upcoming';


function App() {
  return (
    <>
      <Header />
      <Slider />
      <Scrollbar />
      <About />
      <Ourstatic />
      <Upcoming />
      <Churchstatic />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
