import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Mugandanur() {
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
            <a href="/mugandanur">Mugandanur</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Mugandanur</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Mugandanur</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className=" mt-5">
                <div className="bs-exercis">
                  <p>
                    <b>
                      ‘Tidal wave’: Blooms in flushes throughout the season with
                      deep intense bright yellow in small clusters’.
                    </b>
                  </p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  Alluding Mugandanur Mission to the rose, ‘Tidal wave’
                  satisfies fully the reason. That’s because when the giant
                  killer wave ‘Tsunami’ hit the coastal regions of Tamilnadu on
                  26th December 2004, volunteers rushed to lend a hand to the
                  rescue operators. ‘Being ready for frontline ministries’ was
                  very much the watchwords among the Sisters of St. Charles
                  Borromeo, Eastern Province, who were then preparing for their
                  Provincial Chapter 2005. Forcing their way out from the crowd,
                  brave souls hastened to Nagapatinam, one of the worst hit
                  areas. It was not just to render first aid but to integrate
                  themselves with the other NGOs that had plunged into
                  rehabilitation programmes. They joined the company of Jesuit
                  fathers and brothers at Vedaranyam in Nagapatinam district.
                  This involvement clenched a tie with some important people in
                  and around Nagapatinam. In the association that was built with
                  some, one to be remembered here is the acquaintance with Rev.
                  Fr. M. L. Charles, the then Parish Priest of
                  ‘Pattudaiyaniruppu’, Mugandanur who persuaded the sisters to
                  pitch a community in his parish to continue the rehabilitation
                  work. How true is our Lord’s saying, ‘The wind blows where it
                  wills’. (Jn. 3: 8a)
                </p>
              </div>
              <h5>Geographical Location</h5>
              <p>
                ‘Pattudaiyaniruppu’ is the parish in Mugandanur village which
                comes within Thiruvarur district covered under Tanjore diocese.
                Tanjore diocese comprises the entire districts of Thiruvarur,
                Nagapatinam and Tanjore. It also includes Papanasam, Kumbakonam
                and Cuddalore with exception of two taluks in each of these and
                Pudukkottai district, with the exception of 6 taluks. The story
                of the genesis of this diocese takes us to the hoary past and
                rich missionary traditions of Mylapore diocese, the third oldest
                and the 2nd biggest diocese born in India in the year 1560. The
                territory that constitutes the present diocese of Tanjore was
                the field of the heroic labour of the Portuguese Padroado
                missionaries from Goa, Franciscans, Augustinians, Jesuits,
                Foreign Society of missionaries and Salesians.
              </p>
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
            Velankanni in Nagapattinam district, the centre of pilgrimage which
            attracts the devotees of Our Lady of Good Health from all parts of
            the globe is in this diocese.Among the ancient missionary centres,
            invariably mentioned is Nagapatinam where St. Francis Xavier had
            spent some days in 1545 on his way to San Thome. It was November 23,
            1952 the Holy See erected the Tanjore diocese through the Papal Bull
            ‘Ex Primaevae Ecclesiae’. It had to wait for four more months for
            the nomination of the bishop. Most Rev. Dr. A R. Sundaram, an
            illustrious son of the soil was nominated the first bishop of
            Tanjore on February 4, 1953. On March 25, 1953 he was consecrated as
            the Bishop with his motto ‘Cor Jesu et Mariae spes mea” and with his
            special gifts for masterly planning and efficient administration,
            Bishop Sundaram began to build the diocese from scratch. After 33
            years of laudable episcopal ministry, he retired in 1986. His
            successor Archbishop Dr. P. Arockiasamy took charge on November 26,
            1986 and continued to lead the diocese to realize the goal. After 11
            years of fruitful episcopal ministry, he retired in July 1997. Most
            Rev. Dr. M Devadoss Ambrose was consecrated Bishop of Tanjore on
            September 24, 1997. He is the third bishop of the diocese of
            Tanjore. It is to be noted that this renowned bishop is a
            parishioner of the Sacred Heart Church, the Cathedral Parish of
            Tanjore. It is no surprise, that the diocese from its genesis has
            grown steadily and strongly giving birth to new parishes.
            ‘Pattudaiyaniruppu’ was one such that came into existence in the
            year 1997 branching out from Koradacherry parish, placing itself
            under the protection of ‘Our Lady of Refugees’. ‘Pattudaiyaniruppu’
            has four substations, while three are villages with distinct names
            Thalpal, Pandavanthoppu and Singanthottam. Substation ‘St.
            Sebastian’s Church Street’ comprises of the Catholics concentrated
            in a street in the outskirts of the village Mugandanur. These are a
            community of people belonging to scheduled caste. This is mentioned
            here only to say how Catholicism gets marred and tarnished by people
            who refuse to open their minds and heart to the ‘Fatherhood’ of God
            preached by our Lord. The stubbornness tinged with ignorance in the
            people here, often gives rise to disputes in the village besides
            nurturing the evil of ‘untouchability’.
          </p>
        </div>
        <h5>Historical significance</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            ‘Pattudaiyaniruppu’ is on the banks of the river named ‘Vettaru’.
            Alighting from the bus at Mugandanur bus stop one has to walk down
            the road that slopes a few meters and passes over the canal. It is a
            sight to watch, men, women, children and cattle bathing in the
            canal. On turning around to walk on the street where the Parish
            Church is, one needs to take great care not to step on the goats
            that passively lie undisturbed by anything. The swaying palms in the
            coconut groves, the rows of plantain trees and the thick foliage of
            the arecanut trees create a panorama of greenery in this place. But
            the people of the village are not landlords. They are labourers who
            displaced a small group of ‘udayars’ who had settled here. The name
            ‘Pattudaiyaniruppu,’ is given to this village after the name of the
            ‘udayars’ who occupied it at the beginning. The history of South
            India narrates elaborately, the golden years of this part of the
            land ruled by the Chola Kings with Tanjore as the capital. River
            Cauvery and her tributes are the cause for acclaiming this land as
            the ‘granary of Tamilnadu’. The glorious past of this kingdom is
            reflected by the Pragadeeswarar Temple in Tanjore that even today is
            a centre known for art and architecture original to Tamilnadu and
            India. Therefore while the history of the Indian church answers to
            the question, “How come there are 200 Catholics families in this
            small parish of a Hindu village?” This historical significance of
            Tanjore district explains why so many people in this parish are
            living in drudgery. They are settlers who had come to work in the
            fields of the landlords and earn their livelihood in this fertile
            region of Tamilnadu. The ready response of the sisters to the call
            that came from Rt. Rev. Dr. Devadoss Ambrose, Bishop of Tanjore, was
            born of both the zeal to fulfill the challenge of living amidst the
            people who were going through an experience of loss disappointment
            and desolation and the desire to find new pastures for extension and
            growth. Mr. Dharmaraj’s house taken on lease for 2 years became the
            abode of Sr. Amala Chinnarani, the superior of the community, Sr.
            Victoria Arul Rani and Sr. Pauline Arockia Mary. On August 29, 2005,
            the house was blessed by the bishop and was dedicated to the
            protecting care of Our Lady of Velankanni. Rev. Sr. Saroj, the
            Provincial of the Eastern Province, her councillors and the
            superiors of many of the communities of the Province graced the
            inaugural function through their presence and prayers. The community
            had a clear vision, to rehabilitate the orphan girls who suffered
            the trauma of losing their loved ones to the tsunami that abruptly
            snapped all the ties, and snatched all that they held as their
            ‘treasure’. With the help of Mr. Pierre Huysman, our benefactor in
            Belgium, a vocational training programme was started. The
            beneficiaries, 30 young girls who lodged in the same house where the
            sisters lived were empowered with means for self reliance through
            development of skill in handling computers and sewing machines. The
            sisters engaged themselves in rendering pastoral services which they
            continue to do. The sister employed in the diocesan school is the
            catalyst in the institution to bring about a change in its standard
            that is notable. Mr. Dharmaraj’s land measuring 4.32 acres was
            purchased and registered on June 4, 2006. The land proceedings were
            signed by the Provincial Superior, Sr. Jaya. The farm house became
            insufficient to accommodate the sisters and the question on the
            strength of the structure had a scary response. Foundation was laid
            for Marian Block by Sr. Jaya, the Provincial Superior and Rev.Fr.
            M.L.Charles on April 21, 2007. On July 2, 2007 a mini dispensary was
            brought to function. Sr. Cynthia joined duty as the B.T. Assistant
            in July 2007 in the diocesan school. In 2010 the farm house was
            replaced by a sturdy construction with the financial assistance
            given by the Peter Claver Sisters in Rome and the Provincial Society
            of the Sisters of St. Charles Borromeo, Eastern Province. Sisters
            always busy themselves in rendering pastoral care that is the sole
            mission of this community. They take care of the Parish Church’s
            cleanliness and the shrines in the substations besides visiting the
            families. They lead the B.C.C and Sodality meetings. Evening classes
            supervised by the Sisters in the convent premises have resulted in
            distinct progress of the students in their academic performance. The
            St. Charles Borromeo community in the vicinity of Velankanni is now
            a favoured spot to halt on the way to Our Lady’s shrine. The ‘Tidal
            wave’ has become a home of shelter. Miracle indeed!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Mugandanur;
