import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Gummidipoondi() {
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
            <a href="/gummidipoondi">Gummidipoondi</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Gummidipoondi</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Gummidipoondi</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className=" mt-5">
                <div className="bs-exercis">
                  <p>
                    <b>
                      O’ our Founder Fr.Adrien Bresy we wish to offer this
                      Platinum Rose to you in remembrance and in gratitude for
                      all that you have accomplished on earth and for the
                      intercessions and supplications you make from heaven for
                      all of us. Precious Platinum Rose dropped by Little
                      Therese of Lisieux from heaven, is a hardy hybrid tea
                      rose, in bright crimson, with round double petals; it is a
                      vigorous shrub which grows up to one meter.
                    </b>
                  </p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  The two spiritual giants whose footsteps we follow are our
                  founder Fr.Adrien Bresy and our Patron, St.Charles Borromeo.
                  During their life time all their yearning was ‘what more could
                  we do for the people of God!’ The celebration of the Platinum
                  jubilee of our mission in 2004 compelled us to do something
                  more for the neglected ones of the society. A proposal that
                  soared up was to start a HIV/AIDS centre. The first step
                  toward the actualization of this project was to form a team
                  that would chalk out the action plan and systematically work
                  at it. Sr. Alphonsa Paul, Sr. Laly Kuriakose and Sr. Lucy
                  K.were the members of this team. The analytical study made by
                  this committee of this abandoned group of the society, the
                  HIV/AIDS patients has revealed that in India as elsewhere AIDS
                  is often seen as someone else’s problem, as something that
                  affects those who live in the margins of society, whose
                  life-styles are considered immoral. Even as it moves into
                  general population, the HIV endemic is misunderstood as
                  stigmatic among the public. People living with HIV have faced
                  violent attacks, been rejected by families, spouses and
                  communities and even refused medical treatment; discrimination
                  also alarmingly common in the health care sector. Negative
                  attitudes from health care staff have generated anxiety and
                  fear among many people living with HIV/AIDS. As a result many
                  keep their status secret as some even commit suicide. The
                  silent tsunami of HIV/AIDS has claimed 20 million lives
                  worldwide so far. The ‘Trio’- Sr. Alphonsa Paul, Sr.Laly
                  Kuriakose and Sr. Lucy K.did a lot of spade work.
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
            They set out to Salem as they were given hope to find many home
            based HIV/AIDS patients living devoid of adequate human care. The
            hurdles they faced indicated to them that this was not a feasible
            place. They stayed in Kolapalur Community and travelled to Erode and
            to the neighbouring villages, conducted awareness programmes to
            conscientize the people about this dreadful disease. Rather than
            getting support and hope they arrived at dead end of the road. As
            optimists they continued their search in good faith. Finally they
            were directed to Gummidipoondi by TANSAC (Tamil Nadu AIDS Control
            Society) where they could find home based patients. Sr.Saroj the
            Provincial Superior sent a letter of request to Most Rev. Dr.
            A.M.Chinnappa, Archbishop of Madras Mylapore to start a centre in
            this locality. The permission was given through a telephonic message
            on October 3, 2005. On October 18, 2005 Sr.Saroj, Sr.Sagayam,
            Sr.Alphonsa Paul and Sr.Laly met the Most Rev.Dr.A.M.Chinnappa and
            got His approval in person to start the work at Gummipundi. Sr.Mary
            Queen, the Provincial councilor in charge of MSP of the Eastern
            Province accompanied Srs.Laly and Alphonsa to Prithvinagar to tidy
            up the house. On October 20, this house taken on rent was blessed by
            the parish priest Rev.Fr.Amal Sudhakar IMS. Sr.Saroj, her
            councillors, late Sr.Loyola, Sr.Assunta, Sr.Sagayam, the Superior of
            Charles Villa- Perambur, Sisters from Adrien Villa
            Rev.Fr.Gnanprakasam, Parish Priest of Lakshmipuram, the Religious
            Sisters of the parish and a few parishioners were present on this
            occasion. The pioneers started their work with great enthusiasm.
            They visited PHC (Public Health Centre) at Kottakara, Ponneri and
            different parts of Thiruvalluvar district and came in contact with
            quite a number of HIV/AIDS patients. On December 9, 2005 a stretch
            of six acres of land was purchased from Mrs.Vasantha at
            Kuruvattucherry Village and registered. As the sisters came in touch
            with more and more patients the need for setting a centre became
            imperative. On April 4, 2007, the foundation stone for a centre for
            AIDS patients was blessed by Rev.Fr.Amal Sudhakar. Sr.Jaya, the
            Provincial Superior, along with her councilors and Sisters from
            Adrien Villa were present. The sisters shifted from Prithvi Nagar to
            another rented house at Kuruvattucherry close to the land so as to
            supervise the construction work. The hard work of Srs.Gracy Pothen
            and Elizabeth James at this time is praiseworthy. The incomplete
            Sisters’ quarters was inaugurated by Rev.Mother Benedicta Lobo, the
            Superior General and blessed by Rev.Fr.Amal Sudhakar IMS on January
            16, 2008. The official opening of the Convent and the Community
            Centre took place on April 2, 2008. Rev.Sr.Jaya, the Provincial
            Superior unveiled the slab and Most Rev.Dr. A.M.Chinnappa, the
            Achbishop of Madras- Mylapore blessed the house. A recent newspaper
            in Chennai states at least 50 fresh cases on an average are reported
            everyday to the Government Hospital of Chennai. It is no small
            wonder that Sisters of St.Charles have plunged into this new venture
            of educating and creating awareness and prevention of this serious
            epidemic. Carlo Bhavan at Gummidipoodi cares for the home based AIDS
            patients. Caring for the uncared is the hall mark of Carlo Bhavan,
            Community Care Centre. The presence of a doctor in this care centre
            is a great blessing. He is committed to his profession and makes
            himself available according to the needs of the patients. He is
            ready to extend his service in person or offer his advice and give
            directions even over the phone when required.
          </p>
        </div>
        <h5>Out Patient Department</h5>
        <div className="bs-vision">
          <p>
            The dispensary functions throughout the day as the patients come
            from near and far distances. Sisters offer their services even at
            night.
          </p>
        </div>
        <h5>In-patient Department</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            Positive cases of HIV/AIDS are admitted in the centre. While they
            are given good care through required medical treatment and good
            nutrition, the Sisters maintain their communication with their
            families through visits, counseling and prayer that gradually
            changes their attitudes towards their dear ones and accept them back
            into their homes. Mr.Jayakumar a HIV/AIDS positive case abandoned by
            his wife and children was found in the Government Hospital. He was
            referred to our center, Carlo Bhavan, by a councilor at the ART
            centre from Chennai at the last stage of his life. Intense care,
            concern and acceptance was given to him by our sisters. But after
            some days the killer disease made Jayakumar its victim to death. To
            get legal support to bury the dead was a hectic task. Finally Mr.
            Paul DPM (District Program Manager) enabled us to perform the burial
            rites. Carlo Bhavan has great scope for extending its service to
            many more deserving HIV/AIDS patients. A group of trained staff and
            sufficient infrastructure are the immediate needs to be fulfilled.
            Let us hope that the Lord who inspired us to begin this good work
            will provide us with everything we need to pour His compassionate
            love on our needy brethren who are ever on the increase.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Gummidipoondi;
