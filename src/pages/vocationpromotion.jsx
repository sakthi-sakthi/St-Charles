import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function VocationPromotion() {
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
            <a href="/vocation-promotion">Vocation Promotion</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Vocation Promotion</span>
          </div>
        </div>
      </div>

      <div className="container ">
        <h3 className="heading">Vocation Promotion</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className=" mt-5">
                <img
                  src="images/subpage/priest.png"
                  style={{ width: "100%" }}
                  alt=""
                />
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src="images/subpage/call.jpg"
                      style={{ maxWidth: "100%" }}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <h6 className="jcall">Click the below button to apply </h6>
                    <p className="text-center">
                      <a
                        style={{
                          background: "green",
                          borderRadius: "5px",
                          color: "white",
                        }}
                        className="buttonjs"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdiT2ErD9MLo-d01L6a3nr6PgX3XfTFhu46mxM9ZBUtfjg5XA/viewform?usp=sf_link"
                        target="_blank"
                        rel="noopener noreferrer">
                        APPLY NOW
                      </a>
                    </p>
                  </div>
                </div>
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
export default VocationPromotion;
