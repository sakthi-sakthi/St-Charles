import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Cosaf() {
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
            <a href="/cosaf">COSAF</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">COSAF</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">
          The Commission for Spirituality and Formation (COSAF)
        </h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="container">
              <h5 className="text-center">
                COSAF ACTION PLAN FOR 2021-22.EASTERN PROVINCE
              </h5>
              <div class="bs-callout">
                <p>
                  <b>Mission ;</b>To incarnate God’s mercy through global
                  solidarity
                </p>
              </div>
              <div className="bs-call">
                <b> Aims:</b>
                <ol>
                  <li>
                    To enable the sisters to deepen their intimacy with Jesus
                    for growth in spiritual life by giving them mystical
                    experience
                  </li>
                  <li>
                    To strengthen the Spiritual health of the community by
                    giving them mystical experience
                  </li>
                  <li>To design a systematic plan to promote good vocation</li>
                  <li>
                    To strengthen the existing SCB associates and to start SCB
                    Associates in three more communities
                  </li>
                </ol>
              </div>

              <div className="bs-call">
                <b>
                  Aim 1: To enable the sisters to deepen their intimacy with
                  Jesus for growth in spiritual life
                </b>
                <p>Objectives:</p>
                <ol>
                  <li>
                    To enable our sisters to love the Word of God and to
                    familiarize them with Gospels
                  </li>
                  <li>
                    To enable the community members in the life of faith through
                    faith sharing
                  </li>
                  <li>
                    Having an hour of adoration to enhance the spiritual well
                    being of province
                  </li>
                </ol>
              </div>
              <div className="bs-objective">
                <b>
                  Objectives 1: To enable our sisters to love the Word of God
                  and to familiarize them with gospels
                </b>
                <ul>
                  <li>
                    <b>What:</b> To enable our sisters to love the Word of God
                    and to familiarize them with gospels
                  </li>
                  <li>
                    <b>Why:</b> To enable sisters to love the word of God and to
                    discern God’s will through reading and reflecting God’s
                    word. To enable the sisters to grow spiritually
                  </li>
                  <li>
                    <b>When: </b> Once a fortnight. From 2021 June to 2022 March
                  </li>
                  <li>
                    <b>How:</b> The COSAF members will circulate the format the
                    way the gospels to be read in the communities
                  </li>
                  <li>
                    <b>For whom:</b> The members in the communities
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> The sisters in charge of the
                    communities
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Report will be sent to the member
                    in charge of the communities
                  </li>
                </ul>
              </div>
              <div className="bs-objective">
                <b>
                  Objective:2 To enable the community members in the life of
                  faith through faith sharing
                </b>
                <ul>
                  <li>
                    <b>What:</b> To enable the community members in the life of
                    faith through faith sharing
                  </li>
                  <li>
                    <b>Why:</b> To enable sisters to share their experience of
                    faith To increase and inspire the faith of one another To
                    experience God through daily events To share about 0ne’s
                    faith and thus to inspire others
                  </li>
                  <li>
                    <b>When: </b> Once in fortnight
                  </li>
                  <li>
                    <b>How:</b> By reading and reflecting the word of God and
                    share with the group God’s mighty deeds in the experience of
                    faith
                  </li>
                  <li>
                    <b>For whom:</b> Community members
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> The sisters in charge of the
                    communities
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Report will be sent to the
                    members in charge of the communities.
                  </li>
                </ul>
              </div>
              <div className="bs-objective">
                <b>
                  Objective 3: Having an hour of adoration to enhance the
                  spiritual well being of province
                </b>
                <ul>
                  <li>
                    <b>What:</b> Having an hour of adoration to enhance the
                    spiritual well being of province
                  </li>
                  <li>
                    <b>Why:</b> for the spiritual well being of sisters and the
                    province
                  </li>
                  <li>
                    <b>When: </b> Once in fortnight
                  </li>
                  <li>
                    <b>How:</b> Every community will have an hour of adoration
                    on the prescribed days by the COSAF and pray for all the
                    intentions of the province, family members, sick members
                    ….etc Individually 15mnts of praise and worship .Rosary
                    followed by Personal Prayer
                  </li>
                  <li>
                    <b>For whom:</b> Sisters in the communities.
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> The sisters in charge of the
                    communities
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Report will be sent to the
                    members in charge of the communities
                  </li>
                </ul>
              </div>
              <div className="bs-call">
                <b>
                  Aim 2: &nbsp; To enhance the sisters about the knowledge of
                  mysticism and the practice of mysticism
                </b>
                <br />
                <strong>
                  Objecitve : To enhance the sisters in the mysticism so as to
                  deepen the awareness of God in their lives
                </strong>
                <ul>
                  <li>
                    <b>What:</b> To enhance the sisters in the mysticism so as
                    to deepen the awareness of God in their lives
                  </li>
                  <li>
                    <b>Why:</b> To contemplate on mystical experience of God To
                    deepen the relationship of the sisters with Jesus.
                  </li>
                  <li>
                    <b>When: </b> On arranged dates by the COSAF Chair person
                  </li>
                  <li>
                    <b>How:</b> By attending seminar on mysticism and making use
                    of the time for meditation effectively
                  </li>
                  <li>
                    <b>For whom:</b> Community sisters
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> The sisters in charge of the
                    communities
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Report will be sent to the
                    members in charge of the communities.
                  </li>
                </ul>
              </div>
              <div className="bs-call">
                <b>
                  Aim: 3 . To design a systematic way for recruiting good number
                  of vocations
                </b>
                <br />
                <strong>
                  Objective: To promote good number of vocations to our province
                </strong>
                <ul>
                  <li>
                    <b>What:</b> To promote good number of vocations to our
                    province
                  </li>
                  <li>
                    <b>Why:</b> To continue the mission entrusted to us To
                    strengthen the number of sisters in the province
                  </li>
                  <li>
                    <b>When: </b> Every year
                  </li>
                  <li>
                    <b>How:</b> Sisters will visit parishes and schools and
                    canvas for vocation Organise ‘come and see’ program or camps
                    Through posting videos in the YouTube standard video
                    presentation for vocation promotion
                  </li>
                  <li>
                    <b>For whom:</b> The girls and the youth
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> the zonal leaders and the
                    vocation promoters
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Checklist
                  </li>
                </ul>
              </div>
              <div className="bs-call">
                <b>
                  AIM: 4: To strengthen the existing SCB Associates and to start
                  SCB associates in three more communities.
                </b>
                <br />
                <strong>
                  Objective: To strengthen SCB Associates: in number as well as
                  in spirit.
                </strong>
                <ul>
                  <li>
                    <b>What:</b> To strengthen SCB Associates: in number as well
                    as in spirit
                  </li>
                  <li>
                    <b>Why:</b> To strengthen them in faith and in spirit To
                    share with us our mission of compassion To extend our
                    mission
                  </li>
                  <li>
                    <b>When: </b> 2021-2022
                  </li>
                  <li>
                    <b>How:</b>By having gatherings once in two months Following
                    the syllabus prescribed by the commission Visiting the sick
                    people in the hospitals
                  </li>
                  <li>
                    <b>For whom:</b> for the ladies of the parish
                  </li>
                  <li>
                    <b>Monitoring personnel:</b> the zonal leaders and the
                    vocation promoters
                  </li>
                  <li>
                    <b>Mode of evaluation:</b> Checklist
                  </li>
                </ul>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <b>
                The following COSAF members will be visiting the communities in
                the following days:
              </b>
              <table className="table">
                <tbody>
                  <tr>
                    <td width={61}>
                      <p>
                        <strong>S.No</strong>
                      </p>
                    </td>
                    <td width={186}>
                      <p>
                        <strong>Names</strong>
                      </p>
                    </td>
                    <td width={215}>
                      <p>
                        <strong>Names of the communities</strong>
                      </p>
                    </td>
                    <td width={127}>
                      <p>
                        <strong>Dates</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>1.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Celine</p>
                    </td>
                    <td width={215}>
                      <p>Kadakkal</p>
                      <p>Yelagiri</p>
                    </td>
                    <td width={127}>
                      <p>
                        Oct 30<sup>th</sup>
                      </p>
                      <p>
                        Sep 5<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>2.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Josita</p>
                    </td>
                    <td width={215}>
                      <p>Adrien Villa</p>
                      <p>Madurai</p>
                      <p>Tirupattur</p>
                    </td>
                    <td width={127}>
                      <p>
                        Oct 14<sup>th</sup>
                      </p>
                      <p>
                        Oct 19<sup>th</sup>
                      </p>
                      <p>
                        Oct 17<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>3.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Victoria</p>
                    </td>
                    <td width={215}>
                      <p>Yercaud</p>
                      <p>Jolarpet</p>
                    </td>
                    <td width={127}>
                      <p>
                        Sep 11<sup>th</sup>
                      </p>
                      <p>
                        Sep 18<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>4.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Pushpa</p>
                    </td>
                    <td width={215}>
                      <p>&nbsp;Ranipet</p>
                      <p>Ammoor</p>
                    </td>
                    <td width={127}>
                      <p>
                        Sep 10<sup>th</sup>
                      </p>
                      <p>
                        Sep 12<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>5.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.FatimaRAni</p>
                    </td>
                    <td width={215}>
                      <p>Vilathikulam</p>
                      <p>Muttom</p>
                      <p>Dindigul</p>
                    </td>
                    <td width={127}>
                      <p>
                        Sep 19<sup>th</sup>
                      </p>
                      <p>
                        Oct 17<sup>th</sup>
                      </p>
                      <p>
                        Oct 24<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>6</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Jacquline</p>
                    </td>
                    <td width={215}>
                      <p>Periyakottai</p>
                      <p>Puliampatti</p>
                    </td>
                    <td width={127}>
                      <p>
                        Sep 11<sup>th</sup>
                      </p>
                      <p>Oct 9th</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>7</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Sundari</p>
                    </td>
                    <td width={215}>
                      <p>Ponnapalli</p>
                      <p>kanaparu</p>
                    </td>
                    <td width={127}>
                      <p>
                        Oct 10<sup>th</sup>
                      </p>
                      <p>
                        Sep 19<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>8.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Bincy</p>
                      <p>&nbsp;</p>
                    </td>
                    <td width={215}>
                      <p>Perumon</p>
                      <p>Pattimattom</p>
                    </td>
                    <td width={127}>
                      <p>
                        Se 7<sup>th</sup>
                      </p>
                      <p>
                        Sep 10<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>9.</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Saral</p>
                    </td>
                    <td width={215}>
                      <p>Gummudipoondi</p>
                      <p>Mugundanooor</p>
                    </td>
                    <td width={127}>
                      <p>
                        Aug 30<sup>th</sup>
                      </p>
                      <p>
                        Oct 10<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={61}>
                      <p>10</p>
                    </td>
                    <td width={186}>
                      <p>Sr.Supriya</p>
                    </td>
                    <td width={215}>
                      <p>Chilakaluripet</p>
                      <p>Eraiyur</p>
                    </td>
                    <td width={127}>
                      <p>
                        Oct 17<sup>th</sup>
                      </p>
                      <p>
                        Oct 24<sup>th</sup>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <b>
                Turns for the adoration which will be started when the new
                community is formed
              </b>
              <table className="table">
                <tbody>
                  <tr>
                    <td width={261}>
                      <p>
                        <strong>&nbsp;&nbsp; Communities</strong>
                      </p>
                    </td>
                    <td width={112}>
                      <p>
                        <strong>&nbsp;&nbsp; Dates</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Adrien Villa</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;1 &amp; 24</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Gummudipoondi</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;2</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Charles villa</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;3</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Ranipet&nbsp;&nbsp;</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;4&nbsp; &amp; 25</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Ammoor</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;5&nbsp; &amp; 26</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Jolarpet&nbsp;&nbsp;</p>
                    </td>
                    <td width={112}>
                      <p>&nbsp;6</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Tirupattur</p>
                    </td>
                    <td width={112}>
                      <p>7&nbsp; &amp;&nbsp; 27</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Yelagiri&nbsp;&nbsp;</p>
                    </td>
                    <td width={112}>
                      <p>8&nbsp; &amp;&nbsp; 28</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Yercaud</p>
                    </td>
                    <td width={112}>
                      <p>9</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Dindigul</p>
                    </td>
                    <td width={112}>
                      <p>10</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Madurai&nbsp;</p>
                    </td>
                    <td width={112}>
                      <p>11 &amp;&nbsp; 29</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Mugundanoor</p>
                    </td>
                    <td width={112}>
                      <p>12</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Periyakottai</p>
                    </td>
                    <td width={112}>
                      <p>13</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Vilathikulam</p>
                    </td>
                    <td width={112}>
                      <p>14</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Puliampatti&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </td>
                    <td width={112}>
                      <p>15</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Muttom</p>
                    </td>
                    <td width={112}>
                      <p>16</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Kadakkal</p>
                    </td>
                    <td width={112}>
                      <p>17&nbsp; &amp;&nbsp; 30</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Perumon</p>
                    </td>
                    <td width={112}>
                      <p>18</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Pattimattam</p>
                    </td>
                    <td width={112}>
                      <p>19</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Chilakaluripet</p>
                    </td>
                    <td width={112}>
                      <p>20</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Kanaparu</p>
                    </td>
                    <td width={112}>
                      <p>21</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Cherukkupalli</p>
                    </td>
                    <td width={112}>
                      <p>22</p>
                    </td>
                  </tr>
                  <tr>
                    <td width={261}>
                      <p>Eraiyur</p>
                    </td>
                    <td width={112}>
                      <p>23</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <h5>Checklist of Commission for spirituality and formation</h5>
            <div className="col-lg-6 bs-exercis">
              <h5>Spiritual exercises</h5>
              <ol>
                <li>
                  Is there any member in the community absent habitually for
                  prayer? If yes, intimate to the COSAF
                </li>
                <li>
                  Examination of Conscience: a) afternoon b) evening. What is
                  the duration? Do all take time?
                </li>
                <li>
                  Adoration: Daily, weekly, hour of prayer. How is it conducted?
                  What changes it makes in your life?
                </li>
                <li>Spiritual reading: Individual, common, How? When? What?</li>
                <li>
                  Meditation: Are all together/ where do you sit for the
                  meditation / what is the duration/ what do you do?
                </li>
              </ol>
            </div>

            <div className="col-lg-6  bs-exercis lastdiv">
              <h5>Community</h5>
              <ol>
                <li>Are all together for meals/ If not why?</li>
                <li>
                  Do you have monthly community meeting? Evaluation of the
                  action plan?
                </li>
                <li>
                  When do you do your recollection? Who gives talk/ what are the
                  topics?
                </li>
                <li>Do you make regular confessions?</li>
                <li>
                  Is you r community a witnessing one or are there instances
                  that disedify?Can you talk about them and try to avoid them?
                </li>
                <li>
                  Do you have daily recreation together after dinner? If no what
                  are the reasons?
                </li>
                <li>
                  Do the sisters in the community meet the superior for personal
                  dialogue?How frequently?
                </li>
                <li>How beneficial was the Ice breaking session?</li>
                <li>
                  How beneficial was your foundation day/community day
                  celebration?
                </li>
                <li>
                  How far have you extended your solidarity to the poor in
                  preparation for celebrating the foundation day?
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 bs-exercis">
              <h5> III. Vocation promotion:</h5>
              <ol>
                <li>Does the community have a plan for house visits.</li>
                <li>How does your community promote vocation? Give details?</li>
                <li>How many parishes/ villages/ houses have you visited?</li>
                <li>How many girls have responded so far?</li>
                <li>
                  Do you fast on 29th of every month and make sacrifices for
                  vocations to our congregation?
                </li>
                <li>
                  How have you positively influenced the youth of the parish/
                  school/ locality to follow Christ?
                </li>
              </ol>
            </div>
            <div className="col-lg-6 bs-exercis lastdiv">
              <h5>SCB Associates:</h5>
              <ol>
                <li>
                  Do you have SCB associates in your community? If not what are
                  the measures have you taken to initiate?
                </li>
                <li>
                  Is the association of SCB in your community organized well?
                  Give the details.
                </li>
                <li>How many members are there?</li>
                <li>How often do you have meeting?</li>
                <li>Do you follow the syllabus?</li>
                <li>Do you maintain the register?</li>
                <li>
                  What are the measures you have taken to increase the number?
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <h5>Formation:</h5>
            <ol>
              <li>
                How are the juniors / youngsters in the community helped to be
                strong in their conviction about consecrated life?
              </li>
              <li>How are you enhancing your own vocation and of the other?</li>
              <li>
                Are there any areas or persons that need to be helped out in
                your community? In which way?
              </li>
              <li>Are you a blessing or a threat to others?</li>
              <li>
                What are the ways and means you think that you build up a
                healthy and happy community?
              </li>
              <li>
                What are ways and means you enhance yourself for ongoing
                formation as sisters of SCB?
              </li>
            </ol>
            <p>
              The idea of forming COSAF was conceived at the General chapter of
              2000 held at Yelagiri Hills. Later it was planned and executed at
              the Province level. The commission consists of minimum of four and
              the maximum of eight members. One of the provincial councilors is
              appointed as the coordinator of COSAF. She and her team in
              consultation with the respective provincial/Regional Superior
              plans meetings of local formatters, vocation promoters and SCB
              associates. She carries out her duty in close collaboration with
              the coordinator of the General councilor for COSAF. The commission
              members are appointed by the Provincial/Regional Superior. The
              province coordinators for vocation promotion and SCB associates
              are part of this commission.
            </p>
            <div className="col-lg-6">
              <img src="/images/subpage/cosf1.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <img src="/images/subpage/cosf2.jpg" alt="" />
            </div>
          </div>
          <div className="bs-callout">
            <p>
              <b>Vision:</b>Establishing the reign of God by incarnating the
              compassionate love of God.
            </p>
            <p>
              <b>Mission: </b>Assisting the Provincial Superior in the formation
              process by promoting integral spiritual growth of the sisters.
            </p>
            <p>
              <b>Functions/Objectives</b>
            </p>
            <ul>
              <li>To promote spiritual formation /ongoing formation</li>
              <li>
                To assist the provincial/Regional Superior in the implementation
                of the formation programme at different stages.
              </li>
              <li>To facilitate vocation promotion.</li>
              <li>
                To coordinate and animate the formation and function of SCB
                associates.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cosaf;
