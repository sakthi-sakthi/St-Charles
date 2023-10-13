import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";

function Thirupattur() {
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
            <a href="/thirupattur">Thirupattur</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Thirupattur</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Thirupattur</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <p>
                In 1967, Rev.Fr.Ardusso, S.D.B., an Italian missionary founded
                the Guild of Social Serevice, at Tirupattur, North Arcot
                District, Tamil Nadu. Solely for the development of the poor and
                backward classed of the locality. The Guild was registered on
                March 9, 1967. In a letter dated October 1, 1971, the President
                of the Guild, Rt.Rev.Msgr. S. Lazar, S.D.B. Vicar General of
                Vellore tendered his resignation and requested the Secretary of
                the Guild, to make the necessary amendments in the
                constitutions. At the VII General Body Meeting of the Guild held
                on Sunday, July 1, 1973, Mother Renee who was a member of the
                Guild was replaced by Mother Francisca, the new Superior of the
                three communities. At this meeting it was resolved to hand over
                the Social Service Centre Project (in S.No.121/1, Pachal village
                area, Tirupattur) including the land and the buildings (erected
                and to be) to the Sisters of St.Charles Borromeo. They will
                therefore be in charge of the buildings already existing
                (Storerooms cum double car-shed, Dispensary, Cottage Industry
                Hall and Tailoring Training School) and of those to be brought
                in the near future. (Staff Quarters, Home for the destitute
                aged) and of all the Social Activities to be conducted there in.
                Besides all such activities, they may start any more they
                desire, like a small Hospital, a Boarding for destitute girls, a
                Primary School, etc. The sisters from Jolarpet attended the
                dispensary once or twice a week at the Guild Centre and attended
                to the patients, giving th4em relief from their ailments.
                Meanwhile the then Provincial Superior Mother Christiane and
                Mother Renee accepted the invitation of Fr. Ardusso to take up
                the project of the Guild and of the Social Services. The first
                three pioneers were Sr.Carola and Sr.Mathew from Jolarpet and
                Sr.Vincent from Bangalore. Mother Provincial arrived at Jolarpet
                on March 20, 1973 to open the new project of Tirupattur. Fr.
                Ardusso had built a dispensary and a workshop for spinning, a
                tailoring section was under construction on a 5 acre piece of
                land given to the convent. Rev.Fr. Amala Dassan the parish
                priest cut the ribbon and declared it open.
              </p>
              <div id="uniqueImageContainer">
                <img src="images/subpage/8.jpg" alt="" />
                <img src="images/subpage/71.jpg" alt="" />
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
            <br />
            <p>
              So the twin communities were transformed into triplets. The
              dispensary started functioning regularly from April1, 1973. A
              spinning centre was opened in the campus, on October 2, 1974,
              Gandhi Jayanthi day. It was inaugurated by the President of the
              Sarvodaya Sangh. Many poor girls received trining, it also
              promoted a small-scale industry for the women of the area. Twenty
              nine girls were given employment, twenty five for spinning and
              four for operating the plying machines. On April 21, 1974,
              Sr.Francisca the Superior of St.Charles Convent,Jolarpet was
              elected as the Ex-Officio President of The Guild and the Social
              Services at the General Body meeting. On November10, 1974 during
              the executive meeting the property of the Guild of Social Services
              of Tirupattur was officially handed over to the new Ex-Officio
              President. But Fr.Ardusso being the vice-president of the guild
              continued to do all the important transactions until the
              construction work of the convent was completed. On November 10,
              1974, the Bishop of Vellore blessed and laid the foundation stone
              for the convent. On June 1, 1976, Mother Benedicta Lobo, the new
              Provincial Superior and her councilors made the community of
              Tirupattur a separate canonical community. Sr. Paula was appointed
              as the superior of the new community. On January 1, 1977, the
              community occupied the new community building, until then the
              sisters were living in the dispensary building. Fr.Ardusso helped
              out in the construction of the hall for the tailoring and
              embroidery section. He also visualized the future needs of the
              sisters, and purchased 0.25 acres of land across the road for the
              purpose of building a Nursery school, to be source of income for
              maintaining the sisters. On June 1, 1977, the needle work section
              was opened and blessed by Rev.Fr.Stephen Bernard, Rector of Don
              Bosco, Tirupattur. Rev.Fr.G.Baruchi blessed the kitchen block on
              December 25, 1976. On July 24, 1978, Rev.Fr.Castelli, S.D.B.,
              blessed the corner stone of the chapel and work commenced on it.
            </p>
            <div id="uniqueImageContainer">
              <img src="images/subpage/61.jpg" alt="" />
              <img src="images/subpage/51.jpg" alt="" />
            </div>
            <p>
              The long awaited chapel was blessed by Rev.Fr.A.T.James, S.D.B.,
              on November 26, 1979. Opening a mat-weaving section intensified
              the social work programme. It was blessed by the nephew of
              Sr.Carola, Rev.Fr.V.T.John, S.D.B., the parish priest of Jolarpet.
              The spinning section was upgraded by replacing the hand machine
              with pedal machines. An exhibition was organized and inaugurated
              on April 13, 1982, by Natrajan, chairman of the Sarvodaya Sangh,
              the machines were blessed by Fr.A.T.James, parish priest of
              Tirupattur. Responding to the signs of the times, the great
              visionary Rev. Fr. Guezou S.D.B. inspired them to extend the
              horizon wider by opening a school in 1988. A boarding house for
              boys was also inaugurated, but it was closed down later. Evening
              coaching class continues to be a boon to the poor children from
              other schools. Since spinning had no future prospects, we were
              forced to terminate this department. Tailoring classes continued
              to serve several women. Gradually dispensary and tailoring classes
              had to be discontinued as the need of the time could not be met
              with. In St. Charles Matriculation School, the increase in
              strength of the students necessitated the extension of the school
              building. The school was also upgraded to Std.X, in January 25,
              2003. Mother Benedicta, the Superior General, inaugurated the new
              building. As the number of students went on increasing and there
              was need to update the school with laboratories, library, an
              additional building was an urgent need. In January 27, 2007 this
              building was inaugurated by the Provincial Superior Sr. Jaya.
              Today the school is upgraded to higher secondary and it is picking
              up gradually.
            </p>
            <p>
              <b>SOCIAL SERVICE</b>
              <br />
              The sisters carry on the good work according to the signs of the
              times. They are engaged in outreach programme, especially in
              Annandapatty and Olipuram. The Sisters render their services to
              the sick, lonely, aged, provide job opportunities, get admission
              for the students in various institutes, supervise the evening
              tuition classes for about 100 poor children, provide food for them
              after the class, are engaged in counseling to individuals and
              families and conduct spoken English classes to some of the women
              in the locality. Pastoral care is very much part of our Charism.
              The Sisters are actively involved in the celebrations of all the
              important feasts in the sub stations. They teach Catechism and
              help the laity to take active part in the parochial celebrations.
              Even the Novices render timely help in the parish. The Sisters of
              the community are very much indebted to the Don Bosco fathers who
              extend their spiritual help. Once a week and on certain occasions
              they offer mass in our Chapel and at ‘Arpana’.
              <br />
              <br />
              <b>S.C.B ASSOCIATES</b>
              <br />
              Due to inadequacy of rooms for the ailing and the aging Sisters
              and also to accommodate visitors and retreatants, a building has
              been constructed on the rear of the existing community building.
              It was planned and supervised under the direction of Sr.
              Francisca. Now it is a boon to many who come to us specially the
              old and sick Sisters.
              <br />
              <br />
              <b>EXTENSION OF THE CONVENT</b>
              <br />
              July 1, 1930 was a very memorable day, the opening of the
              orphanage with 20 girls ranignfrom the age of 5-14 years. It began
              with 4 girls from Kilacheri. The inmates in the orphanage
              increased in numbers so that in the year 1940, there were 450
              neither the lack of accommodation nor the meager finance could
              surpass Mother Marie Gerard’s concern and love for the poor
              children, she had an indomitable trust in Divine Providence.
              <br />
              <br />
              <b>A FEW MILE STONES</b>
              <br />
              Diamond Jubilee of the convent November 24, 1989 was a red letter
              day in the history of the Congregation and Little Flower Convent
              in particular as it was the Diamond Jubilee of the Convent. The
              solemn Eucharist was celebrated by the Bishop of Vellore Rt. Rev.
              Dr. Michael Augustine D.D. and con-celebrated by 24 priests from
              all over. Sixty lamps brought in by Sisters in procession
              represented the 60 years of toil and prayers witnessed by LFC. The
              presence of the then Superior General, Mother Andrea; Provincial
              Superior, Mother Renee and Sisters from both the Provinces were an
              additional cause of pride and joy for the inmates of LFC.
              <br />
              <br />
              <b>DEAR DEPARTED</b>
              <br />
              Sr. Ann Mary Sequeira, who was active as the Superior of the
              community, went to Chennai for a medical check up. There she died
              of a heart attack on July 31, 1989, while manipulation was given
              as treatment. Her untimely death left the community in sorrow. Her
              mortal remains were taken to Bangalore as her dear and near ones
              resided there. On January 5, 1996, Sr. Carola, one of the pioneers
              of the Indian mission left for her eternal reward at a ripe old
              age of 81. It happened to be on her birthday. Sr. Francisca, who
              spent herself for a number of years in this community died on the
              March 15, 2010. She did suffer with many ailments but intensely
              towards the last few weeks. Every brick, every flower, in fact
              everything in Tirupattur speaks of the gentle touch, aesthetic
              sense and master mind of Sr. Francisca. “The atmosphere of
              generosity of a fervent and loving community plays a very
              important role in the formation of each Sister. In such formative
              community, each of us, through personal responsibility, discovers
              the value of a true atmosphere of prayer, sisterly relationship,
              openness to others and apostolic zeal as factors of progress and
              perseverance in our vocation.” SCB Const. # 67. The community of
              Tirupattur has taken this direction of the Constitutions and tries
              to be an enriching and effective community for the formees in the
              campus. Recounting the steady progress of the missions at
              Tirupattur, is a great joy. ‘Ever onward we progress towards the
              Promised Land…..’ is signified by this community. The fragrance of
              ‘Bright Smile’ goes so naturally to the poor and the needy around
              us. St. Charles Social Service Centre is always an “Inn” where one
              can enter any time and feel at home.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Thirupattur;
