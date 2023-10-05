import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Periakottai() {
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
            <a href="/periakottai">Periakottai</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Periakottai</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Periakottai</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className="mt-5">
                <p style={{ marginTop: "20px" }}>
                  <b> Large flower with pink blend and rare sweet fragrance </b>
                  ‘Primo Premio’, sounds like ‘first and foremost’ and that name
                  best fits this mission. It is our patroness who through her
                  saintly powers for interceding, brought to realise the first
                  house of St. Charles in the diocese of Sivagangai, which had
                  given more than 20 of her daughters to the Congregation of the
                  Sisters of St. Charles. The community at Periyakottai is the
                  ‘Primo Premio’ rose which Little Therese has fondly planted to
                  bloom and spread its rarest fragrance. Periyakottai is a
                  substation of Michaelpattinam parish formed in the year 1916.
                  It was then under the jurisdiction of Madurai Archdiocese. The
                  Holy Father Pope John Paul II, by the Bull dated July 3, 1987
                  decreed the erection of the diocese of Sivagangai which was
                  established on July 25, 1987. Michaelpattinam parish was one
                  of the 57 parishes that came under Sivagangai, a suffragan
                  diocese of Madurai archdiocese. It is about 50 kilometers from
                  Madurai. The territory of the diocese comprises the two civil
                  districts Ramanathapuram and Sivagangai. Most Rev. Bishop S.
                  Edward Francis was the one first to be handed with the sceptre
                  to shepherd the flock and he transferred it into the hands of
                  Bishop Most Rev. Jebamalai Susaimanickam in the year 2005, who
                  now cares for 65 parishes. The foundation for this marvelous
                  growth is attributed to the labours and martyrdom of St. John
                  de Britto. St John de Britto, a legend of the South Indian
                  Church History is the acclaimed patron of the diocese. Oriyur,
                  a little town along the south eastern coast is where this holy
                  Jesuit was beheaded on October 4, 1693. It is one of the most
                  visited pilgrim centres in South India. The history of the
                  missions in South India has many pages about this holy man’s
                  adventurous journeys through the hamlets of Ramanathapuram
                  district and the challenges he threw to the then regional
                  king, ‘Thadiya Thevan’ in a fashion similar to that of John
                  the Baptist. The reader will do well to grasp a book on John
                  de Britto to have an example for the amazing works God
                  accomplished through the foreign missionaries in this land.
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
        <h5>Brief History of Periyakottai</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            It all happened in the same era when this St.John de Britto, a
            zealous missionary went about proclaiming the Gospel, people who
            were in search of some occupation to earn their livelihood moved in
            big groups from Tanjore district to Ramanathapuram. While many kept
            shifting in groups frequently from one place to the other which they
            thought was more prospective, some of them settled down in the place
            of their choice. And here in Periyakottai, a village which is about
            14 kilometers from Sivagangai, a community of ‘pillaimar’ pitched
            their tents, the kith and kin scattering themselves in 7 small
            villages that were reachable through beaten paths. They settled as
            inhabitants of ‘Ezhoor’ (Seven Villages). These seven villages are
            identified as Rajakambiram, Idaikattoor, Michaelpattinam,
            Arulandapuram, Pacheri, Kalloorani and Saveriyarpattinam. These good
            Catholics after settling down founded a tent for God at Periyakottai
            in order to come together and pray for security, safety and
            protection from people more powerful than themselves who were a
            threat to them in the new land they had appropriated and most of all
            protection from deadly plagues and venomous reptiles. The channel
            for heavenly aid they sought was St. Sebastian who was already
            attributed with praises for performing miracles from his pedestal at
            ‘Kokkoorani’ another village quite some kilometers away from
            Periyakottai. The humble hut now raised for the dwelling of God at
            Periyakottai was ‘Sebastiar Koil’ (Chapel of St. Sebastian). The
            people took to the old manner of migrating looking for better
            pastures and that left Periyakottai with a handful of faithful as
            residents during the 18th century. The one family remembered to have
            remained resisting all forces that induced them to move elsewhere
            was the family of Mr. Arulanandampillai that tended daily the Chapel
            of St. Sebastian. In the days of their good fortune they undid its
            thatched roof and made it strong with bricks and clay. The
            renovation of the chapel initiated in the year 1907, was completed
            in 1912 and was consecrated ceremoniously. Over the decades it got
            weathered and damaged. By now most of them who descended in the line
            of Arulanandampillai, the parishioners of Periyakottai had moved out
            to the towns, cities and foreign countries except four families. In
            2004 a nostalgic group returned to Periyakottai and they planned to
            rebuild their church that was almost in dilapidation. As per the
            will of God a beautiful little church, all in white now stands as a
            result of their good will and collaboration. Most Rev. Antony
            Pappusamy, DD, Bishop of Dindigul, blessed and inaugurated the
            church. People have long list of miraculous experiences wrought
            through the intercession of St. Sebastian of Periyakottai. The quiet
            ambience that pervades this place has made it conducive for prayer
            and meditation. Occasionally, retreats and prayer meetings are held
            and regularly every second Saturday novena prayers are conducted.
            The sons of the soil gather on these occasions and make it a family
            gathering and festival of the village. Hundreds of Christians and
            non Christians participate in this sentimental reminiscence of the
            past centuries.
          </p>
        </div>
        <h5>How did the Sisters of St. Charles land here?</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            From seventies i.e. since the year the house in Madurai was
            established, Ramanathapuram district was a place of annual vocation
            tour for Sisters of St. Charles Borromeo. These visits have
            fruitioned in producing 20 sisters who are finally professed without
            counting those under formation. It was the desire of long years to
            start a community in the newly founded diocese so as to knit more of
            the people in this region with the Congregation. The appropriate
            time arrived and Rt. Rev. Dr. Susaimanickam, Bishop of Sivagangai,
            invited the Eastern Province of the Sisters of St. Charles to the
            diocese. The proposal to start the house at Rochma Nagar was
            alternated with the need for the Presence of a religious community
            at Periyakottai. The second one gained the approval after several
            deliberations. The constant calls from one Mr. Vallal Sebastian, a
            resident of Madurai who geared the good works in his village and
            dreamt of restoring the past glory of his native place through
            installing basically a dynamic religious community gave leverage to
            the dicision. ‘Education is fundamental for all developments’ being
            an established truth the initiative taken by Mr. Vallal Sebastian to
            begin a English Medium school was consented to. The promised
            monetary help of Rs.500, 000/- received from him was utilized for
            the modification and extension of the little shed that stood along
            the eastern side of the Church campus. A small out house adjacent to
            it was modified into a kitchen. The spacious room above the sacristy
            at the rear of the church was vacated by the Parish Priest of
            Michaelpattinam, Rev. Fr. Bastin, to make it the residence for the
            sisters. Everything was set for the starting in the same manner in
            which all the new communities of the Sisters of St. Charles Borromeo
            had been started, the pioneers, Srs. Magdalene Francis, Catherine
            Christina and Helen reached the village. The three energetic and
            enthusiastic sisters got into action losing no time in preparing for
            the inauguration. June 3, 2009 was fixed to seek the Almighty’s
            blessings upon this new beginning. The priests who hailed from
            Periyakottai, the elders and local administrators and the Sisters
            from various nearby communities gathered to participate in the grand
            Eucharistic Celebration presided by the Bishop of Sivagangai. A
            grand felicitation ceremony followed the Holy Mass. A fellowship
            meal was shared by all who were present. All who hail from
            Periyakottai left the place with the satisfaction of having seen
            their dream come true, thanking St. Sebastian for hearing their
            prayers and singing the psalmody , ‘This is the day that was made by
            the Lord, we will rejoice and be glad.’ (Ps:118:24) Sisters
            enlivened the church campus. The light at the tabernacle started
            burning bright as new hands trimmed the lamps’ wick.The Sun rays
            streamed into the church brightening all its corners for all its
            windows were left open. The church bells chimed in a new rhythm at
            the presence of the devoted hearts that thumped in prayer with its
            sound. Little children led by their parents poured into the campus
            to begin their schooling. The kindergarten started functioning from
            June 4, 2009 with 40 boys and 20 girls. They hadn’t to travel 14 kms
            anymore to reach their school. Kindergarten has grown into a
            pre-primary school having classes 1, 2 and 3. Growth brings needs or
            vice-versa? Vehicle plies around to collect the children from the
            villages. The performance of the children is amazingly excellent.
            The land about 40 cents gifted by the custodians of the church
            property is legally registered in the name of the convent. They are
            two separate pieces of land. One strip is outside the campus and
            along the north wall of the church. The other part is where the
            simple construction with four rooms is used as school. In view of
            opening new vistas for tomorrow’s artists, scientists, entrepreneurs
            and inventors the sisters have delved into plans for giving standard
            education through the curriculum which will match the context. 7.5
            acres of land was purchased and registered on March 29, 2010. The
            mission is prospective of growing into a centre for holistic
            education for the children of ‘Ezhoor’ and make come true the
            objective of education, ‘Human’Formation’. The construction of a
            single storeyed building is done in foreview of upgrading the school
            in to a High School gradually. The Sisters have learnt the art of
            relating with people through their simple approach. Their visits to
            the people have earned them the confidence of the village folk. To
            our loving saint Little Therese, we commend the little children and
            this little mission to expedite its growth and ensure its purpose.
            “All things work unto good to those who love God”. (Rom. 8:28)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Periakottai;
