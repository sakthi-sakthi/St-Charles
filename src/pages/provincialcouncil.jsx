import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function ProvincialCouncil() {
  const [Provincial, setProvincialData] = useState([]);
  const [slider, setslider] = useState([]);

  const fetchData = () => {
    fetch(`${ApiUrl}/get/slider`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProvincialData(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
    fetchData();
    fetchslide();
  }, []);

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/provincial-council">Provincial Council</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Provincial Council</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Provincial Council</h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="row councilsister">
              {Provincial.map((item) => (
                <div className="col-lg-3 m-2" key={item.id}>
                  <img src={item.image} alt="" />
                  <center>
                    <strong>{item.title} </strong>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </center>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 sidebar">
            {slider.map((item) => (
              <div className="slidedata" key={item.id}>
                <img src={item.image} alt="" />
                <strong>{item.title} </strong>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProvincialCouncil;
