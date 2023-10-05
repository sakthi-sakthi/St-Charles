import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Vilathikulam() {
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
            <a href="/vilathikulam">Vilathikulam</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Vilathikulam</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Vilathikulam</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="bs-exercis mt-5">
                <p style={{ marginTop: "20px" }}>
                  In spelling the purpose of this community’s presence in this
                  place, the community makes a definitive statement, ‘to ensure
                  dignity and education to the children who are under the
                  clutches of the rich and the powerful.’The rose, ‘Torch of
                  Liberty’ signifies the intention and involvement of our
                  Sisters in releasing the captive and empowering the
                  illiterate. From the initial years of the formation of the
                  Christian Community in this region this has been the prime
                  mission of the church which now comes as a legacy to us.
                  ‘Bonded labour’ was a public practice as if it was one of the
                  rights of the rich. And since the time the state announced it
                  as an impermissible practice, it started existing under cover.
                  This mission of bringing liberty to the captives needed no
                  force or extra inspiration for the sisters. At the very
                  introduction of the nature of the mission in Vilathikulam the
                  Sisters’ ‘fiat’ was instant.
                </p>
              </div>
            </div>
            <h5> The Geographical location</h5>
            <div className="bs-call" style={{ textAlign: "justify" }}>
              <p>
                Vilathikulam lies 60 kms from the rough coast of the Indian
                Ocean. The entire landscape has a dry look. All that is green
                are the thorny bushes and the Palmyrah trees that are found
                scattered all over. The fertility of the soil is lost due to
                salt deposits in addition to failing monsoons. People who adopt
                fishing for livelihood use primitive methods that bring no more
                gain but saving for a second meal. The people are mostly dalits
                (belonging to scheduled castes) marginalized by the business
                class. Most of them are daily wagers and constitute the
                voiceless section of the society. Despite this fact that there
                were men of valor who did rise up to raise their voice to claim
                their freedom and assert their rights, this places this part of
                the land occupies a significant place in the history of India
                because Panchalankurichi, the headquarters of the valiant ruler
                ‘Veerapandiya Kattappomman’ who revolted the Britishers’ claim
                for tax is just about 40 kms., from Vilathikulam. The traitor
                who betrayed Kattappomman namely Ettayyappan was from
                Ettayapuram that is about 50 kms, from Vilathikulam. As if to
                erase the blot caused by this disloyal son of Bharathmatha, the
                poet Bharathiar who rose from Ettayapuram ignited the Spirit of
                the thirst for freedom in an innovative way. None can match him
                in writing spirited poems and concocting parables from great
                epics. Tuticorin, the port city in South India and the district
                headquarters of Vilathikulam had once been a beautiful town
                known for pearl fishing. The traders and the fishers were at
                constant conflict in the first quarter of the 16th century. The
                misery and humiliation that the coastal natives seemed to have
                experienced escalated beyond remedy. In an incident described,
                one reads, that one of the businessmen tore off the ear of a
                member of the fisher folk community. It was at this time of
                their struggle, the Portuguese came to their protection. The
                fleet of the Portuguese came along with some priests who
                baptized about 20,000 people who embraced Christianity as an
                expression of their gratitude to the Portuguese priests. This
                happened in the years 1535 to 1537. Sent by St. Ignatius of
                Loyola, St. Francis Xavier arrived in Tuticorin in 1542. From
                then to 1886 the Christian church in these coastal areas had
                undergone ‘pull and push’ experience due to the arrogance of the
                local rulers and the overambitious missionaries of different
                religious orders. The Pearl Fishery Coast became part of
                Tiruchirappalli diocese that was established in the year 1888. A
                few parishes of this area were retained as part of
                Madras-Mylapore diocese. In 1923, Tuticorin was created as
                diocese and was separated from Tiruchirappalli diocese and was
                handed over to the diocesan clergy by the ‘Apostolic Brief’
                ‘Quac Catholico Nomini’ of Pope Pius XI. Rt. Rev. Francis
                Tiburtius Roche, S.J. was its first bishop. Saint Francis Xavier
                and Saint Theresa of Child Jesus were held as the patron saints
                of the diocese. On April 4, 1930 the five parishes of
                Kooduthalai, Manapad, (Holy Ghost Church) Punnaikayal, Tuticorin
                (Our Lady of Snows Church) and Vaippar which were till then
                under the Padroado were amalgamated into the diocese by virtue
                of the Papal Bull “Quae ad Spirituale” of Pope Pius XI. The
                diocese had 18 parishes, 23 priests and 70000 faithful. The
                Cathedral was built by a Jesuit named Piccinelli. In 1849 it was
                consecrated by the then Bishop of Madurai Apostolic diocese.
                Following Bishop Roche (1923-1953), the bishops who steered this
                diocese to its present vibrancy are Bishop Thomas Fernando
                (1953-1971), Bishop Ambrose (1971-1981), Bishop Amalanathar
                (1981-1999) and Bishop Peter Fernando (1999-2005). Their labour
                has yielded the fruit of 340,000 Catholics, 190 priests, 105
                parishes and numerous institutions both spiritual and secular
                ensuring the growth of the people in all walks of life. The
                present Bishop, Rt. Rev. Yvon Ambrose was consecrated on May 18,
                2005.
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
        <h5>The Mission of Compassion</h5>
        <div className="bs-ecep" style={{ textAlign: "justify" }}>
          <p>
            The Parish of Vilathikulam was constituted in the year 1981, with 14
            substations and was dedicated to St. Antony of Padua. For reasons
            such as intense care and development of the parish it was handed
            over to the Salesians of Don Bosco on September 24, 1994. Rev. Fr.
            Francis Guezou, SDB, ‘The man without Frontiers’ who patronized the
            developmental works of this parish with his confreres, encouraged
            the sisters (of St. Charles Borromeo) to establish our mission with
            a new emphasis to our vision and aided the community with economic
            support for the apostolate. The Bishop, Rt. Rev. Dr. Amalanathar,
            D.D. in his invitation had directed the sisters to start the convent
            by March 1997 but the sisters proving again that they are slow but
            steady reached Vilathikulam on August 4, 1997. Fr. F.Guezou blessed
            the foundation stone. Sr. Ignatius, who was then the Provincial
            Superior of the Eastern Province laid the foundation in the land
            measuring 4.5 acres and lay on the left side of the Vembar Road
            about two kilometers from Vilathikulam. The pioneers Sr. Ursula and
            Sr. Mathilda Mahimai began a new community in a rented house at
            Vilathikulam town on August 4, 1997. The move to the newly built
            house took place on November 18, 1999. The time that passed between
            was the time of personal visits to the houses in and around
            Vilathikulam. Opening their eyes and ears to the things and people,
            the heart of the sisters were flooded with compassion. Their minds
            seethed with ideas. They collected the children working in brick
            kilns, match factories and in the rich peoples’ houses. The children
            from broken families and those orphaned were also gathered. They
            were led on a new path that took them to a non-formal school which
            opened its door on February 12, 1999. Tuticorin Multi Social Service
            Society (TMSSS) enabled the sisters to undertake this project by
            adjoining it with the ‘Child Labour School’ scheme of the
            Government. The strength of the school was 50. Here in the ‘Child
            Labour School’ the children are taught to read and write, and to
            face the school exams that correspond to their age and are inducted
            into regular schools. They are introduced to various methods of
            learning and are helped to develop their talents. Parents’ meetings
            are held regularly to discuss the future plans for their children. A
            free boarding home for the girls who dropout of schools was another
            felt need of the place that was started in parallel with the ‘Child
            Labour School’. About 40 girls who are cared in this home attend
            their regular classes in the Government School. The effort to
            introduce the computers and educate the girls of the surrounding
            villages to be computer literates and this was actualized in the
            year 2000 with an inaugural function on December 27. This could not
            be continued after 2005 since the need for transport to reach the
            ‘Adrian Computer Centre’ in the convent was not easily accessible.
            The aspirants of this centre preferred going to the computer centre
            started by the Salesian fathers that year in the town. It could not
            be said that it was a failure because this introduction had enabled
            the Salesians to make their enterprise successful and a good number
            of people became computer literates. The ministry extended both by
            the SCBs and the SDBs in this locality is a total success. Education
            true to its definition has evinced the esteemable nature of the
            human persons. This rapid change has been made so evident with our
            English Medium school becoming popular in this place where just a
            decade ago people thought education is unaffordable and a luxury.
            St.Charles English Medium Primary School started in 2006 runs
            classes from LKG to Std. IV. The total strength is 102. “What does
            it profit a man if he gains the whole world and loses his soul?”
            (Mt: 16: 26a). Were not these words of our Lord that snatched St.
            Francis Xavier from a world of deemed glory and brought him to the
            fishery coasts of India? The objective of all education should be to
            orient to knowing the Creator. The sisters don’t neglect the
            Pastoral work, carried on in collaboration with the Salesian Priests
            in preparing the children and adults for the reception of the
            sacraments. Liturgical animation and conducting Sunday school are
            the weekly programmes. Visiting the families, Basic Christian
            Community meetings and prayer meetings in the substations are
            regularly attended. All these activities ensure the faith formation
            of the people and the inmates. One need not drive hard the
            imagination to visualize the busy schedule of the four sisters. The
            campus is prospective of becoming a ‘hive’ filled with some more
            ‘busy bees’.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Vilathikulam;
