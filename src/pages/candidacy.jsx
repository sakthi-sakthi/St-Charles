import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Candidacy() {
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
            <a href="/candidacy">Candidacy</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Candidacy</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Candidacy</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className=" mt-5">
                <img src="images/subpage/cant.jpg" alt="" />
                <p style={{ marginTop: "20px" }}>
                  Candidacy is a stage of initial formation given to the young
                  girls recruited from different states of India. This is a
                  period when they are given insertion into practice of
                  fundamental Christian spiritual exercises, ability for spoken
                  English and introduction to different apostolic activities of
                  the congregation. After this stage of formation, those girls
                  who have joined after passing the Secondary Board Examination
                  pursue the Higher Secondary course for two more years before
                  their entry into Postulancy. However all the candidates are
                  subjected to a screening test to learn of their motivation,
                  their physical fitness and mental aptitude to enable the
                  directresses to guide and counsel them?
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
        <div className="row">
          <div className="col-lg-6">
            <img src="images/subpage/cant.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/cant.jpg" alt="" />
          </div>
          <p>
            The Table below gives with clarity the names of the directresses who
            had been in charge of the Formation of candidates of the Eastern
            Province from 1987 to 2010.
          </p>
        </div>
        <div>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" width="29%">
                  The name of the Directress
                </th>
                <th className="table_header" width="18%">
                  Period of service
                </th>
                <th className="table_header" width="23%">
                  Place
                </th>
              </tr>
              <tr>
                <td className="table_text">Sr.Pushpa</td>
                <td className="table_text">1983 - 1988</td>
                <td className="table_text">Ammoor</td>
              </tr>
              <tr>
                <td className="table_text">Srs.Virgieand Jayacinth</td>
                <td className="table_text">1989 - 1993</td>
                <td className="table_text">Ammoor</td>
              </tr>
              <tr>
                <td className="table_text">Srs.Lilly.K. &amp; Roseline</td>
                <td className="table_text">1983 - 1984</td>
                <td className="table_text">Tirupattur</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Mary Queen</td>
                <td className="table_text">1994 - 1996</td>
                <td className="table_text">Jolarpet</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Victoria Arul Rani</td>
                <td className="table_text">1996 - 1998</td>
                <td className="table_text">Jolarpet</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Flora</td>
                <td className="table_text">1998 - 1999</td>
                <td className="table_text">Jolarpet</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Flora</td>
                <td className="table_text">1999 - 2001</td>
                <td className="table_text">1st Floor Adrien Villa</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Celine Joseph</td>
                <td className="table_text">2001 - 2005</td>
                <td className="table_text">
                  Catherine Warquain Home - Adrien Villa Chennai
                </td>
              </tr>
              <tr>
                <td className="table_text">Sr.Jeyaseeli</td>
                <td className="table_text">2005 - 2009</td>
                <td className="table_text">
                  Catherine Warquain Home - Adrien Villa Chennai
                </td>
              </tr>
              <tr>
                <td className="table_text">Sr.Celine Joseph</td>
                <td className="table_text">2009 - 2011</td>
                <td className="table_text">
                  Catherine Warquain Home - Adrien Villa Chennai
                </td>
              </tr>
              <tr>
                <td className="table_text">Sr.Rathana Kumari</td>
                <td className="table_text">2011 - 2012</td>
                <td className="table_text">
                  Catherine Warquain Home - Adrien Villa Chennai
                </td>
              </tr>
              <tr>
                <td className="table_text">Sr.Saral</td>
                <td className="table_text">2012 -</td>
                <td className="table_text">
                  Catherine Warquain Home - Adrien Villa Chennai
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src="images/subpage/cant4.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/cant6.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Candidacy;
