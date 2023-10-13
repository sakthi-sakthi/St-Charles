import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Yelagiri() {
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
            <a href="/yelagiri">Yelagiri</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Yelagiri</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Yelagiri</h3>
        <div className="row">
          <div className="col-lg-9">
            <div id="uniqueImageContainer">
              <img src="images/logos/welcomebg.jpg" alt="" />
            </div>
            <div>
              <br />
              <div className="bs-objective">
                <p>
                  The path taking the roadway to Yelagiri is finely constructed
                  with the milestones and signboards all the way through. Petrol
                  pumps are sufficient enough which make travelling safe and
                  easy. The District administration has taken up the task of
                  developing Yelagiri Hills into a tourist destination by
                  promoting the adventurous sports such as Paragliding and Rock
                  climbing. The highest point in Yelagiri is the ‘Swamimalai,’
                  standing tall at 4,338 ft. It is the trekking enthusiasts’
                  destination. The view from the summit is spectacular. The Hill
                  provides a good number of trekking trails through the thick
                  reserved forests. If you enter the campus of St. Charles
                  Convent that is a few yards away from Athanavur bus stop, you
                  will find simple buildings, well maintained gardens and mango
                  groves, coffee plantation, shady trees, playgrounds and above
                  all teeming children with bright smiling faces, leaving you in
                  wonder and a thrill of joy. This is the result of a response
                  given to an invitation extended to the Sisters of St. Charles
                  in 1968 by Rev. Fr. Francis Guezou SDB, a French Missionary,
                  and his vision for collaboration in his adventurous Endeavour
                  of uplifting the primitive hill tribes. Rev. Mother
                  Christiane, a courageous Belgian missionary, the then
                  Provincial Superior had no hesitation in answering this call
                  of the hills and sending her sisters to work there. It was
                  their wild dream and unabashed obsession with the mission of
                  Compassion that enthused and energized them. But the reader
                  should know that forty-five years ago this hill was almost an
                  uninhabitable place for human beings. ‘Send forth your Spirit
                  O Lord, that the face of the earth be renewed.’
                </p>
                <br />
                <p>
                  Responsibly sharing in the mega project of Rev Fr. Guezou, the
                  Sisters of St. Charles Borromeo worked with loving heart,
                  creative vision and an unflinching courage. When we pool our
                  strength and work in one mind and heart, the presence of the
                  religious in a place becomes a source of growth and
                  inspiration to all. The mission at Yelagiri Hills is a
                  testimony to it. Owing to the generosity of Rev. Fr. Guezou
                  and Mr. Duhayon, a friend and benefactor, the Sisters of St.
                  Charles were able to open new avenues of apostolic activities,
                  all for the cause of the tribal. The English Medium
                  Residential School was built in 1975 in view of assuring some
                  source of income for the community and extending their service
                  to the poor. When it did not prove to be beneficial another
                  project was planned and executed. In 1977 ‘Snehalaya- ‘a home
                  for the tribal girls was built. This home continues to
                  accommodate 100 to 120 girls purely of tribal origin. The
                  sisters are not able to satisfy the growing demands for more
                  admissions due to lack of space and sufficient water. In those
                  days a Residential English Medium School in the hill stations
                  was an attraction to many. Many hands and hearts have worked
                  to ensure good education to the students of St. Charles
                  English Medium Residential School from the time of its
                  inception. As the years rolled by, the mushrooming of such
                  institutions around, led to the decline in the number of
                  admissions to St. Charles. This has triggered greater
                  enthusiasm in the sisters to fight tooth and nail in order to
                  enhance the quality of education. They hope to revive its
                  credibility and prestige in the true spirit of selfless
                  service. The Primary Tamil Medium School was started in 1983
                  with 35 children. Today this school has a strength of 480
                  students.
                </p>
              </div>
              <div className="bs-call">
                <p>
                  The land purchased for the purpose of upgrading the Tamil
                  Medium School has an interesting story behind it. While Fr.
                  Guezou was searching for a piece of land, a lorry driver in
                  Kodiyur filed a case accusing him of confiscating his
                  property. As it is always with the court cases, this case too
                  lingered long without a final verdict passed on it. The lorry
                  driver was almost at the end of his financial fund as he had
                  to pay heavily to the advocate. That was an opening to an
                  unexpected easy solution to a virulent plan to trap an
                  innocent missionary. The visceral response to forgive and
                  embrace the offender often tips the balance of justice. The
                  lorry driver requested Fr.Guezou to buy his land appraising it
                  as he thought it best. Without delay the deal was made.
                  (Adapted from ‘A Man without frontiers, Fr. K. Maria Arokiam
                  SDB) “Everything works for good for those who love God.” Rom.
                  8:28. “Each rebuff is an opportunity to move forward and an
                  experience to learn.” (Paper passion) With his careful
                  planning and systematic execution, this land, almost a rocky
                  ground was leveled and a School was built. In 1987 a Middle
                  school was opened which was developed into a High School in
                  1990 and into a Higher Secondary School in 1998, solely for
                  the tribal boys and girls. For a person like Fr. Guezou, no
                  goal was too high to reach. To incarnate the compassionate
                  love of God by living in solidarity with the poor, on July 3,
                  2002 a centre for tailoring and free coaching classes was
                  opened at Nilavur with the initiative taken by Sr. Navamani
                  under the guidance of Rev. Fr. Guezou. Every year an average
                  of 15-20 women from the surrounding villages are trained in
                  tailoring. They also run a project of cap, mask and gloves
                  making, which gives job opportunities for the trained tailors.
                  Candle making is another income generating project run by this
                  centre. A considerable number of students from Nilavur and
                  neighbouring villages attend the evening classes. They are
                  provided with supper and they stay at the center for
                  night-study as they lack facilities in their house.
                </p>
                <br />
                <p>
                  Every year the NSS and summer camps are held for a period of
                  ten days each. The sisters visit the houses in the nearby and
                  far away villages on the Hills; encourage the women to enroll
                  in Self Help Groups. 15 Self Help Groups (SHG) have already
                  been formed and are functioning quite well. ‘Womens’ Day’ is
                  celebrated every year with great enthusiasm and much
                  preparation. Awareness program for women are conducted on
                  Pro-life and HIV/AIDs; orientation on house-keeping, small
                  saving funds, hygiene and cleanliness and cottage industries.
                  Adult education classes are held at the centre. Sr.Punitha
                  Gopal is incharge of this centre at present. The St. Charles
                  Prayer House at Yelagiri is frequently used for retreats,
                  seminars and courses. Though it is an energy draining task to
                  get this house ready for common programmes of the Province,
                  the sisters consider it a privileged occasion to serve and
                  extend their hospitality to all. They make the necessary
                  arrangements and joyfully and readily take up this mission to
                  make everyone feel at home so that they go back to their
                  communities, refreshed physically, spiritually and
                  emotionally. The community had the rare privilege of hosting
                  the Provincial Chapter of December 1987 and the General
                  Chapters of 1987, 1993, 2000 and 2006. Sisters are involved in
                  the parish activities, teaching Sunday catechism, preparing
                  children and people for the Sacraments. Jubilant songs of
                  praise resounded on the hills inviting celebrities, officials
                  and heads of the institutions on several occasions like the
                  Golden Jubilee of the Religious Profession of late
                  Sr.Theresita a S.C.B, the Indian Pioneer in 1987, of late Sr.
                  Gertrude Datarayan in 1996, of late Sr.Catherine and Sr.
                  Monica in 2000 and the Silver Jubillee of Sr. Sukitha, of late
                  Sr. Helen and Sr. Gracy Pothen.
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
export default Yelagiri;
