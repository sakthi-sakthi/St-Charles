import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Eventscelebrations() {
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
            <a href="/events-and-celebrations">Events and Celebrations</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Events and Celebrations</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Events and Celebrations</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="bs-exercis mt-5">
                <p>
                  <b>
                    The beauty of this bouquet lies in some rare species of the
                    roses with alluring hues and unusual forms are brought under
                    one cluster. Jubilees and Chapters are surely rare occasions
                    that need to be recorded in special pages.
                  </b>
                </p>
              </div>
            </div>
            <h5>Jubilees</h5>
            <div>
              <p style={{ textAlign: "justify" }}>
                With its past of three and a quarter century and more our
                beloved congregation has plenty of events to be reminisced and
                celebrated. Acknowledging the fact that remembering them bring
                invitations to live the present with enthusiasm and proceed into
                the future with vigor and well focused vision, the Jubilees are
                celebrated pompously. Enthusiastic efforts were taken to make
                joyful proclamation and memorable celebrations of some such
                auspicious occasions of God’s intervention in the history of our
                Congregation. And these jubilee celebrations in turn have turned
                out to be exuberant events of enormous blessings.
              </p>
            </div>
            <h5>Platinum Jubilee of the Foundation of Missions in India</h5>
            <div>
              <p className="justify">
                The occasion of the completion of the seventy five years of the
                Sisters of St. Charles’ mission in India was a fitting moment
                for every member to take some time and look at what had taken
                place all along those years. One that invariably snatched
                everyone’s sight was the still view of the four valiant Belgian
                missionaries, Mother Marie Gerard, Mother Margaret Marie, Mother
                Maria and Mother Viginy who arrived at Ranipet on December 30,
                1929. The stories that followed the event of events and the 75
                years’ hard Labour in Faith which paved way towards marvellous
                Progress of Sisters of St. Charles Borromeo in India was
                celebrated on November 24, 2004 in Ranipet. This Platinum
                Jubilee was attended by more than 150 Sisters from the three
                Provinces of India. The occasion was also graced by our Superior
                General Mother Benedicta Lobo from Belgium. The Thanksgiving
                Sacrifice was concelebrated by two Bishops – Rt. Rev. Dr.
                A.M.Chinnappa of Vellore Diocese and Rt. Rev. Singarayar of
                Salem Diocese. ‘A Mission of Compassion’, a documented digital
                visual presentation was released on this auspicious day and a
                part of it was played that evening which gave an insight about
                the arrival of the pioneers, their zeal for the mission and
                their total dedication to their apostolic work for the poor and
                the marginalized. The celebration turned out to be a revelation
                of the valuable services rendered by our four zealous
                missionaries to this soil, the abundant fruits their toil bore
                for the benefit of the world and the journey in faith pursued by
                our Sisters of today. Etching the names of the exemplary
                missionaries on untarnishable metal ‘Platinum’ is absolutely an
                agreeable one.
              </p>
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
        <h5>1.Silver jubilee of the establishment of the eastern province</h5>
        <div>
          <p className="justify">
            The occasion was great.The Eastern Province of the Sisters of
            St.Charles Borromeo had completed 25 years after its erection and
            installation in Jan.1983. A declaration was made that the year Jan.
            2007 to Jan.2008 is a jubilee year. The Sisters of the Province
            planned and prepared for it in all facets to make it an auspicious
            year through prayer, charity and memorials.The spiritual blessings
            were invoked through special hours of adoration, chain rosary, and
            recitation of special jubilee prayer in common etc. The centre for
            HIV/ AIDS patients to be realized that year would be the milestone
            marked with this occasion. The Silver bells chimed aloud the song of
            jubilation on January 14, 2008 as the year longSilver jubilee
            celebration culminated with the Holy Eucharist presided by
            Rt.Rev.Dr.Lawrence Pius DD, auxiliary bishop of Madras- Mylapore.
            That evening’s function held at Adrien Villa also included a
            cultural programme that followed the solemn Mass. It was prepared by
            the formators and formees of Arpana and, the staff and students of
            St.Charles School- Tirupattur. A consolidated report of the
            apostolic works and felicitations to the Sisters of the Eastern
            Province were presented by selected lay representatives from
            different places where our communities are. Participation of the
            sisters from the three provinces of India, members of our staff, old
            students of our institutions, helpers, families of our convent
            girls, friends, benefactors and Sisters’ relatives and above all the
            gracious presence of dear Mother Andrea the former Superior General
            and Rev.Mother Benedicta Lobo, the Superior General made the
            occasion an exuberant one. All were served with a sumptuous dinner
            to close that day’s proceeding in agape. The honour of releasing the
            jubilee Souvenir was offered to the auxiliary bishop. Rev.Fr.Xavier
            Alphonse SJ., and Rev.Fr.Stanislaus Swamikannu SDB, the then
            Provincial of the Salesian fathers of Madras Province were that
            evening’s guests of honour. Thus the whole year’s preparation ended
            with a gloriously organized Jubilee celebration but in truth was
            glorification of our God of marvels.
          </p>
          <h5>2. 325th year of the foundation of the congregation</h5>
          <p className="justify">
            The announcement of the year 2009-2010 as 325th Jubilee year of our
            Congregation founded in 1929 triggered the mind of every head of the
            institution with plans for celebrating it in a fitting manner. This
            occasion filled each one with gratitude and feelings of immense
            trust in the Lord and our Blessed Mother who had been exclusively
            faithful in protecting and nurturing the Congregation in miraculous
            ways. The feelings of gratitude were summed up in the Eucharistic
            offering at the ‘Grand Finale’ held at our Mother House in Wez
            –Belgium on November 6, 2010. This was participated by
            representatives from all the Provinces and Regions along with Rev.
            Mother General, Mother Benedicta Lobo. The eastern province was
            represented by Sr. Mary Queen, the Vice Provincial. Every community
            executed plans that were feasible to make explicit the joy and
            gratitude in tangible ways by organizing celebrations marked by
            deeds of kindness and charity. A common jubilee prayer was recited
            by all the communities throughout the year (November 2009 to
            November 2010). The first house in India – Ranipet, organized on
            April 11, 2010, a commemorative function for the public, inviting
            the widows, widowers and the poor people from the locality. Sr.Jaya,
            the Provincial Superior and Sisters from Ammoor, Yelagiri,
            Tirupattur and Jolarpet gathered at this function and solemnized the
            occasion. That day 325 persons were honoured with a special gift
            which was preceded by a prayer service, grand lunch and cultural
            programme. Every other community in the province had made a unique
            plan for the celebration but all of them were executed in a spirit
            of charity. This strongly brought among us a feeling of common
            spiritual bond that holds us together.
          </p>
          <h5>3. Chapters</h5>
          <p>
            By tradition the province convenes a Chapter by elected capitulars
            to ensure evaluation and to inflame the spirit of enthusiasm to love
            and live the religious life. This chapter convention is held by the
            Province every six years since its time of installation in 1982.
          </p>
          <h5>PROVINCIAL CHAPTERS OF THE EASTERN PROVINCE</h5>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" width="16%">
                  Date
                </th>
                <th className="table_header" width="14%">
                  Place
                </th>
                <th className="table_header" width="14%">
                  Provincial Superior
                </th>
                <th className="table_header" width="25%">
                  Theme
                </th>
                <th className="table_header" width="31%">
                  Councillors
                </th>
              </tr>
              <tr>
                <td className="table_text">1982</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Sr. Renee</td>
                <td className="table_text">Theme was not specified</td>
                <td className="table_text">
                  Srs.Imelda, Francisca, Sagayam &amp; Ignatius.
                </td>
              </tr>
              <tr>
                <td className="table_text">1987 1st May to 7th May</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Sr. Renee</td>
                <td className="table_text">Theme was not specified</td>
                <td className="table_text">
                  Srs. Ignatius, Saroj, Francisca &amp; Jay
                </td>
              </tr>
              <tr>
                <td className="table_text">1993 25th June to 5th July</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Sr. Ignatius</td>
                <td className="table_text">
                  Authentic Witnesses to a Gospel-based Life
                </td>
                <td className="table_text">
                  Srs. Saroj, Assuntha, Rina &amp; Jaya
                </td>
              </tr>
              <tr>
                <td className="table_text">1999 19th to 30th July</td>
                <td className="table_text">Yercaud</td>
                <td className="table_text">Sr.Ignatius</td>
                <td className="table_text">Bread Broken for a New World</td>
                <td className="table_text">
                  Srs. Jaya, Gertrude, Sunita &amp; Lilly. K
                </td>
              </tr>
              <tr>
                <td className="table_text">2005 23rd June to 2nd July</td>
                <td className="table_text">Yercaud</td>
                <td className="table_text">Sr.Saroj</td>
                <td className="table_text">Start Afresh from Christ</td>
                <td className="table_text">
                  Srs. Jaya,Josita, Mary Queen &amp; Punitha A.
                </td>
              </tr>
            </tbody>
          </table>
          <h5>GENERAL CHAPTERS HOSTED BY THE EASTERN PROVINCE</h5>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr style={{ textAlign: "justify" }}>
                <th className="table_header" width="16%">
                  Date
                </th>
                <th className="table_header" width="14%">
                  Place
                </th>
                <th className="table_header" width="14%">
                  Superior General
                </th>
                <th className="table_header" width="25%">
                  Theme
                </th>
                <th className="table_header" width="31%">
                  Elected Superior General &amp; Councillors
                </th>
              </tr>
              <tr style={{ textAlign: "justify" }}>
                <td className="table_text">1982</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Mother Marie Henriette</td>
                <td className="table_text">Renewal of Constitutions</td>
                <td className="table_text">
                  Mother Marie Henriette and Srs.Renee, Jacintha,Sr.St.Paul
                  &amp; Marie Odile
                </td>
              </tr>
              <tr style={{ textAlign: "justify" }}>
                <td className="table_text">1987</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Mother Marie Henriette</td>
                <td className="table_text">Theme was not specified</td>
                <td className="table_text">
                  Mother Andrea and Srs.Benedicta, Virginy, Eliane &amp; Marie
                  Christine
                </td>
              </tr>
              <tr style={{ textAlign: "justify" }}>
                <td className="table_text">1993</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">Mother Andrea</td>
                <td className="table_text">
                  Authentic Witnesses to a Gospel-based Life
                </td>
                <td className="table_text">
                  M.Andrea and Srs. Victoria, Alex, Bertin and Marie Christine
                </td>
              </tr>
              <tr style={{ textAlign: "justify" }}>
                <td className="table_text">2000</td>
                <td className="table_text">Yelagiri</td>
                <td className="table_text">M.Andrea</td>
                <td className="table_text">Bread broken for a New World</td>
                <td className="table_text">
                  M.Benedicta and Srs.Ignatius, Alex, Eliane &amp; Amali
                </td>
              </tr>
              <tr>
                <td className="table_text" style={{ textAlign: "justify" }}>
                  2006
                </td>
                <td className="table_text" style={{ textAlign: "justify" }}>
                  Yelagiri
                </td>
                <td className="table_text" style={{ textAlign: "justify" }}>
                  M.Benedicta
                </td>
                <td className="table_text" style={{ textAlign: "justify" }}>
                  Launch into the Deep
                </td>
                <td className="table_text" style={{ textAlign: "justify" }}>
                  M.Benedicta &amp; Srs.Saroj, Bernardine, Sheila corda &amp;
                  Emily
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Eventscelebrations;
