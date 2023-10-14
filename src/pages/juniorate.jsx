import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Juniorate() {
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
            <a href="/juniorate">Juniorate</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Juniorate</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Juniorate</h3>
        <div className="row">
          <div className="col-lg-9">
            <br />
            <div>
              <p>
                <b>The renowned moral theologian Bernard Haring once said: </b>
                <br />
                “If Christ is not the centre, we become eccentric”. Christian
                tradition always insisted upon the vital importance of a God
                experience. It has to be a deep and personal experience. Only
                such an experience will help a religious person to live the
                primacy of God in her life, to live the vows in a radical manner
                and to give oneself totally to the mission in favour of the poor
                and the marginalized. In short, religious life is a way of life
                built around God experience and it aims at revealing the fire of
                that experience.
              </p>
              <img src="images/subpage/Juniors1.jpg" alt="" />
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
        <div>
          <p>
            The junior sisters placed in the communities are helped to grow and
            attain physical, mental, human, and psychological maturity through
            various programmes under the guidance of the superiors and the
            junior directress. At this period they are introduced to the
            ministries to make a deeper study of the spirit of the congregation.
            The junior sisters are prepared according to their aptitude in
            spiritual and secular studies for the mission. The community and
            personal spiritual exercise help them to strengthen their vocation
            and discover God within which sustains their spiritual stream of
            life and that carries them to an effective ministry. They are
            enabled to develop the evangelical conviction that there is no
            spirituality without a sincere and serious commitment to the poor.
            The formation of the juniors takes place in different phases.
          </p>
          <ul>
            <li>
              Soon after the first profession one week of orientation is given
              in the Provincial house under the direction of the Juniorate
              Directress.
            </li>
            <li>
              At the end of second year the juniors are sent for 10 days of
              Ashram experience
            </li>
            <li>
              Those due for final profession are given an year of intense
              preparation that includes Theological studies.
            </li>
            <li>Every year the junior Sisters do some Scriptural Studies.</li>
            <li>
              The junior Sisters have a batch wise gathering for renewal
              programmes, retreat etc., once a year.
            </li>
            <li>
              The Junior Directress visits the junior sisters at least once a
              year in their communities.
            </li>
            <li>The Directress and the Junior sisters correspond regularly</li>
          </ul>
          <table
            className="table table-bordered"
            border={0}
            cellSpacing={2}
            cellPadding={2}>
            <tbody>
              <tr>
                <th className="table_header" width="22%">
                  Junior Directresses
                </th>
                <th className="table_header" width="13%">
                  Period
                </th>
              </tr>
              <tr>
                <td className="table_text">Sr. Ignatius Thomas</td>
                <td className="table_text">1985 - 1993</td>
              </tr>
              <tr>
                <td className="table_text">Sr. Christy Saroj</td>
                <td className="table_text">1993 - 2000</td>
              </tr>
              <tr>
                <td className="table_text">Sr. Josita Manavalan</td>
                <td className="table_text">2000 - 2006</td>
              </tr>
              <tr>
                <td className="table_text">Sr. Ignatius Thomas</td>
                <td className="table_text">2006 - 2009</td>
              </tr>
              <tr>
                <td className="table_text">Sr. Lilly Kuriakose</td>
                <td className="table_text">2009 -2013</td>
              </tr>
              <tr>
                <td className="table_text">Sr.Nirmala William</td>
                <td className="table_text">2013 -</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>ONGOING FORMATION</h4>
        <div className="row">
          <div className="col-lg-6">
            <p>
              Religious journey is a journey with Christ and of kenosis. The
              primary pre-occupation of religious search is for the transcendent
              and the ultimate meaning of life that leads the individuals to
              God-realization and liberation. The inspirations, instructions,
              guidelines received from God, the General, Provincial Superiors,
              church authorities, periodicals, books, seminar, retreats etc.
              widen the vision and mission of all the Sisters. They respond to
              the call of God and vibrantly move with the Spirit. Rest,
              relaxation and renewal programmes organized periodically at the
              community and Province level rejuvenate the senior members. They
              are oriented to seek God–experience, discipleship and wholeness as
              an unending process. They are given every possibility to attain
              this realization and actualization. The happy ‘community living’
              is their source of strength to bear fruit in plenty.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/Juniors.jpg" alt="" />
          </div>
        </div>
        <div>
          <h4>
            A sample list of the enrichment programmes organized for the senior
            sisters.
          </h4>
          <ul>
            <li>Seminars for the senior citizens of the congregation</li>
            <li>Renewal seminar for the middle aged sisters</li>
            <li>Seminar on leadership</li>
            <li>Charism retreat</li>
            <li>Community building sessions</li>
            <li>
              Study of the documents of the Church, Gospels, courses on
              Eucharist
            </li>
            <li>Preparation for overseas mission</li>
            <li>Formator’s course for selected individuals</li>
            <li>
              Spirituality and renewal courses for for those who have worked
              long years in the institutions
            </li>
            <li>
              Pre – Chapter and Post (Provincial/ General) Chapter meetings and
              workshops
            </li>
            <li>
              Special renewal courses and seminars for members involved in
              specific apostolic activities: Teaching Sisters; Social Workers;
              Nurses; Animators; Bursars; Head of the Departments; Vocation
              Promoters
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Juniorate;
