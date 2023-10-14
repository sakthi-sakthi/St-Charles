import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
function Ammoor() {
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
            <a href="/ammoor">Ammoor</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Ammoor</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Ammoor</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="bs-callout mt-5">
                <p style={{ marginTop: "20px" }}>
                  <b>
                    This has been symbolically represented as we glance at the
                    community of Ammoor. This house was branched out from Little
                    Flower Convent Ranipet in the year 1984. It was closed down
                    for some years and revived again in full swing in the year
                    1999 – a solid reason to have “Double Delight”! ‘Double
                    delight’{" "}
                  </b>
                  represents the community at Ammoor
                </p>
              </div>
              <p>
                This house was branched out from Little Flower Convent, Ranipet.
                It had two phases, one a short period after which it was closed
                down and the second phase during which its life was revived to
                its life in full swing. Therefore we have a solid reason to call
                it “Double Delight”! Thanks to Mr. Michael, the Station Master
                of Walajapet railway station, who in the first place informed
                Mother Ann Mary about the availability of land for purchase at
                Ammoor. Mother Ann Mary had farsightedness too, she purchased 8
                acres and 28 cents of land at Ammoor. The registration was done
                on August 11, 1969 and was blessed by Rev. Fr. C.M. Peter, the
                Parish Priest of Ranipet. A small house built and blessed on May
                31, 1971 by Rev. Fr. Christi.” (Ref: Seeds of Compassion Vol.I
                –pg. 35-36). This land was a source of income that sustained
                partially the maintenance of the Home for Children at Ranipet.
                As years passed by having a nuclear community at Ammoor was
                contemplated and was realized on June 15, 1987. The farm house
                that existed already was modified to accommodate the candidates.
                The first 10 candidates who began their initial stage of
                religious life were surely the ‘delightful roses’ of this house.
                Sr. Loyola was the superior and Sr. Pushpa was the directress of
                the candidates. The Sacred Presence of our Lord was installed by
                the Bishop of Vellore Rt. Rev. Michael Augustine on September
                26, 1987.Thus, a farm house turned into a home for the
                candidates from 1987 and it remained so till 1992. When the
                candidates were shifted from Ammoor to Arpana at A V M Street,
                Perambur, Chennai in June 1992 the objective of having a
                community was shelved. Therefore in 1993, it was closed down.
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
            The fallen flower, as if it had become the manure that increased the
            fertility of the soil, the community of St. Charles Convent, Ammoor,
            sprouted with new life on May 31, 1999. The revival of this
            community surely doubled our joy. Sr. Paula headed the community
            with Sr. Saroj and Sr. Rufina. This time the purpose of opening the
            community was to adapt to suit the new demand of an English medium
            Primary School. At Little Flower Convent, Ranipet the classes were
            over crowded and so Ammoor was considered the right choice to
            accommodate the over flowing strength in the school. On December 15,
            1999 the foundation stone was laid for the school. Sr. Amala was
            appointed as the Superior of the community after Sr. Paula. She was
            succeeded by Sr. Joel. The hard labour of Sr.Sagayam and the Sisters
            at LFC came to realization on May 25, 2001 with the completion of
            the School building consisting of ground and first floor .Classes
            commenced on June 6, 2001 in the new building. Another ‘delight’ is
            that this school has been upgraded to Matriculation School. Sr. Kani
            was at the helm of the school followed by Sr. Joel and Sr.Rufina.
            Today we are proud to mention that it is raised to a Higher
            Secondary School with strength of 1428 students and 45 teaching
            staff. People are contented as we provide coeducation in a healthy
            atmosphere. The progress has been in leaps and bounds and the school
            has grown beautifully with well equipped laboratory, library and
            other facilities including school buses. This school in Ammoor bears
            the same name of LFC as not to lose its popularity. In fact today it
            is a matter of pride and “double delight” to us, the Sister of
            St.Charles and to those who enter the campus and those who pass by
            the portals of LFC.
          </p>
        </div>
        <h5>Geographical Location</h5>
        <div className="bs-vision">
          <p>
            Ammoor belongs to Vellore district. It is 30 kms from North East of
            Vellore and 4 kms North of Ranipet. The Convent is at Ammoor Koot
            road where Ceylon repatriates are housed. The place is dominated by
            Vanniya community and Muslim population who run quite a number of
            tanneries.
          </p>
        </div>
        <h5>Apostolates</h5>
        <div className="bs-objective">
          <p>
            Evening classes are conducted for the children of local schools.
            This school is a boon to the surrounding villages. The Sisters are
            also involved in Parish outreach programmes, taking charge of the
            sub-station at Walajapet. Sisters participate in the Basic Christan
            Community meetings and visit the families. Ammoor has a new cemetery
            built at the left side of the land where Sr. Anita and Sr. Virginy
            are laid to rest. The community of Ranipet cooperates with this
            community for their growth and welfare. Spiritual help is given by
            the parish priest of Ranipet, the Jesuits and Capuchin fathers who
            are at Arcot. The community at Ammoor constantly strives towards
            their goal of holistic development of their students and restoration
            of human dignity through empowerment and development programmes.
            Becoming more and more like Jesus through the manifestation of
            compassionate love in their ministry of education, pastoral care and
            social development programmes, the mission of this community is
            spreading the fragrance of “double delight rose” in their milieu.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ammoor;
