import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function SCBAssociates() {
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
            <a href="/scb-associates">SCB Associates</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">SCB Associates</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">SCB Associates</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="mt-5 justify">
                <h5>S.C.B. Associates of Eastern Province</h5>
                <p style={{ marginTop: "20px" }}>
                  The powerful manifestation of the spirit today is the
                  rejuvenation of her bride, the Church, made very expressive by
                  the rising up of the laity who dedicates themselves for
                  evangelization in our days. Lay people are consecrated and
                  ordained ministers The Congregation felt that it is urgent to
                  build up strong association with the laity keeping in with the
                  signs of the time and empower them to give them the well
                  deserved recognition and encouragement. The involvement of the
                  laity in our activities is a way of ensuring the continuity of
                  our Mission of Compassion.
                </p>
                <p>
                  Our late Pope John Paul II invited the lay people, especially
                  those who were interested in spreading the Kingdom of God to
                  join with any congregation to extend their cooperation. The
                  S.C.B.Associates / the Collaborators are those who are
                  interested to collaborate with us to continue the Mission of
                  Compassion. The General Chapter of 2000 chaired by Rev. Mother
                  Benedicta Lobo the Superior General welcomed the proposal of
                  establishing Lay collaboration with the Congregation of St.
                  Charles Borromeo. Sr. Sheila and Sr. Lilly K. were the core
                  animators. The S.C.B. Associates at Chilakaluripet in 2006 by
                  the then Superior, Sr. Sagayam At the first meeting held at
                  Adrian Villa .Sr. Lilly. K. the C.O.S.A.F. Chair Person
                  welcomed the Coordinators of SCB Associates of a few
                  communities- Sr.Ignatius, Sr.Jane, Sr.Josephine Doss,
                  Sr.Victoria Arulrani and Sr.Sundari. It was presided over by
                  Sr.Jaya, the Provincial Superior. Sr. Jaya explained to the
                  group the need and purpose of forming this association. She
                  read out the letter sent by Rev. Mother General who has been
                  an inspiration to this new venture.
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
        <div className="justify">
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" width="17%">
                  Place
                </th>
                <th className="table_header" width="24%">
                  Animator
                </th>
                <th className="table_header" width="21%">
                  Date of Installation
                </th>
                <th className="table_header" width="19%">
                  No.of Members
                </th>
                <th className="table_header" width="19%">
                  Date of Promise
                </th>
              </tr>
              <tr>
                <td className="table_text">Tirupattur</td>
                <td className="table_text">Sr.Jane</td>
                <td className="table_text">Aug. 10, 2008</td>
                <td className="table_text" align="right">
                  12
                </td>
                <td className="table_text">10.10.10</td>
              </tr>
              <tr>
                <td className="table_text">Ranipet</td>
                <td className="table_text">Sr.Josephine Doss</td>
                <td className="table_text">June 7,2009</td>
                <td className="table_text" align="right">
                  13
                </td>
                <td className="table_text">18.08.11</td>
              </tr>
              <tr>
                <td className="table_text">Madurai</td>
                <td className="table_text">Sr.Fatima Rani</td>
                <td className="table_text">October 1, 2008</td>
                <td className="table_text" align="right">
                  12
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Perumon</td>
                <td className="table_text">Sr.Bertin</td>
                <td className="table_text">April 8, 2000</td>
                <td className="table_text" align="right">
                  12
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Perambur</td>
                <td className="table_text">Sr.Ignatius</td>
                <td className="table_text">December 7, 2008</td>
                <td className="table_text" align="right">
                  12
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Chilakaluripet</td>
                <td className="table_text">Sr.Sundari</td>
                <td className="table_text">January 2006</td>
                <td className="table_text" align="right">
                  10
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Sr.Nirmala William</td>
                <td className="table_text">March 7, 2010</td>
                <td className="table_text" align="right">
                  8
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <h5>
            “Whoever remains in me and I in Him bears fruit in plenty.”Jn.15.5
          </h5>
          <p>
            A definite procedure is adapted for grafting the associates to the
            spirit of the Congregation. During the periodical meetings a
            deepening of the knowledge about our Congregation is done through
            in-put sessions and discussions on the following topic:
          </p>
          <ul>
            <li>Charism of our Congregation</li>
            <li>Brief history of our Founder and Patron</li>
            <li>Spirit of the Congregation</li>
            <li>Biographies of predecessors</li>
            <li>Our Crest and Logo.</li>
            <li>Our ministries in India and Overseas</li>
          </ul>
          <p>
            The involvement of the associates in our apostolate activities
            through
          </p>
          <ul>
            <li>
              Voluntary service at evening study centers for the poor students
            </li>
            <li>
              Visit to the sick and invalid in the locality and Government
              Hospitals.
            </li>
            <li>Job opportunities for the poor youth and widows</li>
            <li>Listening to the problems of people and praying for them.</li>
            <li>Getting involved in the parish activities.</li>
            <li>
              On certain occasions the associates are invited to join the local
              SCB communities for celebrations.
            </li>
          </ul>
          <h5>Significant milestones</h5>
          <ul>
            <li>
              Sr.Jaya, Sr.Ignatius and Sr.Lily K. attended a meeting of the
              animators and coordinators of S.C.B.Associates at Vakola in 2007.
            </li>
            <li>
              Sr.Jane participated in the meeting of the coordinators at
              Majiwade in 2010
            </li>
            <li>
              A meeting of the animators and coordinators of S.C.B.Associates
              from three provinces in India was held at Tirupattur on the 24th
              July 2010 in which 28 members took part.
            </li>
          </ul>
          <p>
            The Junior SCB Associates have been conceived and initiative is
            given to establish them in Madurai and Ranipet. Clarity of vision
            and effective functioning are in the process of being strengthened.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SCBAssociates;
