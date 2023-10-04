import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Fac() {
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
            <a href="/fac">FAC</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;
            <span className="pagename">FAC</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">FAC</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <p>
                For a mission oriented organization money is a means and not an
                end itself. One of the key departments in religious institutions
                is Finance Department. Good Book-keeper will strengthen the
                spokes of the wheel-institution. It is very important to have a
                good book keeper.
                <img src="images/subpage/fac1_03.jpg" alt="" />
                <br />
                In the Gospel (LK.16) the Master called the steward and asked
                him to render an account of his stewardship – his lifestyles.
                Stewardship demands accountability
              </p>
              <ul>
                <li>
                  Stewardship is accountability – let us look at the stewardship
                  from the point of Gospel way of life – which includes a Vision
                  & Mission of our institute.
                </li>
                <li>
                  Our accountability should be clear, should be understood by
                  the other, should be relevant and a free flow of information
                  from top to the grass root and vice versa on various levels of
                  the organization.
                </li>
                <li>
                  Basic honesty which is important for religious life, this
                  demands
                  <ul>
                    <li>To be credible – fully aware of the responsibility</li>
                    <li>To be accountable</li>
                    <li>To be transparent</li>
                    <li>
                      To use money for right purpose as well as to put it to the
                      maximum use
                    </li>
                  </ul>
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
          <h5>Planning and Budgeting</h5>
          <div className="col-lg-6">
            <p style={{ textAlign: "justify" }}>
              An ounce of planning is equal to pound of doing. The finance of
              the organization can be healthy only if the same is utilized for
              the planned activities of the organization to achieve the
              objectives and translate the vision into day today activities.
              Financial planning is an integral part of the total planning. Any
              mission however noble it may be will suffer for want of financial
              support. A healthy economy is just as it is for a corporate
              enterprise. A finance policy has to be integrated with the mission
              of our organization and both have to go hand in hand for the
              successful fulfillment of the Mission. Normally every organization
              has to have long term planning in order to provide security for
              the continuity of the mission. This demands a foresight and
              wisdom. It is therefore healthy practice to make a long term plan
              for a period of 5 to 10 years – while long term planning is
              essential, it is equally important to plan for a short term in
              order to carry out the activities, which will help to accomplish
              the mission.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/fac2_03.jpg" alt="" />
          </div>
          <div>
            <h5>Financial Management</h5>
            <p>
              Financial management is understood by many as accounting. It is
              true that it is an important function, yet it is merely one of
              several functions in Financial Management system. It has several
              components:
            </p>
            <ul>
              <li>Planning and Budgeting</li>
              <li>Accounting</li>
              <li>Reporting and Monitoring</li>
              <li>Financial control system</li>
              <li>Compliance of law, rules and regulations</li>
              <li> Audit and external reviews</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Fac;
