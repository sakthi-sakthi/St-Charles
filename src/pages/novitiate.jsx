import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Novitiate() {
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
            <a href="/novitiate">Novitiate</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Novitiate</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Novitiate</h3>
        <div className="row">
          <div className="col-lg-9">
            <br />
            <div className="row">
              <p>
                Premanjali, Byrathi, Bangalore was the centre for all three
                Provinces for the formation of novices from Jan 24, 1987. Prior
                to that the novitiate was at St.Thomas town, Bangalore. <br />
                The number of novices became too many to be accommodated in
                Premanjali.
              </p>
              <div className="col-lg-6">
                <img src="images/subpage/nov.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <br />

                <p>
                  Hence in 2005 the second year novices were housed in Adrien
                  Nivas at Geddalahalli, Bangalore. The lack of space in Adrien
                  Nivas again made it necessary to shift the second year novices
                  from there to ‘Arpana’-Tirupattur in 2007
                  <b> Sr. Virgy</b> who was the directress of the second year
                  novices at <b>Adrien Nivas</b> from June 2006 returned to
                  Tirupattur in <b>May 2007</b> along with the novices. An
                  assistant from north Province was appointed to help her in
                  executing the formation programme.
                </p>
              </div>
              <table
                className="table table-bordered"
                border={0}
                cellSpacing={2}
                cellPadding={2}>
                <tbody>
                  <tr>
                    <th className="table_header" width="22%">
                      Name of the directress
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
                  </tr>
                  <tr>
                    <td className="table_text" rowSpan={2}>
                      Sr.Virgy
                    </td>
                    <td className="table_text">2007 - 2008</td>
                    <td className="table_text">
                      Srs. Lilly K &amp; Roseline Aind
                    </td>
                    <td className="table_text" rowSpan={2}>
                      Tirupattur
                    </td>
                  </tr>
                  <tr>
                    <td className="table_text">2008 - 2009</td>
                    <td className="table_text">
                      Sr. Lilly K. &amp; Sr.Gemma Kujur
                    </td>
                  </tr>
                  <tr>
                    <td className="table_text">Sr.VictoriaArul Rani</td>
                    <td className="table_text">2009 - 2010</td>
                    <td className="table_text">
                      Sr. Cecily T &amp; Sr. Gemma Kujur
                    </td>
                    <td className="table_text">Tirupattur</td>
                  </tr>
                  <tr>
                    <td className="table_text">Sr.Elizabeth Chacko</td>
                    <td className="table_text">2010 - 2011</td>
                    <td className="table_text">
                      Srs.Victoria Arul Rani &amp; Rathna Kumari
                    </td>
                    <td className="table_text">Tirupattur</td>
                  </tr>
                  <tr>
                    <td className="table_text">Sr..Elizabeth Chacko</td>
                    <td className="table_text">2011 - 2012</td>
                    <td className="table_text">Srs.Lilly and Saral</td>
                    <td className="table_text">Tirupattur</td>
                  </tr>
                  <tr>
                    <td className="table_text">Sr..Elizabeth Chacko</td>
                    <td className="table_text">2012 - 2014</td>
                    <td className="table_text">Sr.Lazar Mary</td>
                    <td className="table_text">Tirupattur</td>
                  </tr>
                </tbody>
              </table>
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
          <p>
            In the year 2010 a new discernment was made regarding the formation
            of novices. After having studied the pros and cons of various
            proposals, Rev. Mother Benedicta, the Superior General and her
            council decided to have two Novitiates – one at Premanjali,
            Bangalore with Sr. Josita Manavalan as the Directress of novices
            assisted by Sr.Wilma and Sr. Pramila D’Almeida and the other at
            ‘Arpana’, Tirupattur with Sr. Elizabeth Chacko as the Directress of
            Novices assisted by Sr. Victoria Arul Rani and Sr. Ratnakumari.
          </p>
          <div className="col-lg-6">
            <img src="images/subpage/nov2.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <br />
            <p>
              In these two novitiates, novices of both the years (1st and 2nd
              years) are under training. The grouping of the novices into two is
              done by dividing the Postulants of each Province in to two groups
              through casting lots. In the year 2010- 2011 the novices in
              ‘Arpana’ comprised only of the first years as that was the year,
              this system of grouping had begun. These mixed groups of novices
              spend both the years of their formation in the same place but
              their ‘Live in Experience’ and community experience programme are
              to be in places of their respective provinces.
            </p>
          </div>
        </div>
        <div>
          <h5>Activities</h5>
          <p>
            On a regular basis the second year novices have exposure programmes
            for a month followed by 2 months of community experience. These are
            very enriching experiences for them and the Directresses follow them
            up wherever they are. They have 3 days retreat preached by one of
            our Sisters and 8 days retreat by a priest. The second year novices
            have Charism retreat preached by our sisters.
          </p>
          <p>
            Apart from their regular classes given by the formation team, a few
            of our Sisters specialized in specific topics are called to conduct
            courses and seminars.
          </p>
          <p>
            They have Eucharistic celebration on Saturdays in the novitiate
            chapel and twice a week in the Convent chapel. On other days they
            attend the Mass in Don Bosco chapel. Feast days and national
            cultural days are celebrated in the minor seminary chapel at Don
            Bosco. Our formees are benefitted spiritually and intellectually as
            they participate in these spiritual and some of the social
            gatherings held in the institutions run by the Salesians.
          </p>
          <p>
            To be inculturated, the novices visit the homes in the
            neighbourhood. They take part in the church activities by teaching
            Catechism on Sundays and by helping in the evening tuition centre
            for poor children in our premises. All the three Provincials visit
            the novices at least once a year. Our Sisters from foreign missions
            address the novices and instill in them the missionary zeal during
            their visits. Instructive movies and documentary films are shown to
            the novices to have a wider vision of the world around them. They
            attend all the important functions of St.Charles High School and
            render help whenever needed. On the whole, ‘Arpana’ facilitates the
            all round formation to enhance the holistic growth of the novices.
            The first year novices as per Canon law spend more time in seclusion
            and silence.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Novitiate;
