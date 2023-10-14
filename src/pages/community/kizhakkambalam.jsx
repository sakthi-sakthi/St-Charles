import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Kizhakkambalam() {
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
            <a href="/kizhakkambalam">Kizhakkambalam</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Kizhakkambalam</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Kizhakkambalam</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="row mt-5">
                <p style={{ marginTop: "20px" }}>
                  The third house in ‘God’s own country’ was started in the year
                  2007 at Kizhakkambalam. The beauty of the surroundings charms
                  any one who enters this lovely place. Kizhakkambalam is a
                  parish within the jurisdiction of the Archdiocese of
                  Ernakulam. For several years the Sisters had been looking for
                  a place where it would be possible to make their presence in a
                  Syrian Rite diocese for the purpose of vocation promotion.
                  This coincided with the invitation extended by Rev.
                  Fr.Varghese Manavalan, the parish priest of St.Antony’s
                  Church, Kizhakkambalam, in March 2006. The mission is to
                  manage the academic standard of the CBSE High School at
                  Kizhakkambalam, in Angamaly-Ernakulam Diocese. The Provincial
                  council proceeded with the enquiries to collect information
                  they needed for discerning God’s plan.
                </p>
                <div className="col-lg-6">
                  <img src="images/subpage/14.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <p>
                    After much prayer and discernment the council unanimously
                    felt it was the plan of God. In the mean time Fr.Varghese
                    had a meeting with His Excellency Cardinal Varkey
                    Vithayathil and his two Auxiliary Bishops to discuss this
                    matter. The Cardinal expressed his joy saying that he was
                    glad to have the Srs. of St. Charles, the dedicated and
                    simple Sisters in his diocese as he had known them in other
                    places. In July 2006 Sr. Jaya, the Provoncial Superior
                    received a letter from Most Rev.
                  </p>
                </div>
                <p>
                  Thomas Chakkiath welcoming the Sisters of St.Charles to the
                  diocese of Angamaly-Ernakulam. The Provincial Superior and the
                  council visited the place and had several talks with the
                  Manager and the board members of St. Antony’s Public School.
                  The promises and condition made by the Board were:
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
          <ul>
            <li>
              One sister as Principal holding post graduation and B.Ed; and the
              other holding a diploma in teacher education will be employed and
              paid by the Board in St.Antony’s High School.
            </li>
            <li>
              As it aims at providing education to the children of the locality,
              it will not be a residential school.
            </li>
            <li>
              A period of one year contract to be made as trial period if that
              is the wish of the congregation.
            </li>
            <li>
              A rented house with minimum requirements is provided by the School
              Board for a community of three Sisters.
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "justify" }}>
          <p>
            These conditions were studied by the Provincial and council in
            consultation with a few others who visited the mission. A decision
            was made and a dream was realized on April 26, 2007. Sr. Celine
            Joseph and Sr. Cecily Thomas along with Sr.Josita found a house
            close to Pristine has beautiful blooms. The fragrance of pristine
            roses spread from the third house in ‘God’s own country’ in the year
            2007 at Kizhakkambalam. The beauty of the surroundings charms any
            one who enters this lovely place. Kizhakkambalam is a parish within
            the jurisdiction of the Archdiocese of Ernakulam. For several years
            the Sisters had been looking for a place where we could have our
            presence in a Syrian Rite diocese. This coincided with the
            inspiration given by Rev.Fr.Varghese Manavalan, (Brother of Sr.
            Josita Manavalan, SCB) the parish priest of St.Antony’s Church,
            Kizhakkambalam, in March 2006. In July 2006 Sr. Jaya, the Provoncial
            Superior received a letter from Most Rev. Thomas Chakkiath welcoming
            the Sisters of St.Charles to the diocese of Angamaly- Ernakulam. The
            mission is to manage the academic standard of St.Antony’s Public
            School at Kizhakkambalam, in Angamaly Ernakulam Diocese. Sr. Jaya,
            the Provincial called the Council and proceeded with the enquiries
            to collect information to see the possibilities for executing the
            new proposal. Untiringly she made frequent journeys to
            Kizhakkambalam for survey and consultation with the Manager,
            Rev.Fr.Varghese Manavalan, and the members of the school Board to
            enhance the discernment process. In the mean time Fr.Varghese had a
            meeting with His Excellency Cardinal Varkey Vithayathil and his two
            Auxiliary Bishops to discuss this matter. The Cardinal expressed his
            joy saying that he was glad to have the ‘Charlies’ the dedicated and
            simple Sisters in his diocese as he had known them in other places.
            The promises and condition made by the Board were:
          </p>
          <ul>
            <li>
              One sister as Principal holding post graduation and B.Ed; and the
              other holding a diploma in teacher education will be employed and
              paid by the Board in St.Antony’s High School.
            </li>
            <li>
              As it aims at providing Education to the children of the locality,
              it will not be a residential school.
            </li>
            <li>
              A period of one year contract to be made as trial period if that
              is the wish of the Congregation.
            </li>
            <li>
              A rented house with minimum requirements be provided by the School
              Board for a community of three Sisters.
            </li>
          </ul>
          <p>
            These conditions were studied by the Provincial and council in
            consultation with a few others who visited the mission. A decision
            was made and a dream was realized on April 26, 2007. Sr.Celine
            Joseph and Sr. Cecily Thomas along with Sr.Josita found a house
            close to the school. Srs.Celine and Cecily were full time teachers
            while Sr Michael was the Superior of this new community. Our sisters
            did their best in fulfilling the expectations of the management and
            School Board. Sr.Michael engaged herself in family visits,
            catechism, family unit prayer etc. She spared no effort in reaching
            out to the poor and the needy. Beginnings have to yield to changes
            for firm footing, haven’t they? Sr.Celine was made Principal of the
            School, the office which she held from 2007 to 2009 to fulfil a need
            for an experienced formator to direct the Candidates, she was
            transferred to Adrien Villa in 2009. Sr.Cecily with her complaints
            of weak limbs that did not co-operate with her to move about briskly
            which she was obliged to do in a school of 600 children returned to
            Tamilnadu. Sr.Elizabeth Martin was posted in her place. After a year
            she vacated the post to be filled in by Sr.Mini. Sr.Lizzy James was
            appointed as the Principal of the School in 2009. Sr.Joel joined the
            community in June 2010 to be the third member of the community after
            Sr. Michael was transferred to the new community. The members of the
            community have a good rapport with the laity in the parish. This
            extraordinary plunge made in Kerala is to extend and to draw
            vocations as well. The special task of the Sisters here is to
            ‘launch deeper’ to inspire young people to dedicate themselves to
            live the charism of compassion.
          </p>
        </div>
        <h5>The Church in Ernakulam -Angamaly</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            The Archdiocese of Ernakulam-Angamaly, formerly known as Archdiocese
            of Ernakulam, occupies a prominent position in the history of the
            Syro-Malabar Church. It was established as a Vicariate by the Bull
            “Quae Rei Sacre” of Pope Leo XII on July 28, 1896. Mar Aloysius
            Pazeparambil who was appointed as the first Vicar Apostolic, assumed
            charge on November 5, 1896. The most significant part in the history
            of St. Thomas Christians of 20th century and especially of the
            Archdiocese of Ernakulam was surely the event of the Syro-Malabar
            Church being declared a Major Archiepiscopal Church ‘Sui Luris’ by
            Pope John Paul II. The Holy See thus recognized the legitimate right
            of the Syro- Malabar Church and also took into account the pre-
            eminence of the Archdiocese of Ernakulam by making it the Sea of the
            Major Archbishop of the Syro-Malabar Church. Thereby the Major
            Archbishop of the Syro-Malabar is also the Archbishop of
            Ernakulam-Angamaly. It is also worthy of special mention that it was
            an illustrious son of the Archdiocese of Ernakulam in the person of
            Archbishop Abraham Kattumana, who was appointed by Pope John Paul II
            as the Pontifical Delegate to the Syro-Malabar Church. The curia of
            the major Archiepiscopal Church started functioning in the
            Archbishop’s house which was shifted to Mount St.Thomas, Kakkanad on
            May 27, 1995. His Eminence Cardinal and Major Archbishop Antony
            Padiyara retired from his office on December 18, 1996 and Rev.
            Dr.Varkey Vithayathil C.Ss.R was nominated Titular Bishop of
            ‘Antinoe’ and the Apostolic Administrator of the Archdiocese. He was
            consecrated Archbishop by Holy Father Pope John Paul II on January
            6th 1997. On December 23, 1999, Pope John Paul II appointed Mar
            Varkey Vithayathil as the Major Archbishop of the Syro-Malabar
            Church and as the Archbishop of Ernakulam-Angamaly. The present
            Archdiocese of Ernakulam is comprised of the talukas of Chertala,
            Kanayannor, Kunnathunad, Mukundapuram and Vaikom, spread out in the
            districts of Alleppey, Ernakulam, Kottayam and Trichur in Kerala
            State. The Sisters engage themselves, apart from the education
            ministry, in Sunday Catechism which always ranks first in the
            diocese. They also attend B.C.C. meetings, and other parish
            activities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Kizhakkambalam;
