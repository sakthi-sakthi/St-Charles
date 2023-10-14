import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import { Link } from "react-router-dom";
function OverseasMission() {
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
            <a href="/overseas-mission">Overseas Mission</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Overseas Mission</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Overseas Mission</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="bs-callout mt-5 justify">
                <p style={{ marginTop: "20px" }}>
                  <b>
                    “It takes courage to answer a call. It takes courage to
                    leave your all…” After the example and in the footsteps of
                    our first missionaries we do have quite a number of
                    missionaries in different parts of the world. The “CHOICEST
                    ROSES” spread the fragrance of the love of Christ and
                    fulfill the dream of Little Therese in their own little way
                    far and wide.{" "}
                  </b>
                  “The Church on earth is by its very nature missionary since,
                  according to the plan of the Father, it has its origin in the
                  mission of the Son and the Holy Spirit” Ad Gentes Divinitus #2
                  Jesus Christ was sent into the world as the true mediator
                  between God and men. From the beginning of His ministry the
                  Lord Jesus “called to Himself those whom he wished and he
                  caused twelve of them to be with him and to be sent out for
                  preaching” (Mk.3:13). The Apostles were sent with the command,
                  “Go into the whole world, preach the Gospel to every
                  creature…” (Mk.16:15) It is in view of this command of the
                  Lord, the Constitutions exhorts us thus, “Apostolic life
                  implies an unconditional collaboration in Christ’s mission…”
                  SCB Const.# 60 This demands a total, unconditional and
                  generous response from all the Sisters. “The overseas missions
                  are a particular field of the apostolate of our Congregation
                  and all of us are concerned in the commitment of our Sisters
                  in the mission countries”. SCB Const... # 96a After the
                  example and in the footsteps of our first missionaries we do
                  have quite a number of missionaries in different parts of the
                  world. The names of these “CHOICEST ROSES” who spread the
                  fragrance of the love of Christ and fulfill the dream of
                  Little Therese in their own little way far and wide. The
                  tables below list the names of the Sisters who are in various
                  mission countries but in the year of their departure were in
                  communities that now belong to Eastern Province, irrespective
                  of the period of history recorded in this book.
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
                <th className="table_header" width="3%">
                  #
                </th>
                <th className="table_header" width="70%">
                  BELGIUM
                </th>
                <th className="table_header" width="27%">
                  Year
                </th>
              </tr>
              <tr>
                <td className="table_text">1</td>
                <td className="table_text">
                  Sr. Anita Israel (late) returned to India in 1995
                </td>
                <td className="table_text">1972</td>
              </tr>
              <tr>
                <td className="table_text">2</td>
                <td className="table_text">Sr. Stella Mampuzha</td>
                <td className="table_text">1977</td>
              </tr>
              <tr>
                <td className="table_text">3</td>
                <td className="table_text">Sr. Nirmala Amalanathan</td>
                <td className="table_text">1991</td>
              </tr>
              <tr>
                <td className="table_text">4</td>
                <td className="table_text">Sr. Lucy chacko</td>
                <td className="table_text">1980</td>
              </tr>
              <tr>
                <td className="table_text">5</td>
                <td className="table_text">
                  Sr. Anselme (returned to India in 1975 and went back to
                  Belgium in 1986)
                </td>
                <td className="table_text">1969</td>
              </tr>
              <tr>
                <td className="table_text">6</td>
                <td className="table_text">
                  Sr. Jacintha (returned to India in 2004)
                </td>
                <td className="table_text">1982</td>
              </tr>
              <tr>
                <td className="table_text">7</td>
                <td className="table_text">Sr. Sophie</td>
                <td className="table_text">2004</td>
              </tr>
              <tr>
                <td className="table_text">8</td>
                <td className="table_text">Sr. Jacquline</td>
                <td className="table_text">2006</td>
              </tr>
              <tr>
                <td className="table_text">9</td>
                <td className="table_text">Sr. Alphonse Jesudass</td>
                <td className="table_text">2008</td>
              </tr>
            </tbody>
          </table>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" colSpan={2}>
                  ARGENTINA
                </th>
                <th>year</th>
              </tr>
              <tr>
                <td className="table_text" width="3%">
                  1
                </td>
                <td className="table_text" width="70%">
                  Sr. Elizabeth Chavara
                </td>
                <td className="table_text" width="27%">
                  1983
                </td>
              </tr>
              <tr>
                <td className="table_text">2</td>
                <td className="table_text">Sr. Josephine Clare</td>
                <td className="table_text">1990</td>
              </tr>
              <tr>
                <td className="table_text">3</td>
                <td className="table_text">
                  Sr. Rosali (returned to India in 1993)
                </td>
                <td className="table_text">1989</td>
              </tr>
              <tr>
                <td className="table_text">4</td>
                <td className="table_text">
                  Sr. Amalorpava Mary (returned to India in 2000
                </td>
                <td className="table_text">1995</td>
              </tr>
              <tr>
                <td className="table_text">5</td>
                <td className="table_text">Sr. Innaci</td>
                <td className="table_text">1995</td>
              </tr>
              <tr>
                <td className="table_text">6</td>
                <td className="table_text">Sr. Gnanamary</td>
                <td className="table_text">2000</td>
              </tr>
              <tr>
                <td className="table_text">7</td>
                <td className="table_text">Sr. Metilda Mahimai</td>
                <td className="table_text">2000</td>
              </tr>
            </tbody>
          </table>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" colSpan={2}>
                  ITALY
                </th>
                <th>year</th>
              </tr>
              <tr>
                <td className="table_text" width="3%">
                  1
                </td>
                <td className="table_text" width="70%">
                  Sr. Hazel
                </td>
                <td className="table_text" width="27%">
                  2002
                </td>
              </tr>
            </tbody>
          </table>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" colSpan={2}>
                  POLAND
                </th>
                <th>year</th>
              </tr>
              <tr>
                <td className="table_text" width="3%">
                  1
                </td>
                <td className="table_text" width="70%">
                  Sr. Marjorie Dashwood
                </td>
                <td className="table_text" width="27%">
                  1994
                </td>
              </tr>
              <tr>
                <td className="table_text">2</td>
                <td className="table_text">
                  Margaret.Lawrence returned to Inida in 1999
                </td>
                <td className="table_text">1992</td>
              </tr>
            </tbody>
          </table>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" colSpan={2}>
                  TANZANIA (AFRICA)
                </th>
                <th>year</th>
              </tr>
              <tr>
                <td className="table_text" width="3%">
                  1
                </td>
                <td className="table_text" width="70%">
                  Sr. Punithavathy (returned to India in 1997)
                </td>
                <td className="table_text" width="27%">
                  1997
                </td>
              </tr>
              <tr>
                <td className="table_text">2</td>
                <td className="table_text">Sr. Jansi Joy</td>
                <td className="table_text">1997</td>
              </tr>
              <tr>
                <td className="table_text">3</td>
                <td className="table_text">Sr. Mangala Mary</td>
                <td className="table_text">1997</td>
              </tr>
              <tr>
                <td className="table_text">4</td>
                <td className="table_text">Sr. Arputham</td>
                <td className="table_text">1998</td>
              </tr>
              <tr>
                <td className="table_text">5</td>
                <td className="table_text">Sr. Sagaya Mary Raju</td>
                <td className="table_text">1999</td>
              </tr>
              <tr>
                <td className="table_text">6</td>
                <td className="table_text">Sr. Magdalene</td>
                <td className="table_text">2000</td>
              </tr>
              <tr>
                <td className="table_text">7</td>
                <td className="table_text">Sr. Suthanthira</td>
                <td className="table_text">2001</td>
              </tr>
              <tr>
                <td className="table_text">8</td>
                <td className="table_text">
                  Sr. Ann David (returned to India in 2005)
                </td>
                <td className="table_text">2002</td>
              </tr>
              <tr>
                <td className="table_text">9</td>
                <td className="table_text">Sr. Thankam Michael</td>
                <td className="table_text">2006</td>
              </tr>
              <tr>
                <td className="table_text">10</td>
                <td className="table_text">Sr. Antoniammal</td>
                <td className="table_text">2008</td>
              </tr>
              <tr>
                <td className="table_text">11</td>
                <td className="table_text">Sr. Innaciammal</td>
                <td className="table_text">2008</td>
              </tr>
              <tr>
                <td className="table_text">13</td>
                <td className="table_text">Sr. Arockia Martin</td>
                <td className="table_text">2008</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default OverseasMission;
