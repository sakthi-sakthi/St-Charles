import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function History() {
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
            <a href="/history">History</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">History</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Eastern Province</h3>
        <div className="row">
          <div className="col-lg-9">
            <p>
              The Belgian missionary sisters of St. Charles Borromeo set their
              foot in South India, Tamil Nadu in the year 1929 at Ranipet. They
              worked with great enthusiasm in the southern region of India for
              about 40 years. They toiled touching the lives of many through the
              mission of compassion. The missionary zeal of the natives to join
              the band of arduous missionaries was none the less. It paved way
              for many mission stations. To facilitate the administration, in
              1982 Mother Marie Henriette the then Superior General announced
              the bifurcation of the Indian Province.
            </p>
            <div>
              <h2>Provincial Superiors</h2>
              <div className="d-flex">
                {/* <img
                  src="images/subpage/srNavamani_ep.jpg"
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                /> */}
                <p style={{ marginTop: "20px" }}>
                  On January 8, 1983 the installation of <b>Sr. Renee</b> as
                  Provincial as the 1st Provincial of the newly formed Province
                  was celebrated at Ranipet. Sr. Renee D’Souza with a positive
                  attitude and with deep trust in the divine providence accepted
                  the responsibility of steering this new Province along with
                  her councilors{" "}
                  <b> Srs. Emelda. Francisca, Ignatius & Sagayamary M.</b> On
                  January 25th 1984. Rev. Sr. Renee moved to the new quarters
                  Charles Villa at no 18 North Bharathi Road, Perambur-11. The
                  blessing on January 26th 1984 is written in Golden letters.
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex mt-5">
                <p style={{ marginTop: "20px" }}>
                  Under the stewardship of <b>Rev. Sr. Ignatius Thomas </b> who
                  was appointed Provincial Superior in the year 1992 the
                  Province grew gradually. The apostolic activities included
                  coaching classes for the poor children studying in Government
                  Schools. They ware also helped financially. The sisters of St.
                  Charles true to their charism moved to remote villages and
                  have responded to the poor and marginalized efficiently. From
                  Charles Villla the Provincial residence was once again
                  transplanted the newly constructed Provincialate, to Adrien
                  Villa at Surpattu Main Road Vinaygapuram on January 29th,
                  1998.
                </p>
                {/* <img
                  src="images/subpage/srNavamani_ep.jpg"
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                /> */}
              </div>
            </div>
            <div>
              <div className="d-flex mt-5">
                {/* <img
                  src="images/subpage/srNavamani_ep.jpg"
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                /> */}
                <p style={{ marginTop: "20px" }}>
                  From 2000 to 2006 the Province was headed by{" "}
                  <b> Rev. Sr. Saroj.</b>
                  She envisioned finding new avenues to take up the challenging
                  apostolic activities which enabled the growth and development
                  of the Province in these years. The Platinum Jubilee of the
                  congregation in India was celebrated in a grand scale on 24,
                  November, 2004 at Ranipet the first house in India, under the
                  efficient leadership of the then Provincial Superior Sr.
                  Saroj.
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex mt-5">
                <p style={{ marginTop: "20px" }}>
                  In the year 2006 Rev. <b> Sr. Jaya </b>was appointed as the
                  Provincial Superior who led the Province up to 2012. In this
                  rapidly changing world perceiving that life gets affected in
                  all spheres by the changes, she with her far sighted vision
                  responded to the signs of the time by encouraging the Sisters
                  to reach out to the new poor, the destitute children, children
                  in bonded labour, the aged, the refugees, dalits, HIV/AIDS
                  patients, terminally ill, the abandoned and the marginalized.
                </p>
                {/* <img
                  src="images/subpage/srNavamani_ep.jpg"
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                /> */}
              </div>
            </div>
            <div>
              <div className="d-flex mt-5">
                {/* <img
                  src="images/subpage/srNavamani_ep.jpg"
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                /> */}
                <p style={{ marginTop: "20px" }}>
                  In 2012 <b>Sr.Virgie</b> was chosen to be provincial superior,
                  <b>
                    {" "}
                    Sr.Lilly.K. Vice Provincial, Sr.Amali, Sr.Victoria Arul Rani
                    and Sr.Josephine Nirmala Rani{" "}
                  </b>
                  were appointed as provincial councillors. The vigorous and
                  vigilant provincial team encouraged the sisters of the
                  Province to launch into a front line ministry like prison
                  ministry and taking care of the HIV affected, our thrust is
                  poorest of the poor was given to theme on faith. Province
                  level faith day celebration was organized for all our
                  educational institutions. Sisters are encouraged to go for
                  higher studies. Warm and friendly approaches among the
                  sisters, psychological and spiritual needs of the sisters are
                  met, new websites and province information and communication
                  management systems are being provided for the feasible and
                  ready communication.
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
export default History;
