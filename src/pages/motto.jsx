import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Motto() {
  const [slider, setslider] = useState([]);
  const fetchslide = () => {
    fetch(`${ApiUrl}/get/slidebar`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp.data);
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
            <a href="/the-motto-of-the-province">The Motto of the Province</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">The Motto of the Province</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">The Motto of the Province</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <h2>Provincial Superiors</h2>
              <div className="d-flex">
                <img
                  src="images/subpage/sunrises.jpg"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
                <p style={{ marginTop: "20px" }}>
                  The gradual growth of the Province has paved way to the
                  inspiration of symbolizing our Province with the Risen Lord.
                  The Eastern Province with its headquarters on the east coast
                  of Indian Ocean has the privilege of receiving the first rays
                  of the rising sun.
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex mt-5">
                <p style={{ marginTop: "20px" }}>
                  As the rising sun announces the dawn of a new day the
                  Resurrection of Christ marks the new era in the life of the
                  Church. So the spirit and hopes of the Province were expressed
                  at the Provincial Chapter 2005, in the motto 'TO RISE ANEW'.
                  To Rise Anew is an invitation to be decisive, to make new
                  proposals that will help us to transform, restructure,
                  innovate, and concretize our plans to launch out into the
                  unknown depths of personal, communal and societal life. Such
                  venture entails a dying and rising. The Risen Christ who
                  conquered death and sin is our symbol and model. To Him do we
                  entrust our plans, in Him do we hope to discover our shared
                  vision, shared Charism, shared spirituality, shared mission
                  and shared community expressed in a new language.
                </p>
                <img
                  src="images/subpage/jesusrises.jpg"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
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
export default Motto;
