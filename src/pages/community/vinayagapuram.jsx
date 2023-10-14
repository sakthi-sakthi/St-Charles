import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Vinayagapuram() {
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
            <a href="/vinayagapuram">Vinayagapuram</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Vinayagapuram</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Vinayagapuram</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div className="row">
              <p>
                This is exactly the purpose of setting up a Provincial House, a
                home for all especially for the Sisters in the Eastern Province.
                The Provincial Superior and her councilors are cordial and
                welcoming, available for the sisters for consultations and
                meetings. They promote and provide opportunities for an all
                round growth of the members, inspire and guide them to a deeper
                understanding and a faithful living of the foundational Charism.
                Anything you choose in life comes along with its own inherent
                positives and negatives. Though shifting of the head quarters of
                the Eastern Province from Ranipet to Perambur, Chennai was a
                happy event; the sisters of the Province always felt that it was
                not a suitable house for the administration purpose.
              </p>
              <div className="col-lg-6">
                <img src="images/subpage/1.21.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <p>
                  Due to its limited space and noisy surroundings it was
                  impossible to convene meetings, retreats and seminars or to
                  accommodate sisters who needed rest and relaxation. Moving to
                  a conducive place for its effective administration was
                  contemplated all along. Owing to her persistent pursuing, Rev.
                  Sr. Renee was able to procure a land measuring 90 cents in
                  Puthagaram Village, Thiruvallur Dist., Tamilnadu in the year
                  1991. When one plunges into new ventures, she/he faces many a
                  challenge. Puthagaram village was an under developed area when
                  the land was purchased.
                </p>
              </div>
              <p>
                Transport facilities too were scarce. Negative and positive
                responses of various types from various quarters were circulated
                in the air on this new venture of Sr. Renee but nothing could
                water down her enthusiasm for the mission and striving towards a
                set goal. “Opportunities are like sunrise, if you wait too long
                you can miss them.”-William Arthur. A building was constructed
                in 1997 when Sr. Ignatius Thomas was the Provincial Superior.
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
        <div className="row" style={{ textAlign: "justify" }}>
          <p>
            In January 1998 the Provincial House was shifted from Charles Villa,
            Perambur to Puthagaram, Vinayagapuram, and is named ‘Adrien Villa’
            after our founder Father Adrien Bresy. It was blessed on January 29,
            the birthday of our founder. “The wilderness and the solitary place
            shall be glad and the desert shall rejoice and blossom as the rose.”
            Is.35.1 Placing on record our appreciation to Sr. Stanislaus will
            not be out of place here. She saw to the entire supervision of the
            construction of this building. Thanks to her for her untiring and
            unflinching faithfulness to her duty. Vinayagapuram is situated in
            the northwest about 15 kms away from Central Railway Station of
            Chennai Metropolitan city. Vinayagapuram consists of four villages
            and three sub-villages. The total geographical area of this place is
            400 acres. The occupation of the people of these villages was
            agriculture.
          </p>
          <div className="col-lg-6">
            <p>
              They could cultivate the land with the water supply from two large
              reservoirs coined as ‘Rettai Aeri’( twin lakes). Due to
              urbanization 90% of the cultivable land is used for commercial
              complexes, housing plots and industries. The natives of this area
              are displaced by new settlers. Though the village is not very far
              away from the city, sufficient facilities like good hospitals and
              educational institutes are lacking. The heavy cost of education
              has denied opportunities for learning to lower middle class and
              the poor people. In view of giving a good future to the growing
              generation the Sisters after a long search found a plot suitable
              for a school at Kathirvedu village. The much desired and long
              sustained dream of starting a school for the children of
              Puthagaram and neighbouring villages was actualized on June 12,
              2006. In the millennium year, Sr. Ignatius Thomas was elected as
              Asst. General Superior. Sr. Saroj Amaladoss succeeded her as the
              Provincial Superior. Srs. Jaya, Sabina Kurian, Josita and Punitha
              A. were the councillors. From 1998 to 2003 ‘Adrien Villa’ belonged
              to Lakshmipuram, a sub-station of Risen Christ Parish, Peravallur.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/1.11.jpg" alt="" />
          </div>
          <p>
            {" "}
            In May 2003 the sub-station at Laskhmipuram was raised to a status
            of Our Lady of Good Health Parish. The sick and the senior Sisters
            are taken care, assisted and given medical treatment at the good
            hospitals in Chennai. Sisters from North, West and East are welcomed
            for rest, retreats, prayer and relaxation and given nursing care as
            and when required. This house serves as a link between the houses as
            well as the Provinces. Sisters who are selected for overseas mission
            spend their preparation period here and those on visit to their
            motherland halt here and proceed to their destination. In addition
            to being a host to all, the sisters at Adrien Villa take active
            participation in the Pastoral activities of the Parish. Being the
            only religious community in the parish, the sisters consider it as a
            privilege to extend their service to the parishioners. The sisters
            prepare children for the First Holy Communion and Confirmation,
            visit the families and testify to the charism received from our
            founder, who was a faithful son of the Church. In order to legally
            stabilize the Social services of the Province, a Trust has been
            founded as ‘POWER HEALEE’ (People’s Organisation of Women’s
            Empowerment, Rural, Health, Education and Economic Development)
            Trust. Its head office which serves as a centre for vocational
            training is set up in the building specially built adjacent to
            Adrien Villa, the Provincialate. This centre was blessed by
            Rev.Fr.Gnanaprakasam, the parish priest and was inaugurated by Sr.
            Jaya, the Provincial Superior on May 7, 2007. Candidacy: - A house
            for candidates adjoining Adrien Villa was completed and blessed on
            December 10, 2000.This house is named after Catherine Warquain, the
            first superior of the founding community in Belgium. The Provincial
            community has had the joy of celebrating many events like
            installation ceremonies of Provincial Superiors and their
            councilors, Profession ceremonies, Golden and Silver Jubilees of the
            Religious profession of many sisters, arrivals and departures of
            sisters from overseas mission and Chapter Capitulars. It was a great
            opportunity for the sisters of the province to express their
            gratitude and love to Rev. Mother Benedicta, our Superior General on
            the occasion of the Golden Jubilee of her Religious profession on
            February 2, 2009. All the communities of the Eastern province were
            represented. On the same day she convened a meeting of all the
            sisters present during which she announced the good news of the
            re-appointment of Sr.Jaya as the Provincial Superior, Sr. Mary Queen
            as Vice Provincial and Srs.Lily K., Virgy and Josephine Nirmala as
            Provincial councilors. On February 4, 2009 Sr. Bernardine, the
            General Councilor for MSP organized a prayer service during which
            the new Provincial and her councilors were installed in the presence
            of Rev. Mother Benedicta. Sisters from Charles Villa joined the
            Adrien Villa community to felicitate them. The Provincial and the
            community at Adrien Villa also have borne the pain and sorrow of
            bidding good bye to sisters as they witnessed the death of
            Sr.Loyola, Sr. Paula Maliekkal and Sr. Joseph one of the Indian
            Pioneers of the Congregation, Sr. Anita Israel and her niece, Sr.
            Deepa, a young Sister in the first year of her temporary profession.
            The Sisters of St.Charles owe their gratitude to late Most Rev.
            Aruldoss James DD, Rt. Rev. Lawrence Pius, the Auxiliary Bishop and
            the Most Rev. A.M.Chinnappa, the present Archbishop of Madras
            Mylapore. And to the Parish Priest Rev.Fr.Gnanprakasam who from the
            time of the erection of the parish till date, extends cheerfully and
            generously the pastoral care and clerical service with special love
            for the sick and the aged Sisters of the community who are more than
            grateful.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Vinayagapuram;
