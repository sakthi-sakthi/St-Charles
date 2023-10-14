import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Msp() {
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
            <a href="/msp">MSP</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">MSP</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading"> ACTION PLAN OF MSP FOR THE YEAR 2021-22</h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="bs-callout">
              <p>
                <b>Vision:</b>To establish the kingdom of God.
              </p>
              <p>
                <b>Mission: </b>To uplift the poor and the marginalised through
                concrete actions to build solidarity with the nature and
                humanity.
              </p>
              <p>
                <b>Goal:</b> To be renewed by God’s mercy and become agents of
                His mercy.
              </p>
              <p>
                <b>Objectives:</b>
              </p>
              <ul>
                <li>To promote eco- spirituality with the nature.</li>
                <li>
                  To enlighten the sisters through competent persons and be
                  motivated to opt for organ donations.
                </li>
                <li>To empower the youth for the better standard of living.</li>
              </ul>
            </div>
            <div className="bs-exercis">
              <h5>
                Objective 1: To promote ECO - Spirituality with the nature
              </h5>
              <ul>
                <li>
                  <b>What :-</b> To start a waste management in every community
                  & Institution
                </li>
                <li>
                  <b>Why: - </b>Persevering and conserving the mother earth for
                  future
                </li>
                <li>
                  <b>How:- </b>
                  <ol>
                    <li>
                      Separating pits for bio- degradable & non bio – degradable
                      waste.
                    </li>
                    <li>
                      Non- Bio degradable will be given to the corporation for
                      the recycling .Bio- degradable will be used as a manure in
                      the community and institution.
                    </li>
                    <li>
                      Vermi-compost: Video on vermin compost process will be
                      send to all the community through what sap to the
                      superior’s group through which the awareness could be
                      given to create good manure to be used for the plants of
                      our campus.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>When:- </b> By Sep 2021
                </li>
                <li>
                  <b>Who :-</b> Communities & Institutions
                </li>
                <li>
                  <b>Whom:-</b> To all the community
                </li>
                <li>
                  <b>Monitoring personal:-</b>Commission member
                </li>
                <li>
                  <b>Evaluation mode:-</b> Community & Commission members
                </li>
                <li>
                  <b>Report:-</b> Chair person to the Provincial
                </li>
              </ul>
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
          <div className="col-lg-6 bs-exercis">
            <h5>
              Object 2: To enlighten and motivate the sisters to opt for Organ
              donation voluntarily
            </h5>
            <b>Action Plan:</b>
            <ul>
              <li>
                <b>What:</b> Organ and blood donation
              </li>
              <li>
                <b>Why:</b> To promote life even after death
              </li>
              <li>
                <b>When: </b> During 8 days retreat ( Sep / Dec / May)
              </li>
              <li>
                <b>How:</b> Through seminar on organ donation
              </li>
              <li>
                <b>who:</b> MSP Commission members. ( Sr. Navamani, Sr. Gracy,
                Sr. Niranjana, Sr. Lalitha)
              </li>
              <li>
                <b>For whom:</b> To all the sisters of our province
              </li>
              <li>
                <b>Monitoring person :</b> MSP commission members
              </li>
              <li>
                <b>Evaluation Mode:</b> During commission meeting
              </li>
              <li>
                <b>Report</b>Chair person to the Provincial
              </li>
            </ul>
          </div>

          <div className="col-lg-6  bs-exercis lastdiv">
            <h5>
              Object 3: Empowering the Youth for a better standard of living
            </h5>
            <b>Action Plan:</b>
            <ul>
              <li>
                <b>What:</b> Youth ministry
              </li>
              <li>
                <b>Why:</b> To empower the youth for a constructive works
              </li>
              <li>
                <b>When: </b>November 2021-2022
              </li>
              <li>
                <b>How:</b>
                <ol>
                  <li>
                    Five days of seminar for the MSP commission members with ECP
                    and voluntaries from other commissions
                  </li>
                  <li>Regular meeting of the youth in the Parish.</li>
                  <li>To organize skilled based training programme.</li>
                </ol>
              </li>
              <li>
                <b>who:</b> MSP commission members
              </li>
              <li>
                <b>For whom:</b> Youth of the parish, Village and schools.
              </li>
              <li>
                <b>Monitoring person :</b> MSP commission members.
              </li>
              <li>
                <b>Evaluation Mode:</b> The next commission meeting which will
                be held on 15th September. During the meeting we will be
                deciding the date and place for the further youth activities.
              </li>
              <li>
                <b>Report</b>By the chair person.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 bs-exercis">
            <h5>
              Objective 4: To construct 10 houses to mark the centenary year of
              our presence in India.
            </h5>
            <b>Action Plan:</b>
            <ul>
              <li>
                <b>What:</b> Since it is the long term project we will consider
                to build 3 houses within 2 years.
              </li>
              <li>
                <b>Why:</b> To be in solidarity with the poor specially with our
                long standing domestic workers.
              </li>
              <li>
                <b>When: </b> By 2023
              </li>
              <li>
                <b>How:</b>
                <ol>
                  <li>
                    Utilizing the Government housing schemes such as Green house
                    , Indraganthi memorial.{" "}
                  </li>
                  <li>Motivating them to save some money from their part.</li>
                  <li>
                    5% of income from each community will be sent to the POWER
                    HEALEE TRUST every month.
                  </li>
                </ol>
              </li>
              <li>
                <b>For whom:</b> Miss. Rajathi - Madurai / Miss. Vinarasi –
                Yelagiri / Miss. Thamarai - Jolarpet
              </li>
              <li>
                <b>Monitoring person :</b> MSP and FAC.
              </li>
              <li>
                <b>Evaluation Mode:</b> Supervising the construction place ,
                guiding and providing necessary materials
              </li>
              <li>
                <b>Report</b> Chair person to the Provincial
              </li>
            </ul>
          </div>

          <div className="col-lg-6  bs-exercis lastdiv">
            <h5>
              Object 5: Empower the senior sisters to prepare themselves for
              second mission
            </h5>
            <b>Action Plan:</b>
            <ul>
              <li>
                <b>What:</b> Knowing the aptitude of the sisters and training
                them for the second mission
              </li>
              <li>
                <b>Why:</b> To keep them active and helping them to grow
                gracefully
              </li>
              <li>
                <b>When: </b>By March 2022
              </li>
              <li>
                <b>How:</b>
                <ol>
                  <li>Conducting seminar on skilled based training.</li>
                  <li>
                    Preparing the format and according to their interest
                    training them.
                  </li>
                </ol>
              </li>
              <li>
                <b>who:</b> Resource persons along with the commission members.
              </li>
              <li>
                <b>For whom:</b> Sisters above 60 years.
              </li>
              <li>
                <b>Monitoring person :</b> Commission members
              </li>
              <li>
                <b>Evaluation Mode:</b> Commission members will contact the
                sisters to know the progress.
              </li>
              <li>
                <b>Report</b>....
              </li>
            </ul>
          </div>
        </div>
        <div>
          <table className="table">
            <tbody>
              <tr>
                <td width="83">
                  <p>
                    <strong>Serial No</strong>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <strong>Name of the sisters</strong>
                  </p>
                </td>
                <td width="255">
                  <p>
                    <strong>Name of the&nbsp; communities</strong>
                  </p>
                </td>
                <td width="161">
                  <p>
                    <strong>&nbsp;Dates of visits</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>1.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Srs. Nvamani &amp;&nbsp; Alphonsa</p>
                  </p>
                </td>
                <td width="255">
                  <p>&nbsp;Kerala Zone</p>
                </td>
                <td width="161">
                  <p>
                    <p>
                      Seb 2<sup>nd</sup> to 4<sup>th</sup>{" "}
                    </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>2.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Soni</p>
                  </p>
                </td>
                <td width="255">
                  <p>Vilathikulam &amp; Periyakottai</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>3.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Punitha. G</p>
                  </p>
                </td>
                <td width="255">
                  <p>Muttom &amp; Puliampatti.</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>4.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Alphonse</p>
                  </p>
                </td>
                <td width="255">
                  <p>&nbsp;Ranipet &amp; Ammoor.</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>5.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Sheela john</p>
                  </p>
                </td>
                <td width="255">
                  <p>Madurai &amp; Dindugal</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>6.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Gracy</p>
                  </p>
                </td>
                <td width="255">
                  <p>Mugandanur &amp; Yercaud</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>7.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr. Suganya</p>
                  </p>
                </td>
                <td width="255">
                  <p>Perumon, Kaddakal &amp; Pattimattum</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>8.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr.Sagayam</p>
                  </p>
                </td>
                <td width="255">
                  <p>&nbsp;Gummidipoondi, Jolarpet &amp; Tirupattur</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="83">
                  <p>
                    <p>9.</p>
                  </p>
                </td>
                <td width="293">
                  <p>
                    <p>Sr.Niranjana</p>
                  </p>
                </td>
                <td width="255">
                  <p>Yelagiri</p>
                </td>
                <td width="161">
                  <p>
                    <p>&nbsp;</p>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <h5>Mannerism:</h5>
          <ul>
            <li>
              Some few thoughts can be guided during on politeness on every
              recollection talks.
            </li>
            <li>Avoid vernacular language in our talks</li>
          </ul>
          <p>
            <b> Vision :-</b>Establishing a society of Justice, Peace and Love
          </p>
          <p>
            <b>Mission :-</b>To form a casteless egalitarian society rooted in
            the Gospel values.
          </p>
          <p>
            <b>Goal :-</b>
            To incarnate the compassionate Love of God for all people especially
            women, children, the tribal, dalits and youths
          </p>
          <div className="col-lg-6">
            <b>Introduction :-</b>
            <p>
              The history of salvation consists in which God liberates humanity
              from sin and the consequences of sin and injustice, slavery and
              inequality. Out of His compassionate love and concern for the
              oppressed God takes part fully in their liberative struggles. Down
              the ages, the prophets announced and gave witness to this Good
              news of liberation. The Jesus event is a vital link in this long
              chain of liberation history. By becoming one with the oppressed,
              Jesus spent his life to liberate humanity from sin and the
              consequential unjust social structures and built a new society.
              (LK.4: 18-19). The church is continually called to live the same
              radical life of Jesus and thus announce the coming of God’s
              Kingdom. St. Charles Borromeo Patron of our congregation reached
              out to the orphans, ages, widows and all those who were rejected
              by the society.
            </p>
            <img src="images/subpage/msp1.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/msp2.jpg" alt="" />
            <p>
              Our founder Fr. Adrien Bresy liberated the poor and the
              marginalized of the society through Christian Education. Today,
              the sisters of St.Charles continue to live out the founding
              Charism, to be at the service of the least and the lost following
              the footsteps of Jesus. Only the liberation of the oppressed and
              the exploited can put an end to inequality and injustice. The poor
              have to come together and act to change the structure of the
              contemporary society and to build a new one. Keeping this in mind
              and enlightened by the Vatican Council II and social teachings of
              the church our congregation encourages the sisters to involve in
              the charitable, relief, developmental activities and to
              participate in the struggles of people in order to transform their
              lives.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <br />
            <br />
            <h5>Target People</h5>
            <ul>
              <li>
                Women (illiterate, dalits, tribal, economically and socially
                poor) children (child labors and orphans), Drop out and
                differently gifted.
              </li>
              <li>Youth</li>
              <li>Aged men and woman</li>
              <li>
                The tribal, refugees, prisoners, lepers, HIV/AIDS affected and
                infected patients, drug addicts and alcoholics.
              </li>
              <li>Materially rich but spiritually and psychologically poor.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/msp3.jpg" alt="" />
          </div>
        </div>
        <div>
          <h5>Objectives</h5>
          <ul>
            <li>
              To help in the integral development of the people and to perform
              the works of charity for those in need, irrespective of race,
              colour, language and creed.
            </li>
            <li>
              To engage in social activities aimed at improving the living
              condition and general welfare of the poor particularly the women
              and children
            </li>
            <li>To help in uplifting the poor and marginalized families</li>
            <li>
              To strive for the empowerment of marginalized women through an
              animation process that ensures their integral development and
              promotes gender equality.
            </li>
            <li>
              To promote developmental programme through community participation
              for sustainability.
            </li>
            <li>
              In protecting the human rights of people, to ensure the
              restoration of the right.
            </li>
            <li>
              To encourage and guide the disadvantaged rural and urban youth to
              take up alternative livelihoods.
            </li>
            <li>
              To promote value based leaders among the young generation
              developing their confidence and aptitudes.
            </li>
            <li>
              To educate the general public on the prevention and mitigation of
              HIV/AIDS and other communicable diseases such as Malaria, T.B,
              ect.
            </li>
            <li>To ensure environmental sustainability</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Msp;
