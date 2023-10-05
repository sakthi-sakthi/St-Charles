import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Puliampatty() {
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
            <a href="/puliampatty">Puliampatty</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Puliampatty</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Puliampatty</h3>
        <div className="row">
          <div className="col-lg-9" style={{ textAlign: "justify" }}>
            <div>
              <div className=" mt-5">
                <p style={{ marginTop: "20px" }}>
                  <b>
                    The colour is creamy with rich yellow centre. The flowers
                    come in clusters on strong stems beautifully formed. They
                    have sweet fragrance.
                  </b>
                  A pilgrim rose undoubtedly was planted in a pilgrim centre but
                  unlike so many other pilgrim centres it is to be searched and
                  found in an obscure village of Tuticorin district in
                  Tamilnadu. It is typical evidence to our beloved Saint
                  Therese’s desire to reach out to the lost and the least. It is
                  a sign of God’s shepherding care of those rejected and
                  dejected. Like the pilgrim rose plant that blooms in clusters
                  with rich yellow centres and creamy petals that relegate the
                  mire in which it anchors its roots, this community, a source
                  of compassion and service sounds aloud the message, “where
                  suffering and misery abound mercy and charity super abound”.
                  Puliyampatti is in Palayamkottai diocese that was erected in
                  the last quarter of the twentieth century. Most of its earlier
                  history is what is narrated under ‘THE BEGINNING OF FAITH IN
                  THE SOUTHERN COASTS OF TAMILNADU’ -‘Blossoms of Missions’. The
                  episodes of the sweeping success of the Jesuit missionaries,
                  Fr. Robert De Nobili, John de Britto and Fr. Joseph Beschi,
                  who netted thousands and thousands of people as they journeyed
                  along the coastal regions in the 17th century and the period
                  of depression in the missionary activities caused by the
                  expulsion of the Jesuits from Portugal and deportation of the
                  Portuguese priests from their mission areas in the 18th
                  century, are all very much the history of Palayamkkottai as
                  much as it is of Madurai Jesuit Mission that was taking care
                  of the Catholics of the southern Tamilnadu regions. The
                  diocese of Madurai was raised into an Archdiocese in 1953 and
                  Palayamkottai was one of the vicariates of Madurai till 1973.
                  The bull ‘Roman Pontifices” by Pope John Paul II, dated May
                  17, 1973, bore the news of the erection of Palayamkottai
                  diocese which became one of the suffragans of Archdiocese of
                  Madurai. His Grace Most Rev. P.Justin Diraviam, the then
                  Archbishop of Madurai in virtue of powers delegated to him
                  gave effect to the terms of the Bull on September 9, 1973. The
                  first Bishop of Palayamkottai Rev. Msgr. S. Irudayaraj was
                  consecrated on September 12, 1973 and took canonical
                  possession of the diocese on the same day
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
        <h5>Entry of the Sisters of St. Charles Borromeo into the diocese</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            The year 1999 was auspicious to the diocese of Palayamkottai for two
            reasons, firstly it was, the year of completion of 25 years of its
            erection and secondly the peals of silver bells sounded aloud the
            25th year of the Episcopal ordination of their Shepherd Rev.
            Msgr.S.Irudayaraj. The desire to make these events memorable brought
            forth the idea of establishing a Home for the Aged. The idea was the
            most welcome one as that year had been declared as the Year of the
            Aged by the UNO. This Jubilee memorial, ‘A Home for the Aged’
            proposed to be built in Puliyampatti needed a team of compassionate
            people to administer it. The Jubilarian Rt. Rev. S Irudayaraj,
            Bishop of Palayamkottai, extended an invitation to the Sisters of
            St. Charles Borromeo. Srs. Lilly Kuriakose, Annie Joseph, Josephine
            Nirmala Rani and Cynthia Robinson accompanied by Sr. Jaya, reached
            Puliyampatti on June 2, 1999. ‘Padua Home for the Aged’ was blessed
            by Rt. Rev. S Irudayaraj, Bishop of Palayamkottai, on June 13, 1999,
            the feast day of St. Antony of Padua, the venerated Patron of the
            Shrine and was inaugurated by Mr. Malik Feroz Khan, the Collector of
            Tuticorin. The lamp was lit by Sr. Ignatius, the then Provincial
            Superior of the Eastern Province. A contract was signed between the
            diocese and the Congregation.
          </p>
        </div>
        <h5>Padua Home</h5>
        <div className="bs-vision">
          <p>
            To comprehend the kind of work the Sisters are involved in, in this
            remote village, one needs to know the particular history of
            “Puliyampatti Anthoniar” and the marvelous works wrought through his
            intercession.
          </p>
        </div>
        <h5>The History of “Puliampatti Anthoniar</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            Gloriously named as, ‘Padua of Southern Region’ is Puliampatti in
            Ottapidaram, taluk of Tuticorin district holds a pride of place in
            the list of pilgrim centres in India and adds popularity to the
            diocese of Palayamkottai. As Rev. Fr. M. Moessan, the author of
            ‘Puliampatti Thooya Anthoniyar Thirtuthalam’, (‘Varalarum Vazhvum’
            1st Edition June 13, 2010) describes it, Puliyampatti is no centre
            of tourism, there are no skyscrapers here, and it is not a
            commercial centre. There are no commercial banks, there are no
            recreational means, and why, there are no frequent transport means
            to reach this place even. In every sense a backward place and yet
            lakhs and lakhs of people of different denominations and different
            faiths from all parts of India and even countries afar, have visited
            this place and the stream of pilgrims eternally pours into this
            village which is the miracle of miracles that St. Antony of Padua is
            attributed to, among thousands of them the people bear witness to’.
            The statue of St. Antony of Padua in the shrine has an interesting
            episode, which is mostly the story of a family that lived in this
            place in the middle of the 17th century. (This episode below is
            adapted from ‘Varalarum Vazhvum’ -1st edition by Rev. Fr. Moessan)
            Maria Antony Thommai, overwhelmed by feelings, his helplessness at
            the villainous behaviour of his brothers moved from Pothakalanvilai
            (Tuticorin district) to Puliampatti, a hamlet then. There he related
            himself with the families of Raman and Laxmanan who had themselves
            come and settled to sever all troubles caused by the headmen of
            their village- Kovilpatti near Sivakasi. Maria Antony Thommai’s
            marriage with one of their girls who willingly received baptism
            enabled him to be faithful to the practice of his religion. He
            frequently visited the church at Sandaipettai near Sevalaperi to
            pray and participate in the Eucharist. Here in Sandaipettai amidst
            the vast spread of nature’s greenery a fort stood telling the story
            of the past centuries, the story of St. Francis Xavier’s journey to
            Punnaikayal who crossed past this land. St. Francis Xavier’s chapel
            in this fort like monument is renewed and is visited today even by
            devout souls who go on pilgrimage. At the time when it was in a
            dilapidated condition, the statue of St. Antony in Puliampatti was
            apparently taken from the chapel to Puliampatti by Thommai Antony.
            The story that justifies this shifting of the statue from
            Sandaipettai to Puliampatti bewilders the human understanding and
            bares human ability of reasoning. The narration runs like this. The
            life of Thommai Antony prospered through his hard work. The blessing
            of a partner in life bestowed him with a progeny of 13 children. But
            the first eleven boys passed away one after another. The twelfth
            one, the girl was given in marriage and in 15 days returned as
            widow. The 13th boy was the solace of the family but that was not
            for long. When he was 15 he contracted a virulent chickenpox and was
            in the verge of death. Thommai Antony’s faith was put to test. The
            man spent many a moment in pensive brooding. It was at one such
            moment St. Antony of Padua appeared to Thommai Antony in a vision
            and commanded him to raise a church to worship the Almighty. Similar
            vision seemed to have been granted to his widowed daughter. St.
            Antony of Padua like a chevalier on a white horse promised the girl,
            life of her brother in return for a church. Moved with emotion the
            girl described what she saw and heard to her father. St. Antony
            appeared a second time to Thommai who was perplexed and confused,
            directing him to consult the Zamindar of Maniachi in whose palm
            grove he had served and earned both money and high regard. It was
            not difficult for Zamindar to accept the news and give consent to
            his prayer for he had already been directed by St. Antony of Padua
            in an apparition to donate the land for the church. Thommai Antony
            could choose any part of his land. All thoughts and worries of the
            son in death bed were of no matter to Thommai Antony as he was
            overwhelmed by the happenings beyond his grasp. His only concern was
            to raise a church and on his return to the village while he was
            trying to locate a place to build a church he sighted a plant which
            bore a leaf with the symbol of a cross. That was enough a sign for
            him to start his work and while clearing the site he found a gold
            cross. There the first chapel with thatched roof was founded. The
            statue of St. Antony of Padua from Sandaipettai was installed. The
            dying son revived. The miracles multiplied. The news of the
            manifestation of God’s mighty work spread all over. People whose
            only refuge is God their creator flocked in hordes. Their prayers
            intermediated by their sought after saint, were answered in
            incredible ways. The prayers continued and God’s blessings were
            multiplied. Popularity of the shrine spread far and wide and its
            growth had led to the erection of a church as big as a Cathedral.
            Besides St. Antony’s Church, here stand a magnificent meditation
            hall; an adoration chapel ‘Tabor’; the well of miracles, the flag
            post, the votive offerings in exhibition in a hall and the relic of
            St. Antony of Padua used for blessing the sick placed on a separate
            pedestal. The ‘anawim of Yaweh’ manifesting their unadulterated
            faith, ceaselessly stream to this place of all their hopes. There
            are those who having sought all means for a solution to their
            problem or cure of their illnesses, given up by physicians come as
            their last resort to St. Antony of Padua. Pilgrims come to present
            their petitions and express their gratitude. There are those who
            have no inkling about other ways in which they could find relief
            from the problems than making their way to Puliampatti. One needs
            time and patience to listen to the unimaginable and unheard of
            miracles that have taken place at this shrine. The people vow to
            make their pilgrimage for 13 Tuesdays. People who are audacious
            challenge St. Antony of Padua and camp at the centre practicing the
            rituals of taking bath in 13 buckets of water from the well of
            miracles, going round 13 times around the grotto of Calvary, eating
            the food distributed by those who make the vows such as ‘Pattai
            choru” and ‘Asanam’ and leave the shrine only after their prayers
            are answered, their loved ones are healed, their problems are
            resolved and their wishes are fulfilled.. The one thing that needs
            special mention is the numerous psychopaths and demoniacs who
            present a heart rending site as they remain bound by chains to the
            trees within the church campus and outside, exposed to sun, wind and
            rain, day and night for days, months and years recover wholeness in
            an inexplicable manner. One has to bow and say it is the ‘holy
            ground’ on which one is standing. Psychologists and theologians are
            stupefied. Scholars have attempted to make a study of the happening
            at Puliampatti shrine. The miracles of the kind specified and other
            kinds of healing from long borne physical illnesses, obtaining
            material gains, successes in what one endeavours after so many vain
            attempts, reunion of families, finding partners and blessings of
            progeny. There is one big cycle of people coming in and going out
            everyday but Tuesdays are special days dedicated to St. Antony of
            Padua when large groups arrive. A mammoth crowd is seen on the last
            Tuesday of the Tamil month ‘Thai’.
          </p>
        </div>
        <h5>Apostolic Works</h5>
        <div style={{ textAlign: "justify" }}>
          <p>
            The hands that join in prayer normally are also hands that extend in
            service to the needy. This is borne witness to by the faithful, the
            priests and the religious of Puliyampatti. The donations and
            offerings received are generously shared with the poor through
            developmental works. In 1963, a Mercy Home for the boys was founded
            by Rev. Fr. Arulanandam. This home sheltered about 50 boys at its
            beginning. This is now under the care of the priests of the diocese.
            The extension of ‘Mercy Home’ for girls was realized by Rev. Fr.
            Lourdu Raj in June 2000 which is managed by our sisters. There are
            now about 20 girls who are sheltered in the building attached to the
            convent. To incarnate the compassionate love of God to the old in
            the Padua Home was the primary call to the sisters. The challenge
            before them in fulfilling this mission is to face the rebellion and
            aggression of these abandoned old who vent their feelings of
            rejection and insecurity. There are 21 women and 4 men presently
            occupying the home. That they should be 13 in each was the foreseen
            plan because, January 13, is the feast of St. Antony of Padua. The
            sustenance of this home and that of the boarding home (Mercy Home)
            for the girls is entirely financed by Puliyampatti church. The
            diocesan middle school is the centre for education for all the
            children in the ‘Mercy Home’. One of our sisters teaching in the
            school has the advantage to give special care to these children. The
            zeal to give wholesome education is not hampered by many things that
            are needed to make this a model school. Children who studied in this
            school have grown into excellent men and women over the years. The
            essence of education is not ‘modernizing’ but ‘foundation of
            character’ and that is the pre-occupation of our sisters. In a
            church constantly filled with pilgrims one cannot calculate and
            schedule the pastoral work. The sisters give a big hand to join
            links of the chain of people in service to the numerous who seek
            assistance to register the intention for mass, to pray the rosary,
            to organize the adoration hours, to keep clean the church and its
            premises, to visit the pilgrims lodging in the campus, to head the
            BCC meetings, to prepare the people in the substations for the
            weekly Eucharistic celebrations and above all to listen to the
            hundreds who need and plead a hearing of their woes and miseries.
            The sisters’ source of joy is the echoing voice of our Lord,
            “whenever you did this to the least of my brethren you did to me”.
            (Mt. 25: 40) This house makes us sometime wonder if it is the
            replica of the Psychiatric Institute in Wez that God has deviced
            through His plan to keep us bound, to the Charism, that was the
            reason for the home for, the mentally depressed widows and children
            of Belgium, the war torn land in 18th century. One thing that keeps
            us all close to this mission is the sweet name of one of our
            principal patrons, St. Antony of Padua who we call up on every day
            to intercede for us.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Puliampatty;
