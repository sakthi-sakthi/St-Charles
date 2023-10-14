import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Dindigul() {
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
            <a href="/dindigul">Dindigul</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Dindigul</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Dindigul</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="mt-5">
                <p style={{ marginTop: "20px" }}>
                  Cherish’ is a floribunda rose, emitting sweet scent that
                  lingers in the air and fascinates all passersby, light pink
                  with white based petals and dark leaves of an intricate
                  display, a flower of rare beauty; the name and the meaning
                  indicate its splendor and worth. The congregation grew
                  steadily in the last quarter of the twentieth century. Heaven
                  blessed it with a few more vocations every year. It was the
                  decision of the General Chapter of 2006 that each Province in
                  India sets up a Formation House of its own by 2009. The
                  Provincial and her councillors made enquiries to purchase a
                  piece of land in Trichi, but were quite alarmed and
                  disheartened at the inability to procure it due to the high
                  price in this place. In the meantime it was told that land was
                  available in Dindigul at a reasonable price. The idea was
                  welcomed for the reason that Diocese of Dindigul is one of the
                  recently created ones and our entry into it could enrich the
                  religious presence. Dindigul is one of the District
                  headquarters in the South of Tamilnadu, carved out of Madurai
                  Dstrict in the year 1985. The district is famous for its locks
                  and tannery industries. Of the 37 parishes that make the
                  Dindigul diocese 31 parishes are from Tiruchirapally and 6
                  from Madurai diocese. It is the seventeenth diocese of Tamil
                  Nadu created by the orders received from Holy Father Pope John
                  Paul II, on November 10, 2003. Most Rev. Antony Pappusamy was
                  installed as the first bishop of this diocese, on December 28,
                  2003. The diocese consists of three vicariate- Dindigul,
                  Kosavapatty and Panjanpatty. The enumerated Catholic
                  Population is 1,03,049. In order to obtain permission to make
                  an entry to the diocese of Dindigul the Provincial Superior
                  and her councillors paid a visit to Rt.Rev.Antony Pappusamy,
                  the Bishop of Dindigul. He and his Vicar General not only
                  welcomed the sisters warmly to the diocese but also made all
                  the necessary arrangement to find a suitable place for them to
                  set up a formation house. A stretch of six acres of fertile
                  land with fruit bearing trees was procured at Soosaiapuram. A
                  farmhouse consisting of just one room and a kitchen was built
                  for two sisters to reside and find out the practicality of
                  having a formation house there. Sr.V.Arokia and Sr.Jenita
                  Siriapushpam were the pioneers of this community. Though the
                  place was beautiful and the land was fertile with good source
                  of water, the considerable distance from other religious
                  houses and the parish church made the required spiritual help
                  rather scarce for the sisters.
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

        <div style={{ textAlign: "justify" }}>
          <p>
            While planning to retain this land as a source of income and a work
            experience field for the formees, the sisters were helped by a local
            man to find another stretch of land at Vellode 8 kms, away from
            Dindigul town. It is close to Madurai railway lines and highway, a
            quiet settlement bounded by Sirumalai on the East and Pandrimalai in
            the West. The Sisters found this place more conducive for a
            Formation House. The parish Church and a few religious houses are
            close by; spiritual help is assured by different religious and
            diocesan priests. Sisters at Madurai community were always at our
            beck and call while all these negotiations and transactions took
            place. Thanks to Sr.Amali and sisters for their generosity and
            magnanimity, providing food and other necessary things until the
            sisters got settled at Vellode. Every phase of this new adventure
            was a new experience and thrill. Vellode is surrounded by quite a
            number of religious priests whose spiritual help our sisters and
            formees enjoy. Dhyanavanam ashram run by Rev.Fr.Korko Moses S.J is
            under the foot of Sirumalai. Religious from far away places come to
            make their retreats and recollections here. Anugraha and LIFE, the
            two centres run by Claritian fathers is a few kms away from Vellode.
            Our own sisters have attended retreats and courses at these centres.
            Diocesan Evangelization Centre is close to Charles Bhavan where our
            sisters and formees attend weekly night vigil prayers and avail of
            the opportunity for confessions. Thanks to Almighty God who provides
            all things in time and in respect to our need according to His plan.
            The foundation stone for the Formation House at Vellode was laid on
            February 24, 2009 by Rt. Rev.Dr. Anthony Pappusamy, Bishop of
            Dindigul. Sr.V.Arockia and Sr.Jenita E besides taking care of the
            farm at Soosaipuram, also supervised the construction work of this
            house at Vellode. In July 2009, the second year Novices spent one
            month at Soosaipuram on a mission experience accompanied by
            Sr.Victoria Arulrani. They made acquaintance with the local people
            through regular house visits. The inauguration of the house at
            Vellode was on January 16, 2010. A week prior to the inauguration,
            11 postulants along with Sr.Jaya , the Provincial Superior and her
            team and Sr.Sabina Jose the Postulant Directress came to Vellode to
            get the house ready for the blessing. January 16, 2010 was a red
            letter day in the history of ‘The Eastern Province of the Sisters of
            St.Charles’. The day began with a very meaningful morning prayer. At
            10.00 a.m. Rev.Mother Benedicta, the Superior General unveiled the
            plaque and Most Rev.Dr.Antony Pappusamy, Bishop of Dindigul blessed
            the house. This was followed by a solemn Eucharistic celebration and
            a fellowship meal. Representatives from different religious
            communities, friends and neighbors at Dindigul made a good number
            for the inauguration ceremony. The presence of Sr. Janet D’Souza,
            the Provincial Superior of Western Province and other
            representatives of West and Eastern provinces added joy to this
            celebration. The new formation house named as ‘Charles Bhavan’ at
            present is a home for the postulants of the province. The first
            batch of postulants consisted 11 and the second batch five.
            Sr.Sabina Jose remains as Postulant directress and Sr. V.Arokia, the
            Superior of the house assisted by Sr.Elsa Varghese. The Sisters
            along with postulants get involved in Parish activities, like
            teaching catechism, parish-choir and family visits. ‘Charles Bhavan’
            is a ‘Cherish Rose’ of the province. The house always remains lovely
            and lively not merely because of its surroundings and the grandeur
            of the building but because of the type of inmates there, a bunch of
            energetic active young ladies. Truly they are the treasure of the
            congregation. In contrast to the world that runs after pleasure and
            wealth, these young ladies leave all that the world counts great and
            offer their whole life for the cause of humanity in imitation of
            Christ who emptied Himself for the love of humankind. They are the
            future promise of the Congregation. So ‘Cherish Rose’ dropped down
            from the hands of our blessed patroness-Little Therese- is a
            cherished gift.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Dindigul;
