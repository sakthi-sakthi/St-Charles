import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Ponnapally() {
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
            <a href="/ponnapally">Ponnapally</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Ponnapally</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Ponnapally</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="mt-5">
                <p style={{ marginTop: "20px" }}>
                  Virgo has white blend and is medium large with mild fragrance
                  and is double bloom form. It is ‘Mary Rose Bud High School’,
                  apparently that drew the sisters to ‘Ponnapalli’ village. A
                  literal translation of Ponnapalli is ‘Village of the Virgin’.
                  And it is our conclusion that the rose dropped by ‘Little
                  Flower’ is the white blended ‘Virgo’ at Ponnappalli.
                  Ponnappalli in Cherukkupalli Mandal, Guntur Dt., and Guntur
                  diocese is a Christian village that deserved educational and
                  Medico Pastoral care. In sensing its need, it was our bishop
                  Rt. Rev. Dr. Gali Bali DD who decided to construct a school in
                  this village utilizing the generous donation of Mrs. Mary Rose
                  Bud, an American, whose heart melted in compassion for the
                  less fortunate children of Guntur district. The Bishop thought
                  it best to give the responsibility of running the school to
                  the Sisters of St. Charles Borromeo who for decades have been
                  in his shepherding care. His invitation reached Sr. Jaya, the
                  Provincial, a visionary of the vastly spread out missions in
                  the Eastern Province. Her restless search to study the need of
                  the place and to discern the further moves to actualize God’s
                  plan began instantly. She did discovere the needs of the place
                  and devised the procedures to be carried out to install a
                  community no sooner than the decision was made, after
                  consulting the local authorities and her council. It is
                  amazing that this third house in Andhra Pradesh was started
                  exactly after 20 years of the second house that was started 20
                  years after the first one. (June 28, 1967 – Chilakaluripet,
                  June 6, 1987 – Kanaparu, June 13th 2007 – Ponnappali). On June
                  13, 2007, the people of the village, the first 72 students of
                  Mary Rose Bud School and some of our sisters installed the
                  community praying fervently over the two of the pioneers Srs.
                  Lovina and Clara Jacintha. Sr. Sagayam, the then Superior of
                  Chilakaluripet community spared no effort in getting a little
                  house ready for the sisters. Rev. Fr. Bala Showri Reddy, the
                  Parish Priest of Ponnapalli went out of his way to make the
                  sisters’ stay more comfortable by leaving his presbytery for
                  the sisters and himself boarding along with the boys in the
                  hostel. This noble act of the parish priest brings to our mind
                  the sweet memories of our founder Fr. Adrien Brezy, who gave
                  up his presbytery to the co-foundresses of the congregation in
                  1682. Whenever something new is ventured into, the anxieties
                  fill the adventurers over the expectation of the onlookers
                  (beneficiaries).
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
            The entry of the new community of religious into the village for the
            school organization had no exception. The big concern of the sisters
            was how to make an English medium school as a need in a village of
            90% illiterate, poor, land labourers whose life style is to labour
            from sunrise to sunset. The benefactors and beneficiaries of the
            enterprise had to discover the philosophy of the venture and the
            application of it in the given situation so as to be convinced that
            “such is the will of God”. Beyond all the material sources, there
            exists a factor called ‘spirit’.The spirit works its way to
            accomplish what it wills even when everything else hits the bottom.
            On visiting hundreds of houses in the village, the sisters realized
            the ambitious spirit of the illiterate folk as an immeasurable
            investment and therefore courageously they delved into collecting
            the children for a English medium school. The strength of the school
            was 109 in the first year (2007-‘08). In 2008-2009, it was 175, in
            2009-2010 it rose to 250 and currently ie.2010-2011 it is 410.
            Executing the idea of plying a bus to collect the children from the
            nearby villages has been the reason for the quick rise in the
            strength of the School. In keeping with the tradition set by the
            Congregation our Sisters of Ponnappalli have involved themselves in
            caring for the spiritual and social needs of the people in the
            locality. Their visits to the homes of their students and others are
            regular. They animate the B.C.C meetings. Students are given special
            care through evening classes and supervised studies. Send forth your
            Spirit, O Lord, and they shall be created and you shall renew the
            face of the earth.”
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ponnapally;
