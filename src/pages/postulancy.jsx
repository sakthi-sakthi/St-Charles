import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Postulancy() {
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
            <a href="/postulancy">Postulancy</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Postulancy</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Postulancy</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="row">
                <p>
                  The Postulancy was in Bangalore till 1991. In June it was
                  shifted to the newly bought house, ‘‘ARPANA’’ in A V M Street,
                  Perambur, Chennai.The postulants of both the provinces were in
                  Arpana till May 2005.
                </p>
                <div className="col-lg-6">
                  <img src="images/subpage/postlancy1.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <p style={{ marginTop: "20px" }}>
                    In June 2005 those belonging to Western Province were
                    shifted to Bangalore. Those of the Northern Province were
                    divided into two groups, one group was sent to Bangalore and
                    another to Arpana in Tirupattur. Thus 2 centres for
                    postulants were created in India that year. In 2007 the
                    Postulancy for the Northern Province was shifted to
                    Hatia-Ranchi and each Province maintained its own home for
                    Postulants.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p style={{ marginTop: "20px" }}>
                    In 2006, with the view to have the formation programme in
                    each Province independently of the other Provinces, the
                    Generalate recommended full fledged formation houses in the
                    three Provinces. In order to have the formation
                    independently in each of the three Provinces, the formation
                    house for each province was recommended by the Generalate in
                    the year 2006. To comply with this idea a formation house
                    ‘Charles Bhavan’ was constructed in a new diocese of
                    Dindigul.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img src="images/subpage/Postulants_03.jpg" alt="" />
                </div>
                <p>
                  The blessing ceremony of ‘Charles Bhavan’ was attended by
                  Rev.Mother Benedict who after surveying the surroundings of
                  Vellodu and consulting a group of formators guided the
                  Province to make, Charles Bhavan at A.Vellodu, Dindigul, the
                  home for the Postulants and to continue to have ‘Arpana’ in
                  Tirupattur as the novitiate.
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
        <div>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" width="22%">
                  Name of the directress of the Postulants
                </th>
                <th className="table_header" width="13%">
                  Period
                </th>
                <th className="table_header" width="17%">
                  Assistants
                </th>
                <th className="table_header" width="15%">
                  Place
                </th>
                <th className="table_header" width="33%">
                  Significant changes
                </th>
              </tr>
              <tr>
                <td className="table_text">Sr.Josita Manavalan</td>
                <td className="table_text">1991 - 1992</td>
                <td className="table_text">Sr.Mary Vincent P</td>
                <td className="table_text">Perambur</td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Marjorie Dashwood</td>
                <td className="table_text">1992 - 1994</td>
                <td className="table_text">Sr.Elizabeth V</td>
                <td className="table_text">Perambur</td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text" rowSpan={5}>
                  Sr.Lilly K.
                </td>
                <td className="table_text">1994 - 1998</td>
                <td className="table_text">Sr.Elizabeth Chacko</td>
                <td className="table_text" rowSpan={5}>
                  ‘‘Arpana’’- Tirupattur
                </td>
                <td className="table_text" rowSpan={5}>
                  ‘Arpana’ at Perambur was found non conducive due to noise and
                  lack of space. Therefore the Postulancy was shifted to
                  Tirupattur
                </td>
              </tr>
              <tr>
                <td className="table_text">1995 - 1996</td>
                <td className="table_text">Sr. Noel</td>
              </tr>
              <tr>
                <td className="table_text">1996 - 1997</td>
                <td className="table_text">Sr.Molly Sebastian</td>
              </tr>
              <tr>
                <td className="table_text">1997 - 1998</td>
                <td className="table_text">Sr.Lizzy James</td>
              </tr>
              <tr>
                <td className="table_text">1998 - 1999</td>
                <td className="table_text">Sr.Vijaya Nirmala</td>
              </tr>
              <tr>
                <td className="table_text" rowSpan={2}>
                  Sr.Rina
                </td>
                <td className="table_text">1999 - 2000</td>
                <td className="table_text">Sr.Margaret .L</td>
                <td className="table_text" rowSpan={2}>
                  ‘Arpana’- Tirupattur
                </td>
                <td className="table_text" rowSpan={2}>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td className="table_text">2000 - 2002</td>
                <td className="table_text">Sr.Sylvia</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Sylvia</td>
                <td className="table_text">2002 - 2004</td>
                <td className="table_text">Sr.Lizzy James</td>
                <td className="table_text">‘Arpana’- Tirupattur</td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Clare Joseph</td>
                <td className="table_text">2004 - 2005</td>
                <td className="table_text">Sr.Elizabeth .V</td>
                <td className="table_text">‘Arpana’- Tirupattur</td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Nirmala Williams</td>
                <td className="table_text">2005 - 2008</td>
                <td className="table_text">
                  Sr. Elizabeth .V.,Sr.Cecily Thomas
                </td>
                <td className="table_text">‘Arpana’- Tirupattur</td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Cecily Thomas</td>
                <td className="table_text">2008 - 2009</td>
                <td className="table_text">No assistant/s</td>
                <td className="table_text">‘Arpana’- Tirupattur</td>
                <td className="table_text">5 Postulants only</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Sabina Jose</td>
                <td className="table_text">2009 - 2011</td>
                <td className="table_text">No assistant/s</td>
                <td className="table_text">‘Arpana’- Tirupattur</td>
                <td className="table_text">
                  January11, 2010, shifted to ‘Charles Bhavan’ A.Vellodu -
                  Dindigul
                </td>
              </tr>
              <tr>
                <td className="table_text">Sr.Victoria Arul Rani</td>
                <td className="table_text">2011 - 2012</td>
                <td className="table_text">No assistant/s</td>
                <td className="table_text">
                  ‘Charles Bhavan’ A.Vellodu - Dindigul
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Cecily Thomas</td>
                <td className="table_text">2012 - 2014</td>
                <td className="table_text">No assistant/s</td>
                <td className="table_text">
                  ‘Charles Bhavan’ A.Vellodu - Dindigul
                </td>
                <td className="table_text">&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              In June 2005 the postulants of Western Province were taken back to
              Bangalore. In the same year the postulants of the Northern
              Province were divided into two groups. One group was sent to
              Bangalore and the other to ‘Arpana’ –Tirupattur.
            </li>
            <li>
              In 2007, the postulants of the Northern Province were taken to
              Hatia-Ranchi thus the Provinces each had their own homes for the
              Postulants
            </li>
            <li>
              In order to have the formation fully made independent of other
              Provinces the formation houses for each Province was recommended
              by the Generalate in the year 2006. To comply with this idea a
              formation house was constructed in the newly formed diocese
              Dindigul-A.Vellodu. The blessing of the house was attended by the
              Superior General, Rev. Mother Benedicta who in view of
              facilitating the novices with better atmosphere, guided the
              Province to make, Charles Bhavan at A.Vellodu -Dindigul the home
              for the Postulants.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Postulancy;
