import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Kadakkal() {
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
            <a href="/kadakkal">Kadakkal</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Kadakkal</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Kadakkal</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="bs-exercis mt-5">
                <p style={{ marginTop: "20px" }}>
                  <b>
                    Paradise’ is a very fragrant hybrid tea rose. Most striking
                    thing about paradise is the color, dark pink with purple
                    blend, strong fragrance, and blooms in flushes throughout
                    the year.
                  </b>
                </p>
              </div>
              <div class="bs-call">
                <p>
                  Flowers are the ‘wordless prayers of nature’, beautiful
                  expressions of its yearning for the Divine. And each flower
                  has its unique aspiration, its own vibration, its true
                  meaning. Poets through the ages have not ceased to sing of
                  their beauty, their splendor, their magnificence. They have
                  been expressions of human love in every language and country
                  and much more deeply, they express ‘Love for the Divine’.
                  “God’s own country”, as Kerala is known, has this rich
                  heritage of what ‘flowers’ and ‘Roses’ in particular transmit
                  to the creation around. Paradise symbolizes fullness and
                  freedom and it is fitting that our maiden house in this
                  beautiful land is coined with Paradise Rose where everything
                  seems green, flowery, and fragrant and flushes with joy.
                  October 28, 1991 was a day of great miracle – the opening of
                  the first house of the family of St.Charles in Kerala. The
                  ‘seed of compassion’ slowly found its place in ‘God’s own
                  country” and began to sprout. Rev. Mother Andrea, the first
                  Indian Superior General, Sr. Lydia Braggs, the Provincial
                  Superior of the Western Province, Rt. Rev. Dr. Mathias Kappil,
                  the first Bishop of the Diocese of Punalur was the steering
                  force of this new mission. The real inspiration was Fr.Thomas
                  Myladoor SDB, the Provincial Superior of the Salesians in
                  Bangalore. Sr.Adrian, the Superior, Sr. Clare Joseph and Sr.
                  Severene formed the first community. On December 27, 1991, the
                  land where we were planning to build the convent was surveyed
                  and the documents for 4 acres and 48 cents were handed over to
                  the convent by the Bishop. The Sisters occupied the existing
                  small house. It was in the year 1993, the Superior General
                  Mother Andrea and her Councillors decided to hand over the
                  Kadakkal mission to the Eastern Province in exchange of the
                  land in Thuthiyoor. Sr. Ignatius was the Provincial Superior
                  and Sr. Rina Kokkat was appointed as Superior. Sr.Bede and
                  Sr.Lissa of the Western Province continued until Sr.Alphonsa
                  came to take the place of the former and later Sr. Laly came
                  in the place of Sr. Lissa.
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

          <div className="col-12">
            <p>
              <b>Geographical location</b>
              <br />
              Kadakkal is a small town in Kollam District. It is a beautiful
              place as it has hills and is surrounded by rubber estates.
              Kadakkal comes in the East part of Kollam district and the roads
              are connected to the region of Thenkasi in Tamil Nadu State.
              <br />
              <br />
              <b>Historical Significance.</b>
              <br />
              The history of Kadakkal does not give any clear evidence of the
              beginnings of the date of the habitation of people in this area.
              It is supposed to have a history which goes back to1000 years. It
              is known as the land of ‘revolution’. The people of Kadakkal
              participated in the revolution struggle led by the Travancore
              State Congress. People gathered in large number and began to
              combat against injustice done by the Bazzar contractors and
              police. This revolution is compared to the Spanish Civil
              Revolution led by Franco. Kadakkal is the land of working class,
              so the main trend of every one is to make the union of people and
              groups which are influenced by political parties.
              <br />
              <br />
              <b>Church History</b>
              <br />
              In the year 1986 the bifurcation of Kollam diocese took place and
              Punalur became a separate diocese under Rt. Rev. Dr. Mathias
              Kappil who was the first Bishop. Since it was a new born diocese,
              it had its own challenges to work through for a better future. The
              Bishop had to face many struggles and difficulties to bring up the
              diocese. In all these he stood firm to shepherd his flock. He was
              a good pastor who knew the woundedness of his flock. Punalur
              diocese is known as the missionary diocese as it has the highest
              number of Dalit Christians. Bishop Mathias was called to his
              eternal abode on February 24, 2007. The present Bishop is Rt. Rev.
              Dr. Silvester Ponnumuthu and he continues to support and shepherd
              us in the all the ways.
              <br />
              <br />
              <b>Apostolates</b>
              <br />
              The Sisters engaged themselves in taking the census of five
              villages in 1994. Awareness programmes for Panchayath Raj,
              nutrition, health and hygiene, savings, kitchen garden were
              conducted successfully. Mahila Samaj and credit unions were
              introduced. Faith formation and marriage counseling were given
              emphasis. In order to help the future generation in education, a
              boarding house primarily for dalit girls was started in our
              convent block. Regular camps for youth are conducted during summer
              holidays. Women’s empowerment groups are formed to mobilize
              government projects. Self employment schemes are introduced. The
              girls are given training in the respective fields and in turn,
              they teach the villagers about mushroom cultivation and goat
              rearing. The long awaited dream of having a school was realized on
              June 3, 1998 as they opened the St. Charles ICSE School with LKG
              and UKG with the vision of making it a full fledged school. The
              opening ceremony was simple, but significant because Sr. Joseph
              the only Indian pioneer alive lit the lamp which is kept burning
              till today. At the beginning stages, classes were in the convent
              building. On July 31, 2002, the foundation stone for the school
              building was laid by Rt. Rev. Dr. Mathias, Bishop of Punalur. It
              was an uphill task to put up the building but with the timely help
              of the province and support of the parents, the goal was achieved.
              Revival of our socio-pastoral ministry took place by placing
              Sr.Gracy Pothen who was fully involved in this mission.
              <br />
              <br />
              <p>
                This was continued by Sr. Sony Francis. Efforts are being made
                to carry on the good work started by committed persons in the
                past. Today the Sisters take care of Madhuramkunnu, Ilavupalam
                and Iyakkodu, the substations of the parish. On July 17, 1993
                five candidates were welcomed and ever since there was a great
                zeal in promoting vocations. The house was too small to
                accommodate the Sisters and the candidates. A proper convent
                building became an urgent need. Ever since the foundation of the
                Congregation, the sisters have experienced the hand of divine
                providence. Motivated by such experience Srs. Ignatius and Rina
                approached Rev. Fr.Guezou S.D.B to lend a helping hand in the
                form of a loan to build the convent. But to our surprise it was
                not merely a loan but a gift that he promised. It was a moment
                of joy and surprise for the sisters. Above all it was yet
                another occasion to deepen our trust in the Divine
                providence.The foundation stone of the convent cum boarding home
                was laid on January 1995 by Sr. Ignatius, the Provincial
                Superior and blessed by Msgr. Felix Arikaparambil of Punalur
                Diocese in the presence of the Parish priest and a few
                parishioners. The house was blessed on April 29, 1996 by Rt.
                Rev. Mathias, Bishop of Punalur.
              </p>
              <div id="imageContainer">
                <img src="images/subpage/IMG_0002.jpg" alt="" />
                <img src="images/subpage/IMG_0007.jpg" alt="" />
                <img src="images/subpage/IMG_0003.jpg" alt="" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Kadakkal;
