import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
function Administration() {
  const [slider, setslider] = useState([]);
  const fetchslide = () => {
    fetch(`${ApiUrl}/get/slidebar`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp.data);
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
            <a href="/general-administration">General Administration</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">General Administration</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="heading">General Administration</h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="row adminpage">
              <h3>SISTERS OF ST. CHARLES BORROMEO - THE DAWN OF A NEW ERA</h3>
              <div className="col-lg-6">
                <img
                  src="images/subpage/sunrises.jpg"
                  style={{ borderRadius: " 50%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="images/subpage/sunrises.jpg"
                  style={{ borderRadius: " 50%" }}
                  alt=""
                />
              </div>
              <p>
                &nbsp;&nbsp;&nbsp; Transferring the St. Charles Generalate to
                India closes a long era of 326 years in the West and ushers in a
                new era in the history of the Congregation. The inspiration
                emerged at the General Chapter of January 2006 when the Superior
                General and the General Councillors were all Indians. This
                inspiration was carried forward by Mother Benedicta, the
                Superior General supported by the Congregation. The lines from
                Robert Frost seem to ring loud and clear:
              </p>
            </div>
            <div>
              <h3>Mother House</h3>
              <div className="bs-callout">
                <p>
                  The woods are lovely, dark and deep, But I have promises to
                  keep, And miles to go before I sleep, And miles to go before I
                  sleep.
                </p>
              </div>
              <p style={{ textAlign: "justify" }}>
                It was indeed a journey of faith; like Abraham and Moses, our
                Fathers in faith, we ventured to move where the Lord would lead
                us. By faith Abraham, when he was called to go out into a place
                which he later received for an inheritance, obeyed; he went out,
                not knowing where it would lead him. The project was whispered
                in the ears of Bishop Agnelo Gracias during his stay at NBCLC,
                Bangalore, he listened keenly and strengthened the movement.
                Mother Benedicta had a personal meeting with his Eminence on
                February 4, 2010, the matter was disclosed to Cardinal Oswald
                Gracias who gave his assent. We are indebted to the Archdiocese
                of Bombay for extending its motherly arms and taking the
                Congregation under its wings. The missionaries from Belgium, set
                foot on Indian soil on December 30, 1929 at Ranipet in the
                Diocese of Vellore. They established a school and an orphanage
                for the poor children of the village and also a dispensary for
                the needy. This first set up in Ranipet became a strong
                foundation for our Mission in India. Later there were more calls
                from different dioceses within the country and the congregation
                ventured into newer fields of the apostolate. Today there are 64
                houses in India, covering 11states serving the people through
                schools, hospitals, dispensaries, leprosaria, social work
                centres, homes for the aged, orphanages, boarding houses for the
                destitute children mid-day meal project for the poor school
                children and so on. During the transition period we were
                privileged to be at Majiwada, Thane in the parish of Our Lady of
                Fatima Church from June 1, 2006, the death anniversary of our
                Founder, Rev. Fr. Adrien Bresy. We owe a debt of gratitude to
                Mrs. Judith Andrade Mital for welcoming us and introducing us to
                Fr. Peter D’Cunha, the then Priest-in-charge. The rest is
                history. The land at Kamba was blessed on July 4, 2009 by Fr.
                Andrew Mukadham, priest-in-charge of Our Lady of Fatima Church
                and Fr. Barthol Machado, Parish Priest of Our Lady of Lourdes
                Church, Kalyan West. On August 3, 2009, Mother Benedicta,
                Superior General laid the foundation stone for the construction
                of the compound wall. Blessing of the Foundation Stone for St.
                Charles Home was on February 6, 2010, feast of Gonsalo Garcias,
                patron of the Archdiocese of Bombay. St. Charles Home at Kamba
                Village was blessed by Bishop Agnelo Gracias and inaugurated by
                Mother Benedicta on September 25, 2011. This building will
                accommodate the Generalate of the Sisters of St. Charles
                Borromeo ( formerly at Belgium) and the Home for Senior
                Citizens. Application for admission to the Home for Senior
                Citizens could be forwarded, those interested may write to the
                Sister-in-charge: St. Charles Home for Senior Citizens, Kalyan
                -Murbad Road, Opposite Royal Gardens, Green Valley Road, Kamba
                Village, Kalyan, 421 301, Thane District, Maharashtra Tel. No.
                0251 - 6527778 On November 4, we celebrate the feast of St.
                Charles Borromeo, who had great love for the Church and the
                poor. It was these values that inspired our Founder to choose
                him as the Patron of the Congregation. St. Charles was a great
                pioneer of Christian education in the diocese of Milan, he is
                the patron of seminaries and catechists. The clarion call from
                overseas missions received a prompt reply from the Sisters.
                Today the Indian sisters are engaged in various ministries in
                Belgium, Italy, Poland, Argentina, Tanzania and Mexico. One of
                the remarkable changes in the history of the congregation is
                that, Mother India who was depending upon the foreign
                missionaries, is today sending her daughters to the foreign
                lands to serve in the Lord’s vineyard. ‘Go and teach all nations
              </p>
            </div>
            <h2>Superior General and Councillors</h2>
            <br />
            <div className="Container General">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src="/images/subpage/Sr.preethy.png" alt="" />
                      <center>
                        <strong>Sr. Preethy Joseph</strong>
                        <p>
                          Chair person of Medico, Social and Pastoral Commission
                        </p>
                      </center>
                      &nbsp;
                    </td>
                    <td>
                      <img src="/images/subpage/Sr.Christine.png" alt="" />
                      <center>
                        <strong>Sr.Christine Vas</strong>
                        <p>
                          Assistant Superior General and chair person of
                          Education commission
                        </p>
                      </center>
                      &nbsp;
                    </td>
                    <td>
                      <img src="/images/subpage/Sr.Alena.png" alt="" />
                      <center>
                        <strong>Alena Fernandez</strong>
                        <p>Superior General</p>
                      </center>
                      &nbsp;
                    </td>
                    <td>
                      <img src="/images/subpage/Sr.Virgy.png" alt="" />
                      <center>
                        <strong>Sr. Virgy</strong>
                        <p>
                          Chair person of Spirituality and Formation Commission
                        </p>
                      </center>
                      &nbsp;
                    </td>
                    <td>
                      <img src="/images/subpage/Sr.josephine.png" alt="" />
                      <center>
                        <strong>Sr. Josephine Nirmala</strong>
                        <p>Chair person of Financial and Advisory Commission</p>
                      </center>
                      &nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
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
      </div>
      <Footer />
    </>
  );
}
export default Administration;
