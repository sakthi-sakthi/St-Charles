import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Muttom() {
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
            <a href="/muttom">Muttom</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Muttom</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Muttom</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="mt-5">
                <p style={{ marginTop: "20px" }}>
                  Romans and Greeks traded in India its true but could it be in
                  ‘Muttam’ a coastal village at the tip of Kanyakumari district
                  in Tamilnadu. Yes, that also is true. Muttom a petty village
                  is situated on the banks of river Noyyal a perennial water
                  source that irrigated the land to make it rich in spices and
                  condiments and was laden with precious stones that allowed
                  people from across the globe. The prosperity of the village
                  was also due to river Kanchi Maanadhi- another river that
                  joined Noyyal before merging with river Cauvery, the cause of
                  Chola Empire’s glory. One becomes very inquisitive to know how
                  ever did Muttom which Cheras, Cholas and Pandyas vied to make
                  as their possession lose its popularity? Well, it’s the
                  people’s indifference and neglect, local riots and conflicts
                  destruction of natural forces, that have over the years led to
                  the dilapidation of its fort and destruction of all its
                  monuments. Archaelogical findings have however helped
                  discovering its great heritage lost over time. The Christian
                  missionaries made many an impression in the historical records
                  of South Indian coastal regions are an all known fact in that
                  Kannyakumari district has a unique position. Kottar, Turicorin
                  and Thiruvananthapuram of the Latin rite, Thuckalay of Syro
                  Malabar and Marthandam of Syro Malabar rite have their
                  jurisdictions, in the district. The area under the present
                  diocese of Kottar had known the Christian faith several
                  centuries before the arrival of the Portuguese on the West
                  Coast. Monuments recently discovered in Chinna Muttom near
                  Kanyakumari support it. The presence of St. Thomas Christians
                  in Thiruvithancode, Kottar and other places in the district
                  had also been attested by several missionaries under the
                  Portuguese Padroado. However with the arrival of the
                  Portuguese missionaries, a small section of the local people
                  known as Paravas became Christians in 1536-1537. Seven years
                  after their conversion more than ten thousand fishermen known
                  as 'Mukkuvas" in the coastal villages from Poovar( now in the
                  archdiocese of Thiruvananthapuram) to Pallam were baptized in
                  1544 by the greatest post-apostolic missionary of the Church,
                  St. Francis Xavier. He was one among the first seven to take
                  vows in the Society of Jesus founded by St. Ignatius of Loyola
                  in 1534.The present Cathedral of St. Francis Xavier
                  encompasses the church of St. Mary built by Francis Xavier.
                  With renewed efforts of the Sacred Congregation for the
                  Propagation of the Faith (founded in 1622) Christian
                  missionaries began to concentrate on and evangelize the
                  interior parts of the area. Initially, attention was given to
                  the conversion of the people of Vellala and Nair communities.
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
            Many from these communities embraced the Christian faith and
            prominent among them was the martyr of the diocese, Devasahayam
            Pillai (Lazar) aka Nilakanda Pillai. He was born in the village of
            Nattalam in 1712 and was an official in the palace of King Marthanda
            Varma of Thiruvithancore. He was converted to Christian faith by the
            gentle efforts of a captured captain of the Dutch Navy, Eustachius
            De Lannoy who later became the Chief Admiral of the King's army (In
            Malayalam he was known as Valia Capitatan). Nilakanda Pillai was
            baptized as Lazar (Devasahayam) at the hands of Rev. Fr. John
            Baptist Buttari, S.J., Parish priest of Vadakkankulam in 1745. The
            king tried in vain to entice him back to Hinduism. Then, the enraged
            king ordered him to be arrested and shot to death. After enduring
            torture for three years, Devasahayam Pillai was taken to
            Kattadimalai, Alravaimozhi, and shot to death on January 14, 1752.
            His mortal remains were interred in the church of St. Francis
            Xavier, which in turn became the Cathedral of the Diocese of Kottar
            in 1930. The 18th century witnessed the rapid growth of Christianity
            in the interior parts of the area, following large scale conversion
            of the people of Nadar community. Vencode and Karenkadu were the
            centres of evangelization and conversion. With the creation of
            Verapoly- Varapuzha- Vicariate, the Portuguese Padroado system came
            to an end in this area except in the then seven parishes from
            Eraymanthura to Neerodi. In 1853, Kollam Vicariate was established
            and was placed under the care of the Belgian Carmelite missionaries.
            With the establishment of the hierarchy in India in 1886, Kollam
            became a diocese that extended from Mavelikara in the north to
            Kottar (Nagercoil) in the south, and Kottar became the centre of the
            southern part of Kollam diocese. The Swiss-born, Carmelite Bishop
            Aloysius Maria Benziger was the architect of present diocese of
            Kottar. His saintly life, missionary zeal and great pastoral
            leadership helped the formation of many Catholic communities
            especially in the southern part of Kollam diocese. Realising that
            education was important for the development of the people,
            Archbishop Benziger established schools in many of the coastal
            villages and founded St. Francis Teacher Institute at Assisi,
            Nagercoil, to train teachers for the schools. In all, he founded 112
            schools in a short span of 25 years. Carmel High School and St.
            Joseph's School, Nagercoil, remain living monuments to the foresight
            of this great visionary and missionary. Archbishop Benziger was
            among the first to request the Vatican to beatify the Carmelite nun,
            St. Theresa of the Child Jesus. Following her beatification he
            constructed the first church in the world at Kandanvilai (now in
            Kottar diocese) and blessed it on April 7, 1924, and the second
            church was blessed on May 12, 1924 at Thoonkampara now in
            Neyyatinkara diocese. Accepting Pope Pius XI's invitation,
            Archbishop Benziger assisted at her canonization ceremony on May 17,
            1925. Thanks to his recommendation the southern part of Kollam
            diocese was formed as a new diocese on May 26, 1930, with Fr.
            Lawrence Pereira as its first bishop, the third Indian to become a
            bishop in the Latin rite. Bishop Lawrence Pereira was no stranger to
            the new diocese since he had ministered in Vencode and Enayam areas.
            He had to toil hard to build the infrastructure of the new diocese
            from scratch. He was called to the eternal reward on January 5,
            1938. Though Tamil was the predominant language of the new diocese,
            it was part of Thiruvithancore and Cochin State with Malayalam as
            the state language. Keeping in mind the linguistic aspirations of
            the people of the diocese, the Vatican appointed the Tiruchirapalli
            native and Superior of Palayamkottai Jesuit Mission, Rev. Thomas
            Roch Agniswamy as successor to Bishop Lawrence Pereira in 1939. In
            the reorganization of States in 1956, Kanyakumari district became
            part of Madras state now known as Tamil Nadu. In 1963, the diocese
            of Kottar was detached from the Metropolitan See of Verapoly and
            attached to the archdiocese of Madurai. Evangelization activites
            received much impetus during the tenure of Bishop Agniswamy. A great
            number of parishes, mission stations and schools were established.
            His special interest in the promotion of local vocation resulted in
            the founding of St.Aloysius Minor Seminary for the diocese and Tamil
            Nadu Xavier Mission Home for the missions. Bishop Marianus
            Arockiasamy from Kumbakonam, who succeeded Bishop Agniswamy in 1971,
            was committed to the implementation of the reforms of the Second
            Vatican Council, especially in the field of Bible, Liturgy,
            Catechetics and other pastoral activities. The setting up of sixteen
            diocesan commissions, Animation Centre, Pastoral and Youth Centers
            and formation of parish councils in more than fifty per cent of the
            parishes bear witness to his interests. The communal riots that
            rocked Kanyakumari district in 1982, posed a great challenge to the
            diocese and to Bishop Arockiasamy. Premeditated and organized
            attacks on Christians and church properties shattered the calm of
            the otherwise peaceful district. In all, ten Catholics lost their
            lives to police and communal firings. Churches, convents and other
            religious places were vandalized and desecrated. People of Pallam
            parish had to flee for their lives. Coastal parishes were cut off
            from the main land and essential food supplies had to be carried by
            sea. Bishop Arockiasamy and the Head of the Kundrakudi Hindu Mutt
            (Hermitage) and other religious leaders toured the affected areas to
            instill confidence in the people and peace returned to the riot-torn
            district. They founded" Thiruvarul Peravai"(Graceful Assembly) to
            foster communal and religious harmony. The Catholic Church in India
            and other parts of the world came to the help of the affected
            people. Bishop Arockiasamy continued to serve the diocese until his
            promotion as Archbishop of Madurai in 1987. Fr. Leon A. Tharmaraj,
            who became the fourth bishop in 1989, was the first" son of the
            soil" to shepherd the diocese of Kottar. Bishop Leon faithfully
            carried forward the policies of his predecessor and went on further
            in making the diocese, truly the Church of the laity concentrating
            on the formation of Basic Christian (Ecclesial) Communities,
            pastoral and parish councils and encouraging lay leadership in the
            mission of the diocese. The killer tsunami waves that swept the
            coastal villages the day after Christmas in 2004 brought humongous
            miseries to the lives and properties of thousands of Christians.
            More than 800 people lost their lives and thousands of houses,
            fishing boats and many churches were damaged. Bishop Leon together
            with the entire diocese faced the challenge posed by the
            unprecedented loss and undertook to rebuild the lives and properties
            of the people. People from all walks of life irrespective of caste
            and creed joined in the valiant efforts of the diocese in
            rehabilitating the victims of the killer tsunami. It is true the
            tragedies often bring the best in the human person and the Tsunami
            devastation witnessed the unprecedented outpouring of love and
            support from people of all walks of life in India and other parts of
            the world." One touch of nature makes the whole world kin". The
            little story that has led the sisters of St.Charles Borromeo to this
            distinctly glittering bluish green jewel of India should not go
            covered under sands of time; therefore this detailed narration here
            in the book. It was in 2009 sometime, to be more specific, in the
            month of May, Rev.Fr.Arockiaraj SJ. (St.Mary’s – Madurai) who is the
            confessor for Madurai Community handed over a letter given by
            Rev.Fr.Amalanathan of Kottar diocese to Sr.Amali, the then superior
            of the community. The letter enclosed an invitation to work and
            administer a hospital at Muttom. The proposal had pleasant facts to
            make it appealing for the sisters of St.Charles Borromeo. This was a
            call to enter a region which is a nursery of religious vocations,
            with abounding catholic population. It is a call again to the
            diocese where a refusal was given years before. It is to run a
            hospital that is already built and assurance of financial aid was
            given to equip and administer it. With the directions given by
            Fr.Amalan sent the invitation to Sr.Jaya, Provincial Superior of the
            Eastern Province. Discussions were held a few times by the
            Provincial Superior and her council with the bishop of Kottar,
            Rt.Rev.Peter Remigius DD and the pastoral commission members. Muttom
            was visited a number of times by Sr.Jaya and her council members and
            some chosen sisters, to gather the first hand information and to
            study this project. The study report and the conditions attached to
            this mission project were submitted by the group. The opportunity
            that lay at a hand’s stretch to grasp was the bright side of the
            project but want of a sister doctor posed a threat. With confidence
            infused by all the responsible office bearers of the diocese viz.
            Fr. L.Tharsius Raj, Fr.Francis Borgia and others the ‘fiat’ was
            pronounced. A contract that stipulated the conditions laid for an
            experimental period of one year was signed on 28th September 2010.
            Even before the contract was signed, ‘The Vianney Hospital’, was
            inaugurated on May 10, 2010. Bishop Rt.Rev.Peter Remigius blessed
            the building and he wished the pioneers Sr.Navamani, Sr.Jerlin and
            Sr.Sheela John, God’s blessings and celebrated a solemn Holy
            Eucharist in the new building with the gathering that comprised good
            many representatives from the village, priests, religious, and the
            Sisters of St. Charles Borromeo about 75 in all. ‘The Indian Pearl’
            is proving its worth unfolding its fragrance through service
            rendered to the sick and the ailing both in the hospital and those
            confined to their homes. The immersion of the sisters into the life
            of the local community has evinced great regard and respect from the
            people. The sisters on the other hand are endeavoring to rise up to
            the expectations of the needy. A doctor comes everyday to the
            hospital for a few hours. The sister nurses take total
            responsibility for the inpatients during the rest of the day. About
            25 patients are attended to everyday. The sisters visit the homes in
            the villages and the record of visits maintained is an evidence for
            their faithful and meticulous survey of the village to learn the
            need of the villagers. These visits have helped to build a good
            rapport with the people and to make themselves approachable to
            them.The vision the sisters have for a busy hospital is
            praiseworthy. God bless us with good doctors to serve our patients
            is their everyday prayer.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Muttom;
