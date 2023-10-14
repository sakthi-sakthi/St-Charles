import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Formation() {
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
            <a href="/formation">Formation</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Formation</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Formation</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="bs-exercis mt-5">
                <p style={{ marginTop: "20px" }}>
                  <b>
                    “The goal of formation is transformation into the image of
                    Christ. It is not merely an intellectual exercise, but a
                    deep interior exercise of remaining united with Jesus in all
                    levels of individual existence, which slowly transforms one
                    into a person solely motivated and moved by the love of
                    Christ”. Ref. Manual for formation pg.85, para 1
                  </b>
                  “Formation ministry is indeed the holy ground, where the
                  formators and formees need to go barefoot for this is a place
                  of transformative encounter with God. This is the starting
                  point of formation which leads to transformation. In this
                  whole process God is accompanying both the formator and the
                  formee as, “a cloud by day and a pillar of fire by night”
                  (Ref. SCB Manual for Formation pg.6) Placing these significant
                  features of formation as the focal point, the Sisters of
                  St.Charles, Eastern Province have launched various stages of
                  formation in line with the directions given by the Church and
                  the Congregation to help those called by God to respond to Him
                  responsibly. The division of the Province did not affect the
                  division of formation since formation comes directly under the
                  governance of the Generalate. This is to be borne in mind to
                  understand why the shifting of formation houses back and forth
                  from one province to another in the years that followed the
                  division of the provinces.
                </p>
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
export default Formation;
