import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Gallery() {
  const [slider, setslider] = useState([]);
  const fetchslide = () => {
    fetch(`${ApiUrl}/get/slidebar`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setslider(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchslide();
  }, []);

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/gallery">Gallery</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Gallery</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Gallery</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className=" mt-5">
                <img
                  src="images/subpage/event-00001.jpg"
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 sidebar">
            {slider.map((item) => (
              <div className="slidedata" key={item.id}>
                <img src={item.image} alt="" />
                <strong>{item.title} </strong>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                <br /> <br />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Gallery;