import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import { Link } from "react-router-dom";
function Location() {
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
            <a href="/location">Location</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Location</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Location</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.346704331074!2d80.19785467428956!3d13.140517211153979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526490ea28d1db%3A0xb566a6a8834544cf!2sThe%20Sisters%20of%20St.%20Charles%20Borromeo%20%E2%80%93%20Eastern%20Province!5e0!3m2!1sen!2sin!4v1696483173673!5m2!1sen!2sin"
                height={550}
                style={{ border: 0, width: " 100%" }}
                allowFullScreen
                title="st charles"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
export default Location;
