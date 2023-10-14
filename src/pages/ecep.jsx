import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";
function Ecep() {
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
            <a href="/ecep">ECEP</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">ECEP</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">
          Education commission of Eastern Province – Chennai Action plan
          2020-2021
        </h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="bs-ecep">
              <p>
                <b>Vision</b>To Establish God’s Kingdom
              </p>
              <p>
                <b>Mission:</b> Solidarity with the stakeholders of all our
                institutions.
              </p>
              <p>
                <b>Goal: </b>To nurture and inculcate the value of solidarity in
                children, youth and parents
              </p>
              <p>
                <b>Objectives:</b>
                <ul>
                  <li>Reaching out the affected families of the students</li>
                  <li>Effective manner of using the pandemic time</li>
                  <li>
                    Enhance the teachers and Principals to apply the technology
                    in their teaching learning process.
                  </li>
                  <li>Conserving nature</li>
                </ul>
              </p>
            </div>
            <div className="ecep">
              <ul>
                <li>
                  <b>What:</b> Enhance the use of technology for office
                  management and academic progress in a centralized system
                  creating a hub.
                </li>
                <li>
                  <b>Why:</b>To enhance the quality of staff, teaching learning
                  and office management that can be monitored from a centre to
                  enhance qualitative progress.
                </li>
                <li>
                  <b>When: </b>In the year 2020-2021 to be commenced.
                </li>
                <li>
                  <b>How:</b>{" "}
                  <ol>
                    <li>
                      Create a committee of technical personnel in collaboration
                      with ‘yahweh Solutions’ to organize the work and execute
                      the plan.
                    </li>
                    <li>Organizing online seminars</li>
                    <li>Online staff and other committee meetings</li>
                    <li>
                      Downloaded and prepared videos and other information
                      shared via centralised online platform to all our schools
                    </li>
                  </ol>
                </li>
                <li>
                  <b>who:</b> ECEP chairperson, Principals, Sr.Rosapine ,
                  Chennai and Yahweh solutions.
                </li>
                <li>
                  <b>where:</b> Chennai.
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
          <div className="col-lg-4 bs-exercis ">
            <ul>
              <li>
                <b>What:</b> Effective manner of using the pandemic time
              </li>
              <li>
                <b>Why:</b> Lockdown
              </li>
              <li>
                <b>When: </b> Throughout pandemic
              </li>
              <li>
                <b>How:</b>{" "}
                <ol>
                  <li>Forming the whatsapp group</li>
                  <li>Creating Google zoom meet</li>
                  <li>Online classes</li>
                  <li>Principals Meet and staff meet through on line</li>
                </ol>
              </li>
              <li>
                <b>who:</b>For all our students and staff.
              </li>
              <li>
                <b>where:</b> In all our institutions/Schools
              </li>
            </ul>
          </div>
          <div className="col-lg-4 bs-exercis">
            <ul>
              <li>
                <b>What:-</b>Reaching out the affected families of the students
              </li>
              <li>
                <b>Why:-</b>To support the affected
              </li>
              <li>
                <b>When:-</b>Throughout pandemic period
              </li>
              <li>
                <b>How:-</b>
                <ol>
                  <li>
                    Dialogue and support through calls, other means of
                    communication
                  </li>
                  <li>
                    Providing provisions and basic needs. rendering financial
                    help
                  </li>
                </ol>
              </li>
              <li>
                <b>Who:-</b> Affected students’ families.
              </li>
              <li>
                <b>Where:-</b> In all our institutions/Schools
              </li>
            </ul>
          </div>
          <div className="col-lg-4  bs-exercis">
            <ul>
              <li>
                <b>What:</b> Conserving nature
              </li>
              <li>
                <b>Why:</b> To protect and preserve the Mother Earth.
              </li>
              <li>
                <b>When: </b>Throughout the year.
              </li>
              <li>
                <b>How:</b>
                <ol>
                  <li>Taking care of the plants, Trees and Garden</li>
                  <li>Planting.</li>
                  <li>Maintaining herbal garden</li>
                </ol>
              </li>
              <li>
                <b>who:</b> Staff Eco club
              </li>
              <li>
                <b>where:</b> School premises..
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h5>Foundation History</h5>
          <div className="col-lg-6">
            <p style={{ marginTop: "30px" }}>
              The congregation of the sisters of St. Charles Borromeo was
              founded in 1684 by Rev Fr Adrian Breazy, parish priest of Wez, to
              impart Christian Education to the poor children of his parish. To
              respond to the call of our Lord Jesus Christ “Go teach all the
              nations”… (Mt. 28: 19-20) and keeping with our Charism, we the
              sisters of St. Charles Borromeo, devote ourselves unsparingly to
              the task of imparting ‘HOLISTIC INTEGRAL EDUCATION’.In order to
              remain faithful to our founder’s vision, the apostolate of our
              congregation is directed mainly towards the poor and the
              marginalized, without any distinction of caste, class, creed or
              community.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ECEF2_03.jpg" alt="" />
          </div>
        </div>
        <div className="bs-vision">
          <p className="text-center">
            <b>
              Our Vision : “Holistic Integral Education to Become Fully Human
              and Fully Alive”
            </b>
          </p>
        </div>
        <div className="row">
          <h5>Our Mission</h5>
          <h6>“He has anointed me to preach the Good News to the poor”.</h6>
          <p>
            Our mission is to continue the mission of Jesus Christ that is
            giving integral formation to the students to bring about a genuine
            transformation in them and in society through dedication, commitment
            and living service. The educational programme is directed to the
            holistic growth of the human person, becoming fully human and fully
            alive. So our school is an educational & formational institution,
            where young people gradually learn to open themselves to life.
          </p>
          <div className="col-lg-6">
            <img src="images/subpage/ecef3_03.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ecef4_03.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <h5>Our Objectives</h5>
          <div className="col-lg-6">
            <br />

            <ul>
              <li>
                To educate the marginalized and to enable them to take their
                rightful place in society
              </li>
              <li>
                To promote Faith formation that leads to holistic integral
                education.
              </li>
              <li>
                To foster a total development of physical, moral & social
                integration through value oriented education.
              </li>
              <li>
                To enable every person to become an agent of transformation for
                the promotion of justice, peace and love in today’s society.
              </li>
              <li>
                To create an environment of love and respect for life and
                nature, to preserve our planet and maintain ecological harmony.
              </li>
            </ul>
            <p>
              N.P. Every school / Institution will adopt means and activities to
              realize the objectives prioritizing them as per the need of the
              people, place and time in a creative and effective way every year.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ECEP1.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <h5>ECEP Members visit to Schools</h5>
          <div className="col-lg-6">
            <img src="images/subpage/ecep6.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ecep4.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ecep5.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/ecep7.jpg" alt="" />
          </div>
        </div>
        <h5>ECEP Orientation</h5>
        <div className="row">
          <div className="col-lg-4">
            <img src="images/subpage/ecep3.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <img src="images/subpage/ecep2.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <img src="images/subpage/ecepmu.jpg" alt="" />
          </div>
        </div>
        <h5>News Letters</h5>
        <div className="row">
          <div className="col-lg-2">
            <img src="images/subpage/03_sep_2015.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter 2015 - 2016</p>
          </div>
          <div className="col-lg-2">
            <img src="images/subpage/newsletter1.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter 2014 - 2015</p>
          </div>
          <div className="col-lg-2">
            <img src="images/subpage/newsletter2.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter 2013 - 2014</p>
          </div>
          <div className="col-lg-2">
            <img src="images/subpage/newsletter3.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter 2012 - 2013</p>
          </div>
          <div className="col-lg-2">
            <img src="images/subpage/teachersday.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter </p>
          </div>
          <div className="col-lg-2">
            <img src="images/subpage/ECEP-2017-outside-copy.jpg" alt="" />
            <p className="text-center">Download ECEP News Letter </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ecep;
